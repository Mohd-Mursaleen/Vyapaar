import FrameComponent2 from "../components/FrameComponent21";

const Screen3 = () => {
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
      <div className="h-[1262px] w-[848px] relative max-w-full mq750:h-auto mq750:min-h-[1262]">
        <FrameComponent2 />
        <img
          className="absolute top-[0px] left-[800px] w-12 h-12 overflow-hidden"
          loading="lazy"
          alt=""
          src="/icon-3.svg"
        />
      </div>
    </div>
  );
};

export default Screen3;
