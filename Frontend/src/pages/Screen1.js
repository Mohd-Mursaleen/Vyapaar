const Screen1 = () => {
  return (
    <div className="w-full relative bg-bgcolor-light overflow-hidden flex flex-row items-start justify-between pt-11 pb-[390px] pr-11 pl-[88px] box-border tracking-[normal] leading-[normal] gap-[20px] text-left text-base text-gray-200 font-raleway mq450:pl-5 mq450:box-border mq800:flex-wrap mq800:pl-11 mq800:pr-[22px] mq800:box-border">
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
      <div className="w-[456px] flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border max-w-full text-13xl text-gray-300 font-poppins">
        <div className="self-stretch flex flex-col items-start justify-start gap-[80px] max-w-full mq450:gap-[40px]">
          <div className="flex flex-row items-end justify-start py-0 pr-9 pl-0 gap-[8px] mq675:flex-wrap">
            <div className="h-3 w-3 relative rounded-[50%] bg-royalblue mq675:w-full" />
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
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-gray-200">
              <h1 className="m-0 self-stretch relative text-inherit leading-[36px] font-bold font-inherit mq450:text-lgi mq450:leading-[22px] mq800:text-7xl mq800:leading-[29px]">
                Registration Or Login
              </h1>
              <div className="self-stretch relative text-base leading-[22px] font-light font-roboto text-dimgray">
                Please complete the registration form. This quick process should
                only take a few minutes. You will need to provide your phone
                number and some additional information.
              </div>
            </div>
            <div className="self-stretch rounded-lg bg-whitesmoke flex flex-row items-start justify-start p-4 box-border gap-[16px] max-w-full text-smi mq450:flex-wrap">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/icon.svg"
              />
              <div className="flex-1 relative leading-[18px] inline-block min-w-[224px] max-w-full">
                We take privacy issues seriously. You can be sure that your
                personal data is securely protected.
              </div>
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/icon-1.svg"
              />
            </div>
            <div className="self-stretch rounded-lg box-border flex flex-col items-start justify-start pt-[30px] px-[31px] pb-[29px] gap-[40px] max-w-full text-sm border-[1px] border-solid border-gainsboro-200 mq450:gap-[20px]">
              <div className="self-stretch relative leading-[20px]">
                Enter your phone number
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full text-lg font-roboto">
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-4 box-border max-w-full">
                  <div className="flex-1 flex flex-row items-start justify-start gap-[16px] max-w-full mq450:flex-wrap">
                    <div className="relative leading-[28px] inline-block min-w-[32px] whitespace-nowrap">
                      +91
                    </div>
                    <div className="flex flex-col items-start justify-start py-0 pr-2 pl-0">
                      <img
                        className="w-6 h-6 relative overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src="/icon-2.svg"
                      />
                    </div>
                    <input
                      className="[border:none] [outline:none] font-roboto text-lg bg-[transparent] h-7 flex-1 relative leading-[28px] text-gray-300 text-left flex items-center min-w-[172px] p-0"
                      placeholder="8968033002"
                      type="text"
                    />
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[16px] mq450:flex-wrap">
                  <div className="h-px w-20 relative box-border border-t-[1px] border-solid border-gainsboro-200" />
                  <div className="h-px flex-1 relative box-border min-w-[192px] border-t-[1px] border-solid border-gainsboro-200" />
                </div>
              </div>
            </div>
            <button className="cursor-pointer py-2.5 px-[23px] bg-bgcolor-light rounded flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-silver-100 hover:bg-gainsboro-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-100">
              <div className="relative text-base leading-[24px] capitalize font-medium font-poppins text-gray-200 text-center inline-block min-w-[89px]">
                Send code
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

export default Screen1;
