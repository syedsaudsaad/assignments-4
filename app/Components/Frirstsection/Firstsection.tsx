import React from 'react'
import Image from 'next/image'; 


const Firstsection: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-around p-6 bg-white sect">
        <div className="md:w-1/2 md:pr-4">
            <h2 className="text-2xl font-bold mb-2 ">IMPECCABLE CRAFTSMANSHIP AND FINESS</h2>
            <p className="text-gray-700 mb-4">
        An example of intricate workmanship and detail,
        elegant necklaces and long and short chains form 
        a part of our desirable collection.</p>
            <button className="bg-[#A29875] text-white py-2 px-4 rounded ">Explore Now</button>
        </div>
        
        <div className="mt-6 md:mt-0 md:w-1/2 md:pl-4 ml-96">
            <Image src="/images/s1.jpg" alt="logo" className="w-full md:w-[400px] h-auto rounded-md object-cover"></Image>
            

        </div>
    </section>
  )
}

export default Firstsection;
