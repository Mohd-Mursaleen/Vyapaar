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
          <form className="m-0 self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full mq450:gap-[16px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
              <h1 className="m-0 self-stretch relative text-13xl leading-[36px] font-bold font-poppins text-gray-200 text-left mq450:text-lgi mq450:leading-[22px] mq800:text-7xl mq800:leading-[29px]">
                Documents Upload
              </h1>
              <div className="self-stretch relative text-base leading-[22px] font-light font-roboto text-dimgray text-left">
                <p className="m-0">{`Fill in the registration data. It will take a couple of minutes. `}</p>
                <p className="m-0">All you need is a phone number and e-mail</p>
              </div>
            </div>
            <div className="self-stretch rounded-lg box-border flex flex-col items-center justify-center py-0.5 px-0 max-w-full border-[1px] border-solid border-gainsboro-200">
              <div className="self-stretch rounded-radi-xxl flex flex-col items-start justify-center py-[4.5px] px-6 box-border gap-[4px] max-w-full">
                <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                  <div className="self-stretch flex flex-col items-center justify-center gap-[12px] max-w-full">
                    <div className="self-stretch flex flex-row items-center justify-start gap-[6px] max-w-full mq450:flex-wrap">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[2px] min-w-[246px] max-w-full">
                        <b className="self-stretch relative text-lg tracking-[-0.2px] leading-[26px] font-body-small text-textcolor-default text-left">
                          Upload Adhar Card
                        </b>
                        <div className="self-stretch h-5 relative text-sm leading-[20px] font-body-small text-textcolor-secdefault text-left inline-block overflow-hidden text-ellipsis whitespace-nowrap shrink-0">
                          Upload Both Front and Back Side
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-start gap-[6px]">
                        <div className="w-[63px] relative text-base leading-[22px] font-body-small text-strokecolor-primary text-left hidden">
                          Text link
                        </div>
                        <div className="w-11 relative text-base leading-[22px] font-semibold font-body-small text-textcolor-default text-left hidden">
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
                        <div className="h-[22px] hidden flex-row items-center justify-center">
                          <div className="self-stretch bg-bgcolor-lightprimary flex flex-row items-center justify-center py-spacing-xxxs px-spacing-xxs gap-[4px]">
                            <img
                              className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                              alt=""
                              src="/info.svg"
                            />
                            <div className="self-stretch relative text-xs leading-[18px] font-semibold font-body-small text-strokecolor-primary text-center flex items-center justify-center">
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
                <input
                  className="self-stretch rounded-radi-mlg bg-bgcolor-light flex flex-col items-center justify-center py-2.5 px-[23px] border-[1px] border-dashed border-strokecolor-primary"
                  type="file"
                />
                <div className="self-stretch h-5 relative text-sm leading-[20px] font-body-small text-textcolor-secdefault text-left inline-block overflow-hidden text-ellipsis whitespace-nowrap shrink-0">{`Only support .jpg, .png `}</div>
              </div>
            </div>
            <div className="self-stretch rounded-lg box-border flex flex-col items-center justify-center py-0.5 px-0 max-w-full border-[1px] border-solid border-gainsboro-200">
              <div className="self-stretch rounded-radi-xxl flex flex-col items-start justify-center py-[4.5px] px-6 box-border gap-[4px] max-w-full">
                <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                  <div className="self-stretch flex flex-col items-center justify-center gap-[12px] max-w-full">
                    <div className="self-stretch flex flex-row items-center justify-start gap-[6px] max-w-full mq450:flex-wrap">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[2px] min-w-[246px] max-w-full">
                        <b className="self-stretch relative text-lg tracking-[-0.2px] leading-[26px] font-body-small text-textcolor-default text-left">
                          Upload Pan Card
                        </b>
                        <div className="self-stretch h-5 relative text-sm leading-[20px] font-body-small text-textcolor-secdefault text-left inline-block overflow-hidden text-ellipsis whitespace-nowrap shrink-0">
                          Upload Both Front and Back Side
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-start gap-[6px]">
                        <div className="w-[63px] relative text-base leading-[22px] font-body-small text-strokecolor-primary text-left hidden">
                          Text link
                        </div>
                        <div className="w-11 relative text-base leading-[22px] font-semibold font-body-small text-textcolor-default text-left hidden">
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
                        <div className="h-[22px] hidden flex-row items-center justify-center">
                          <div className="self-stretch bg-bgcolor-lightprimary flex flex-row items-center justify-center py-spacing-xxxs px-spacing-xxs gap-[4px]">
                            <img
                              className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                              alt=""
                              src="/info.svg"
                            />
                            <div className="self-stretch relative text-xs leading-[18px] font-semibold font-body-small text-strokecolor-primary text-center flex items-center justify-center">
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
                  className="self-stretch rounded-radi-mlg bg-bgcolor-light flex flex-col items-center justify-center py-2.5 px-[23px] border-[1px] border-dashed border-strokecolor-primary"
                  type="file"
                />
                <input
                  className="self-stretch rounded-radi-mlg bg-bgcolor-light flex flex-col items-center justify-center py-2.5 px-[23px] border-[1px] border-dashed border-strokecolor-primary"
                  type="file"
                />
                <div className="self-stretch h-5 relative text-sm leading-[20px] font-body-small text-textcolor-secdefault text-left inline-block overflow-hidden text-ellipsis whitespace-nowrap shrink-0">{`Only support .jpg, .png `}</div>
              </div>
            </div>
            <button className="cursor-pointer [border:none] py-3 px-8 bg-royalblue rounded flex flex-row items-center justify-center whitespace-nowrap hover:bg-cornflowerblue">
              <div className="relative text-base leading-[24px] capitalize font-medium font-poppins text-bgcolor-light text-center inline-block min-w-[36px]">{`Next `}</div>
            </button>
          </form>
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
