import { useMemo } from "react";

const Notification1 = ({ titleSection, manyUploadHeight }) => {
  const manyUploadStyle = useMemo(() => {
    return {
      height: manyUploadHeight,
    };
  }, [manyUploadHeight]);

  return (
    <div className="self-stretch rounded-lg box-border flex flex-col items-center justify-center py-0.5 px-0 max-w-full text-left text-lg text-textcolor-default font-body-small border-[1px] border-solid border-gainsboro-200">
      <div className="self-stretch rounded-radi-xxl flex flex-col items-start justify-center py-[4.5px] px-6 box-border gap-[4px] max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start max-w-full">
          <div className="self-stretch flex flex-col items-center justify-center gap-[12px] max-w-full">
            <div className="self-stretch flex flex-row items-center justify-start gap-[6px] max-w-full mq450:flex-wrap">
              <div className="flex-1 flex flex-col items-start justify-start gap-[2px] min-w-[246px] max-w-full">
                <b className="self-stretch relative tracking-[-0.2px] leading-[26px]">
                  {titleSection}
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
          style={manyUploadStyle}
        />
        <input
          className="self-stretch rounded-radi-mlg bg-bgcolor-light flex flex-col items-center justify-center py-2.5 px-[23px] border-[1px] border-dashed border-strokecolor-primary"
          type="file"
        />
        <div className="self-stretch h-5 relative text-sm leading-[20px] text-textcolor-secdefault inline-block overflow-hidden text-ellipsis whitespace-nowrap shrink-0">{`Only support .jpg, .png `}</div>
      </div>
    </div>
  );
};

export default Notification1;
