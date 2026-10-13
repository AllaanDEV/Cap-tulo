export function quotation({ color = "var(--color-wine)" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
      data-id="element-12"
      data-mp="32mg35nfwrnvr"
    >
      <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
      <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
    </svg>
  );
}

export const Star = ({ size, fill, onClick, color = "var(--color-star)" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill ? color : "none"}
      stroke={color}
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-star text-gold"
      aria-hidden="true"
      onClick={onClick}
      data-id="element-12"
      data-mp="32mg35nfwrnvr"
    >
      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
    </svg>
  );
};

export const ebook = ({ color = "var(--color-ebook)" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-book-open text-moss"
      aria-hidden="true"
      data-id="element-12"
      data-mp="32mg35nfwrnvr"
    >
      <path d="M12 7v14"></path>
      <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
    </svg>
  );
};

export const gallery = ({ imgIdUrl }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke={`${imgIdUrl?.length === 4 ? "var(--color-gray)" : "var(--color-gallery)"}`}
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-image text-muted"
      aria-hidden="true"
      data-id="element-12"
      data-mp="32mg35nfwrnvr"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
      <circle cx="9" cy="9" r="2"></circle>
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
    </svg>
  );
};

export const configuration = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="1em"
      viewBox="0 0 32 32"
    >
      <title xmlns="">overflow-menu-horizontal</title>
      <circle cx="8" cy="16" r="2" fill="currentColor"></circle>
      <circle cx="16" cy="16" r="2" fill="currentColor"></circle>
      <circle cx="24" cy="16" r="2" fill="currentColor"></circle>
    </svg>
  );
};

export const Like = ({ filled = false, className = "", ...props }) => {
  const emptyHeart =
    "M4.24 12.25a4.2 4.2 0 0 1-1.24-3A4.25 4.25 0 0 1 7.25 5c1.58 0 2.96.86 3.69 2.14h1.12A4.24 4.24 0 0 1 15.75 5A4.25 4.25 0 0 1 20 9.25c0 1.17-.5 2.25-1.24 3L11.5 19.5zm15.22.71C20.41 12 21 10.7 21 9.25A5.25 5.25 0 0 0 15.75 4c-1.75 0-3.3.85-4.25 2.17A5.22 5.22 0 0 0 7.25 4A5.25 5.25 0 0 0 2 9.25c0 1.45.59 2.75 1.54 3.71l7.96 7.96z";

  const filledHeart =
    "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09A6.02 6.02 0 0 1 16.5 3C19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z";

  const particles = [
    { x: "-14px", y: "-15px", delay: "0ms", size: "text-[0.2em]" },
    { x: "14px", y: "-13px", delay: "50ms", size: "text-[0.4em]" },
    { x: "-17px", y: "3px", delay: "100ms", size: "text-[0.5em]" },
    { x: "17px", y: "4px", delay: "150ms", size: "text-[0.7em]" },
  ];

  return (
    <span className={`relative inline-flex ${className}`}>
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        className={`
          relative z-10 origin-center
          ${
            filled
              ? "animate-[like_450ms_ease-out] text-red-500"
              : "text-current"
          }
        `}
      >
        <title>heart</title>

        <path d={filled ? filledHeart : emptyHeart} fill="currentColor" />
      </svg>

      {filled &&
        particles.map((particle, index) => (
          <span
            key={index}
            style={{
              "--particle-x": particle.x,
              "--particle-y": particle.y,
              animationDelay: particle.delay,
            }}
            className={`
              pointer-events-none
              absolute left-1/2 top-1/2
              text-red-500 opacity-0
              ${particle.size}
              animate-[heart-particle_600ms_ease-out_both]
            `}
          >
            ♥
          </span>
        ))}
    </span>
  );
};

export const Comment = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <title xmlns="">comment-thin</title>
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 21a9 9 0 1 0-9-9c0 1.488.36 2.89 1 4.127L3 21l4.873-1c1.236.639 2.64 1 4.127 1"
      ></path>
    </svg>
  );
};

