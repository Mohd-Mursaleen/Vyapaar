import Notification1 from "./Notification1";

const Step = () => {
  return (
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
      <Notification1 titleSection="Upload Adhar Card" />
      <Notification1 titleSection="Upload Pan Card" manyUploadHeight="unset" />
      <button className="cursor-pointer [border:none] py-3 px-8 bg-royalblue rounded flex flex-row items-center justify-center whitespace-nowrap hover:bg-cornflowerblue">
        <div className="relative text-base leading-[24px] capitalize font-medium font-poppins text-bgcolor-light text-center inline-block min-w-[36px]">{`Next `}</div>
      </button>
    </form>
  );
};

export default Step;
