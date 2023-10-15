import Link from 'next/link';
import React, { useState } from 'react';
import { FaFacebookF, FaSkype, FaTwitter } from 'react-icons/fa';
import { AiTwotoneHeart } from 'react-icons/ai';
import { TiArrowSortedUp, TiArrowSortedDown } from 'react-icons/ti';

const quickLinks = [
    {
        title: "Company",
        links: [
            { path: "", title: "About Us" },
            { path: "", title: "Why Web Market" },
            { path: "", title: "Contact With Us" },
            { path: "", title: "Our Partners" },
        ]
    },
    {
        title: "Resources",
        links: [
            { path: "", title: "Quick Links" },
            { path: "", title: "Job Packages" },
            { path: "", title: "Post New Job" },
            { path: "", title: "Job Listing" },
        ]
    },
    {
        title: "Legal",
        links: [
            { path: "", title: "Affiliate" },
            { path: "", title: "Blog" },
            { path: "", title: "Help & Support" },
            { path: "", title: "Careers" },
        ]
    },
    {
        title: "Products",
        links: [
            { path: "", title: "Start a Trial" },
            { path: "", title: "How It Works" },
            { path: "", title: "Pirce & Planning" },
            { path: "", title: "Features" },
        ]
    },
]

interface Accordion {
    isOpen: boolean,
    id: number
}

const Footer = () => {
    const [collapse, setCollapse] = useState({} as Accordion);
    const handleCollapse = (id: number) => {
        setCollapse((prev) => ({
            isOpen: prev.id === id ? false : true,
            id
        }))
    };
    return (
        <>
            <div className='bg-slate-900 text-white'>
                <div className="cus-container py-16">
                    <div className="grid grid-cols-5 gap-8 lg:gap-4">
                        <div className='lg:col-span-1 sm:col-span-2 sm:text-left col-span-5 px-5 sm:p-0 text-center'>
                            <h2 className='text-4xl'>Logo</h2>
                            <p className="text-slate-200 mt-8">Unlock success with our web marketplace offering a plethora of essential web services.</p>
                            <div className='flex items-center justify-center sm:justify-normal gap-3 mt-6'>
                                <div className='p-3 rounded-full outline outline-slate-200 outline-2 trans hover:outline-primary hover:bg-primary'><FaFacebookF /></div>
                                <div className='p-3 rounded-full outline outline-slate-200 outline-2 trans hover:outline-primary hover:bg-primary'><FaSkype /></div>
                                <div className='p-3 rounded-full outline outline-slate-200 outline-2 trans hover:outline-primary hover:bg-primary'><FaTwitter /></div>
                            </div>
                        </div>
                        <div className='lg:col-span-4 col-span-5'>
                            <div className='grid grid-cols-1 sm:grid-cols-4 gap-4'>
                                {
                                    quickLinks.map((ele, i) => (
                                        <div key={i} className='flex justify-start lg:justify-center'>
                                            <div className='w-full sm:w-auto'>
                                                <div onClick={() => handleCollapse(i)} className='bg-slate-800 sm:bg-inherit py-3 px-5 sm:p-0 flex items-center justify-between'>
                                                    <h2 className='text-xl sm:text-3xl font-semibold'>{ele.title}</h2>
                                                    <span className='inline sm:hidden'>
                                                        {collapse.isOpen && collapse.id === i ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
                                                    </span>
                                                </div>
                                                <ul className={`${collapse.isOpen && collapse.id === i ? "h-[180px] p-5 border-t" : "h-0"} sm:h-auto mt-0 sm:mt-8 sm:p-0 bg-slate-800 sm:bg-inherit overflow-hidden space-y-3 text-slate-200 sm:border-none border-slate-500 trans`}>
                                                    {
                                                        ele.links.map((link, i) => (
                                                            <li key={i}>
                                                                <Link href={link.path} className='trans hover:text-primary'>{link.title}</Link>
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className='cus-container border-t border-slate-700 py-5'>
                    <div className='flex items-center justify-center text-slate-200 gap-1'>
                        &#169; 2023 Web Market. Made with <span className='text-primary'><AiTwotoneHeart /></span> by Tushar.
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;