export const Share = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-share2 lucide-share-2"
      aria-hidden="true"
      data-id="element-76"
      data-mp="3u8vaibq1ick9"
    >
      <circle cx="18" cy="5" r="3"></circle>
      <circle cx="6" cy="12" r="3"></circle>
      <circle cx="18" cy="19" r="3"></circle>
      <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
      <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
    </svg>
  );
};

export const save = ({ filled = false, className = "", ...props }) => {
  return (
  <svg
{...props}
      className={className}
  xmlns="http://www.w3.org/2000/svg"
  width="20"
  height="20"
  viewBox="0 0 24 24"
   fill={filled ? "currentColor" : "none"}
  stroke="currentColor"
  stroke-width="1.8"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="lucide lucide-bookmark"
  aria-hidden="true"
  data-id="element-490"
  data-mp="285q27ogco1c8"
>
  <path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z"></path>
</svg>
  );
};



export const House = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-house"
      aria-hidden="true"
      data-id="element-490"
      data-mp="285q27ogco1c8"
    >
      <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
      <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    </svg>
  );
};

export const Compass = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-compass"
      aria-hidden="true"
      data-id="element-490"
      data-mp="285q27ogco1c8"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path>
    </svg>
  );
};

export const book = ({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-library"
      aria-hidden="true"
      data-id="element-490"
      data-mp="285q27ogco1c8"
    >
      <path d="m16 6 4 14"></path>
      <path d="M12 6v14"></path>
      <path d="M8 8v12"></path>
      <path d="M4 4v16"></path>
    </svg>
  );
};

export const Group = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <title xmlns="">group-line</title>
      <path
        fill="currentColor"
        d="M2 22a8 8 0 1 1 16 0h-2a6 6 0 0 0-12 0zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m8.284 3.703A8 8 0 0 1 23 22h-2a6 6 0 0 0-3.537-5.473zm-.688-11.29A5.5 5.5 0 0 1 21 8.5a5.5 5.5 0 0 1-5 5.478v-2.013a3.5 3.5 0 0 0 1.041-6.609z"
      />
    </svg>
  );
};

