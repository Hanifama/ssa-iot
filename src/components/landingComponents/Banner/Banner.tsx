"use client";

import React from 'react';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import bannerData from '@/lib/mocks/bannerData.json';
import { BannerItem } from '@/lib/types/banner';

const Banner: React.FC = () => {
  const data: BannerItem[] = bannerData as BannerItem[];

  return (
    <div className="text-center mb-8" id='product'>
      <h2 className="font-bold">Produk Kami</h2>
      <h1 className="text-4xl font-bold text-gray-600 mb-4">Inovasi untuk Masa Depan: Produk IoT Kami</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        initialSlide={2}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {data.map((item) => (
          <SwiperSlide
            key={item.id}
            className="banner__card relative p-4 bg-white border border-gray-200 rounded-lg shadow-lg"
            style={{ width: '300px', height: '300px' }}
          >
            <Image
              src={item.imgSrc}
              alt={item.alt}
              fill              
              className="rounded-lg object-cover"
            />
            <h4 className="absolute top-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 text-lg font-semibold rounded">
              {item.title}
            </h4>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
