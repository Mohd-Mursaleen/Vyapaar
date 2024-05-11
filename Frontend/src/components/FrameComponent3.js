import Notification1 from "./Notification11";

const FrameComponent = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full text-left text-13xl text-gray-300 font-poppins mq450:gap-[16px]">
      <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-gray-200">
        <h2 className="m-0 self-stretch relative text-inherit leading-[36px] font-bold font-inherit mq450:text-lgi mq450:leading-[22px] mq800:text-7xl mq800:leading-[29px]">
          Profile info
        </h2>
        <div className="self-stretch relative text-base leading-[22px] font-light font-roboto text-dimgray">
          Kindly provide the owner's details, including full name, contact
          information, and role in the business. This information is essential
          for our records and further communication
        </div>
      </div>
      <div className="self-stretch rounded-lg box-border flex flex-col items-start justify-start pt-[30px] px-[31px] pb-[29px] gap-[16px] max-w-full text-sm border-[1px] border-solid border-gainsboro-200 mq450:pt-5 mq450:pb-5 mq450:box-border">
        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-4 gap-[2px] text-xl text-gray-200">
          <div className="self-stretch relative leading-[28px] font-semibold mq450:text-base mq450:leading-[22px]">
            Personal data
          </div>
          <div className="self-stretch relative text-xs leading-[16px] font-light text-dimgray">
            Specify exactly as in your passport
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[15px] gap-[16px]">
          <div className="self-stretch relative leading-[20px]">First name</div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
            <input
              className="w-full [border:none] [outline:none] bg-[transparent] self-stretch h-7 flex flex-row items-start justify-start py-0 px-4 box-border font-roboto text-lg text-gray-300 min-w-[235px]"
              placeholder="Alexander"
              type="text"
            />
            <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gainsboro-200" />
          </div>
        </div>
        <div className="self-stretch relative leading-[20px]">Second name</div>
        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[15px] box-border gap-[8px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-4 box-border max-w-full">
            <textarea className="[border:none] bg-[transparent] font-roboto text-lg [outline:none] h-7 flex-1 relative leading-[28px] text-gray-300 text-left flex items-center max-w-full" />
          </div>
          <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gainsboro-200" />
        </div>
        <input
          className="cursor-pointer m-0 self-stretch flex flex-col items-start justify-start max-w-full"
          type="radio"
        />
      </div>
      <Notification1 captionText="Adhar Card Number" />
      <Notification1
        captionText="Pan Card Number"
        propDisplay="inline-block"
        propMinWidth="117px"
      />
      <div className="flex flex-row items-start justify-start gap-[32px] mq450:gap-[16px]">
        <button className="cursor-pointer py-2.5 pr-[23px] pl-[31px] bg-royalblue rounded flex flex-row items-start justify-start gap-[8px] whitespace-nowrap border-[1px] border-solid border-silver-100 hover:bg-cornflowerblue hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-100">
          <div className="relative text-base leading-[24px] capitalize font-medium font-poppins text-bgcolor-light text-center inline-block min-w-[63px]">
            Go next
          </div>
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            alt=""
            src="/icon-4.svg"
          />
        </button>
        <button className="cursor-pointer py-2.5 pr-[23px] pl-[31px] bg-bgcolor-light rounded flex flex-row items-start justify-start gap-[8px] border-[1px] border-solid border-silver-100 hover:bg-gainsboro-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-100">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 object-contain min-h-[24px]"
            alt=""
            src="/icon-5.svg"
          />
          <div className="relative text-base leading-[24px] capitalize font-medium font-poppins text-gray-200 text-center inline-block min-w-[40px]">
            Back
          </div>
        </button>
      </div>
    </div>
  );
};

export default FrameComponent;
