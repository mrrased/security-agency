import React from 'react';

const BannerTop = () => {
    return (
        <div className="bg-bacgroundImage w-full bg-no-repeat background_Position bg-cover bg-[#0196e3] bg-blend-soft-light mt-[150px]">
            <div className='grid grid-cols-12 py-[100px] md:py-[240px] lg:px-20  '>
                <div className='lg:col-span-2'></div>
                <div className='col-span-12 lg:col-span-8 text-center p-6'>
                    <h1 className='text-white font-medium Bellota_Text text-[4rem]'>CCTV Cameras</h1>
                    <p className='text-gray_custom mb-8'>LifeSmart is among the top brand list to provide smart home products and solutions on the global market. We offer complete categories of smart devices, integrating advanced IoT technologies and cloud services, to form the base of both smart home solutions and other industrial solutions.</p>
                    <div className='lg:col-span-2 space-x-4'>
                        <a href="" className='px-10 py-4 bg-[#36187d] cursor-pointer text-white Bellota_Text text-[1.1rem] rounded-full hover:bg-[#2c116b] transition duration-700 hover:duration-700 hover:cursor-pointer block md:inline mb-6'>Red More</a>
                        <a href="" className='px-10 py-4 bg-[#fafafa] cursor-pointer text-[#7a7a7a] Bellota_Text text-[1.1rem] rounded-full hover:bg-[#f3efef] transition duration-700 hover:duration-700 hover:cursor-pointer'>Get Started</a>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default BannerTop;