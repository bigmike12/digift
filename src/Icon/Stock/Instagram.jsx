import React from "react";
/**
 * Account Profile Icon
 * @param {Object} props Component props
 * @returns {React.Component} React component
 */
const SVG = (props) => (
  <svg
    width="25"
    height="25"
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clip-rule="evenodd"
      d="M7.55261 0.15867C8.83224 0.0997608 9.24024 0.0866699 12.4999 0.0866699C15.7595 0.0866699 16.1675 0.100852 17.4461 0.15867C18.7246 0.216488 19.5973 0.420488 20.361 0.716125C21.1606 1.01831 21.8861 1.49067 22.4861 2.10158C23.097 2.70049 23.5682 3.42485 23.8693 4.22558C24.1661 4.98922 24.369 5.86194 24.4279 7.13831C24.4868 8.42013 24.4999 8.82812 24.4999 12.0867C24.4999 15.3463 24.4857 15.7543 24.4279 17.0339C24.3701 18.3103 24.1661 19.183 23.8693 19.9467C23.5682 20.7475 23.0962 21.4731 22.4861 22.0729C21.8861 22.6838 21.1606 23.155 20.361 23.4561C19.5973 23.7529 18.7246 23.9558 17.4482 24.0147C16.1675 24.0736 15.7595 24.0867 12.4999 24.0867C9.24024 24.0867 8.83224 24.0725 7.55261 24.0147C6.27624 23.9569 5.40351 23.7529 4.63988 23.4561C3.83906 23.155 3.1135 22.6829 2.5137 22.0729C1.9032 21.4736 1.43077 20.7484 1.12933 19.9478C0.833696 19.1841 0.630787 18.3114 0.571878 17.035C0.512969 15.7532 0.499878 15.3452 0.499878 12.0867C0.499878 8.82703 0.51406 8.41903 0.571878 7.14049C0.629696 5.86194 0.833696 4.98922 1.12933 4.22558C1.43121 3.42494 1.90401 2.69974 2.51479 2.10049C3.11374 1.49013 3.83857 1.0177 4.63879 0.716125C5.40242 0.420488 6.27515 0.217579 7.55151 0.15867H7.55261ZM17.349 2.31867C16.0835 2.26085 15.7039 2.24885 12.4999 2.24885C9.29588 2.24885 8.91624 2.26085 7.65079 2.31867C6.48024 2.37212 5.84533 2.5674 5.42206 2.73212C4.86242 2.95031 4.46206 3.20885 4.04206 3.62885C3.64393 4.01618 3.33753 4.48771 3.14533 5.00885C2.98061 5.43212 2.78533 6.06703 2.73188 7.23758C2.67406 8.50303 2.66206 8.88267 2.66206 12.0867C2.66206 15.2907 2.67406 15.6703 2.73188 16.9358C2.78533 18.1063 2.98061 18.7412 3.14533 19.1645C3.33733 19.6849 3.64388 20.1572 4.04206 20.5445C4.42933 20.9427 4.9017 21.2492 5.42206 21.4412C5.84533 21.6059 6.48024 21.8012 7.65079 21.8547C8.91624 21.9125 9.29479 21.9245 12.4999 21.9245C15.705 21.9245 16.0835 21.9125 17.349 21.8547C18.5195 21.8012 19.1544 21.6059 19.5777 21.4412C20.1373 21.223 20.5377 20.9645 20.9577 20.5445C21.3559 20.1572 21.6624 19.6849 21.8544 19.1645C22.0192 18.7412 22.2144 18.1063 22.2679 16.9358C22.3257 15.6703 22.3377 15.2907 22.3377 12.0867C22.3377 8.88267 22.3257 8.50303 22.2679 7.23758C22.2144 6.06703 22.0192 5.43212 21.8544 5.00885C21.6362 4.44922 21.3777 4.04885 20.9577 3.62885C20.5703 3.23075 20.0988 2.92435 19.5777 2.73212C19.1544 2.5674 18.5195 2.37212 17.349 2.31867ZM10.9672 15.7859C11.8231 16.1423 12.7763 16.1904 13.6638 15.922C14.5513 15.6536 15.3181 15.0855 15.8333 14.3146C16.3484 13.5437 16.5799 12.6178 16.4883 11.6951C16.3966 10.7725 15.9875 9.91028 15.3308 9.25576C14.9121 8.83737 14.4059 8.51701 13.8486 8.31774C13.2913 8.11847 12.6967 8.04525 12.1077 8.10334C11.5187 8.16144 10.9499 8.34941 10.4422 8.65372C9.93456 8.95803 9.50069 9.37112 9.17184 9.86324C8.843 10.3554 8.62736 10.9143 8.54044 11.4997C8.45353 12.0852 8.4975 12.6826 8.66919 13.2491C8.84089 13.8155 9.13604 14.3368 9.53339 14.7755C9.93074 15.2141 10.4204 15.5592 10.9672 15.7859ZM8.13842 7.72522C8.71118 7.15246 9.39114 6.69813 10.1395 6.38816C10.8878 6.07818 11.6899 5.91864 12.4999 5.91864C13.3099 5.91864 14.1119 6.07818 14.8603 6.38815C15.6086 6.69813 16.2886 7.15246 16.8613 7.72522C17.4341 8.29797 17.8884 8.97793 18.1984 9.72627C18.5084 10.4746 18.6679 11.2767 18.6679 12.0867C18.6679 12.8967 18.5084 13.6987 18.1984 14.4471C17.8884 15.1954 17.4341 15.8754 16.8613 16.4481C15.7046 17.6049 14.1357 18.2547 12.4999 18.2547C10.864 18.2547 9.29515 17.6049 8.13842 16.4481C6.98169 15.2914 6.33185 13.7225 6.33185 12.0867C6.33185 10.4508 6.98169 8.88195 8.13842 7.72522ZM20.0359 6.83722C20.1778 6.70333 20.2914 6.54232 20.37 6.36373C20.4486 6.18514 20.4906 5.9926 20.4934 5.7975C20.4963 5.60241 20.4599 5.40872 20.3866 5.22792C20.3132 5.04711 20.2043 4.88286 20.0664 4.74489C19.9284 4.60693 19.7642 4.49804 19.5834 4.42469C19.4026 4.35134 19.2089 4.31501 19.0138 4.31785C18.8187 4.3207 18.6261 4.36266 18.4475 4.44125C18.269 4.51984 18.1079 4.63346 17.9741 4.7754C17.7137 5.05143 17.5711 5.41808 17.5766 5.7975C17.5822 6.17693 17.7354 6.53927 18.0037 6.80759C18.272 7.07591 18.6343 7.2291 19.0138 7.23463C19.3932 7.24016 19.7598 7.0976 20.0359 6.83722Z"
      fill="#8A91A8"
    />
  </svg>
);

export default SVG;