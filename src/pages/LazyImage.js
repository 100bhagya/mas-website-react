import React, { useEffect, useRef } from "react";

const LazyImage = ({ src, alt }) => {
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            imgRef.current.src = src;
            observer.unobserve(imgRef.current);
          }
        });
      },
      {
        rootMargin: "0px 0px 200px 0px",
      }
    );

    observer.observe(imgRef.current);

    return () => {
      observer.unobserve(imgRef.current);
    };
  }, [src]);

  return <img ref={imgRef} src="placeholder.jpg" alt={alt} loading="lazy" />;
};

export default LazyImage;
