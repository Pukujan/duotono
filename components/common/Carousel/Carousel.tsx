"use client";
import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import { Thumb } from "./CarouselThumbs";
import "./css/carousel.css";
import Image from "next/image";
import { DotButton } from "./DotButton";

type PropType = {
  slides: number[],
  options?: EmblaOptionsType;
  images?: string[]
};

const Carousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [carouselClassName, setCarouselClassName] =
    useState("embla flex h-full");
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: false,
    axis: "y",
  },[WheelGesturesPlugin()]);

  const images = props.images || [
    'https://images.unsplash.com/photo-1682687220975-7b2df674d3ce',
    'https://images.unsplash.com/photo-1691434864891-859ea2f60365',
    'https://images.unsplash.com/photo-1689870215829-3e94e28ec328',
    'https://images.unsplash.com/photo-1691379635079-9f438036ea58'
  ]


  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();
    emblaMainApi.on("select", onSelect);
    emblaMainApi.on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  useEffect(() => {
    const condition = window.location.pathname.startsWith("/products");
    let value = condition
      ? "embla flex h-full flex-row-reverse"
      : "embla flex h-full";
    setCarouselClassName(value);
  }, []);

  const imageByIndex = (index: number): string => images[index % images.length]


  return (
    <div className={carouselClassName}>
      <div
        className="embla__viewport flex-1 md:flex-[0.85] relative"
        ref={emblaMainRef}
      >
        <div className="embla__container">
          {slides.map((index) => (
            <div
              className="embla__slide"
              key={index}
            >
              <Image
                className="embla__slide__img"
                src={imageByIndex(index)}
                alt="Your alt text"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%"}}
              />
            </div>
          ))}
        </div>

        <div className="embla__dots">
          {slides.map((_, index) => (
            <DotButton
              key={index}
              selected={index === selectedIndex}
              onClick={() => onThumbClick(index)}
            />
          ))}

        </div>
      </div>

      <div className="embla-thumbs hidden md:flex md:flex-[0.15]">
        <div
          className="embla-thumbs__viewport"
          ref={emblaThumbsRef}
        >
          <div className="embla-thumbs__container">
            {slides.map((index) => (
              <Thumb
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                index={index}
                imgSrc={imageByIndex(index)}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
