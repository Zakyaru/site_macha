import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "./ImageCarousel.css"

export default function ImageCarousel({ images }) {
  return (
    <div className="max-w-4xl mx-auto">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        className="rounded-lg overflow-hidden"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <img
              src={img}
              alt={`Slide ${i}`}
              className="w-full h-[400px] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