export const spiral = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
    >
      <title xmlns="">oily-spiral</title>
      <path
        fill="currentColor"
        d="M230.357 17.62c-5.547.092-11.576 1.096-18.023 3.204c-23.305 7.618-73.14 45.618-83.234 99.074c45.49-22.467 84.27-17.018 107.437-25.052c52.28-18.113 38.996-77.965-6.18-77.225zm120.215 54.4c-12.926.01-26.166 1.873-39.002 6.37c42.205 28.16 56.877 64.468 75.414 80.518c46.965 40.667 98.17-16.56 52.004-57.972c-13.688-12.28-49.637-28.94-88.416-28.915zm-70.3 38.177c-19.064-.228-41 3.8-59.237 16.246c36.71 12.436 54.713 36.326 71.565 44.502h.002c42.693 20.722 69.162-31.628 26.91-53.056c-7.83-3.974-22.416-7.49-39.24-7.693zm-90.295 15.278c-6.9-.114-14.648 2.048-22.71 7.304c-15.69 10.228-44.953 48.12-41.83 89.562c29.127-25.574 58.818-29.222 74.327-39.727c31.31-21.207 17.284-56.694-9.787-57.14zM69.723 138.68c-16.972-.096-34.502 11.827-40.094 38.377c-5.056 23.994 2.93 86.155 44.183 121.62c3.285-50.63 27.397-81.49 32.02-105.568c6.603-34.317-14.29-54.307-36.11-54.43zm282.162 22.603c7.584 38.012-4.102 65.546-2.758 84.23c3.4 47.335 61.976 44.085 59.406-3.224c-1.01-18.703-19.197-62.992-56.648-81.007zm-95.64 27.38c-37.658 0-68.384 30.728-68.384 68.382s30.73 68.38 68.384 68.38c37.657 0 68.38-30.726 68.38-68.38c0-37.655-30.725-68.383-68.38-68.383zm0 18.68a49.563 49.563 0 0 1 49.702 49.702c0 27.56-22.14 49.7-49.703 49.7a49.56 49.56 0 0 1-49.703-49.7a49.563 49.563 0 0 1 49.704-49.703zm182.507 8.317c-3.286 50.63-27.396 81.49-32.02 105.57c-11.738 61.004 63.423 76.735 76.205 16.05c5.054-23.995-2.932-86.156-44.185-121.62m-305.86 19.27c-15.24.07-30.174 12.75-28.85 37.144c1.013 18.702 19.198 62.99 56.65 81.006c-7.585-38.01 4.1-65.548 2.757-84.232c-1.648-22.928-16.24-33.986-30.557-33.918m254.247 57.09c-29.128 25.575-58.82 29.223-74.327 39.728c-39.293 26.613-7.19 75.712 32.496 49.834c15.69-10.228 44.952-48.117 41.83-89.56zm-185.79 46.64c-30.664-.36-43.938 39.734-8.287 57.815c16.704 8.476 64.15 14.87 98.476-8.555c-36.71-12.436-54.714-36.326-71.565-44.502h-.002c-6.67-3.238-12.945-4.69-18.623-4.758zm-108.18 2.844c-33.205-.786-54.937 40.19-19.592 71.896c18.25 16.375 76.075 40.54 127.416 22.545c-42.204-28.16-56.877-64.467-75.414-80.515c-11.007-9.532-22.245-13.686-32.41-13.926m290.295 52.935c-45.488 22.465-84.27 17.016-107.436 25.05h-.003c-58.7 20.337-34.744 93.295 24.203 74.022c23.305-7.616 73.14-45.618 83.235-99.073z"
      />
    </svg>
  );
};

export const pencil = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-pencil"
      aria-hidden="true"
      data-id="element-168"
      data-mp="1venqppsy558x"
    >
      <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
      <path d="m15 5 4 4"></path>
    </svg>
  );
};

export const maps = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-map-pin"
      aria-hidden="true"
      data-id="element-177"
      data-mp="983v0wz957jq"
    >
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  );
};

export const calendar = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-calendar"
      aria-hidden="true"
      data-id="element-179"
      data-mp="ntzx4ogfq7kn"
    >
      <path d="M8 2v4"></path>
      <path d="M16 2v4"></path>
      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
      <path d="M3 10h18"></path>
    </svg>
  );
};

export const link = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-link"
      aria-hidden="true"
      data-id="element-181"
      data-mp="ssumk98wqudq"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
    </svg>
  );
};

export const camera = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 21 21"
    >
      <title xmlns="">camera</title>
      <g fill="none" fill-rule="evenodd">
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M2.5 14.5v-6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2"
        />
        <path fill="currentColor" d="M17 9a1 1 0 1 0-2 0a1 1 0 0 0 2 0" />
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M13.5 11.5a3 3 0 1 0-6 0a3 3 0 0 0 6 0m-4-7h2a1 1 0 0 1 1 1v1h-4v-1a1 1 0 0 1 1-1"
        />
      </g>
    </svg>
  );
};

export const logout = ({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      <title xmlns="">logout-rounded</title>
      <path
        fill="currentColor"
        d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h6q.425 0 .713.288T12 4t-.288.713T11 5H5v14h6q.425 0 .713.288T12 20t-.288.713T11 21zm12.175-8H10q-.425 0-.712-.288T9 12t.288-.712T10 11h7.175L15.3 9.125q-.275-.275-.275-.675t.275-.7t.7-.313t.725.288L20.3 11.3q.3.3.3.7t-.3.7l-3.575 3.575q-.3.3-.712.288t-.713-.313q-.275-.3-.262-.712t.287-.688z"
      />
    </svg>
  );
};

