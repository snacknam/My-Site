import { useCallback, useLayoutEffect, useRef, useState } from "react";
import type { Photograph } from "../content/photography";
import type { Locale } from "../types/content";

interface PhotoZoomProps {
  photo: Photograph;
  source: HTMLImageElement;
  locale: Locale;
  onClose: () => void;
}

export function PhotoZoom({ photo, source, locale, onClose }: PhotoZoomProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const animationRef = useRef<Animation | null>(null);
  const closingRef = useRef(false);
  const [imageUrl, setImageUrl] = useState(source.currentSrc || source.src);

  const originTransform = useCallback(() => {
    const image = imageRef.current;
    const dialog = dialogRef.current;
    if (!image || !dialog) return "none";
    const origin = source.getBoundingClientRect();
    const container = dialog.getBoundingClientRect();
    return `translate(${origin.left - container.left - image.offsetLeft}px, ${origin.top - container.top - image.offsetTop}px) scale(${origin.width / image.offsetWidth}, ${origin.height / image.offsetHeight})`;
  }, [source]);

  useLayoutEffect(() => {
    const dialog = dialogRef.current;
    const image = imageRef.current;
    if (!dialog || !image) return;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.showModal();
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const opening = image.animate([
      { transform: originTransform() },
      { transform: "translate(0, 0) scale(1)" },
    ], { duration: reducedMotion ? 0 : 460, easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "both" });
    animationRef.current = opening;
    opening.onfinish = () => opening.cancel();

    let active = true;
    const fullImage = new Image();
    fullImage.src = photo.image;
    void fullImage.decode().then(() => { if (active) setImageUrl(photo.image); }).catch(() => {});
    return () => {
      active = false;
      animationRef.current?.cancel();
      document.body.style.overflow = overflow;
      dialog.close();
      source.closest("button")?.focus({ preventScroll: true });
    };
  }, [photo.image, source, originTransform]);

  const close = () => {
    const image = imageRef.current;
    if (!image || closingRef.current) return;
    closingRef.current = true;
    const currentTransform = getComputedStyle(image).transform;
    const destination = originTransform();
    animationRef.current?.cancel();
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const closing = image.animate([
      { transform: currentTransform },
      { transform: destination },
    ], { duration: reducedMotion ? 0 : 360, easing: "cubic-bezier(0.4, 0, 0.2, 1)", fill: "both" });
    animationRef.current = closing;
    closing.onfinish = onClose;
  };

  return <dialog ref={dialogRef} className="photo-lightbox"
    aria-label={locale === "ko" ? "사진 확대 보기" : "Enlarged photograph"}
    aria-description={locale === "ko" ? "Esc 키나 사진 바깥 영역을 누르면 닫힙니다. 모바일에서는 사진을 눌러도 닫힙니다." : "Press Escape or click outside the photograph to close. On mobile, tap the photograph to close."}
    onCancel={(event) => { event.preventDefault(); close(); }}
    onClick={(event) => {
      const outsidePhoto = event.target === event.currentTarget;
      const mobilePhotoTap = event.target === imageRef.current && window.matchMedia("(max-width: 600px)").matches;
      if (outsidePhoto || mobilePhotoTap) close();
    }}>
    <img ref={imageRef} src={imageUrl} width={photo.width} height={photo.height} alt={photo.alt[locale]} />
  </dialog>;
}
