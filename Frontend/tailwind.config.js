/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bgcolor-light": "#fff",
        silver: {
          "100": "#bbbfc1",
          "200": "#b9b9c4",
        },
        gainsboro: {
          "100": "#e6e6e6",
          "200": "#e2e4e5",
        },
        gray: {
          "100": "#878c8f",
          "200": "#242731",
          "300": "#242426",
        },
        whitesmoke: "#f0f2f4",
        dimgray: "#575f6e",
        royalblue: "#007aff",
        black: "#000",
        cornflowerblue: "#26a1ff",
        "textcolor-secdefault": "#6d6d6d",
        "strokecolor-primary": "#1849d6",
        "bgcolor-lightprimary": "#e7ecfc",
        "textcolor-default": "#0b0b0b",
        darkgray: "#9a9ea5",
      },
      spacing: {
        "spacing-lg": "24px",
        "spacing-smd": "12px",
        "spacing-xs": "6px",
        "spacing-xxs": "4px",
        "spacing-xxxs": "2px",
      },
      fontFamily: {
        poppins: "Poppins",
        roboto: "Roboto",
        raleway: "Raleway",
        "body-small": "Inter",
      },
      borderRadius: {
        "radi-xxl": "24px",
        "radi-mlg": "8px",
      },
    },
    fontSize: {
      base: "16px",
      lg: "18px",
      sm: "14px",
      smi: "13px",
      "13xl": "32px",
      lgi: "19px",
      "7xl": "26px",
      xs: "12px",
      xl: "20px",
      inherit: "inherit",
    },
    screens: {
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1025: {
        raw: "screen and (max-width: 1025px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
