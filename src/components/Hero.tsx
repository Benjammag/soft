"use client";
import React, { useState } from "react";
import Image from "next/image";

const Hero = () => {
    const images = [
        "/images/image1.svg",
        "/images/image2.svg",
        "/images/image3.svg",
        "/images/image4.svg",
        "/images/image5.svg",
        "/images/image6.svg",
        "/images/image7.svg",
        "/images/image8.svg",
        "/images/image9.svg",
        "/images/image10.svg",
        "/images/image11.svg",
        "/images/image12.svg",
        "/images/image13.svg",
        "/images/image14.svg",
        "/images/image15.svg",
    ];

    const categories = ["Dating", "Relationship", "Other"];
    const [selectedCategory, setSelectedCategory] = useState("All");

    return (
        // <div className="p-8">
        //     <h1 className="text-2xl font-bold mb-6 text-center">Card Grid</h1>
        //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        //         {images.map((src, index) => (
        //             <div
        //                 key={index}
        //                 className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center justify-center h-40"
        //             >
        //                 <Image
        //                     src={src}
        //                     alt={`Image ${index + 1}`}
        //                     width={150}
        //                     height={200}
        //                     className="rounded-md"
        //                 />
        //             </div>
        //         ))}
        //     </div>
        // </div>

        <div>
            <section className="flex">
                <div className="flex ml-9">
                    <Image
                        src="/images/personn.svg"
                        alt="person"
                        width={100}
                        height={100}
                        objectFit="cover"
                    />
                    <div className="ml-6">
                        <h1 className="font-semibold text-xs leading-10">Welcome, Temiloluwa</h1>
                        <div className="flex">
                            <div>
                                <h2 className="mb-2">My Profile Completeness</h2>
                                <Image
                                    src="/images/percentage.svg"
                                    alt="percentage"
                                    width={176}
                                    height={8}
                                    objectFit="cover"
                                />
                            </div>
                            <div className="ml-5 mt-6">60%</div>
                        </div>
                    </div>
                </div>
                <div className="flex w-[242px] h-[24px] pt-[38px] mx-[400px]">
                    <div className="w-[107px]">
                        <h1>Relationship Type:</h1>
                    </div>
                    <div className="w-48">
                        <select
                            className="w-full p-2 border rounded-md bg-white text-gray-800 mx-10"
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                        >
                            {categories.map((category, index) => (
                                <option key={index} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </section>
            <section>
                <div className="p-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {images.map((src, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg overflow-hidden w-full h-48 relative"
                            >
                                <Image
                                    src={src}
                                    alt={`Image ${index + 1}`}
                                    width={190}
                                    height={190}
                                    objectFit="cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
    // <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

};

export default Hero;
