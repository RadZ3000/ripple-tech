import React from 'react'

function Prices() {


        const plans = [
            {
                name: "Web Design",
                price: 300,
                features: [
                    "Build custom HTML/CSS/JavaScript website",
                    "Code React, Angular or Vue website",
                    "WordPress sites 20 or less pages",
                    "UX wire-frame of site",
                    "SEO optimization",
                    "6 months plan Commitment",

                ],
            },
            {
                name: "Web Maintenance",
                price: 400,
                features: [
                    "Daily full-site backup and storage",
                    "Daily security scans",
                    "Urgent support for website hackings",
                    "Security patches and CMS upgrades",
                    "Expertise of a 500+ digital strategy team",
                    "6 months plan Commitment",
                ],
            },
            {
                name: "Web Design & Web Maintenance",
                price: 600,
                features: [
                    "CMS (Drupal, WordPress or Joomla)",
                    "SEO optimization",
                    "Create custom code components",
                    "Daily full-site backup and storage",
                    "Security patches and CMS upgrades",
                    "6 months plan Commitment",
                ],
            },
        ];

        return (
            <section className='py-1 text-white' id='Prices'>
                <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                    <div className='relative max-w-xl mx-auto sm:text-center'>
                        <h3 className='text-3xl font-semibold sm:text-4xl text-red-500 '>
                            Monthly Pricing
                        </h3>
                        <div className='mt-3 max-w-xl'>
                            <p className='m-8' >
                            Get the best of both worlds with Ripple’s website maintenance service plans.  Learn more about our custom website design & maintenance packages
                            </p>
                        </div>
                    </div>
                    <div className='mt-16 space-y-6 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3'>
                        {
                            plans.map((item, idx) => (
                                <div key={idx} className='relative flex-1 flex items-stretch flex-col p-8 rounded-xl border-2'>
                                    <div>
                                        <span className='text-indigo-600 font-medium'>
                                            {item.name}
                                        </span>
                                        <div className='mt-4 text-white text-3xl font-semibold'>
                                            ${item.price} <span className="text-xl text-white font-normal">/mo</span>
                                        </div>
                                    </div>
                                    <ul className='py-8 space-y-3'>
                                        {
                                            item.features.map((featureItem, idx) => (
                                                <li key={idx} className='flex items-center gap-5'>
                                                    <svg
                                                        xmlns='http://www.w3.org/2000/svg'
                                                        className='h-5 w-5 text-indigo-600'
                                                        viewBox='0 0 20 20'
                                                        fill='currentColor'>
                                                        <path
                                                            fill-rule='evenodd'
                                                            d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                                            clip-rule='evenodd'></path>
                                                    </svg>
                                                    {featureItem}
                                                </li>
                                            ))
                                        }
                                    </ul>
                                    <div className="flex-1 flex items-end">
                                    <a href="#Contact">
                                        <button className='px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 text-white bg-red-500 hover:bg-indigo-500 active:bg-indigo-700'>
                                            Get Started
                                        </button>
                                        </a>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        );
    };


export default Prices