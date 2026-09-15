import { useEffect, useRef } from "react";
import "./AnimatedProfile.css";

/** Cursor-looking idle pose with the approved, open-eyed greeting on hover. */
export function AnimatedProfile() {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let pointer: { x: number; y: number } | null = null;
    let frame = 0;
    const update = () => {
      frame = 0;
      let x = 0;
      let y = 0;
      if (pointer && !preference.matches) {
        const rect = element.getBoundingClientRect();
        const dx = pointer.x - (rect.left + rect.width * 0.56);
        const dy = pointer.y - (rect.top + rect.height * 0.5);
        const distance = Math.hypot(dx, dy);
        const strength = Math.min(distance / 180, 1);
        if (distance > 0) {
          x = dx / distance * 13 * strength;
          y = dy / distance * 10 * strength;
        }
      }
      element.style.setProperty("--profile-x", `${x.toFixed(2)}px`);
      element.style.setProperty("--profile-y", `${y.toFixed(2)}px`);
      element.style.setProperty("--profile-tilt", `${(x / 13 * 6).toFixed(2)}deg`);
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    const move = (event: PointerEvent) => {
      if (event.pointerType === "touch" || preference.matches) return;
      pointer = { x: event.clientX, y: event.clientY };
      schedule();
    };
    const reset = () => { pointer = null; schedule(); };
    document.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("pointerleave", reset);
    window.addEventListener("blur", reset);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    preference.addEventListener("change", reset);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("pointerleave", reset);
      window.removeEventListener("blur", reset);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      preference.removeEventListener("change", reset);
    };
  }, []);

  return (
    <span ref={ref} className="animated-profile" aria-hidden="true">
      <svg width="40" height="40" viewBox="0 0 400 400" fill="none" focusable="false">
        <g className="profile-head"><path d="M237.108 353.333C244.666 352.667 329.197 342.626 307.841 196.909C286.486 51.191 107.232 62.8473 110.124 201.758C113.016 340.669 207.448 355.949 237.108 353.333Z" stroke="black" strokeWidth="11.6854" strokeLinecap="round" strokeLinejoin="round"/><path d="M311.464 233.747C311.464 233.747 368.43 137.05 279.183 71.5821C190.87 6.81556 75.33 83.2384 77.112 131.821C77.112 131.821 25.6377 144.938 74.1907 247.916C74.1907 247.916 64.0536 206.14 117.953 258.111C117.953 258.111 100.22 224.282 116.171 197.639C124.847 183.149 143.456 167.987 180.324 164.16C181.814 164.014 182.895 162.641 182.632 161.151C182.047 157.85 181.405 151.978 182.836 146.077C183.333 144.032 185.67 143.039 187.539 144.003C191.775 146.223 198.962 151.394 204.863 162.495C205.506 163.722 206.82 164.423 208.164 164.189C221.34 162.115 288.239 153.76 304.277 194.279C304.277 194.279 311.201 215.196 311.464 233.718V233.747Z" fill="black" stroke="black" strokeWidth="3.89515" strokeLinecap="round" strokeLinejoin="round"/><path d="M126.337 281.891C126.337 281.891 127.593 295.504 115.499 299.857C103.404 304.21 56.3705 267.021 77.4335 235.85C77.4335 235.85 88.856 221.185 117.953 258.082" stroke="black" strokeWidth="11.6854" strokeLinecap="round" strokeLinejoin="round"/><path d="M108.663 278.181C108.663 278.181 106.667 265.333 95.8674 261.646" stroke="black" strokeWidth="10.6667" strokeLinecap="round" strokeLinejoin="round"/><g className="profile-features"><path d="M233.843 198.603C233.843 198.603 233.522 225.742 245.178 235.324C256.835 244.906 249.706 253.32 246.464 255.599" stroke="black" strokeWidth="11.6854" strokeLinecap="round" strokeLinejoin="round"/><g className="profile-eye"><path d="M184.857 207.785C187.573 207.398 189.297 203.743 188.709 199.622C188.121 195.501 185.444 192.474 182.728 192.862C180.013 193.249 178.288 196.904 178.876 201.025C179.464 205.146 182.142 208.172 184.857 207.785Z" fill="black" stroke="black" strokeWidth="3.89515" strokeLinecap="round" strokeLinejoin="round"/></g><g className="profile-eye"><path d="M268.367 203.889C271.082 203.502 272.807 199.847 272.219 195.726C271.631 191.605 268.953 188.579 266.238 188.966C263.522 189.354 261.798 193.008 262.386 197.129C262.974 201.25 265.651 204.277 268.367 203.889Z" fill="black" stroke="black" strokeWidth="3.89515" strokeLinecap="round" strokeLinejoin="round"/></g><g className="profile-mouth"><path d="M197.618 290.392C197.618 290.392 234 315.333 264.667 290.392" stroke="black" strokeWidth="11.6854" strokeLinecap="round" strokeLinejoin="round"/></g></g></g>
      </svg>
    </span>
  );
}
