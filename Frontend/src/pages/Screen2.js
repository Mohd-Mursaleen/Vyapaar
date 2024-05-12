import { useContext } from "react";
import { DataContext } from "../App";
import { useNavigate } from "react-router-dom";
const Screen2 = () => {
  // const location = useLocation();
  const { data } = useContext(DataContext);
  const number = data.phoneNumber;
  const navigateTo = useNavigate();
  // console.log(number);
  return (
    <div className="w-full relative bg-bgcolor-light overflow-hidden flex flex-row items-start justify-between pt-11 pb-96 pr-11 pl-[88px] box-border tracking-[normal] leading-[normal] gap-[20px] text-left text-base text-gray-200 font-raleway mq450:pl-5 mq450:box-border mq800:flex-wrap mq800:pl-11 mq800:pr-[22px] mq800:box-border">
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
          <div className="self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full mq450:gap-[16px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-gray-200">
              <h1 className="m-0 self-stretch relative text-inherit leading-[36px] font-bold font-inherit mq450:text-lgi mq450:leading-[22px] mq800:text-7xl mq800:leading-[29px]">
                Registration
              </h1>
              <div className="self-stretch relative text-base leading-[22px] font-light font-roboto text-dimgray">
                <p className="m-0">{`Fill in the registration data. It will take a couple of minutes. `}</p>
                <p className="m-0">All you need is a phone number and e-mail</p>
              </div>
            </div>
            <div className="self-stretch rounded-lg box-border flex flex-row items-end justify-start py-3.5 px-[15px] gap-[16px] max-w-full text-lg font-roboto border-[1px] border-solid border-gainsboro-200 mq450:flex-wrap">
              <div className="flex-1 flex flex-col items-start justify-start gap-[2px] min-w-[250px] max-w-full">
                <div className="self-stretch relative leading-[28px] whitespace-nowrap">
                  {number ? number : "+91 8968033002"}
                </div>
                <div className="self-stretch relative text-smi leading-[18px] font-poppins text-dimgray">
                  Number not confirmed yet
                </div>
              </div>
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/icon1.svg"
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-smi">
              <div className="w-[296px] relative leading-[20px] flex items-center">
                Confirmation code
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[16px] text-xs text-dimgray mq450:flex-wrap">
                <div className="flex-1 flex flex-col items-start justify-start gap-[32px] min-w-[192px] mq450:gap-[16px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[7.5px]">
                    <div className="w-[113px] flex flex-row items-start justify-start py-0 px-2 box-border">
                      <div className="relative [border:none] bg-[transparent] h-7 flex-1 flex flex-row items-start justify-start min-w-[58px]">
                        <input
                          className="[outline:none] [border:none] w-full h-full [background:transparent] relative z-[3]"
                          type="text"
                        />
                        <div className="w-[1%] h-6 absolute bg-dimgray z-[1] left-[0px] top-[2px] [pointer-events:none]" />
                      </div>
                    </div>
                    <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-royalblue" />
                    <div className="self-stretch relative leading-[16px]">
                      Confirm phone number with code from sms message
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[32px] text-base text-black font-roboto">
                    <div className="flex flex-row items-start justify-start gap-[8px]">
                      <img
                        className="relative w-8 h-8 overflow-hidden rounded-md shrink-0"
                        alt=""
                        src="/buttoniconghostoff.svg"
                      />
                      <div className="flex flex-col items-start justify-start px-0 pt-1 pb-0">
                        <div className="relative leading-[24px] inline-block min-w-[83px]">
                          I agree with
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start px-0 pt-1 pb-0 text-royalblue">
                        <div className="relative leading-[24px] font-medium inline-block min-w-[94px]">
                          Terms of use
                        </div>
                      </div>
                    </div>
                    <button
                      className="cursor-pointer py-2.5 px-[23px] bg-bgcolor-light rounded flex flex-row items-start justify-start border-[1px] border-solid border-silver-100 hover:bg-gainsboro-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-100"
                      onClick={() => {
                        navigateTo("/screen3");
                      }}
                    >
                      <div className="relative text-base leading-[24px] capitalize font-medium font-roboto text-gray-200 text-center inline-block min-w-[58px]">
                        Confirm
                      </div>
                    </button>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start px-0 pt-1 pb-0 text-base text-center text-royalblue font-roboto">
                  <div className="rounded flex flex-row items-start justify-start py-1 px-4 gap-[8px]">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                      loading="lazy"
                      alt=""
                      src="/icon-11.svg"
                    />
                    <div className="relative leading-[24px] font-medium inline-block min-w-[80px]">
                      Send again
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="relative w-12 h-12 overflow-hidden shrink-0 opacity-0"
        loading="lazy"
        alt=""
        src="/icon-3.svg"
      />
    </div>
  );
};

export default Screen2;
