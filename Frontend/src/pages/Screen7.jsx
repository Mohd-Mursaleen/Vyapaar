import FrameComponent2 from "../components/FrameComponent2";

const Screen7 = () => {
  return (
    // Outermost container to cover the entire viewport height and center content vertically
    <div className="flex flex-row w-full py-12 px-12 w-full  bg-bgcolor-light">
      <div className="flex flex-row items-start justify-between w-full  ">
        {" "}
        {/* max-w-md to control the width of the form */}
        <div className="flex items-center  mb-4">
          {" "}
          {/* Company logo and name container */}
          <img
            className="h-6 w-6" // Logo image
            loading="lazy"
            alt="Company Logo"
            src="/logo.svg"
          />
          <div>
            <b className="text-base uppercase tracking-wide leading-none">
              vYapaar
            </b>
          </div>
        </div>
        <div className="max-w-lg">
          <FrameComponent2 />{" "}
        </div>
        {/* Form component centered and width controlled by max-w-md */}
        <img
          className="mt-4 w-12 h-12 opacity-0" // Additional icon
          loading="lazy"
          alt="Icon"
          src="/icon-3.svg"
        />
      </div>
    </div>
  );
};

export default Screen7;
