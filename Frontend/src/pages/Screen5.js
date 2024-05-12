import { DataContext } from "../App";

import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
const Screen11 = () => {
  const navigateTo = useNavigate();
  const { data, setData } = useContext(DataContext);

  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      // Log and set data; assume setData is synchronous and just setting React state
      console.log("Submitting data...");
      setData((prevData) => ({
        ...prevData,

        gender,
        dob,
      }));
      // Here we assume you might have some asynchronous operation like API call
      // For example, let's assume you send this data to a backend server
      // await api.sendData({ panCardURL, aadharCardFront, aadharCardBack });

      // If everything succeeds, navigate to the next screen
      console.log("Navigation to next screen...");
      navigateTo("/screen6");
    } catch (error) {
      // Handle errors that might have occurred during set data or navigation
      console.error("Failed to process the form submission:", error);
      // Optionally set some state to show error message on UI
    }
  };

  console.log(data);
  return (
    <div className="w-full relative bg-bgcolor-light overflow-hidden flex flex-row items-start justify-between pt-11 pb-[236px] pr-11 pl-[88px] box-border tracking-[normal] leading-[normal] gap-[20px] text-left text-base text-gray-200 font-raleway mq450:pl-5 mq450:box-border mq800:flex-wrap mq800:pl-11 mq800:pr-[22px] mq800:box-border">
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
      <div className="w-[456px] flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border max-w-full text-lg text-gray-300 font-poppins">
        <div className="self-stretch flex flex-col items-start justify-start gap-[80px] max-w-full mq450:gap-[40px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full mq450:gap-[16px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-13xl text-gray-200">
              <h2 className="m-0 self-stretch relative text-inherit leading-[36px] font-bold font-inherit mq450:text-lgi mq450:leading-[22px] mq800:text-7xl mq800:leading-[29px]">
                Profile info
              </h2>
              <div className="self-stretch relative text-base leading-[22px] font-light font-roboto text-dimgray">
                Kindly provide the owner's details, including full name, contact
                information, and role in the business. This information is
                essential for our records and further communication
              </div>
            </div>
            <div className="self-stretch rounded-lg box-border flex flex-col items-start justify-start pt-[30px] px-[31px] pb-[29px] gap-[16px] max-w-full text-sm border-[1px] border-solid border-gainsboro-200 mq450:pt-5 mq450:pb-5 mq450:box-border">
              <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-4 gap-[2px] text-xl text-gray-200">
                <div className="self-stretch relative leading-[28px] font-semibold mq450:text-base mq450:leading-[22px]">
                  Personal data
                </div>
                <div className="self-stretch relative text-xs leading-[16px] font-light text-dimgray">
                  Specify exactly as in your passport
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[15px] gap-[16px]">
                <div className="self-stretch relative leading-[20px]">
                  Full Name
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                  <input
                    className="w-full [border:none] [outline:none] bg-[transparent] self-stretch h-7 flex flex-row items-start justify-start py-0 px-4 box-border font-roboto text-lg text-gray-300 min-w-[235px]"
                    placeholder="Alexander"
                    value={data.accountHolderName}
                    type="text"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                  <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gainsboro-200" />
                </div>
              </div>

              <div className="self-stretch relative leading-[20px]">
                Date of Birth
              </div>
              <input
                className="self-stretch px-4 py-2 border-[1px] border-solid border-gainsboro-200 rounded text-gray-200 bg-transparent"
                type="date"
                onChange={(e) => {
                  setDob(e.target.value);
                  console.log("yes");
                }}
              />
              <div className="self-stretch relative leading-[20px] mt-4">
                Gender
              </div>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    onChange={(e) => {
                      setGender("Male");
                    }}
                  />
                  Male
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={(e) => {
                      setGender("Female");
                    }}
                  />
                  Female
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="gender"
                    value="other"
                    onChange={(e) => {
                      setGender("Other");
                    }}
                  />
                  Other
                </label>
              </div>
            </div>
            <div className="self-stretch rounded-lg flex flex-col items-start justify-start py-3.5 px-[15px] gap-[2px] font-roboto border-[1px] border-solid border-gainsboro-200">
              <div className="self-stretch relative leading-[28px]">
                {data.aadharCardNumber}
              </div>
              <div className="flex flex-row items-start justify-start gap-[4px] text-smi text-dimgray font-poppins">
                <img
                  className="h-[18px] w-[18px] relative overflow-hidden shrink-0 min-h-[18px]"
                  loading="lazy"
                  alt=""
                  src="/icon-21.svg"
                />
                <div className="relative leading-[18px]">Adhar Card Number</div>
              </div>
            </div>
            <div className="self-stretch rounded-lg flex flex-col items-start justify-start py-3.5 px-[15px] gap-[2px] font-roboto border-[1px] border-solid border-gainsboro-200">
              <div className="self-stretch relative leading-[28px]">
                {data.panCardNumber}
              </div>
              <div className="flex flex-row items-start justify-start gap-[4px] text-smi text-dimgray font-poppins">
                <img
                  className="h-[18px] w-[18px] relative overflow-hidden shrink-0 min-h-[18px]"
                  loading="lazy"
                  alt=""
                  src="/icon-21.svg"
                />
                <div className="relative leading-[18px] inline-block min-w-[117px]">
                  Pan Card Number
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[32px] mq450:gap-[16px]">
              <button
                className="cursor-pointer py-2.5 pr-[23px] pl-[31px] bg-royalblue rounded flex flex-row items-start justify-start gap-[8px] whitespace-nowrap border-[1px] border-solid border-silver-100 hover:bg-cornflowerblue hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-100"
                onClick={handleSubmit}
              >
                <div className="relative text-base leading-[24px] capitalize font-medium font-poppins text-bgcolor-light text-center inline-block min-w-[63px]">
                  Go next
                </div>
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  alt=""
                  src="/icon-4.svg"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <img
        className="relative w-12 h-12 overflow-hidden opacity-0 shrink-0"
        loading="lazy"
        alt=""
        src="/icon-3.svg"
      />
    </div>
  );
};

export default Screen11;
