import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Text,
  Card,
  Image,
  Grid,
  useTheme,
  Link,
  Spinner
} from "@geist-ui/core";

function formatRiskAnalysisOutput(text) {
  const lines = text.split("\n");
  const formattedLines = lines.map((line) => {
    if (line.startsWith("### ")) {
      return `<h3>${line.substring(4)}</h3>`; // Convert to <h3> tag for third-level headings
    } else if (line.startsWith("## ")) {
      return `<h2>${line.substring(3)}</h2>`; // Convert to <h2> tag for second-level headings
    } else if (line.startsWith("# ")) {
      return `<h1>${line.substring(2)}</h1>`; // Convert to <h1> tag for top-level headings
    } else {
      return `<p>${line}</p>`; // Default to paragraph tag
    }
  });
  return formattedLines.join("");
}

function BusinessDetails() {
  const { id } = useParams();
  const { palette } = useTheme();

  const [business, setBusiness] = useState(null);
  const [gst, setGst] = useState(null);
  const [pan, setPAN] = useState(null);

  const [creditReport, setCreditReport] = useState(null);
  const [creditScores, setCreditScores] = useState([]);
  const [creditSummary, setCreditSummary] = useState(null);
  const [gstTurnover, setGstTurnover] = useState(null);
  const [financialRiskAnalysis, setFinancialRiskAnalysis] = useState(null);
  const [financialRiskLoading, setFinancialRiskLoading] = useState(true); // Loading state for financial risk analysis
  const [planAnalysis, setPlanAnalysis] = useState(null);
  const [planAnalysisLoading, setPlanAnalysisLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:4048/api/business/${id}`)
      .then((businessResponse) => {
        setBusiness(businessResponse.data);
        const gstData = JSON.stringify({
          gstin: businessResponse.data.gstNumber,
          panNumber: businessResponse.data.panCardNumber,
          year: "2024"
        });

        setPAN(businessResponse.data.panCardNumber);
        setGst(businessResponse.data.gstNumber);

        console.log("gstData", gstData);

        const fetchCreditReport = axios.post(
          "http://127.0.0.1:4048/api/creditreport",
          {}
        );
        const fetchCreditScores = axios.post(
          "http://127.0.0.1:4048/api/creditscores",
          {}
        );
        const fetchCreditSummary = axios.post(
          "http://127.0.0.1:4048/api/creditsummary",
          {}
        );
        const fetchGstTurnover = axios.post(
          "http://127.0.0.1:4048/api/gstturnOver",
          gstData,
          {
            headers: { "Content-Type": "application/json" }
          }
        );

        return Promise.all([
          fetchCreditReport,
          fetchCreditScores,
          fetchCreditSummary,
          fetchGstTurnover
        ]);
      })
      .then(
        ([
          creditReportResponse,
          creditScoresResponse,
          creditSummaryResponse,
          gstTurnoverResponse
        ]) => {
          setCreditReport(creditReportResponse.data.result.data);
          setCreditScores(creditScoresResponse.data.scores);
          setCreditSummary(creditSummaryResponse.data.summaries[0]);
          setGstTurnover(gstTurnoverResponse.data.result);
          // Initiate the financial risk analysis fetch after other data has been set
          const financialRiskData = JSON.stringify({
            gstin: gst, // Assuming this value comes correctly from business details
            panNumber: pan
          });
          return axios.post(
            "http://127.0.0.1:5012/financial_risk_analysis",
            financialRiskData,
            {
              headers: { "Content-Type": "application/json" }
            }
          );
        }
      )
      .then((financialRiskAnalysisResponse) => {
        setFinancialRiskAnalysis(financialRiskAnalysisResponse.data.result);
        setFinancialRiskLoading(false); // Update loading state after fetching financial risk analysis
      })
      .catch((err) => {
        setError("Failed to fetch data");
        console.error(err);
      });

    axios
      .get("http://127.0.0.1:5012/analyze_plan")
      .then((response) => {
        setPlanAnalysis(response.data.result);
        setPlanAnalysisLoading(false); // Update loading state once the data is fetched
      })
      .catch((error) => {
        console.error("Error fetching plan analysis:", error);
        setError("Failed to fetch plan analysis");
        setPlanAnalysisLoading(false); // Ensure loading state is updated even on error
      });
  }, [id]);

  if (
    !business ||
    !creditReport ||
    creditScores.length === 0 ||
    !creditSummary ||
    !gstTurnover
  )
    return <div>Loading...</div>;

  return (
    <div className="max-w-4xl p-5 mx-auto bg-white rounded-lg shadow">
      <Text
        h1
        margin="0 0 20px 0"
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: palette.foreground
        }}
      >
        {business.nameOfBusiness}
      </Text>
      <Grid.Container gap={2} justify="center">
        <Grid xs={24} md={12}>
          <Card shadow>
            <Text h2 style={{ color: palette.accents_6 }}>
              Account Holder: {business.accountHolderName}
            </Text>
            <Text p style={{ color: palette.accents_5 }}>
              PAN Card Number: {business.panCardNumber}
            </Text>
            <Image
              src={business.panCardURL}
              alt="PAN Card"
              width="100%"
              height="auto"
            />
          </Card>
        </Grid>

        <Grid xs={24} md={12}>
          <Card shadow>
            <Text p style={{ color: palette.accents_5 }}>
              Aadhar Number: {business.aadharCardNumber}
            </Text>
            <Image
              src={business.aadharCardFrontURL}
              alt="Aadhar Card Front"
              width="100%"
              height="auto"
            />
            <Image
              src={business.aadharCardBackURL}
              alt="Aadhar Card Back"
              width="100%"
              height="auto"
            />
          </Card>
        </Grid>
      </Grid.Container>
      <Text p style={{ color: palette.accents_5 }}>
        GST Number: {business.gstNumber}
      </Text>
      <Link href={business.financialDocumentsURL} target="_blank" color block>
        View Financial Documents
      </Link>

      <Card
        hoverable
        style={{ marginTop: "20px", backgroundColor: palette.cyanLighter }}
      >
        <Text h2 style={{ color: palette.accents_6 }}>
          Credit Score: {creditReport.credit_score}
        </Text>
        <Link href={creditReport.credit_report_link} target="_blank" color>
          View Credit Report
        </Link>
      </Card>

      <Card
        hoverable
        style={{ marginTop: "20px", backgroundColor: palette.violetLighter }}
      >
        <Text h2 style={{ color: palette.accents_6 }}>
          Credit Scores from Different Bureaus:
        </Text>
        <Grid.Container gap={2} justify="flex-start">
          {creditScores.map((score, index) => (
            <Grid xs={24} sm={8} key={index}>
              <Card hoverable>
                <Text h3>{score.bureau}</Text>
                <Text p style={{ color: palette.accents_6 }}>
                  Score: <strong>{score.score}</strong>
                </Text>
                <Text small style={{ color: palette.accents_4 }}>
                  Model: {score.credit_score_model_name}
                </Text>
                <Text small style={{ color: palette.accents_4 }}>
                  Date: {score.score_date}
                </Text>
              </Card>
            </Grid>
          ))}
        </Grid.Container>
      </Card>
      <Grid.Container gap={2} justify="center">
        <Grid.Container
          gap={2}
          justify="center"
          style={{ marginTop: "20px", marginBottom: "20px" }}
        >
          <Grid xs={24} md={12}>
            <Card
              hoverable
              style={{ backgroundColor: palette.yellowLighter, width: "100%" }}
            >
              <Text h2>Credit Summary:</Text>
              <Text p>
                Total Liability Balance: ₹
                {creditSummary.trade_summary.total_liability_balance}
              </Text>
              <Text p>
                Revolving Balance: ₹
                {creditSummary.trade_summary.revolving_balance}
              </Text>
              <Text p>
                Mortgage Balance: ₹
                {creditSummary.trade_summary.mortgage_balance}
              </Text>
              <Text p>
                Installment Balance: ₹
                {creditSummary.trade_summary.installment_balance}
              </Text>
              <Text p>
                Number of Late Payments (30 days):{" "}
                {creditSummary.derogatory_summary["30_days_late_count"]}
              </Text>
              <Text p>
                Inquiry Count: {creditSummary.derogatory_summary.inquiry_count}
              </Text>
            </Card>
          </Grid>

          <Grid
            xs={24}
            md={12}
            style={{ marginTop: "20px", marginBottom: "20px" }}
          >
            <Card
              hoverable
              style={{ backgroundColor: palette.violetLighter, width: "100%" }}
            >
              <Text h2>GST Turnover Details:</Text>
              <Text p>
                Estimated GST Total: ₹
                {gstTurnover.gst_estimated_total.toLocaleString()}
              </Text>
              <Text p>
                Filed GST Total: ₹{gstTurnover.gst_filed_total.toLocaleString()}
              </Text>
              <Text p>
                Estimated PAN Total: ₹
                {gstTurnover.pan_estimated_total.toLocaleString()}
              </Text>
              <Text p>
                Filed PAN Total: ₹{gstTurnover.pan_filed_total.toLocaleString()}
              </Text>
            </Card>
          </Grid>
        </Grid.Container>

        <Grid xs={24}>
          {!financialRiskLoading ? (
            <Card hoverable style={{ backgroundColor: palette.accents_1 }}>
              <Text h2>Financial Risk Analysis</Text>
              <div
                dangerouslySetInnerHTML={{
                  __html: formatRiskAnalysisOutput(financialRiskAnalysis.output)
                }}
              />
            </Card>
          ) : (
            <Card hoverable style={{ backgroundColor: palette.accents_1 }}>
              <Text h2>Loading Financial Risk Analysis...</Text>
              <Spinner />
            </Card>
          )}
        </Grid>

        <Grid xs={24}>
          {!planAnalysisLoading ? (
            <Card hoverable style={{ backgroundColor: palette.cyanLighter }}>
              <Text h2>Plan Analysis Results</Text>
              <div
                dangerouslySetInnerHTML={{
                  __html: formatRiskAnalysisOutput(planAnalysis)
                }}
              />
            </Card>
          ) : (
            <Card hoverable style={{ backgroundColor: palette.cyanLighter }}>
              <Text h2>Loading Plan Analysis...</Text>
              <Spinner />
            </Card>
          )}
        </Grid>
      </Grid.Container>
    </div>
  );
}

export default BusinessDetails;
