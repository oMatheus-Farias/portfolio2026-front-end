'use client';

import { useRef } from 'react';

export function HtmlClassVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      className="h-full rounded-3xl border border-[##dbdbdb] object-cover shadow-md dark:border-[#2B2B2B]"
      style={{
        filter: 'brightness(0.8)',
        imageRendering: 'auto',
      }}
    >
      <source src="/videos/html-class.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
