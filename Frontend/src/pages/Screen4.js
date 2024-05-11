const Screen4 = () => {
  return (
    <div className="w-full relative bg-bgcolor-light overflow-hidden flex flex-row items-start justify-between pt-11 pb-[370px] pr-11 pl-[88px] box-border tracking-[normal] leading-[normal] gap-[20px] text-left text-base text-gray-200 font-raleway mq450:pl-5 mq450:box-border mq800:flex-wrap mq800:pl-11 mq800:pr-[22px] mq800:box-border">
      <div className="flex flex-row items-start justify-start gap-[12px]">
        <img
          className="h-6 w-6 relative min-h-[24px]"
          loading="lazy"
          alt=""
          src="/logo.svg"
        />

        <b className="relative tracking-[1px] leading-[18px] uppercase inline-block min-w-[80px]">
          vYapaar
        </b>
      </div>
      <div className="w-[456px] flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border max-w-full text-13xl font-poppins">
        <div className="self-stretch flex flex-col items-start justify-start gap-[80px] max-w-full mq450:gap-[40px]">
          <div className="flex flex-row items-end justify-start py-0 pr-9 pl-0 gap-[8px] mq675:flex-wrap">
            <div className="h-3 w-3 relative rounded-[50%] bg-royalblue mq675:w-full" />
            <div className="w-10 flex flex-col items-start justify-end pt-0 px-0 pb-[5px] box-border">
              <div className="w-[41px] h-px relative box-border border-t-[1px] border-solid border-silver-200" />
            </div>
            <div className="h-3 w-3 relative rounded-[50%] bg-royalblue box-border border-[0px] border-solid border-silver-200 mq675:w-full" />
            <div className="w-10 flex flex-col items-start justify-end pt-0 px-0 pb-[5px] box-border">
              <div className="w-[41px] h-px relative box-border border-t-[1px] border-solid border-silver-200" />
            </div>
            <div className="h-3 w-3 relative rounded-[50%] bg-royalblue box-border border-[0px] border-solid border-silver-200 mq675:w-full" />
            <div className="w-10 flex flex-col items-start justify-end pt-0 px-0 pb-[5px] box-border">
              <div className="w-[41px] h-px relative box-border border-t-[1px] border-solid border-silver-200" />
            </div>
            <div className="h-3 w-3 relative rounded-[50%] bg-bgcolor-light box-border border-[0px] border-solid border-silver-200 mq675:w-full" />
            <div className="w-10 flex flex-col items-start justify-end pt-0 px-0 pb-[5px] box-border">
              <div className="w-[41px] h-px relative box-border border-t-[1px] border-solid border-silver-200" />
            </div>
            <div className="h-3 w-3 relative rounded-[50%] bg-bgcolor-light box-border border-[0px] border-solid border-silver-200 mq675:w-full" />
            <div className="w-10 flex flex-col items-start justify-end pt-0 px-0 pb-[5px] box-border">
              <div className="w-[41px] h-px relative box-border border-t-[1px] border-solid border-silver-200" />
            </div>
            <div className="h-3 w-3 relative rounded-[50%] bg-bgcolor-light box-border border-[0px] border-solid border-silver-200 mq675:w-full" />
            <div className="w-10 flex flex-col items-start justify-end pt-0 px-0 pb-[5px] box-border">
              <div className="w-[41px] h-px relative box-border border-t-[1px] border-solid border-silver-200" />
            </div>
            <div className="h-3 w-3 relative rounded-[50%] bg-bgcolor-light box-border border-[0px] border-solid border-silver-200 mq675:w-full" />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full mq450:gap-[16px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
              <h1 className="m-0 self-stretch relative text-inherit leading-[36px] font-bold font-inherit mq450:text-lgi mq450:leading-[22px] mq800:text-7xl mq800:leading-[29px]">
                Business info
              </h1>
              <div className="self-stretch relative text-base leading-[22px] font-light font-roboto text-dimgray">
                Please provide details about your business. This includes your
                business name, type, and operational address. These details will
                help us understand your business better and tailor our services
                to meet your specific needs.
              </div>
            </div>
            <div className="self-stretch rounded-lg box-border flex flex-col items-start justify-start pt-[30px] px-[31px] pb-[29px] gap-[16px] max-w-full text-sm text-gray-300 border-[1px] border-solid border-gainsboro-200 mq800:pt-5 mq800:pb-5 mq800:box-border">
              <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-4 gap-[2px] text-xl text-gray-200">
                <h3 className="m-0 self-stretch relative text-inherit leading-[28px] font-semibold font-inherit mq450:text-base mq450:leading-[22px]">
                  Business address
                </h3>
                <div className="self-stretch relative text-xs leading-[16px] font-light text-dimgray">
                  Used for details
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-4 gap-[8px]">
                <div className="self-stretch relative leading-[20px]">
                  Business Name *
                </div>
                <input
                  className="[border:none] [outline:none] font-roboto text-lg bg-[transparent] h-7 flex-1 relative leading-[28px] text-gray-300 text-left flex items-center min-w-[216px] max-w-full p-0"
                  placeholder="Gupta Sweets"
                  type="text"
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-4 gap-[8px]">
                <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[15px] box-border gap-[8px] max-w-full">
                  Type of business *
                </div>
                <input
                  className="[border:none] [outline:none] font-roboto text-lg bg-[transparent] h-7 flex-1 relative leading-[28px] text-gray-300 text-left flex items-center min-w-[216px] max-w-full p-0"
                  type="text"
                  placeholder="Food"
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-4 gap-[8px]">
                <div className="self-stretch relative leading-[20px]">{`GST Number `}</div>
                <input
                  className="[border:none] [outline:none] font-roboto text-lg bg-[transparent] h-7 flex-1 relative leading-[28px] text-gray-300 text-left flex items-center min-w-[216px] max-w-full p-0"
                  placeholder="214123515314"
                  type="text"
                />
              </div>
              <div className="self-stretch relative leading-[20px]">
                Address *
              </div>
              <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[15px] box-border gap-[8px] max-w-full">
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-4 box-border max-w-full">
                  <input
                    className="[border:none] [outline:none] font-roboto text-lg bg-[transparent] h-7 flex-1 relative leading-[28px] text-gray-300 text-left flex items-center min-w-[216px] max-w-full p-0"
                    placeholder="47 W 13th St"
                    type="text"
                  />
                </div>
                <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gainsboro-200" />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[15px] box-border gap-[16px] max-w-full">
                <div className="self-stretch relative leading-[20px]">
                  City *
                </div>
                <div className="self-stretch flex flex-col items-end justify-start gap-[8px] max-w-full">
                  <div className="w-[376px] flex flex-row items-start justify-start gap-[16px] max-w-full">
                    <input
                      className="[border:none] [outline:none] font-roboto text-lg bg-[transparent] flex-1 relative leading-[28px] text-darkgray text-left inline-block min-w-[150px] max-w-[calc(100%_-_40px)] p-0"
                      placeholder="New York"
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
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                <div className="self-stretch flex flex-row items-start justify-start gap-[32px] mq450:flex-wrap mq450:gap-[16px]">
                  <div className="flex-1 relative leading-[20px] inline-block min-w-[117px]">
                    Yearly Revenue
                  </div>
                  <div className="flex-1 relative leading-[20px] inline-block min-w-[117px]">
                    Zip code
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-lg font-roboto">
                  <div className="w-[300px] flex flex-row items-start justify-start py-0 px-4 box-border">
                    <div className="flex-1 flex flex-row items-start justify-between min-w-[161px] gap-[20px] mq450:flex-wrap">
                      <div className="flex flex-row items-start justify-start gap-[4px]">
                        <div className="relative leading-[28px] inline-block min-w-[51px]">
                          10011
                        </div>
                        <div className="h-6 w-px relative bg-dimgray" />
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[4px]">
                        <input
                          className="[border:none] [outline:none] font-roboto text-lg bg-[transparent] relative leading-[28px] text-gray-300 text-left inline-block min-w-[51px] p-0"
                          placeholder="10011"
                          type="text"
                        />
                        <div className="h-6 w-px relative bg-dimgray" />
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[32px] mq450:flex-wrap mq450:gap-[16px]">
                    <div className="h-px flex-1 relative box-border min-w-[117px] border-t-[1px] border-solid border-royalblue" />
                    <div className="h-px flex-1 relative box-border min-w-[117px] border-t-[1px] border-solid border-royalblue" />
                  </div>
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
      </div>
      <img
        className="h-12 w-12 relative overflow-hidden shrink-0"
        loading="lazy"
        alt=""
        src="/icon-3.svg"
      />
    </div>
  );
};

export default Screen4;