export const XIconProfile = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <title xmlns="">x-circle-outline</title>
      <path
        fill="none"
        stroke="#696969"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="m15 9l-6 6m0-6l6 6m6-3a9 9 0 1 1-18 0a9 9 0 0 1 18 0"
      />
    </svg>
  );
};

export const XSavedEbook = ({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      <title>x</title>
      <path
        fill="none"
        stroke="var(--color-gallery)"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M18.5 5.5L12 12m0 0l-6.5 6.5M12 12L5.5 5.5M12 12l6.5 6.5"
      />
    </svg>
  );
};
export const faceHappy = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
    >
      <title>melting-face</title>
      <g fill="currentColor">
        <path d="M6.329 24.855c-.36-.123-.718-.101-1.106.092a.5.5 0 1 1-.446-.894c.612-.306 1.247-.36 1.875-.145c.61.209 1.171.655 1.691 1.27c.142.167.289.36.429.546l.214.28c.212.271.429.522.685.74c.493.421 1.175.756 2.329.756c1.354 0 2.339-.452 3.215-.989c.221-.135.434-.275.647-.417l.075-.05c.187-.123.375-.248.562-.366c.423-.265.87-.513 1.36-.657c.406-.12.864-.134 1.307-.103c.448.03.915.11 1.352.198c.266.054.537.114.785.17h.001q.228.052.423.093q.55.12.773.121c.704 0 1.058-.284 1.544-.674l.196-.157c.295-.23.649-.48 1.122-.623c.477-.146 1.036-.174 1.735-.036a.5.5 0 1 1-.194.98c-.57-.111-.958-.077-1.25.012c-.295.09-.532.248-.795.454q-.087.068-.177.143c-.489.397-1.108.901-2.181.901c-.273 0-.63-.068-.982-.143q-.224-.048-.453-.1h-.001c-.238-.053-.483-.108-.744-.16a10 10 0 0 0-1.223-.181c-.39-.028-.713-.008-.955.064c-.357.105-.713.295-1.111.545c-.175.11-.352.228-.54.353l-.076.05q-.321.215-.678.436c-.96.589-2.13 1.136-3.737 1.136c-1.384 0-2.298-.415-2.978-.994a6 6 0 0 1-.823-.885l-.252-.33c-.126-.166-.24-.317-.367-.468c-.454-.536-.874-.84-1.251-.968M23.75 11.75a2.75 2.75 0 1 1-5.5 0a2.75 2.75 0 0 1 5.5 0M12.25 13a2.75 2.75 0 1 0 0-5.5a2.75 2.75 0 0 0 0 5.5m-1.349 2.604a1 1 0 0 1 1.356.387c.182.311.431.591.69.84a4.5 4.5 0 0 0 2.25 1.188c1.03.207 1.972.037 2.674-.197a6 6 0 0 0 .818-.343q.133-.067.26-.147a1 1 0 0 1 1.106 1.666a5 5 0 0 1-.447.257c-.264.137-.64.31-1.104.464c-.923.308-2.23.555-3.7.262a6.5 6.5 0 0 1-3.242-1.708a6.7 6.7 0 0 1-.773-.882a5 5 0 0 1-.28-.429a1 1 0 0 1 .392-1.358" />
        <path d="M5.527 4.97C7.913 2.477 11.442 1 16 1s8.087 1.478 10.473 3.97C28.85 7.451 30 10.841 30 14.5c0 1.815-.282 3.563-.858 5.168l-.37 1.203c-.01.107.027.282.25.556c.246.305.628.608 1.048.88c.402.26.902.596 1.284 1.084c.412.527.646 1.172.646 1.98c0 .69-.347 1.296-.736 1.714c-.395.425-.957.791-1.595.9l-.044.008l-.045.004c-.385.03-.687.014-.917.001h-.01c-.259-.014-.396-.02-.565.007c-.17.026-.416.093-.823.28c-.342.159-.559.345-.847.6l-.026.022c-.247.219-.584.517-1.055.738c-.488.228-1.055.348-1.775.355c-.907.1-1.802-.161-2.472-.358l-.077-.022c-1.19-.348-1.774-.456-2.294-.097c-.247.171-.48.342-.717.518l-.034.024c-.633.466-1.315.969-2.2 1.337c-.916.38-1.996.598-3.446.598c-2.963 0-5.673-1.741-7.533-3.578c-.178-.175-.312-.233-.445-.264c-.18-.041-.391-.045-.8-.042H3.54l-.291.002C1.567 28.222 0 26.97 0 25.214c0-.56.16-1.144.444-1.644s.731-.988 1.358-1.247c.599-.248 1.037-.532 1.274-.83c.18-.227.278-.494.13-.952l-.007-.018C2.394 18.69 2 16.643 2 14.5c0-3.658 1.15-7.048 3.527-9.53m1.445 1.383C5.016 8.395 4 11.254 4 14.5c0 1.903.35 3.675 1.033 5.225l.003.008l.043.102l.011.033c.382 1.124.157 2.107-.447 2.868c-.551.695-1.363 1.14-2.076 1.435c-.114.047-.259.166-.383.385a1.4 1.4 0 0 0-.184.658c0 .46.452.959 1.142.907l.04-.003h.04l.305-.001h.046c.348-.004.789-.008 1.223.093c.5.117.963.36 1.398.79c1.688 1.666 3.92 3 6.128 3c1.24 0 2.05-.184 2.679-.445c.644-.268 1.151-.636 1.815-1.125l.005-.003c.233-.173.487-.36.761-.549c1.372-.948 2.881-.504 3.871-.213l.12.035c.79.23 1.325.37 1.797.308l.065-.008h.065c.528 0 .811-.084.989-.167c.192-.09.337-.21.605-.447l.015-.014c.296-.26.697-.616 1.317-.902c.523-.242.952-.379 1.354-.441c.39-.06.712-.043.961-.03l.021.002c.208.011.384.02.601.006a1 1 0 0 0 .437-.284c.173-.186.2-.33.2-.352c0-.385-.099-.591-.221-.748c-.154-.196-.39-.375-.795-.637c-.494-.319-1.077-.757-1.517-1.3c-.44-.544-.832-1.317-.653-2.233l.01-.052l.42-1.366l.008-.023c.495-1.372.748-2.895.748-4.512c0-3.246-1.016-6.105-2.972-8.147C23.082 4.32 20.11 3 16 3S8.918 4.32 6.972 6.353" />
      </g>
    </svg>
  );
};

