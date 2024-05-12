from flask import Flask, request, jsonify
from dotenv import load_dotenv
import os
from flask_cors import CORS
from langchain.chat_models import ChatOpenAI
from crewai import Agent, Task, Crew
from PyPDF2 import PdfReader
from langchain.prompts import (
    ChatPromptTemplate,
    HumanMessagePromptTemplate,
    MessagesPlaceholder,
)
from langchain.schema import SystemMessage
from langchain.agents import OpenAIFunctionsAgent, AgentExecutor
from tools.tool import credit_score_tool, credit_summary_tool, gst_turnover_tool


load_dotenv()


def get_pdf_text(pdf):
    text = ""
    pdf_reader = PdfReader(pdf)
    for page in pdf_reader.pages:
        text += page.extract_text()
    return text


def get_business_plan_analysis(plan_text):
    llm = ChatOpenAI(model="gpt-4-turbo-preview")

    analyzer_agent = Agent(
        role="Financial Advisor",
        goal="Evaluate a business plan to determine the financial risk and viability of extending a loan.",
        backstory="""This agent is an automated financial advisor equipped to analyze small businesses and startup financials for loan applications. It uses data points like cash flow, revenue forecasts, market analysis, and debt-to-income ratios to assess risk.""",
        verbose=True,
        allow_delegation=True,
        llm=llm,
        tools=[],
    )

    analyze = Task(
        description=f"Evaluate this business plan for loan viability: ##{plan_text}##",
        expected_output="Provide a quantitative risk assessment score from 0 (low risk) to 100 (high risk). Include a recommendation on loan approval ('approve' or 'deny') based on the risk score and specific financial indicators analyzed. Detail the key financial metrics assessed and their impact on the risk score. ",
        agent=analyzer_agent,
    )

    financial_advisor_crew = Crew(
        agents=[analyzer_agent],
        tasks=[analyze],
        manager_llm=llm,
    )

    crew_result = financial_advisor_crew.kickoff()
    return crew_result


def process_business_plan_pdf(pdf_file):
    plan_text = get_pdf_text(pdf_file)
    response = get_business_plan_analysis(plan_text)
    return response


app = Flask(__name__)
CORS(app)


@app.route("/analyze_plan", methods=["POST"])
def analyze_plan():
    if "business_plan" not in request.files:
        return jsonify({"error": "No business plan file part"}), 400
    plan_file = request.files["business_plan"]

    if plan_file:
        try:
            response = process_business_plan_pdf(plan_file)
            return jsonify({"result": response})
        except Exception as e:
            return jsonify({"error": str(e)}), 500
    else:
        return jsonify({"error": "Invalid input, missing business plan"}), 400


@app.route("/financial_risk_analysis", methods=["POST"])
def financial_risk_analysis():
    try:
        data = request.json
        panNumber = data.get("panNumber")
        gstin = data.get("gstin")
        if not panNumber or not gstin:
            return jsonify({"error": "Missing PAN Number or GST ID"}), 400

        result = perform_risk_analysis(panNumber, gstin)
        return jsonify({"result": result})

    except Exception as e:
        traceback.print_exc()
        return jsonify({"error": "Failed to process request", "details": str(e)}), 500


def perform_risk_analysis(panNumber, gstin):
    chat = ChatOpenAI()
    prompt = ChatPromptTemplate(
        messages=[
            SystemMessage(
                content="""I am an AI specialized in financial risk assessment for loan applications. I have the ability to access and analyze credit scores, credit summaries, and GST turnover data to evaluate financial stability. My analysis includes providing a quantitative risk assessment score ranging from 0 (low risk) to 100 (high risk). Based on the calculated risk score and specific financial indicators, I will provide a recommendation on whether to approve or deny the loan application. I will also detail the key financial metrics assessed, such as debt-to-income ratio, credit utilization, and payment history, and explain their impact on the risk score."""
            ),
            HumanMessagePromptTemplate.from_template("{input}"),
            MessagesPlaceholder(variable_name="agent_scratchpad"),
        ]
    )

    tools = [credit_score_tool, credit_summary_tool, gst_turnover_tool]
    agent = OpenAIFunctionsAgent(llm=chat, prompt=prompt, tools=tools)
    agent_exec = AgentExecutor(agent=agent, verbose=True, tools=tools)

    result = agent_exec(
        f"Provide a financial risk analysis for client with PAN Number {panNumber} and GST ID {gstin}."
    )
    return result


if __name__ == "__main__":
    app.run(debug=True, port=5012)
