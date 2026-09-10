import type { SVGProps } from "react";

function ArrowUpRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false" {...props}>
      <path d="M18.0039 16.8994H16.0039V9.41309L6.70703 18.707L5.29297 17.293L14.5889 8H7.10449V6H17.0039C17.5561 6.00014 18.0039 6.4478 18.0039 7V16.8994Z" fill="currentColor" />
    </svg>
  );
}

function ChevronDownIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false" {...props}>
      <path d="M19.207 9.20703L12.707 15.707C12.3165 16.0976 11.6835 16.0976 11.293 15.707L4.79297 9.20703L6.20703 7.79297L12 13.5859L17.793 7.79297L19.207 9.20703Z" fill="currentColor" />
    </svg>
  );
}

export { ArrowUpRightIcon, ChevronDownIcon };