export const Active = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-check"
      aria-hidden="true"
      data-id="element-56"
      data-mp="2icfbc35kz0k4"
    >
      <path d="M20 6 9 17l-5-5"></path>
    </svg>
  );
};

export const CitationIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 24 24"
      fill="#b45b3e"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-quote mb-2 text-terracotta/60"
      aria-hidden="true"
      data-id="element-93"
      data-mp="34xq81eijd6lp"
    >
      <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
      <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
    </svg>
  );
};

export const GifIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
    >
      <title>gift-open-24-regular</title>
      <path
        fill="currentColor"
        d="M16 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2M8 9.5a3 3 0 0 1 3-3a3.75 3.75 0 0 1 3.75 3.75a4.5 4.5 0 0 1-4.5 4.5a.75.75 0 1 0 0 1.5a6 6 0 0 0 6-6C16.25 7.35 13.9 5 11 5a4.5 4.5 0 0 0-4.5 4.5a3.75 3.75 0 0 0 3.75 3.75a3 3 0 0 0 3-3A2.25 2.25 0 0 0 11 8a1.5 1.5 0 0 0-1.5 1.5a.75.75 0 0 0 1.5 0a.75.75 0 0 1 .75.75a1.5 1.5 0 0 1-1.5 1.5A2.25 2.25 0 0 1 8 9.5m11.5-5.25a.75.75 0 0 1 .75.75v.75H21a.75.75 0 0 1 0 1.5h-.75V8a.75.75 0 0 1-1.5 0v-.75H18a.75.75 0 0 1 0-1.5h.75V5a.75.75 0 0 1 .75-.75m-14 8.5a.75.75 0 0 0-1.166-.624l-3 2a.75.75 0 1 0 .832 1.248L4 14.151v4.599A3.25 3.25 0 0 0 7.25 22h9.5A3.25 3.25 0 0 0 20 18.75v-4.599l1.834 1.223a.75.75 0 1 0 .832-1.248l-3-2a.75.75 0 0 0-1.166.624v6a1.75 1.75 0 0 1-1.75 1.75h-9.5a1.75 1.75 0 0 1-1.75-1.75z"
      />
    </svg>
  );
};

