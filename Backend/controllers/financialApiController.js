import { faker } from "@faker-js/faker";

function generateTransactions() {
  let transactions = [];
  for (let i = 0; i < 10; i++) {
    transactions.push({
      amount: faker.finance.amount(),
      balanceAfterTransaction: faker.finance.amount(),
      batchID: faker.datatype.uuid(),
      dateTime: faker.date
        .between("2021-04-01", "2021-04-05")
        .toLocaleDateString("en-GB"),
      description: faker.finance.transactionDescription(),
      firstLevelCategory: "GENERAL",
      remark: null,
      secondLevelCategory: "GENERAL",
      transactionId: faker.datatype.uuid(),
      transactionNumber: faker.random.alphaNumeric(4),
      type: faker.helpers.arrayElement(["CREDIT", "DEBIT"]),
      valueDate: null
    });
  }
  return transactions;
}

export const creditReport = async (req, res) => {
  try {
    // Extracting data from the request body
    const { name, panNumber, mobileNumber } = req.body;

    const data = {
      code: 200,
      message: "Data Found Successfully.",
      result: {
        data: {
          pan: panNumber, // Use the provided PAN number
          mobile: mobileNumber, // Use the provided mobile number
          name: name, // Use the provided name
          credit_score: faker.datatype
            .number({ min: 100, max: 999 })
            .toString(), // Generates a random three-digit number as a string
          credit_report: {},
          credit_report_link: faker.internet.url() // Generates a random URL
        },
        status_code: 200,
        success: true,
        message: "Success",
        message_code: "success"
      }
    };

    res.json(data);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const creditScores = async (req, res) => {
  try {
    const today = new Date();
    const dateStr = today.toISOString().split("T")[0]; // Format as 'YYYY-MM-DD'

    const data = {
      scores: [
        {
          bureau: "Experian",
          score: faker.datatype.number({ min: 600, max: 800 }),
          credit_score_model_name: "ExperianFairIsaac",
          score_date: dateStr
        },
        {
          bureau: "TransUnion",
          score: faker.datatype.number({ min: 600, max: 800 }),
          credit_score_model_name: "FICORiskScoreClassic04",
          score_date: dateStr
        },
        {
          bureau: "Equifax",
          score: faker.datatype.number({ min: 600, max: 800 }),
          credit_score_model_name: "EquifaxBeacon5.0",
          score_date: dateStr
        }
      ]
    };

    res.json(data);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const creditSummary = async (req, res) => {
  try {
    const data = {
      summaries: [
        {
          trade_summary: {
            auto_balance: faker.finance.amount(5000, 15000),
            auto_count: "3",
            auto_high_credit: faker.finance.amount(10000, 20000),
            auto_past_due: "0",
            auto_payment: faker.finance.amount(200, 300),
            education_balance: "0",
            education_count: "0",
            education_high_credit: "0",
            education_past_due: "0",
            education_payment: "0",
            installment_balance: faker.finance.amount(5000, 15000),
            installment_count: "3",
            installment_high_credit: faker.finance.amount(10000, 20000),
            installment_other_balance: "0",
            installment_other_count: "0",
            installment_other_high_credit: "0",
            installment_other_past_due: "0",
            installment_other_payment: "0",
            installment_past_due: "0",
            installment_payment: faker.finance.amount(200, 300),
            liability_oldest_creditor_name: "VALLEY NATIONAL BANK M",
            liability_oldest_date: "199903",
            mortgage_balance: faker.finance.amount(140000, 150000),
            mortgage_count: "2",
            mortgage_high_credit: faker.finance.amount(140000, 150000),
            mortgage_past_due: "0",
            mortgage_payment: faker.finance.amount(1600, 1700),
            open_balance: "0",
            open_count: "3",
            open_high_credit: "0",
            open_past_due: "0",
            open_payment: "0",
            revolving_balance: faker.finance.amount(15000, 16000),
            revolving_count: "13",
            revolving_high_credit: faker.finance.amount(47000, 48000),
            revolving_past_due: "0",
            revolving_payment: faker.finance.amount(300, 400),
            total_liability_balance: faker.finance.amount(160000, 170000),
            total_liability_count: "21",
            total_liability_high_credit: faker.finance.amount(200000, 210000),
            total_liability_past_due: "0",
            total_liability_payment: faker.finance.amount(2200, 2300),
            unknown_balance: "0",
            unknown_count: "0",
            unknown_high_credit: "0",
            unknown_past_due: "0",
            unknown_payment: "0"
          },
          derogatory_summary: {
            total_secured_loan_balance: faker.finance.amount(150000, 160000),
            total_unsecured_loan_balance: faker.finance.amount(15000, 16000),
            total_high_credit: faker.finance.amount(200000, 210000),
            debt_high_credit: "81",
            revolving_credit_utilization: "33",
            "30_days_late_count": "3",
            "60_days_late_count": "0",
            "90_days_late_count": "0",
            derog_other_count: "0",
            liability_satisfactory_count: "18",
            liability_bankruptcy_count: "0",
            liability_collection_count: "0",
            liability_charge_off_count: "0",
            liability_current_adverse_count: "0",
            liability_previous_adverse_count: "3",
            inquiry_count: "26",
            public_record_count: "0",
            dispute_count: "0"
          }
        }
      ]
    };

    res.json(data);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const gstTurnOver = async (req, res) => {
  try {
    const { gstin, year } = req.body; // Extract gstin and year from the request body

    // Check for required inputs
    if (!gstin || !year) {
      return res.status(400).json({
        code: 400,
        message: "Missing required fields"
      });
    }

    // Generate random financial data
    const financialData = faker.finance.amount(20000000, 30000000, 2);

    const data = {
      code: 200,
      message: "Data Found Successfully !",
      result: {
        gst_estimated_total: parseFloat(financialData),
        gst_filed_total: parseFloat(financialData),
        pan_estimated_total: parseFloat(financialData),
        pan_filed_total: parseFloat(financialData)
      }
    };

    res.json(data);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const gstFilling = async (req, res) => {
  const gstin = req.body.gstin;
  try {
    const businessTypes = [
      "PRIVATE LIMITED COMPANY",
      "PUBLIC LIMITED COMPANY",
      "PARTNERSHIP",
      "SOLE PROPRIETORSHIP"
    ];
    const taxPayerTypes = [
      "REGULAR",
      "COMPOSITION",
      "NON-RESIDENT",
      "CASUAL TAXABLE PERSON"
    ];
    const gstStatuses = ["ACTIVE", "INACTIVE", "SUSPENDED", "CANCELLED"];

    const detailedGst = {
      task: "detailedGstinSearch",
      essentials: {
        gstin: gstin
      },
      id: faker.string.uuid(),
      patronId: faker.string.uuid(),
      result: {
        gstnDetailed: {
          constitutionOfBusiness:
            businessTypes[
              faker.number.int({ min: 0, max: businessTypes.length - 1 })
            ],
          legalNameOfBusiness: "Company Name",
          tradeNameOfBusiness: "Company Name",
          centreJurisdiction: `COMMISSIONERATE - ${faker.address.city()},DIVISION - ${faker.address.city()} DIVISION,RANGE - R-${faker.number.int(
            { min: 10, max: 99 }
          )}`,
          stateJurisdiction: `STATE - ${faker.address.state()},RANGE - ${faker.address.city()},DISTRICT - ${faker.address.city()} (SOUTH),WARD - ${faker.address.city()} (SOUTH) WARD ${faker.number.int(
            { min: 1, max: 10 }
          )}`,
          registrationDate: faker.date.past(10).toISOString().split("T")[0],
          taxPayerDate: "",
          taxPayerType:
            taxPayerTypes[
              faker.number.int({ min: 0, max: taxPayerTypes.length - 1 })
            ],
          gstinStatus:
            gstStatuses[
              faker.number.int({ min: 0, max: gstStatuses.length - 1 })
            ],
          cancellationDate: "",
          natureOfBusinessActivities: [
            "SUPPLIER OF SERVICES",
            "RETAIL BUSINESS"
          ],
          complianceRating: "",
          directorNames: ["Name"],
          principalPlaceAddress: {
            emailId: faker.internet.email(),
            address: faker.address.streetAddress(),
            natureOfBusiness: "SUPPLIER OF SERVICES, RETAIL BUSINESS",
            mobile: "0000000000",
            lastUpdatedDate: "",
            splitAddress: {
              district: [faker.address.city()],
              state: [[faker.address.state(), faker.address.stateAbbr()]],
              city: [faker.address.city()],
              pincode: faker.address.zipCode(),
              country: ["IN", "IND", "INDIA"],
              addressLine: faker.address.streetAddress()
            }
          }
        },
        gstnRecords: [
          {
            applicationStatus: "",
            registrationName: "Company Name",
            mobNum: "00000000",
            regType: "REGULAR",
            emailId: faker.internet.email(),
            tinNumber: faker.finance.account(),
            gstinRefId: faker.string.uuid(),
            gstin: gstin
          }
        ],
        annualAggregateTurnOver: "Slab: Rs. 1.5 Cr. to 5 Cr.",
        aggregateTurnOverRange: {
          minimum: 15000000,
          maximum: 50000000
        },
        grossTotalIncome: "NA",
        grossTotalIncomeFinancialYear: "2022-2023",
        filingStatus: Array.from({ length: 12 }, () => ({
          filingYear: "2023-2024",
          monthOfFiling: faker.date.month(),
          methodOfFilling: "ONLINE",
          dateOfFiling: faker.date.recent().toLocaleDateString("en-GB"),
          gstType: ["GSTR1", "GSTR3B", "GSTR9", "GSTR9C"][
            faker.number.int({ min: 0, max: 3 })
          ],
          gstStatus: "Filed"
        }))
      }
    };
    const data = {
      code: 200,
      message: "Data Found Successfully !",
      result: detailedGst
    };
    return res.json(data);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const bankStatement = async (req, res) => {
  try {
    const data = {
      code: 200,
      result: {
        bank_account: {
          accountDetailsForAccountListPage: "ICICI | SAVING",
          accountHolder: "Name",
          accountLimit: null,
          accountNo: faker.finance.account(),
          accountType: {
            enumType: "com.bankScraper.Enums$AccountType",
            name: "SAVING"
          },
          address: "N/A",
          availableCashLimit: null,
          availableCreditLimit: null,
          bank: {
            enumType: "com.bankScraper.Enums$Bank",
            name: "ICICI"
          },
          bankAccountUID: faker.datatype.uuid(),
          bankAddress: null,
          bankCredentialCO: null,
          bankTransactionList: [],
          branchAddress: null,
          cifNumber: "",
          client: null,
          creditCardNo: null,
          creditLimit: null,
          crnNo: null,
          currentCashAdvance: null,
          currentPurchaseCharges: null,
          customer: null,
          customerID: null,
          customerPhoneNo: "",
          dueDate: null,
          email: "",
          fromDate: null,
          ifsCode: "",
          isValidBankStatement: true,
          jointHolderNameList: [],
          lastPaymentReceived: null,
          micrCode: "",
          minAmountDue: null,
          openingBalance: null,
          pan: "",
          pointsEarned: null,
          prevBalance: null,
          relationshipWithBank: "",
          standardAccountHolderName: null,
          toDate: null,
          totalAmountDue: null,
          uploadBankStatementCO: null
        },
        statementUpload: "01-04-2021 to 01-04-2022",
        missingMonths: [],
        transactions: generateTransactions()
      }
    };

    res.json(data);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
