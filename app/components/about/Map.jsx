import React from 'react'

export default function Map() {
  return (
    <div
            className=" items-center overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-lg max-w-6xl mx-auto bg-white my-6 font-[sans-serif]">
           
            <div className="z-10 relative h-[700px] max-md:min-h-[350px]">
                <iframe src="https://maps.google.com/maps?q=2023+Park+Avenue+W+Hainsport,+New+Jersey+08036&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" frameBorder="0"
                    allowFullScreen></iframe>
            </div>
        </div>
  )
}
