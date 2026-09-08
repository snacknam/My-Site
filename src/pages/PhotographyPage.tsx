import { useEffect, useRef, useState } from "react";
import { PhotoZoom } from "../components/PhotoZoom";
import { Link } from "react-router-dom";
import { getAlbumPhotos, photoAlbums, photographyLabels, type Photograph } from "../content/photography";
import { ui } from "../content/ui";
import { SiteLayout } from "../layouts/SiteLayout";
import type { Locale } from "../types/content";
import { NotFoundPage } from "./NotFoundPage";

export function PhotographyPage({ locale, recent = false, albumSlug }: { locale: Locale; recent?: boolean; albumSlug?: string }) {
  const [zoom, setZoom] = useState<{ photo: Photograph; source: HTMLImageElement } | null>(null);
  const galleryRef = useRef<HTMLElement>(null);
  const [photos, setPhotos] = useState(() => getAlbumPhotos(albumSlug));

  useEffect(() => {
    // Keep the first render identical to the prerendered HTML, then shuffle once per visit.
    const frame = window.requestAnimationFrame(() => {
      const shuffled = getAlbumPhotos(albumSlug);
      for (let index = shuffled.length - 1; index > 0; index -= 1) {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
      }
      setPhotos(shuffled);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [albumSlug]);

  useEffect(() => {
    const gallery = galleryRef.current;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!gallery || motion.matches || !("IntersectionObserver" in window)) return;

    const cards = Array.from(gallery.querySelectorAll<HTMLButtonElement>("button"));
    const reveal = (card: Element) => card.classList.remove("photo-pending");
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          reveal(entry.target);
          observer.unobserve(entry.target);
        }
      }
    }, { threshold: 0.06, rootMargin: "0px 0px -24px 0px" });

    for (const card of cards) {
      // Only prepare offscreen photos so hydration and shuffling never hide visible content.
      if (card.getBoundingClientRect().top >= window.innerHeight) {
        card.classList.add("photo-pending");
        observer.observe(card);
      }
    }
    const revealFocused = (event: FocusEvent) => {
      if (event.target instanceof Element) {
        const card = event.target.closest("button");
        if (card) { reveal(card); observer.unobserve(card); }
      }
    };
    const revealAll = () => { cards.forEach(reveal); observer.disconnect(); };
    gallery.addEventListener("focusin", revealFocused);
    motion.addEventListener("change", revealAll);
    return () => {
      revealAll();
      gallery.removeEventListener("focusin", revealFocused);
      motion.removeEventListener("change", revealAll);
    };
  }, [photos]);

  const labels = photographyLabels[locale];
  const album = albumSlug ? photoAlbums.find((item) => item.slug === albumSlug) : undefined;
  if (albumSlug && !album) return <NotFoundPage locale={locale} />;
  const title = album?.title[locale] ?? (recent ? labels.recent : ui[locale].photography.title);

  return <SiteLayout locale={locale} pageTitle={title}>
    {album && <Link className="archive-back" to={`/${locale}/photography`}>← {labels.back}</Link>}
    {photos.length === 0 ? <p className="photo-empty">{labels.empty}</p> : <section ref={galleryRef} className="photo-grid" aria-label={title}>
      {photos.map((photo, index) => {
        const position = index % 7;
        const span = position === 0 || position === 6 ? 7 : position === 1 || position === 5 ? 5 : 4;
        const thumbnailWidth = Math.round(photo.width * Math.min(1, 720 / Math.max(photo.width, photo.height)));
        const mobileWidth = position === 0 ? "calc(100vw - 48px)" : "calc((100vw - 64px) / 2)";
        return <button type="button" className={zoom?.photo.slug === photo.slug ? "photo-card photo-zoom-source" : "photo-card"} onClick={(event) => {
          const source = event.currentTarget.querySelector("img");
          if (source) setZoom({ photo, source });
        }} aria-haspopup="dialog" key={photo.slug}>
        <img src={photo.thumbnail ?? photo.image}
          srcSet={photo.thumbnail ? `${photo.thumbnail} ${thumbnailWidth}w, ${photo.image} ${photo.width}w` : undefined}
          sizes={`(max-width: 600px) ${mobileWidth}, (max-width: 800px) ${Math.round(span / 12 * 100)}vw, ${Math.round((800 - 16 * 11) / 12 * span + 16 * (span - 1))}px`}
          width={photo.width} height={photo.height} alt={photo.alt[locale]} loading={index < 3 ? "eager" : "lazy"} decoding="async" />
      </button>;
      })}
    </section>}
    {zoom && <PhotoZoom photo={zoom.photo} source={zoom.source} locale={locale} onClose={() => setZoom(null)} />}
  </SiteLayout>;
}
