const Step = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full text-left text-13xl text-gray-200 font-poppins mq450:gap-[16px]">
      <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
        <h1 className="m-0 self-stretch relative text-inherit leading-[36px] font-bold font-inherit mq450:text-lgi mq450:leading-[22px] mq800:text-7xl mq800:leading-[29px]">
          More Business info
        </h1>
        <div className="self-stretch relative text-base leading-[22px] font-light font-roboto text-dimgray">
          Please upload a recent bank statement for your business account. This
          document is crucial for verifying your financial information and
          processing your application swiftly.
        </div>
      </div>
      <div className="self-stretch rounded-lg box-border flex flex-col items-center justify-center py-0.5 px-0 max-w-full text-lg text-textcolor-default font-body-small border-[1px] border-solid border-gainsboro-200">
        <div className="self-stretch rounded-radi-xxl flex flex-col items-start justify-center py-[48.5px] px-6 box-border gap-[4px] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start max-w-full">
            <div className="self-stretch flex flex-col items-center justify-center gap-[12px] max-w-full">
              <div className="self-stretch flex flex-row items-center justify-start gap-[6px] max-w-full mq450:flex-wrap">
                <div className="flex-1 flex flex-col items-start justify-start gap-[2px] min-w-[246px] max-w-full">
                  <b className="self-stretch relative tracking-[-0.2px] leading-[26px]">
                    Upload Bank Statement
                  </b>
                  <div className="self-stretch h-5 relative text-sm leading-[20px] text-textcolor-secdefault inline-block overflow-hidden text-ellipsis whitespace-nowrap shrink-0">
                    Upload Both Front and Back Side
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
                src="/divider.svg"
              />
            </div>
          </div>
          <input
            className="self-stretch h-[84px] rounded-radi-mlg bg-bgcolor-light box-border flex flex-col items-center justify-center py-3 px-spacing-lg border-[1px] border-dashed border-strokecolor-primary"
            type="file"
          />
          <div className="self-stretch h-5 relative text-sm leading-[20px] text-textcolor-secdefault inline-block overflow-hidden text-ellipsis whitespace-nowrap shrink-0">
            Only support pdf
          </div>
        </div>
      </div>
      <button className="cursor-pointer py-2.5 pr-[23px] pl-[31px] bg-bgcolor-light rounded flex flex-row items-center justify-center gap-[8px] whitespace-nowrap border-[1px] border-solid border-silver-100 hover:bg-gainsboro-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-100">
        <div className="relative text-base leading-[24px] capitalize font-medium font-poppins text-gray-200 text-center inline-block min-w-[63px]">
          Go next
        </div>
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
          alt=""
          src="/icon2.svg"
        />
      </button>
    </div>
  );
};

export default Step;
