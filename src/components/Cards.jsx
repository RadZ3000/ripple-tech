import React from 'react';
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        {/* <h2>Website maintenance packages
for every size organization</h2> */}
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
              <h2 className='text-2xl font-bold text-center '>DESIGN LAUNCHPAD</h2>
              <p className='text-center text-sm font-bold text-[#FF6363] '>Entry Level</p>
              <p className='text-center text-4xl font-bold py-8'>$149</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8'>Our comprehensive "Business Launchpad" package helps our clients build a high end website with all the modern features. Professional design, SEO, Social Networking, blogging and content management system.</p>

              </div>
              <button className='bg-[#FF6363] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>FULL DETAILS</button>
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/" />
              <h2 className='text-2xl font-bold text-center'>MAINTENANCE BOOST</h2>
              <p className='text-center text-sm font-bold text-[#FF6363] '>Advanced (Recommended)</p>
              <p className='text-center text-4xl font-bold py-8'>$149</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8'>The "Business Boost" Package is designed around companies that want more out of their website presence. This may include dynamic features such as a shopping cart, forum or online catalog.</p>

              </div>
              <button className='bg-black text-[#FF6363] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" />
              <h2 className='text-2xl font-bold text-center'>DESIGN + MAINTENANCE BLAST</h2>
              <p className='text-center text-sm font-bold text-[#FF6363] '>Advanced (Recommended)</p>
              <p className='text-center text-4xl font-bold py-8'>$149</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8'>Combining our award winning website design process with online marketing, copyrighting, video production, the list goes on. FDI Creative is a full service marketing agency and have over 25 years of experience to get the job done.</p>

              </div>
              <button className='bg-[#FF6363] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
          </div>
      </div>
    </div>
  );
};

export default Cards;
