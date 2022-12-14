import React from "react";
/**
 * Account Profile Icon
 * @param {Object} props Component props
 * @returns {React.Component} React component
 */
const SVG = (props) => (
  <svg
    width="45"
    height="37"
    viewBox="0 0 45 37"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#filter0_d_1_6591)">
      <path
        d="M41.1323 31.7855L29.1366 29.2622C28.1443 29.0535 27.4652 28.1351 27.5564 27.1252L28.2661 19.2631C28.3708 18.1037 27.4671 17.1003 26.3031 17.0835L18.1874 16.9662C16.9849 16.9489 16.0695 15.8818 16.2354 14.6906L17.3304 6.82691C17.4867 5.70501 16.6809 4.6774 15.5541 4.56155L2.99954 3.27083"
        stroke="white"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_1_6591"
        x="-0.000732422"
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
          result="effect1_dropShadow_1_6591"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_1_6591"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SVG;
