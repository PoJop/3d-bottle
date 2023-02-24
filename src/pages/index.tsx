import React from 'react';
import { Header } from '@/widgets';
import { FullScreenSwiper } from '@/widgets/full-screen-swiper';
import { GetServerSideProps } from 'next';
import data from '../../public/test-data/swiper.json';


export default function Home() {
  console.log(data)
  return (

    <>
      <Header />
      <FullScreenSwiper data={data} />
      {/* <div className='h-[500vh]'>
        Что то другое
      </div> */}
    </>
  )
}