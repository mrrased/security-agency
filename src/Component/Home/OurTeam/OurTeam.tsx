import React from 'react';
import { Container } from '@mui/material';
import img1 from '../../../Images/team1.jpg';
import img2 from '../../../Images/team2.jpg';
import img3 from '../../../Images/team3.jpg';

const OurTeam = () => {
    return (
        <Container maxWidth="lg">
            <h2 className='font-normal text-[#36187d] Bellota_Text text-[2.4rem] text-left mb-10'>Our Team</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-7'>
                <div className='flex justify-center p-6 md:p-5 shadow-boxShadow rounded-[40px] transition duration-700 hover:bg-white hover:duration-700 hover:cursor-pointer md:py-16'>
                    <div>
                        <img src={img1} alt="" className='rounded-full w-[160px] h-[160px] mx-auto' />
                        <h3 className='font-medium text-[#36187d] Bellota_Text text-[1.5rem] text-center mt-5'>James Ford</h3>
                        <p className='font-normal text-[#6c758f] Bellota_Text text-[1.2rem] text-center'>General Director</p>
                    </div>
                </div>
                <div className='flex justify-center p-6 md:p-5 shadow-boxShadow rounded-[40px] transition duration-700 hover:bg-white hover:duration-700 hover:cursor-pointer md:py-16'>
                    <div>
                        <img src={img2} alt="" className='rounded-full w-[160px] h-[160px] mx-auto' />
                        <h3 className='font-medium text-[#36187d] Bellota_Text text-[1.5rem] text-center mt-5'>Ann Brown</h3>
                        <p className='font-normal text-[#6c758f] Bellota_Text text-[1.2rem] text-center'>Manager</p>
                    </div>
                </div>
                <div className='flex justify-center p-6 md:p-5 shadow-boxShadow rounded-[40px] transition duration-700 hover:bg-white hover:duration-700 hover:cursor-pointer md:py-16'>
                    <div>
                        <img src={img3} alt="" className='rounded-full w-[160px] h-[160px] mx-auto' />
                        <h3 className='font-medium text-[#36187d] Bellota_Text text-[1.5rem] text-center mt-5'>Ben Jason</h3>
                        <p className='font-normal text-[#6c758f] Bellota_Text text-[1.2rem] text-center'>Developerr</p>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default OurTeam;