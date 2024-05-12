from flask import Flask, request, jsonify
from dotenv import load_dotenv
import os
from flask_cors import CORS
from crewai import Agent, Task, Crew
from langchain_openai import ChatOpenAI
from PyPDF2 import PdfReader

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


if __name__ == "__main__":
    app.run(debug=True, port=5002)
