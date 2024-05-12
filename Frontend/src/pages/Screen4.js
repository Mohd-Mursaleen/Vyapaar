import { DataContext } from "../App";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { toast } from "react-toastify";
const Screen4 = () => {
  const navigateTo = useNavigate();
  const [panCardNumber, setPanCardNumber] = useState("");
  const [name, setName] = useState("");
  const [aadharCardNumber, setAadharCardNumber] = useState("");
  const [aadharCardFrontURL, setAadharCardFrontURL] = useState("");
  const [aadharCardBackURL, setAadharCardBackURL] = useState("");
  const [panCard, setPanCard] = useState("");
  const { data, setData } = useContext(DataContext);
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form from submitting traditionally which causes page reload

    try {
      // Log and set data; assume setData is synchronous and just setting React state
      console.log("Submitting data...");
      setData((prevUrls) => ({
        ...prevUrls,
        accountHolderName: name,
        panCardURL: panCard,
        panCardNumber,
        aadharCardNumber,
        aadharCardFrontURL,
        aadharCardBackURL,
      }));

      // Here we assume you might have some asynchronous operation like API call
      // For example, let's assume you send this data to a backend server
      // await api.sendData({ panCardURL, aadharCardFront, aadharCardBack });

      // If everything succeeds, navigate to the next screen
      console.log("Navigation to next screen...");
      navigateTo("/screen5");
    } catch (error) {
      // Handle errors that might have occurred during set data or navigation
      console.error("Failed to process the form submission:", error);
      // Optionally set some state to show error message on UI
    }
  };

  const uploadGetLink = async (name) => {
    const toastId = toast.loading("Uploading Documents...");
    try {
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append("file", file); // 'file' is the key expected on the server side

      const resp = await axios.post(
        "http://localhost:4048/api/convert",
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.update(toastId, {
        render: "Document Uploaded",
        type: "success",
        isLoading: false,
        autoClose: 5000,
      });

      if (name === "setAadharCardFrontURL") {
        console.log(resp.data.url);
        const toastId = toast.loading("Verifying Aadhar Card...");
        setAadharCardFrontURL(resp.data.url);
        let url = resp.data.url;
        (async () => {
          const result = await axios.post(
            "http://localhost:4048/api/adharfront",
            { url: url }, // Encapsulate the URL within an object under a key, e.g., 'url'
            {
              withCredentials: true,
              headers: {
                "Content-Type": "application/json", // Change to 'application/json' if you are sending JSON data
              },
              timeout: 600000,
            }
          );
          let aadharCardNumber = result.data.result.aadharCardNumber;
          let accountHolderName = result.data.result.name;
          setName(accountHolderName);
          setAadharCardNumber(aadharCardNumber);

          toast.update(toastId, {
            render: "Aadhar Card Verified",
            type: "success",
            isLoading: false,
            autoClose: 5000,
          });
        })();

        // Further logic if needed
      }
      if (name === "setAadharCardBackURL") {
        setAadharCardBackURL(resp.data.url);
        console.log(resp.data.url);
        console.log(name);
        // Further logic if needed
      }
      if (name === "setPanCard") {
        console.log(resp.data.url);

        setPanCard(resp.data.url);
        const toastId = toast.loading("Verifying PanCard...");
        let url = resp.data.url;
        (async () => {
          const result = await axios.post(
            "http://localhost:4048/api/panCard",
            { url: url }, // Encapsulate the URL within an object under a key, e.g., 'url'
            {
              withCredentials: true,
              headers: {
                "Content-Type": "application/json", // Change to 'application/json' if you are sending JSON data
              },
              timeout: 600000,
            }
          );
          toast.update(toastId, {
            render: "PanCard Verified",
            type: "success",
            isLoading: false,
            autoClose: 5000,
          });
          let panCardNumber = result.data.result.panCard;
          setPanCardNumber(panCardNumber);
        })();
      }
    } catch (err) {
      console.error(err); // Log the error if something goes wrong
    }
  };

  // console.log(aadharCardFront);
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
          <form className="m-0 self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full mq450:gap-[16px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
              <h1 className="m-0 self-stretch relative text-13xl leading-[36px] font-bold font-poppins text-gray-200 text-left mq450:text-lgi mq450:leading-[22px] mq800:text-7xl mq800:leading-[29px]">
                Documents Upload
              </h1>
              <div className="self-stretch relative text-base leading-[22px] font-light font-roboto text-dimgray text-left">
                <p className="m-0">{`Fill in the registration data. It will take a couple of minutes. `}</p>
                <p className="m-0">
                  All you need is a pic of Your Aadhar and Pan Card
                </p>
              </div>
            </div>
            <div className="self-stretch rounded-lg box-border flex flex-col items-center justify-center py-0.5 px-0 max-w-full border-[1px] border-solid border-gainsboro-200">
              <div className="self-stretch rounded-radi-xxl flex flex-col items-start justify-center py-[4.5px] px-6 box-border gap-[4px] max-w-full">
                <div className="flex flex-col items-start self-stretch justify-start max-w-full">
                  <div className="self-stretch flex flex-col items-center justify-center gap-[12px] max-w-full">
                    <div className="self-stretch flex flex-row items-center justify-start gap-[6px] max-w-full mq450:flex-wrap">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[2px] min-w-[246px] max-w-full">
                        <b className="self-stretch relative text-lg tracking-[-0.2px] leading-[26px] font-body-small text-textcolor-default text-left">
                          Upload Aadhar Card
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
                          className="relative w-6 h-6 overflow-hidden shrink-0"
                          loading="lazy"
                          alt=""
                          src="/close.svg"
                        />
                        <div className="h-[22px] hidden flex-row items-center justify-center">
                          <div className="self-stretch bg-bgcolor-lightprimary flex flex-row items-center justify-center py-spacing-xxxs px-spacing-xxs gap-[4px]">
                            <img
                              className="relative hidden w-4 h-4 overflow-hidden shrink-0"
                              alt=""
                              src="/info.svg"
                            />
                            <div className="self-stretch relative text-xs leading-[18px] font-semibold font-body-small text-strokecolor-primary text-center flex items-center justify-center">
                              Badges
                            </div>
                            <img
                              className="relative hidden w-4 h-4 overflow-hidden shrink-0"
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
                      className="relative self-stretch hidden max-w-full max-h-full overflow-hidden"
                      alt=""
                      src="/divider.svg"
                    />
                  </div>
                </div>
                <input
                  className="self-stretch h-[84px] rounded-radi-mlg bg-bgcolor-light box-border flex flex-col items-center justify-center py-3 px-spacing-lg border-[1px] border-dashed border-strokecolor-primary"
                  type="file"
                  onChange={() => {
                    uploadGetLink("setAadharCardFrontURL");
                  }}
                />
                <input
                  className="self-stretch rounded-radi-mlg bg-bgcolor-light flex flex-col items-center justify-center py-2.5 px-[23px] border-[1px] border-dashed border-strokecolor-primary"
                  type="file"
                  onChange={() => {
                    uploadGetLink("setAadharCardBackURL");
                  }}
                />
                <div className="self-stretch h-5 relative text-sm leading-[20px] font-body-small text-textcolor-secdefault text-left inline-block overflow-hidden text-ellipsis whitespace-nowrap shrink-0">{`Only support .jpg, .png `}</div>
              </div>
            </div>
            <div className="self-stretch rounded-lg box-border flex flex-col items-center justify-center py-0.5 px-0 max-w-full border-[1px] border-solid border-gainsboro-200">
              <div className="self-stretch rounded-radi-xxl flex flex-col items-start justify-center py-[4.5px] px-6 box-border gap-[4px] max-w-full">
                <div className="flex flex-col items-start self-stretch justify-start max-w-full">
                  <div className="self-stretch flex flex-col items-center justify-center gap-[12px] max-w-full">
                    <div className="self-stretch flex flex-row items-center justify-start gap-[6px] max-w-full mq450:flex-wrap">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[2px] min-w-[246px] max-w-full">
                        <b className="self-stretch relative text-lg tracking-[-0.2px] leading-[26px] font-body-small text-textcolor-default text-left">
                          Upload Pan Card
                        </b>
                        <div className="self-stretch relative text-lg tracking-[-0.2px] leading-[26px] font-body-small text-textcolor-default text-left">
                          Upload Front
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
                          className="relative w-6 h-6 overflow-hidden shrink-0"
                          loading="lazy"
                          alt=""
                          src="/close.svg"
                        />
                        <div className="h-[22px] hidden flex-row items-center justify-center">
                          <div className="self-stretch bg-bgcolor-lightprimary flex flex-row items-center justify-center py-spacing-xxxs px-spacing-xxs gap-[4px]">
                            <img
                              className="relative hidden w-4 h-4 overflow-hidden shrink-0"
                              alt=""
                              src="/info.svg"
                            />
                            <div className="self-stretch relative text-xs leading-[18px] font-semibold font-body-small text-strokecolor-primary text-center flex items-center justify-center">
                              Badges
                            </div>
                            <img
                              className="relative hidden w-4 h-4 overflow-hidden shrink-0"
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
                      className="relative self-stretch hidden max-w-full max-h-full overflow-hidden"
                      alt=""
                      src="/divider.svg"
                    />
                  </div>
                </div>
                <input
                  className="self-stretch rounded-radi-mlg bg-bgcolor-light flex flex-col items-center justify-center py-2.5 px-[23px] border-[1px] border-dashed border-strokecolor-primary"
                  type="file"
                  onChange={() => {
                    uploadGetLink("setPanCard");
                  }}
                />

                <div className="self-stretch h-5 relative text-sm leading-[20px] font-body-small text-textcolor-secdefault text-left inline-block overflow-hidden text-ellipsis whitespace-nowrap shrink-0">{`Only support .jpg, .png `}</div>
              </div>
            </div>
            <button
              className="cursor-pointer [border:none] py-3 px-8 bg-royalblue rounded flex flex-row items-center justify-center whitespace-nowrap hover:bg-cornflowerblue"
              onClick={handleSubmit}
            >
              <div className="relative text-base leading-[24px] capitalize font-medium font-poppins text-bgcolor-light text-center inline-block min-w-[36px]">{`Next `}</div>
            </button>
          </form>
        </div>
      </div>
      <img
        className="relative w-12 h-12 overflow-hidden opacity-0 shrink-0"
        loading="lazy"
        alt=""
        src="/icon-3.svg"
      />
    </div>
  );
};

export default Screen4;
