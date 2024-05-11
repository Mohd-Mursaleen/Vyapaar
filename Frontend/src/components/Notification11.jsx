import { useMemo } from "react";

const Notification1 = ({ captionText, propDisplay, propMinWidth }) => {
  const captionTextStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  return (
    <div className="self-stretch rounded-lg flex flex-col items-start justify-start py-3.5 px-[15px] gap-[2px] text-left text-lg text-gray-300 font-roboto border-[1px] border-solid border-gainsboro-200">
      <div className="self-stretch relative leading-[28px]">123-45-678</div>
      <div className="flex flex-row items-start justify-start gap-[4px] text-smi text-dimgray font-poppins">
        <img
          className="h-[18px] w-[18px] relative overflow-hidden shrink-0 min-h-[18px]"
          loading="lazy"
          alt=""
          src="/icon-21.svg"
        />
        <div className="relative leading-[18px]" style={captionTextStyle}>
          {captionText}
        </div>
      </div>
    </div>
  );
};

export default Notification1;