export const Search = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <title>search</title>
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M19 11.5a7.5 7.5 0 1 1-15 0a7.5 7.5 0 0 1 15 0m-2.107 5.42l3.08 3.08"
      />
    </svg>
  );
};

export const Trending = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-trending-up"
      aria-hidden="true"
      data-id="element-340"
      data-mp="1t1pg961cpi7x"
    >
      <path d="M16 7h6v6"></path>
      <path d="m22 7-8.5 8.5-5-5L2 17"></path>
    </svg>
  );
};

export const Send = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-send"
      aria-hidden="true"
      data-id="element-35"
      data-mp="1ivf3lbpxwt1s"
    >
      <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
      <path d="m21.854 2.147-10.94 10.939"></path>
    </svg>
  );
};

export const Circle = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-target"
      aria-hidden="true"
      data-id="element-342"
      data-mp="3cy7w1bklrjvh"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <circle cx="12" cy="12" r="6"></circle>
      <circle cx="12" cy="12" r="2"></circle>
    </svg>
  );
};

export const RightArrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-chevron-right"
      aria-hidden="true"
      data-id="element-362"
      data-mp="99q8d0czaa4t"
    >
      <path d="m9 18 6-6-6-6"></path>
    </svg>
  );
};

export const More = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-plus"
      aria-hidden="true"
      data-id="element-355"
      data-mp="1y09ls7m3e7ag"
    >
      <path d="M5 12h14"></path>
      <path d="M12 5v14"></path>
    </svg>
  );
};
export const Less = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-minus"
      aria-hidden="true"
      data-id="element-352"
      data-mp="1abok1y782tts"
    >
      <path d="M5 12h14"></path>
    </svg>
  );
};

export const Check = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-check"
      aria-hidden="true"
      data-id="element-360"
      data-mp="6duy1mz4ikwz"
    >
      <path d="M20 6 9 17l-5-5"></path>
    </svg>
  );
};

export const Pencil = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-pencil"
      aria-hidden="true"
      data-id="element-369"
      data-mp="3m0n0udmk4zfj"
    >
      <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
      <path d="m15 5 4 4"></path>
    </svg>
  );
};

export const Person = ({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-user"
      aria-hidden="true"
      data-id="element-490"
      data-mp="285q27ogco1c8"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  );
};

export const LeftArrow = ({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || "1em"}
      height={size || "1em"}
      viewBox="0 0 24 24"
    >
      <title>arrow-left-broken</title>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M10 18L4 12L10 6M4 12H14.5M20 12H17.5"
      />
    </svg>
  );
};

export const Menu = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-menu"
      aria-hidden="true"
      data-id="element-206"
      data-mp="2b8cryolvah0i"
    >
      <path d="M4 5h16"></path>
      <path d="M4 12h16"></path>
      <path d="M4 19h16"></path>
    </svg>
  );
};

