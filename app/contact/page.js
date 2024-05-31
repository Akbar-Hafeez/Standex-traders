import React from 'react'
import FormOne from '../components/homePage/FormOne'
import Map from '../components/about/Map'
import BannerTwo from '../components/homePage/BannerTwo'
export const metadata = {
  title: "Standex traders | Contact ",
  description: "This is contact page of standex traders",
};
export default function page() {
  return (
   <>
   <FormOne/>
   <Map/>
   <BannerTwo/>
   </>
  )
}
