import React from 'react'

import Questions from '../components/faqs/Questions'
import BannerOne from '../components/homePage/BannerOne'
import BannerTwo from '../components/homePage/BannerTwo'
export const metadata = {
  title: "Standex traders | FAQs",
  description: "This is FAQs page of standex traders",
};
export default function page() {
  return (
    <>
   <Questions/>
   <BannerOne/>
   <BannerTwo/>
   </>
  )
}
