import { useEffect, useRef, useState } from "react";
import type { ProjectMediaItem } from "../types/content";

interface ProjectMediaProps {
  item: ProjectMediaItem;
}

export function ProjectMedia({ item }: ProjectMediaProps) {
  const mediaRef = useRef<HTMLElement>(null);
  const [shouldLoad, setShouldLoad] = useState(item.type === "image");
  const [reduceMotion, setReduceMotion] = useState(() => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches);

  useEffect(() => {
    if (item.type === "image") return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleMotionChange = (event: MediaQueryListEvent) => setReduceMotion(event.matches);
    motionQuery.addEventListener("change", handleMotionChange);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px 0px" },
    );

    if (mediaRef.current) observer.observe(mediaRef.current);
    return () => {
      observer.disconnect();
      motionQuery.removeEventListener("change", handleMotionChange);
    };
  }, [item.type]);

  return (
    <figure className="project-media" ref={mediaRef}>
      {item.type === "image" ? (
        <img src={item.src} alt={item.alt} loading="lazy" />
      ) : (
        <div className={item.framed ? "project-video-frame" : undefined}>
          <video
            aria-label={item.label}
            autoPlay={!reduceMotion}
            controls={reduceMotion}
            loop
            muted
            playsInline
            preload="metadata"
            src={shouldLoad ? item.src : undefined}
          />
        </div>
      )}
      {item.caption && <figcaption>{item.caption}</figcaption>}
    </figure>
  );
}
