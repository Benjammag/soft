"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { FaPen, FaBars } from "react-icons/fa";

const Prof = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

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

    return (
        <div className="flex">
            {/* Sidebar */}
            <div className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white p-6 transform ${sidebarOpen ? "translate-x-0" : "-translate-x-64"} transition-transform duration-300 ease-in-out`}>
                <button onClick={toggleSidebar} className="text-xl">✖</button>
                <ul className="mt-6 space-y-4">
                    <li>Dashboard</li>
                    <li>Settings</li>
                    <li>Profile</li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="w-full lg:pl-64 transition-all">
                {/* Navbar */}
                <div className="flex items-center justify-between p-4 bg-gray-100 shadow-md">
                    <button onClick={toggleSidebar} className="text-xl">
                        <FaBars />
                    </button>
                    <h1 className="text-lg font-semibold">Profile</h1>
                </div>

                {/* Profile Section */}
                <section className="relative w-full h-64">
                    <Image src="/images/profile-cover.png" alt="Profile Cover" layout="fill" objectFit="cover" className="absolute" />
                    <div className="absolute top-4 left-4">
                        <button className="bg-black text-white px-4 py-2 rounded-lg">Back</button>
                    </div>
                </section>

                {/* About Me */}
                <section className="p-6">
                    <h2 className="text-xl font-semibold">About Me</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                        {aboutMeData.map((item, index) => (
                            <div key={index} className="flex items-center bg-white p-4 shadow rounded-lg">
                                <Image src={item.icon} alt={item.label} width={24} height={24} className="mr-2" />
                                <span className="text-gray-700">{item.label}: </span>
                                <span className="ml-2 font-medium">{item.value}</span>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Prof;
