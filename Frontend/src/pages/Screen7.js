import { useState, useContext } from "react";
import { DataContext } from "../App";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Screen31 = () => {
  const navigateTo = useNavigate();
  const { data, setData } = useContext(DataContext);
  const [bPlan, setBPlan] = useState("");
  const [bankAccNo, setBankAccNo] = useState("");
  const [ifsc, setIfsc] = useState("");
  const postData = async (e) => {
    e.preventDefault();

    try {
      // Log and set data; assume setData is synchronous and just setting React state
      console.log("Submitting data...");
      setData((prevData) => ({
        ...prevData,
        businessPlan: bPlan,
        accountNumber: bankAccNo,
        ifscCode: ifsc
      }));
      const {
        phoneNumber,
        nameOfBusiness,

        city,
        businessAddress,
        gstNumber,
        yearlyRevenue,
        panCardURL,
        aadharCardFrontURL,
        aadharCardBackURL,
        accountHolderName,
        gender,
        dob,
        financialDocumentsURL,
        ifscCode,
        accountNumber,
        businessPlan
      } = data;
      await axios
        .post(
          "http://localhost:4048/api/business",
          {
            phoneNumber,
            nameOfBusiness,
            city,
            businessAddress,
            gstNumber,
            yearlyRevenue,
            panCardURL,
            aadharCardFrontURL,
            aadharCardBackURL,
            accountHolderName,
            gender,
            dob,
            financialDocumentsURL,
            ifscCode,
            accountNumber,
            businessPlan
          },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" }
          }
        )
        .then((res) => {
          navigateTo("/screen8");
        });
      // Here we assume you might have some asynchronous operation like API call
      // For example, let's assume you send this data to a backend server
      // await api.sendData({ panCardURL, aadharCardFront, aadharCardBack });

      // If everything succeeds, navigate to the next screen
    } catch (error) {
      // Handle errors that might have occurred during set data or navigation
      console.error("Failed to process the form submission:", error);
      // Optionally set some state to show error message on UI
    }
  };
  const uploadGetLink = async (event) => {
    try {
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append("file", file); // 'file' is the key expected on the server side

      const resp = await axios.post(
        "http://localhost:4048/api/convert",
        formData, // Send the form data
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data" // This might be automatically set by Axios
          }
        }
      );
      setBPlan(resp.data.url);
      console.log(resp.data); // Log the response data from the server
    } catch (err) {
      console.error(err); // Log the error if something goes wrong
    }
  };
  console.log(data);
  return (
    <div className="w-full relative bg-bgcolor-light overflow-hidden flex flex-row items-start justify-between pt-11 pb-[142px] pr-11 pl-[88px] box-border tracking-[normal] leading-[normal] gap-[20px] text-left text-base text-gray-200 font-raleway mq450:pl-5 mq450:box-border mq1125:flex-wrap mq750:pl-11 mq750:pr-[22px] mq750:box-border">
      <div className="flex flex-row items-start justify-start gap-[12px]">
        <img
          className="h-6 w-6 relative min-h-[24px]"
          loading="lazy"
          alt=""
          src="/logo.svg"
        />
        <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
          <b className="relative tracking-[1px] leading-[18px] uppercase inline-block min-w-[80px]">
            vYapaar
          </b>
        </div>
      </div>
      <div className="h-[1262px] w-[848px] relative max-w-full text-13xl font-poppins mq750:h-auto mq750:min-h-[1262]">
        <div className="absolute top-[8px] left-[0px] w-[456px] flex flex-col items-start justify-start gap-[32px] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
            <h1 className="m-0 self-stretch relative text-inherit leading-[36px] font-bold font-inherit mq450:text-lgi mq450:leading-[22px] mq1025:text-7xl mq1025:leading-[29px]">
              Credit Requirements
            </h1>
            <div className="self-stretch relative text-base leading-[22px] font-light font-roboto text-dimgray">
              Please specify your credit requirements, including the desired
              credit amount and the purpose of the credit. This will help us
              assess your needs accurately and offer the most suitable financial
              solutions.
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full text-sm text-gray-300">
            <div className="self-stretch rounded-lg box-border flex flex-col items-start justify-start py-[30px] px-[31px] gap-[31.4px] max-w-full border-[1px] border-solid border-gainsboro-200">
              <div className="self-stretch flex flex-col items-start justify-start gap-[2px] text-xl text-gray-200">
                <h3 className="m-0 self-stretch relative text-inherit leading-[28px] font-semibold font-inherit mq450:text-base mq450:leading-[22px]">
                  Credit Requirements
                </h3>
                <div className="self-stretch relative text-xs leading-[16px] font-light text-dimgray">
                  Detail Your Financial Needs
                </div>
              </div>

              <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                <div className="self-stretch relative leading-[20px]">
                  Bank Account
                </div>
                <input
                  className="w-full [border:none] [outline:none] bg-[transparent] self-stretch h-7 flex flex-row items-start justify-start py-0 px-4 box-border font-roboto text-lg text-darkgray min-w-[235px]"
                  type="text"
                  onChange={(e) => {
                    setBankAccNo(e.target.value);
                    console.log("yes");
                  }}
                />
                <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gainsboro-200" />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                <div className="self-stretch relative leading-[20px]">
                  Confirm Bank Account Number
                </div>
                <input
                  className="w-full [border:none] [outline:none] bg-[transparent] self-stretch h-7 flex flex-row items-start justify-start py-0 px-4 box-border font-roboto text-lg text-darkgray min-w-[235px]"
                  type="text"
                />
                <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gainsboro-200" />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                <div className="self-stretch relative leading-[20px]">
                  IFSC Code of BANK Account
                </div>
                <input
                  className="w-full [border:none] [outline:none] bg-[transparent] self-stretch h-7 flex flex-row items-start justify-start py-0 px-4 box-border font-roboto text-lg text-darkgray min-w-[235px]"
                  type="text"
                  onChange={(e) => {
                    setIfsc(e.target.value);
                    console.log("yes");
                  }}
                />
                <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gainsboro-200" />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
                <div className="self-stretch relative leading-[20px]">
                  Capital Requirements
                </div>
                <select className="w-full px-4 py-0 text-lg bg-transparent border-none outline-none text-darkgray">
                  <option value="">Select Capital Requirement</option>
                  <option value="scaling">Scaling</option>
                  <option value="working">Working Capital</option>
                </select>
                <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gainsboro-200" />
              </div>
              <div className="flex flex-col items-start self-stretch justify-start max-w-full text-lg text-textcolor-default font-body-small">
                <div className="self-stretch flex flex-col items-center justify-center gap-[12px] max-w-full">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[6px] max-w-full mq450:flex-wrap">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[2px] min-w-[235px] max-w-full">
                      <b className="self-stretch relative tracking-[-0.2px] leading-[26px]">{`Upload Business Plan `}</b>
                      <div className="self-stretch h-5 relative text-sm leading-[20px] text-textcolor-secdefault inline-block overflow-hidden text-ellipsis whitespace-nowrap shrink-0">
                        Share your venture details. the project and everything
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[6px] text-base text-strokecolor-primary">
                      <div className="w-[63px] relative leading-[22px] hidden">
                        Text link
                      </div>
                      <div className="w-11 relative leading-[22px] font-semibold text-textcolor-default hidden">
                        Value
                      </div>
                      <img
                        className="h-6 w-6 relative overflow-hidden shrink-0 hidden min-h-[24px]"
                        alt=""
                        src="/filter-list.svg"
                      />
                      <img
                        className="relative w-6 h-6 overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src="/close.svg"
                      />
                      <div className="h-[22px] hidden flex-row items-center justify-center text-center text-xs">
                        <div className="self-stretch bg-bgcolor-lightprimary flex flex-row items-center justify-center py-spacing-xxxs px-spacing-xxs gap-[4px]">
                          <img
                            className="relative hidden w-4 h-4 overflow-hidden shrink-0"
                            alt=""
                            src="/info.svg"
                          />
                          <div className="self-stretch relative leading-[18px] font-semibold flex items-center justify-center">
                            Badges
                          </div>
                          <img
                            className="relative hidden w-4 h-4 overflow-hidden shrink-0"
                            alt=""
                            src="/info.svg"
                          />
                        </div>
                      </div>
                      <img
                        className="h-5 w-[33.3px] relative hidden"
                        alt=""
                        src="/ios-style.svg"
                      />
                    </div>
                  </div>
                  <img
                    className="relative self-stretch hidden max-w-full max-h-full overflow-hidden"
                    alt=""
                    src="/divider1.svg"
                  />
                </div>
              </div>
              <input
                className="self-stretch h-[84px] rounded-radi-mlg bg-bgcolor-light box-border flex flex-col items-center justify-center py-3 px-spacing-lg border-[1px] border-dashed border-strokecolor-primary"
                type="file"
                onChange={uploadGetLink}
              />
              <div className="self-stretch h-5 relative leading-[20px] font-body-small text-textcolor-secdefault inline-block overflow-hidden text-ellipsis whitespace-nowrap shrink-0">
                Only support pdf
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[8px] text-base text-black font-roboto">
              <img
                className="relative w-8 h-8 overflow-hidden rounded-md shrink-0"
                alt=""
                src="/buttoniconghostoff.svg"
              />
              <div className="flex flex-col items-start justify-start px-0 pt-1 pb-0">
                <div className="relative leading-[24px] inline-block min-w-[83px]">
                  I agree with
                </div>
              </div>
              <div className="flex flex-col items-start justify-start px-0 pt-1 pb-0 text-royalblue">
                <div className="relative leading-[24px] font-medium inline-block min-w-[94px]">
                  Terms of use
                </div>
              </div>
            </div>
            <button
              className="cursor-pointer [border:none] py-3 px-6 bg-royalblue w-32 rounded flex flex-row items-start justify-start box-border gap-[8px] hover:bg-cornflowerblue"
              onClick={postData}
            >
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                alt=""
                src="/icon-12.svg"
              />
              <div className="relative text-base leading-[24px] capitalize font-medium font-poppins text-bgcolor-light text-center inline-block min-w-[40px]">
                Save
              </div>
            </button>
          </div>
        </div>
        <img
          className="absolute top-[0px] left-[800px] w-12 h-12 overflow-hidden opacity-0"
          loading="lazy"
          alt=""
          src="/icon-3.svg"
        />
      </div>
    </div>
  );
};

export default Screen31;
