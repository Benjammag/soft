import React from "react";
import Image from 'next/image';
import { Button } from "@/components/ui/button"; // if you're using shadcn/ui, otherwise use a regular <button>
import { Search, Filter } from "lucide-react"; // icons (optional)

const Navbar = () => {
    return (
        <nav className="bg-[#FFFFFF] p-4 text-black border-gray-200 border-2 drop-shadow-[1px_1px_2px_rgba(0, 0, 0, 0.25)] h-[100px]">
            <div className="container flex justify-between">
                <div className="h-[98px] w-[194px] gap-[25px] border-[1px] -ml-5 -mb-4 -mt-4 border-gray-200 border-2 drop-shadow-[1px_1px_2px_rgba(0, 0, 0, 0.25)]">
                    <div className="relative w-[194px] h-[98px]"><Image className="object-contain p-[5px] relative w-[194px] h-[100px]"
                        src="/images/logoo.svg"
                        alt="logo"
                        fill />

                    </div>
                </div>
                <div className="space-x-1 w-4/5 flex justify-between items-center p-4 rounded-xl pt-3 pl-72">
                    <div className="flex w-[312px] h-[33px] gap[25px]">
                        <div className="flex items-center rounded-3xl border-2 border-[rgba(62,123,234,1)] w-[202px] h-8 px-[21px] py-2 gap-[10px] text-[rgba(227,235,241,0.3)]">
                            <Search className="text-[#00000099] mr-2" size={20} />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full focus:outline-none text-[#00000099]"
                            />
                        </div>
                        <Button variant="outline" className="flex items-center ml-6 rounded-3xl w-[85px] h-[33px] border border-[#00000099] p-[10px]">
                            <Filter className="gap-[10px] w-[65px] h-[15px]" />
                            Filter
                        </Button>
                    </div>
                    <div className="flex w-[100px] h-[50.61px] gap-6">
                        <div className="gap-[29px] pt-3"><Image
                            src="/images/alarm.png"
                            alt="logo"
                            width={25}
                            height={25} /></div>
                        <div className="gap-4"><Image
                            src="/images/image.png"
                            alt="logo"
                            width={50}
                            height={51.61} /></div>
                    </div>
                </div>
            </div>
        </nav >
    );
};

export default Navbar;
