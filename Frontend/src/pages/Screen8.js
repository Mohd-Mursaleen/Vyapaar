const Screen4 = () => {
  return (
    <div className="w-full relative bg-bgcolor-light overflow-hidden flex flex-row items-start justify-between pt-11 pb-[730px] pr-11 pl-[88px] box-border leading-[normal] tracking-[normal] gap-[20px] text-left text-base text-gray-200 font-raleway mq450:pl-5 mq450:box-border mq800:flex-wrap mq800:pl-11 mq800:pr-[22px] mq800:box-border">
      <div className="flex flex-row items-center justify-start gap-[12px]">
        <img
          className="relative w-6 h-6"
          loading="lazy"
          alt=""
          src="/logo.svg"
        />
        <b className="relative tracking-[1px] leading-[18px] uppercase inline-block min-w-[80px]">
          vYapaar
        </b>
      </div>
      <div className="w-[456px] flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border max-w-full text-13xl font-poppins mq450:gap-[40px]">
        <div className="self-stretch flex flex-col items-start justify-start mq450:gap-[16px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
            <h1 className="m-0 self-stretch relative text-inherit leading-[36px] font-bold font-inherit mq450:text-lgi mq450:leading-[22px] mq800:text-7xl mq800:leading-[29px]">
              Application Review Underway
            </h1>
            <div className="self-stretch relative text-base leading-[22px] font-light font-roboto text-dimgray">
              Thank you, [Applicant’s Name], for submitting your application. We
              are now processing the information you provided regarding
              [Business Name]. Our review typically takes about 15 minutes. Once
              complete, we will notify you via message regarding the next steps.
              Should you have any questions in the meantime, please do not
              hesitate to contact us. We appreciate your patience and look
              forward to assisting you further.
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center">
        <img
          className="relative w-12 h-12 overflow-hidden opacity-0 shrink-0"
          loading="lazy"
          alt=""
          src="/icon-3.svg"
        />
      </div>
    </div>
  );
};

export default Screen4;
