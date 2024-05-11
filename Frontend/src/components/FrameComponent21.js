import FrameComponent1 from "./FrameComponent11";

const FrameComponent2 = () => {
  return (
    <div className="absolute top-[8px] left-[0px] w-[456px] flex flex-col items-start justify-start gap-[32px] max-w-full text-left text-13xl text-gray-200 font-poppins">
      <div className="flex flex-row items-start justify-start pt-0 px-0 pb-12 box-border max-w-full">
        <div className="flex flex-row items-end justify-start py-0 pr-9 pl-0 box-border gap-[8px] max-w-full mq750:flex-wrap">
          <div className="h-3 w-3 relative rounded-[50%] bg-royalblue mq750:w-full" />
          <div className="w-10 flex flex-col items-start justify-end pt-0 px-0 pb-[5px] box-border">
            <div className="w-[41px] h-px relative box-border border-t-[1px] border-solid border-silver-200" />
          </div>
          <div className="h-3 w-3 relative rounded-[50%] bg-royalblue mq750:w-full" />
          <div className="w-10 flex flex-col items-start justify-end pt-0 px-0 pb-[5px] box-border">
            <div className="w-[41px] h-px relative box-border border-t-[1px] border-solid border-silver-200" />
          </div>
          <div className="h-3 w-3 relative rounded-[50%] bg-royalblue mq750:w-full" />
          <div className="w-10 flex flex-col items-start justify-end pt-0 px-0 pb-[5px] box-border">
            <div className="w-[41px] h-px relative box-border border-t-[1px] border-solid border-silver-200" />
          </div>
          <div className="h-3 w-3 relative rounded-[50%] bg-royalblue mq750:w-full" />
          <div className="w-10 flex flex-col items-start justify-end pt-0 px-0 pb-[5px] box-border">
            <div className="w-[41px] h-px relative box-border border-t-[1px] border-solid border-silver-200" />
          </div>
          <div className="h-3 w-3 relative rounded-[50%] bg-royalblue mq750:w-full" />
          <div className="w-10 flex flex-col items-start justify-end pt-0 px-0 pb-[5px] box-border">
            <div className="w-[41px] h-px relative box-border border-t-[1px] border-solid border-silver-200" />
          </div>
          <div className="h-3 w-3 relative rounded-[50%] bg-royalblue mq750:w-full" />
          <div className="w-10 flex flex-col items-start justify-end pt-0 px-0 pb-[5px] box-border">
            <div className="w-[41px] h-px relative box-border border-t-[1px] border-solid border-silver-200" />
          </div>
          <div className="h-3 w-3 relative rounded-[50%] bg-royalblue mq750:w-full" />
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
        <h1 className="m-0 self-stretch relative text-inherit leading-[36px] font-bold font-inherit mq450:text-lgi mq450:leading-[22px] mq1025:text-7xl mq1025:leading-[29px]">
          Credit Requirements
        </h1>
        <div className="self-stretch relative text-base leading-[22px] font-light font-roboto text-dimgray">
          Please specify your credit requirements, including the desired credit
          amount and the purpose of the credit. This will help us assess your
          needs accurately and offer the most suitable financial solutions.
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
          <FrameComponent1 fieldLabel="Enter Account Holder Name" />
          <FrameComponent1 fieldLabel="Bank Account" />
          <FrameComponent1 fieldLabel="Rewrite Bank Account Number" />
          <FrameComponent1 fieldLabel="IFSC Code of BANK Account" />
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
            <div className="self-stretch relative leading-[20px]">
              Capital Requirements
            </div>
            <div className="self-stretch flex flex-col items-end justify-start gap-[8px] max-w-full">
              <div className="w-[376px] flex flex-row items-start justify-start gap-[16px] max-w-full">
                <input
                  className="[border:none] [outline:none] font-roboto text-lg bg-[transparent] flex-1 relative leading-[28px] text-darkgray text-left inline-block min-w-[150px] max-w-[calc(100%_-_40px)] p-0"
                  type="text"
                />
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  alt=""
                  src="/icon-2.svg"
                />
              </div>
              <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gainsboro-200" />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start max-w-full text-lg text-textcolor-default font-body-small">
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
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/close.svg"
                  />
                  <div className="h-[22px] hidden flex-row items-center justify-center text-center text-xs">
                    <div className="self-stretch bg-bgcolor-lightprimary flex flex-row items-center justify-center py-spacing-xxxs px-spacing-xxs gap-[4px]">
                      <img
                        className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/info.svg"
                      />
                      <div className="self-stretch relative leading-[18px] font-semibold flex items-center justify-center">
                        Badges
                      </div>
                      <img
                        className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
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
                className="self-stretch relative max-w-full overflow-hidden max-h-full hidden"
                alt=""
                src="/divider1.svg"
              />
            </div>
          </div>
          <input
            className="self-stretch h-[84px] rounded-radi-mlg bg-bgcolor-light box-border flex flex-col items-center justify-center py-3 px-spacing-lg border-[1px] border-dashed border-strokecolor-primary"
            type="file"
          />
          <div className="self-stretch h-5 relative leading-[20px] font-body-small text-textcolor-secdefault inline-block overflow-hidden text-ellipsis whitespace-nowrap shrink-0">
            Only support pdf
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[8px] text-base text-black font-roboto">
          <img
            className="h-8 w-8 relative rounded-md overflow-hidden shrink-0"
            alt=""
            src="/buttoniconghostoff.svg"
          />
          <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
            <div className="relative leading-[24px] inline-block min-w-[83px]">
              I agree with
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0 text-royalblue">
            <div className="relative leading-[24px] font-medium inline-block min-w-[94px]">
              Terms of use
            </div>
          </div>
        </div>
        <button className="cursor-pointer [border:none] py-3 px-6 bg-royalblue w-32 rounded flex flex-row items-start justify-start box-border gap-[8px] hover:bg-cornflowerblue">
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
  );
};

export default FrameComponent2;
