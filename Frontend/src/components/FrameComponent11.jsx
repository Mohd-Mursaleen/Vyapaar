const FrameComponent1 = ({ fieldLabel }) => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-left text-sm text-gray-300 font-poppins">
      <div className="self-stretch relative leading-[20px]">{fieldLabel}</div>
      <input
        className="w-full [border:none] [outline:none] bg-[transparent] self-stretch h-7 flex flex-row items-start justify-start py-0 px-4 box-border font-roboto text-lg text-darkgray min-w-[235px]"
        placeholder="New York"
        type="text"
      />
      <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gainsboro-200" />
    </div>
  );
};

export default FrameComponent1;
