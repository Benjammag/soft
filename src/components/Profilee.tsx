import Image from 'next/image';
import React from 'react';
import { FaPen } from "react-icons/fa";

const Profilee = () => {
    const aboutMeData = [
        { icon: "/images/gender.svg", label: "Gender", value: "Male" },
        { icon: "/images/age.svg", label: "Age", value: "27" },
        { icon: "/images/ocu.svg", label: "Occupation", value: "Engineer" },
        { icon: "/images/rel.svg", label: "Relationship", value: "Single" },
        { icon: "/images/loc.svg", label: "Location", value: "Lagos" },
        { icon: "/images/height.svg", label: "Height range", value: "5'5 - 6'0" },
        { icon: "/images/weight.svg", label: "Weight range", value: "60 - 70kg" },
        { icon: "/images/relig.svg", label: "Religion", value: "Christianity" },
        { icon: "/images/nation.svg", label: "Nationality", value: "Nigerian" },
    ];

    const interests = [
        { src: "/images/travel.svg", alt: "Travel" },
        { src: "/images/drawing.svg", alt: "Drawing" },
        { src: "/images/history.svg", alt: "History" },
        { src: "/images/wood.svg", alt: "Woodwork" },
        { src: "/images/photo.svg", alt: "Photography" },
        { src: "/images/poetry.svg", alt: "Poetry" },
        { src: "/images/knit.svg", alt: "Knitting" },
    ];

    const hobbies = [
        { src: "/images/beach.svg", alt: "Beach" },
        { src: "/images/biking.svg", alt: "Biking" },
        { src: "/images/cooking.svg", alt: "Cooking" },
        { src: "/images/dancing.svg", alt: "Dancing" },
        { src: "/images/museum.svg", alt: "Museum Visits" },
    ];
    return (
        <div>
            <div>
                <section>
                    <div className='relative w-full h-64 md:h-96 lg:h-[198px]'>
                        <Image
                            src="/images/profile-cover.png"
                            alt='profile-image'
                            layout='fill'
                            objectFit='cover'
                            className='absolute' />
                        <div className="absolute top-4 left-0 right-0 flex justify-between px-4">
                            <button className="bg-[#00000099] text-[#FFFFFF] px-4 py-2 rounded-lg shadow-md">Back</button>
                            <button className="bg-[#00000099] text-[#FFFFFF] px-4 py-2 rounded-lg shadow-md">Update Cover</button>
                        </div>
                        <div className='absolute top-25 left-90 w-[160px] h-[49px] font-semibold text-base leading[100%]'>
                            <div className='flex justify-between'>
                                <h1>Temiloluwa, 27</h1><Image src="/images/edit.svg" alt='edit' width={20} height={20} />
                            </div>
                            <h1>Lagos</h1>
                        </div>
                        <div className='absolute top-18 left-30'>
                            <Image
                                src="/images/person.png"
                                alt='profile'
                                width={180}
                                height={180}
                            />
                            <Image
                                src="/images/add.svg"
                                alt='add'
                                width={30}
                                height={30}
                                className='absolute left-40 top-40'
                            />
                        </div>
                        <div className="absolute top-53 right-0 flex justify-between px-4 gap-[14px]">
                            <button className="bg-[#EF2424] text-[#FFFFFF] px-4 py-2 rounded-3xl shadow-md">Edit Profile</button>
                            <button className="bg-[#EF2424] text-[#FFFFFF] px-4 py-2 rounded-3xl shadow-md">Edit Match Setup</button>
                        </div>
                    </div>
                </section>
                <section className='pt-25'>
                    <div className="relative w-full max-w-md">
                        {/* Textarea */}
                        <textarea
                            className="w-[486px] h-[81px] text-[#00000099] py-[14px] px-[31px] border-[0.6px] border-[#D9D9D9] font-medium resize-none text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 gap-[10px]"
                            placeholder="A few words about myself"
                        ></textarea>

                        {/* Pen Icon */}
                        <FaPen className="absolute top-4 left-4 text-[#00000099]" />
                    </div>

                    <div className="flex w-full max-w-[486px] h-[99px] py-1 px-3 gap-[10px] border border-[#D9D9D9] rounded-lg">
                        <Image className="rounded-lg" src="/images/person.png" alt="Image 1" width={70} height={70} />
                        {[...Array(4)].map((_, index) => (
                            <Image
                                key={index}
                                className="rounded-lg border border-[#D9D9D9]"
                                src="/images/add-photo.png"
                                alt={`Image ${index + 2}`}
                                width={70}
                                height={70}
                            />
                        ))}
                    </div>

                </section>
                <section className="w-[1017px] h-[408px] flex justify-between">
                    {/* Hobbies Card */}
                    <div className="w-[350px] h-[100%] bg-white p-6 rounded-lg shadow-md">
                        {/* Header */}
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-semibold text-gray-900">My Hobbies</h2>
                            <Image src="/images/edit.svg" alt="Edit" width={24} height={24} />
                        </div>

                        {/* Hobbies Grid */}
                        <div className="grid grid-cols-4 gap-4">
                            {hobbies.slice(0, 4).map((item, index) => (
                                <div key={index} className="flex justify-center">
                                    <Image src={item.src} alt={item.alt} width={65} height={65} />
                                </div>
                            ))}
                        </div>
                        {/* Second row (Indented icon) */}
                        <div className="mt-4 pl-4">
                            <Image src={hobbies[4].src} alt={hobbies[4].alt} width={65} height={65} />
                        </div>
                    </div>

                    {/* Interests Card */}
                    <div className="w-[350px] h-[100%] bg-white p-6 rounded-lg shadow-md">
                        {/* Header */}
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-semibold text-gray-900">My Interests</h2>
                            <Image src="/images/edit.svg" alt="Edit" width={24} height={24} />
                        </div>

                        {/* Interests Grid */}
                        <div className="grid grid-cols-4 gap-4">
                            {interests.map((item, index) => (
                                <div key={index} className="flex justify-center">
                                    <Image src={item.src} alt={item.alt} width={65} height={65} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* About Me Card */}
                    <div className="w-[350px] h-[100%] bg-white p-6 rounded-lg shadow-md">
                        {/* Header */}
                        <div className="w-full mb-4">
                            <h2 className="text-lg font-semibold text-gray-900">About Me</h2>
                        </div>

                        {/* Information List */}
                        <div className="space-y-3">
                            {aboutMeData.map((item, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <Image src={item.icon} alt={item.label} width={24} height={24} />
                                    <div className="flex w-full items-center">
                                        <span className="text-sm font-normal text-gray-700 w-32">{item.label}:</span>
                                        <span className="text-sm font-medium text-gray-900">{item.value}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default Profilee;
