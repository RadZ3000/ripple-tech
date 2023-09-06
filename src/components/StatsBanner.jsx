import React from "react";

const StatsBanner = () => {

    const stats = [
        {
            data: "1K",
            title: "Managed Accounts"
        },
        {
            data: "500+",
            title: "Completed Websites"
        },
        {
            data: "7+",
            title: "Years of Development"
        },
        {
            data: "#1",
            title: "Healthcare Tech Agency"
        },
    ]


    return (
        <section className="py-4 text-white bg-white" id='Stats'>
                <div className="mt-1">
                    <ul className="flex flex-col items-center justify-center gap-y-10 sm:flex-row sm:flex-wrap">
                        {
                            stats.map((item, idx) => (
                                <li key={idx} className="text-center px-12 md:px-16">
                                    <h4 className="text-4xl text-indigo-600 font-semibold">{item.data}</h4>
                                    <p className="mt-3 font-medium text-black">{item.title}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
        </section>
    )
};

export default StatsBanner;
