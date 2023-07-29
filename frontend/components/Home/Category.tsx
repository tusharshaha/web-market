import Link from 'next/link';
import React from 'react';

const Category: React.FC = () => {
    return (
        <div className='container mx-auto mt-20 p-5 md:p-0 mb-20'>
            <h2 className='text-3xl font-bold text-center my-5'>Popular Category</h2>
            <h3 className='text-xl text-center my-5'>Many desktop publishing packages and web page editors</h3>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-3 mt-10'>
                <Link className='rounded-lg bg-gray-200 p-5 text-center hover:bg-primary hover:text-white transition-all duration-300' href="">Accounting/Finance (305)</Link>
                <Link className='rounded-lg bg-gray-200 p-5 text-center hover:bg-primary hover:text-white transition-all duration-300' href="">Accounting/Finance (305)</Link>
                <Link className='rounded-lg bg-gray-200 p-5 text-center hover:bg-primary hover:text-white transition-all duration-300' href="">Accounting/Finance (305)</Link>
                <Link className='rounded-lg bg-gray-200 p-5 text-center hover:bg-primary hover:text-white transition-all duration-300' href="">Accounting/Finance (305)</Link>
                <Link className='rounded-lg bg-gray-200 p-5 text-center hover:bg-primary hover:text-white transition-all duration-300' href="">Accounting/Finance (305)</Link>
                <Link className='rounded-lg bg-gray-200 p-5 text-center hover:bg-primary hover:text-white transition-all duration-300' href="">Accounting/Finance (305)</Link>
                <Link className='rounded-lg bg-gray-200 p-5 text-center hover:bg-primary hover:text-white transition-all duration-300' href="">Accounting/Finance (305)</Link>
                <Link className='rounded-lg bg-gray-200 p-5 text-center hover:bg-primary hover:text-white transition-all duration-300' href="">Accounting/Finance (305)</Link>
                <Link className='rounded-lg bg-gray-200 p-5 text-center hover:bg-primary hover:text-white transition-all duration-300' href="">Accounting/Finance (305)</Link>
                <Link className='rounded-lg bg-gray-200 p-5 text-center hover:bg-primary hover:text-white transition-all duration-300' href="">Accounting/Finance (305)</Link>
                <Link className='rounded-lg bg-gray-200 p-5 text-center hover:bg-primary hover:text-white transition-all duration-300' href="">Accounting/Finance (305)</Link>
                <Link className='rounded-lg bg-gray-200 p-5 text-center hover:bg-primary hover:text-white transition-all duration-300' href="">Accounting/Finance (305)</Link>
            </div>

        </div>
    );
};

export default Category;