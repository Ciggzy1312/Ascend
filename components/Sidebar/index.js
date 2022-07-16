import React from 'react'
import {
    MdOutlineSpaceDashboard,
    MdOutlineSettings,
    MdOutlineLogout,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaRegComments } from "react-icons/fa";

const Sidebar = () => {
    return (
        <div className='bg-[#fcfbff]'>
            <div className="p-6 w-1/4 h-screen bg-white z-20 top-0 -left-6 lg:left-0 lg:w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
                <div className="flex flex-col justify-start item-center">
                    <h1 className="text-center cursor-pointer font-bold text-[#885af8] border-b border-gray-100 pb-4">
                        Ascend
                    </h1>

                    <div className='flex flex-col justify-between'>
                        <div className=" my-4 border-b border-gray-100 pb-4">
                            <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-[#ecdef5] p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                                <MdOutlineSpaceDashboard className="text-2xl text-gray-400 group-hover:text-[#885af8] " />
                                <h3 className="text-base font-semibold ">
                                    Dashboard
                                </h3>
                            </div>
                            <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-[#ecdef5] p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                                <CgProfile className="text-2xl text-gray-400 group-hover:text-[#885af8] " />
                                <h3 className="text-base font-semibold ">
                                    Profile
                                </h3>
                            </div>
                            <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-[#ecdef5] p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                                <FaRegComments className="text-2xl text-gray-400 group-hover:text-[#885af8] " />
                                <h3 className="text-base font-semibold ">
                                    Comments
                                </h3>
                            </div>
                        </div>
                        <div className=" my-4 border-b border-gray-100 pb-4">
                            <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-[#ecdef5] p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                                <MdOutlineSettings className="text-2xl text-gray-400 group-hover:text-[#885af8] " />
                                <h3 className="text-base font-semibold ">
                                    Settings
                                </h3>
                            </div>
                            <div className="flex mb-2 justify-start items-center gap-4 pl-5 border border-gray-200  hover:bg-[#ecdef5] p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                                <MdOutlineLogout className="text-2xl text-gray-400 group-hover:text-[#885af8] " />
                                <h3 className="text-base font-semibold ">
                                    Logout
                                </h3>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Sidebar