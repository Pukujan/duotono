import type { FC, SVGProps } from "react";

//
// LOL
//
export interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

const OpenMail: FC<IconProps> = ({
  size = undefined,
  height,
  width,
  className,
  ...rest
}) => {
  const heightN = size !== -1 ? size : height;
  const widthN = size !== -1 ? size : width;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        size !== -1 ? `h-${size} w-${size}` : `h-${heightN} w-${widthN}`
      } ${className}`}
      width={widthN}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      shapeRendering="geometricPrecision"
      {...rest}
    >
      <g filter="url(#filter0_d_107_454)">
        <path
          d="M10 0H23.2472C24.3915 6.47262 26.2971 8.83591 30.2579 9.76066C32.4107 10.2633 34.6944 10.1934 36.7977 9.51302C40.3269 8.37139 42.232 6.01075 43.8539 0H52.6854C53.6631 3.65984 54.845 6.23523 57.1531 7.9536C60.4935 10.4405 65.4369 10.3369 68.8303 7.92295C70.9233 6.43401 72.2492 4.124 73.2921 0H82.1236C82.7238 3.66911 83.8484 5.89937 86.2141 7.55007C89.8793 10.1076 95.2814 10.773 98.7284 7.92822C100.484 6.47892 101.705 4.11281 102.73 0H111.562C111.866 3.44267 112.797 5.61443 115.008 7.25801C118.963 10.1979 125.046 10.6558 128.712 7.36339C130.403 5.84496 131.433 3.59484 132.169 0H141V73L75.5 103L10 73V0Z"
          fill="#5ACC93"
        />
        <path
          d="M10.5 0.5H22.8299C23.3985 3.54238 24.1607 5.71653 25.2936 7.25701C26.4954 8.89115 28.0785 9.76528 30.1443 10.2476C32.3816 10.7699 34.758 10.6983 36.9516 9.98875C38.7989 9.39117 40.2492 8.46155 41.4401 6.88363C42.5689 5.388 43.4448 3.33576 44.2353 0.5H52.3032C53.2714 3.99953 54.4891 6.59361 56.8545 8.35466C60.3813 10.9802 65.5628 10.861 69.1201 8.33038C71.2853 6.79011 72.6371 4.44464 73.6793 0.5H81.7021C82.3335 4.0063 83.5076 6.27128 85.928 7.96011C89.7053 10.5959 95.3671 11.3506 99.0466 8.31385C100.87 6.80872 102.104 4.41844 103.119 0.5H111.108C111.463 3.77247 112.448 5.97752 114.71 7.65927C118.801 10.701 125.157 11.2277 129.046 7.7354C130.788 6.17146 131.835 3.91059 132.574 0.5H140.5V72.6791L75.5 102.45L10.5 72.6791V0.5Z"
          stroke="#EEF3FB"
        />
      </g>
      <path
        d="M57 49.919L74.202 67.7581C74.5903 68.1608 75.2334 68.1666 75.6289 67.7711L109.4 34"
        stroke="#EEF3FB"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M0.5 40.2026C0.5 39.2623 1.26226 38.5 2.20256 38.5C2.60085 38.5 2.98654 38.6396 3.29252 38.8946L68.2781 93.0492C72.1719 96.2941 77.828 96.2941 81.7219 93.0492L146.707 38.8946C147.013 38.6396 147.399 38.5 147.797 38.5C148.738 38.5 149.5 39.2623 149.5 40.2026V127.5H0.5V40.2026Z"
        fill="#212121"
        stroke="#EEF3FB"
      />
      <defs>
        <filter
          id="filter0_d_107_454"
          x="6"
          y="0"
          width="139"
          height="111"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood
            floodOpacity="0"
            result="BackgroundImageFix"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite
            in2="hardAlpha"
            operator="out"
          />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_107_454"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_107_454"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default OpenMail;