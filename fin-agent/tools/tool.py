import requests
from bs4 import BeautifulSoup
from langchain.tools import Tool


# Mock function to simulate fetching credit scores
def fetch_credit_scores(panNumber):
    print(f"Fetching scores for client ID: {panNumber}")
    # Simulated data based on client_id (could be dynamic if needed)
    return {
        "scores": [
            {
                "bureau": "Experian",
                "score": 697,
                "credit_score_model_name": "ExperianFairIsaac",
                "score_date": "2018-04-21",
            },
            {
                "bureau": "TransUnion",
                "score": 725,
                "credit_score_model_name": "FICORiskScoreClassic04",
                "score_date": "2018-04-21",
            },
            {
                "bureau": "Equifax",
                "score": 700,
                "credit_score_model_name": "EquifaxBeacon5.0",
                "score_date": "2018-04-21",
            },
        ]
    }


# Mock function to simulate fetching credit summaries
def fetch_credit_summary(gstin):
    return {
        "trade_summary": {
            "total_liability_balance": 167427,
            "total_liability_count": 21,
            "total_liability_high_credit": 206809,
            "revolving_credit_utilization": 33,
        },
        "derogatory_summary": {
            "30_days_late_count": 3,
            "60_days_late_count": 0,
            "90_days_late_count": 0,
        },
    }


# Mock function to simulate fetching GST turnover data
def fetch_gst_turnover(gstin):
    return {
        "gst_estimated_total": 23758076.37,
        "gst_filed_total": 23758076.37,
        "pan_estimated_total": 23758076.37,
        "pan_filed_total": 23758076.37,
    }


# Creating tools from the functions

credit_score_tool = Tool.from_function(
    name="Fetch_Credit_Scores",
    description="Returns simulated credit scores from various bureaus.",
    func=fetch_credit_scores,
)

credit_summary_tool = Tool.from_function(
    name="Fetch_Credit_Summary",
    description="Returns simulated credit summaries and liabilities.",
    func=fetch_credit_summary,
)
gst_turnover_tool = Tool.from_function(
    name="Fetch_GST_Turnover",
    description="Returns simulated GST and PAN turnover data.",
    func=fetch_gst_turnover,
)
