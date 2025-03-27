// import React from "react";
// import Navbar from "./Navbar";

// interface LayoutProps {
//     children: React.ReactNode;
// }

// const Layout: React.FC<LayoutProps> = ({ children }) => {
//     return (
//         <>
//             <Navbar />
//             <main className="p-4">{children}</main>
//         </>
//     );
// };

// export default Layout;
"use client";
import Link from "next/link";
import React from "react";
import Navbar from "./Navbar";
import { useSidebar } from "@/components/SidebarContext";
import Image from "next/image";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const { isOpen, toggleSidebar } = useSidebar();

    return (
        <div className="relative">
            {/* Navbar */}
            <Navbar />

            {/* Wrapper to keep toggle button in a fixed position under navbar */}
            <div className="flex items-start">
                {/* Sidebar (Positioned Below Navbar) */}
                <div
                    className={`flex flex-col items-center w-64 bg-[#FFFFFF] text-[#000000] transition-transform duration-300 mt-16 h-[calc(100vh-4rem)] ${isOpen ? "translate-x-0" : "-translate-x-full"
                        }`}
                >
                    {/* <button onClick={toggleSidebar} className="p-2 bg-red-500 m-2 rounded">
                        ✖
                    </button> */}
                    {/* <div className="w-[88px] h-[110.91px] pl-[25px] ml-[5px] flex flex-col items-center">
                        <div>
                            <Image src="/images/pic.svg" alt="profile picture" width={75} height={75.91} />
                        </div>
                        <div className="w-[88px] h-[19px] pt-[10px] text-center">
                            <h1 className="text-sm font-medium">Temiloluwa</h1>
                        </div>
                    </div> */}
                    <div className="flex flex-col items-center w-[88px]">
                        <Image src="/images/pic.svg" alt="profile picture" width={75} height={75.91} />
                        <h1 className="text-sm font-medium mt-2 text-center">Temiloluwa</h1>
                    </div>
                    <ul className="p-4 space-y-2 justify-center">
                        <li className="py-2">
                            <div className="flex items-center bg-[#EF2424] text-white px-4 py-2 rounded-md hover:bg-red-700 transition">
                                <Link href="/dashboard" className="flex"><Image className="mr-5" src="/images/menu.svg" alt="menu" width={20} height={20} />Dashboard</Link>
                            </div>
                        </li>
                        <li className="py-2">
                            <div className="flex items-center gap-2 px-4 py-2 rounded-md text-gray-800 hover:bg-[#EF2424] transition">
                                <Link href="/profile" className="flex"><Image className="mr-5" src="/images/user.svg" alt="user" width={20} height={20} />My Profile</Link>

                            </div>
                        </li>
                        <li className="py-2">
                            <div className="flex items-center gap-2 px-4 py-2 rounded-md text-gray-800 hover:bg-[#EF2424] transition">
                                <Image className="mr-5" src="/images/heart.svg" alt="favorites" width={20} height={20} />Favorites
                            </div>
                        </li>
                        <li className="py-2">
                            <div className="flex items-center gap-2 px-4 py-2 rounded-md text-gray-800 hover:bg-[#EF2424] transition">
                                <Image className="mr-5" src="/images/mutuals.svg" alt="my mutuals" width={20} height={20} />My Mutuals
                            </div>
                        </li>
                        <li className="py-2">
                            <div className="flex items-center gap-2 px-4 py-2 rounded-md text-gray-800 hover:bg-[#EF2424] transition">
                                <Image className="mr-5" src="/images/schedule.svg" alt="my subcribed" width={20} height={20} />My Subcribed
                            </div>
                        </li>
                        <li className="py-2">
                            <div className="flex items-center gap-2 px-4 py-2 rounded-md text-gray-800 hover:bg-[#EF2424] transition">
                                <Image className="mr-5" src="/images/interest.svg" alt="interested in me" width={20} height={20} />Interested in me
                            </div>
                        </li>
                        <li className="py-2">
                            <div className="flex items-center gap-2 px-4 py-2 rounded-md text-gray-800 hover:bg-[#EF2424] transition">
                                <Image className="mr-5" src="/images/settings.svg" alt="settings" width={20} height={20} />Settings
                            </div>
                        </li>
                        <li className="py-2">
                            <div className="flex items-center gap-2 px-4 py-2 rounded-md text-gray-800 hover:bg-[#EF2424] transition">
                                <Image className="mr-5" src="/images/log.svg" alt="logout" width={20} height={20} />Logout
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Sidebar Toggle Button (Placed in the layout, NOT fixed) */}
                <div className="mt-16 ml-4">
                    <button
                        onClick={toggleSidebar}
                        className="p-3 text-gray-800 rounded shadow-lg"
                    >
                        ☰
                    </button>
                </div>

                {/* Main Content */}
                <main className="p-4 flex-1 mt-16">{children}</main>
            </div>
        </div>
    );
};

export default Layout;