export const Vector = () => {
  return (
    <svg
      width="2em"
      height="2em"
      viewBox="0 0 1024 1210"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.758176 544.837C3.73864 522.751 4.01595 500.157 6.78939 477.973C12.9066 429.001 24.4886 377.262 43.7582 331.684C109.016 177.325 242.52 47.6334 409.457 11.1256C466.614 -1.37438 525.043 -3.01494 582.993 4.56709C631.676 10.9382 678.883 23.8015 726.317 36.0866C738.028 39.1218 749.786 42.0124 761.551 44.8053C767.344 46.1803 774.688 47.0358 779.079 51.3717C780.821 56.8366 779.301 63.5983 779.235 69.2897C779.067 83.5007 777.801 97.5944 777.508 111.797C776.407 165.157 772.075 218.434 771.434 271.809C771.227 289.188 770.274 306.548 769.645 323.919C769.532 327.067 768.954 339.266 766.602 340.657C761.907 340.157 762.622 336.7 762.161 332.575C761.172 323.712 760.481 314.833 758.973 306.028C752.696 269.36 742.2 233.614 728.645 199.028C720.125 177.297 708.125 157.594 695.809 137.86C682.555 116.633 668.032 95.3522 650.043 77.7702C607.735 36.4147 548.18 12.778 488.637 16.7937C467.922 18.1882 447.922 22.5592 428.079 28.5318C306.766 65.0553 236.321 181.762 197.758 295.2C187.344 325.836 179.387 356.798 174.481 388.809C169.641 420.387 166.375 452.321 165.469 484.266C163.961 537.145 167.758 589.43 178.364 641.352C208.536 789.075 293.739 924.341 416.102 1012.5C439.454 1029.33 464.872 1042.51 490.825 1054.71C525.516 1071.02 562.414 1082.64 600.172 1089.23C681.375 1103.39 767.344 1092 845.922 1069.68C893.579 1056.15 937.789 1035.04 980.497 1010.24C994.985 1001.83 1010.73 992.993 1023.81 982.528C1024.49 984.219 1022.19 987.254 1021.27 988.707C1017.64 994.457 1013.71 1000.09 1009.75 1005.61C994.094 1027.43 976.77 1047.52 958.348 1067.04C876.649 1153.61 760.446 1205.02 641.758 1209.47C554.137 1212.75 466.352 1194.94 386.399 1158.99C350.762 1142.97 317.629 1121.99 285.59 1099.8C222.02 1055.78 163.149 1003.81 117.719 940.7C63.7738 865.758 29.8285 781.258 12.3519 690.997C3.00428 642.735 -2.00745 594.071 0.758176 544.837Z"
        fill="#572622"
      />
    </svg>
  );
};

export const Facebook = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
    >
      <circle cx="12" cy="12" r="12" fill="#0866FF" />
      <path
        fill="#FFFFFF"
        d="M13.5 21V13.05H16.17L16.57 9.95H13.5V7.97C13.5 7.07 13.75 6.45 15.04 6.45H16.67V3.68C16.39 3.64 15.42 3.55 14.29 3.55C11.93 3.55 10.31 4.99 10.31 7.63V9.95H7.64V13.05H10.31V21H13.5Z"
      />
    </svg>
  );
};

const width = window.innerWidth <= 640 ? "1800" : "2500";

export const AnimationTransiton = () => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 7279 4735"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1680.79 5248.5C1680.79 5248.5 -631.215 3301.75 168.791 2272.5C546.925 1786.01 962.742 1611.5 1576.79 1560.5C3043.04 1438.71 2043.35 4866.27 3512.79 4792.5C4228.99 4756.54 4744.67 4526.05 5128.79 3920.5C5843.62 2793.62 2548.17 2182.24 3264.79 1056.5C3694.25 381.867 4329.56 180.218 5128.79 208.5C6626.49 261.498 5663.66 3838.77 7120.79 3488.5C7650.72 3361.11 7983.28 3169.16 8280.79 2712.5C8978.47 1641.62 7164.23 1059.6 6448.79 0.5"
        stroke="var(--color-wine)"
        stroke-width={`${width}`}
        stroke-linecap="round"
      />
    </svg>
  );
};
