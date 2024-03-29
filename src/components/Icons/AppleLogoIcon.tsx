import { FC } from "react";
import { DefaultIconComponentProps } from "./types";

export const AppleLogoIcon: FC<DefaultIconComponentProps> = ({
  width = 26,
  height = 26,
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
        d="M18.4709 21.97C17.4093 22.9992 16.2501 22.8367 15.1343 22.3492C13.9534 21.8508 12.8701 21.8292 11.6243 22.3492C10.0643 23.0208 9.24093 22.8258 8.30926 21.97C3.0226 16.5208 3.8026 8.2225 9.80426 7.91917C11.2668 7.995 12.2851 8.72083 13.1409 8.78583C14.4193 8.52583 15.6434 7.77833 17.0084 7.87583C18.6443 8.00583 19.8793 8.65583 20.6918 9.82583C17.3118 11.8517 18.1134 16.3042 21.2118 17.55C20.5943 19.175 19.7926 20.7892 18.4601 21.9808L18.4709 21.97ZM13.0326 7.85417C12.8701 5.43833 14.8309 3.445 17.0843 3.25C17.3984 6.045 14.5493 8.125 13.0326 7.85417Z"
        fill="white"
      />
    </svg>
  );
};
