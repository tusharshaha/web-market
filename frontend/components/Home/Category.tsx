import SectionTitle from '@/components/common/SectionTitle';
import Link from 'next/link';
import React from 'react';

const Category: React.FC = () => {
    const categories = new Array(12).fill(0);
    return (
        <div className='cus-container my-20'>
            <SectionTitle title='Popular Category' subTitle='Many desktop publishing packages and web page editors' />
            <div className='grid grid-cols-2 md:grid-cols-4 gap-3 mt-10'>
                {
                    categories.map((ele, i) => <Link key={i} className='rounded-lg bg-gray-200 p-5 text-center hover:bg-primary hover:text-white trans' href="">Accounting/Finance (305)</Link>)
                }
            </div>

        </div>
    );
};

export default Category;