import { FC } from "react";
import { DefaultIconComponentProps } from "./types";

export const GoogleLogoIcon: FC<DefaultIconComponentProps> = ({
  width = 18,
  height = 18,
}) => {
  const viewBox = `0 0 ${width} ${height}`;
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_0_54)">
        <path
          d="M6.27029 0.592074C4.47181 1.21598 2.92081 2.40018 1.84509 3.97073C0.769378 5.54128 0.225656 7.4154 0.29379 9.31781C0.361924 11.2202 1.03832 13.0506 2.22364 14.5402C3.40895 16.0298 5.04069 17.1 6.8792 17.5936C8.36972 17.9782 9.93134 17.9951 11.4298 17.6429C12.7873 17.3379 14.0423 16.6857 15.072 15.75C16.1437 14.7465 16.9216 13.4698 17.322 12.0572C17.7571 10.5211 17.8346 8.90574 17.5484 7.33504H9.17842V10.8071H14.0258C13.9289 11.3608 13.7213 11.8894 13.4154 12.361C13.1095 12.8327 12.7116 13.2378 12.2455 13.5521C11.6536 13.9438 10.9863 14.2072 10.2865 14.3255C9.58475 14.456 8.8649 14.456 8.16311 14.3255C7.45176 14.1786 6.77885 13.885 6.18732 13.4635C5.23691 12.7907 4.52328 11.8349 4.14826 10.7325C3.76701 9.60949 3.76701 8.39201 4.14826 7.26895C4.41521 6.48175 4.8565 5.76501 5.4392 5.17223C6.10603 4.48141 6.95026 3.9876 7.87926 3.74499C8.80826 3.50239 9.78614 3.52035 10.7056 3.79692C11.4239 4.01731 12.0808 4.40256 12.6237 4.92192C13.1703 4.37817 13.7159 3.83301 14.2606 3.28645C14.5419 2.99254 14.8484 2.7127 15.1254 2.41176C14.2965 1.64046 13.3236 1.04025 12.2623 0.645512C10.3297 -0.0562212 8.21511 -0.0750796 6.27029 0.592074Z"
          fill="white"
        />
        <path
          d="M6.27053 0.592025C8.21518 -0.075582 10.3298 -0.05722 12.2626 0.644057C13.324 1.04148 14.2965 1.64458 15.1243 2.41874C14.843 2.71968 14.5463 3.00093 14.2594 3.29343C13.7138 3.83812 13.1687 4.38093 12.624 4.92187C12.081 4.40251 11.4242 4.01726 10.7058 3.79687C9.78668 3.51933 8.80883 3.50033 7.87959 3.74194C6.95034 3.98356 6.10559 4.47646 5.43803 5.16656C4.85532 5.75934 4.41403 6.47608 4.14709 7.26327L1.23193 5.00624C2.27538 2.93703 4.08205 1.35425 6.27053 0.592025Z"
          fill="#E33629"
        />
        <path
          d="M0.458551 7.24216C0.615122 6.46559 0.875259 5.71356 1.23199 5.00623L4.14714 7.26888C3.7659 8.39194 3.7659 9.60942 4.14714 10.7325C3.17589 11.4825 2.20418 12.2362 1.23199 12.9937C0.339231 11.2167 0.066956 9.19193 0.458551 7.24216Z"
          fill="#F8BD00"
        />
        <path
          d="M9.17836 7.33362H17.5484C17.8345 8.90431 17.7571 10.5197 17.322 12.0558C16.9215 13.4684 16.1436 14.745 15.072 15.7486C14.1312 15.0146 13.1862 14.2861 12.2454 13.5521C12.7118 13.2374 13.1099 12.8319 13.4158 12.3597C13.7217 11.8876 13.9292 11.3585 14.0257 10.8042H9.17836C9.17695 9.64831 9.17836 8.49096 9.17836 7.33362Z"
          fill="#587DBD"
        />
        <path
          d="M1.23047 12.9938C2.20266 12.2438 3.17437 11.49 4.14562 10.7325C4.52139 11.8353 5.23604 12.7911 6.1875 13.4635C6.78087 13.8831 7.45523 14.1743 8.1675 14.3185C8.8693 14.449 9.58914 14.449 10.2909 14.3185C10.9907 14.2002 11.658 13.9367 12.2498 13.545C13.1906 14.2791 14.1356 15.0075 15.0764 15.7416C14.0469 16.6778 12.7918 17.3305 11.4342 17.6358C9.93573 17.9881 8.37411 17.9712 6.88359 17.5866C5.70474 17.2718 4.60361 16.717 3.64922 15.9568C2.63915 15.1547 1.81411 14.144 1.23047 12.9938Z"
          fill="#319F43"
        />
      </g>
      <defs>
        <clipPath id="clip0_0_54">
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};