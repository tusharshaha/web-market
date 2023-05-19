import React from 'react';

const Footer = () => {
    return (
        <>
            <div className='bg-blue-950 text-white'>
                <footer className="footer py-10 cus-container">
                    <div>
                        <span className="footer-title">Services</span>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </div>
                    <div>
                        <span className="footer-title">Company</span>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </div>
                    <div>
                        <span className="footer-title">Legal</span>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </div>
                </footer>
            </div>

            <div className='border-t bg-blue-950 text-white border-t border-slate-500'>
                <footer className="footer py-4 cus-container">
                    <div className="items-center grid-flow-col">
                        <button>logo</button>
                        <p>ACME Industries Ltd. <br />Providing reliable tech since 1992</p>
                    </div>
                    <div className="md:place-self-center md:justify-self-end">
                        <div className="grid grid-flow-col gap-4">
                            social logo
                        </div>
                    </div>
                </footer>
            </div>

        </>
    );
};

export default Footer;