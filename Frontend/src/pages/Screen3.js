import Step from "../components/Step";

const Screen3 = () => {
  return (
    <div className="w-full relative bg-bgcolor-light overflow-hidden flex flex-row items-start justify-between pt-11 pb-[493px] pr-11 pl-[88px] box-border tracking-[normal] leading-[normal] gap-[20px] text-left text-base text-gray-200 font-raleway mq450:pl-5 mq450:box-border mq800:flex-wrap mq800:pl-11 mq800:pr-[22px] mq800:box-border">
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
      <div className="w-[456px] flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[80px] max-w-full mq450:gap-[40px]">
          <div className="flex flex-row items-end justify-start py-0 pr-9 pl-0 gap-[8px] mq675:flex-wrap">
            <div className="h-3 w-3 relative rounded-[50%] bg-royalblue mq675:w-full" />
            <div className="w-10 flex flex-col items-start justify-end pt-0 px-0 pb-[5px] box-border">
              <div className="w-[41px] h-px relative box-border border-t-[1px] border-solid border-silver-200" />
            </div>
            <div className="h-3 w-3 relative rounded-[50%] bg-royalblue mq675:w-full" />
            <div className="w-10 flex flex-col items-start justify-end pt-0 px-0 pb-[5px] box-border">
              <div className="w-[41px] h-px relative box-border border-t-[1px] border-solid border-silver-200" />
            </div>
            <div className="h-3 w-3 relative rounded-[50%] bg-royalblue mq675:w-full" />
            <div className="w-10 flex flex-col items-start justify-end pt-0 px-0 pb-[5px] box-border">
              <div className="w-[41px] h-px relative box-border border-t-[1px] border-solid border-silver-200" />
            </div>
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
          </div>
          <Step />
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

export default Screen3;
