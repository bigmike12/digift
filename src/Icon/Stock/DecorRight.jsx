import React from "react";
/**
 * Account Profile Icon
 * @param {Object} props Component props
 * @returns {React.Component} React component
 */
const SVG = (props) => (
  <svg
    width="46"
    height="37"
    viewBox="0 0 46 37"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#filter0_d_1_6590)">
      <path
        d="M3.99943 31.7855L15.9951 29.2622C16.9874 29.0535 17.6664 28.1351 17.5753 27.1252L16.8655 19.2631C16.7609 18.1037 17.6646 17.1003 18.8286 17.0835L26.9443 16.9662C28.1468 16.9489 29.0621 15.8818 28.8963 14.6906L27.8012 6.82691C27.645 5.70501 28.4508 4.6774 29.5776 4.56155L42.1321 3.27083"
        stroke="white"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_1_6590"
        x="0.99884"
        y="0.270508"
        width="44.1335"
        height="36.5156"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.360784 0 0 0 0 0.647059 0 0 0 0 1 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1_6590"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_1_6590"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SVG;
