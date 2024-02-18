import { FC } from "react";
import { DefaultIconComponentProps } from "./types";

export const ContactWithUsIcon: FC<DefaultIconComponentProps> = ({
  width = 28,
  height = 28,
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
      <path
        d="M25.6667 19.74V23.24C25.668 23.5649 25.6014 23.8866 25.4713 24.1843C25.3411 24.482 25.1502 24.7492 24.9108 24.9689C24.6713 25.1885 24.3887 25.3558 24.0809 25.4599C23.7731 25.5639 23.4469 25.6026 23.1233 25.5734C19.5333 25.1833 16.0848 23.9565 13.055 21.9917C10.2361 20.2005 7.84623 17.8106 6.055 14.9917C4.08331 11.9481 2.85629 8.48286 2.47334 4.8767C2.44418 4.55408 2.48252 4.22892 2.58592 3.92193C2.68932 3.61494 2.8555 3.33284 3.0739 3.09359C3.29229 2.85434 3.55811 2.66319 3.85443 2.53231C4.15074 2.40142 4.47107 2.33367 4.795 2.33337H8.295C8.86119 2.32779 9.41009 2.52829 9.83939 2.89749C10.2687 3.26668 10.5491 3.77939 10.6283 4.34003C10.7761 5.46011 11.05 6.55988 11.445 7.61836C11.602 8.03594 11.6359 8.48977 11.5429 8.92606C11.4498 9.36235 11.2337 9.76283 10.92 10.08L9.43834 11.5617C11.0992 14.4825 13.5175 16.9009 16.4383 18.5617L17.92 17.08C18.2372 16.7664 18.6377 16.5502 19.074 16.4571C19.5103 16.3641 19.9641 16.3981 20.3817 16.555C21.4402 16.95 22.5399 17.224 23.66 17.3717C24.2267 17.4516 24.7443 17.7371 25.1143 18.1738C25.4843 18.6104 25.6809 19.1679 25.6667 19.74Z"
        stroke="white"
        strokeOpacity="0.2"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.3917 2.33325C18.7697 2.58382 20.9909 3.63852 22.6881 5.32293C24.3852 7.00734 25.4566 9.22057 25.7251 11.5966"
        stroke="white"
        strokeOpacity="0.2"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.3917 7C17.5392 7.22626 18.5921 7.7922 19.4138 8.62436C20.2356 9.45652 20.7882 10.5165 21.0001 11.6667"
        stroke="white"
        strokeOpacity="0.2"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};