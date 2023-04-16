import React from 'react';
import Container from '@mui/material/Container';
import  'tw-elements';


const AboutUs = () => {
    return (
        <Container maxWidth="lg" className='mt-40 mb-40'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='px-6'>
                    <h4 className='font-normal text-[#6c758f] Bellota_Text text-[1.2rem] text-left '>About Us</h4>
                    <h2 className='font-normal text-[#36187d] Bellota_Text text-[1.8rem] md:text-[2.8rem]'>Secure Features</h2>
                    <p className='font-normal text-[#6c758f] Bellota_Text text-[1.2rem] text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elitdo eiusmod temporeum dicant partem scripserit.</p>
                </div>
                <div>
                    <h5 className='font-normal text-[#6c758f] Bellota_Text text-[1.2rem] text-left '>Home Security</h5>
                    <div className="w-full bg-neutral-200 dark:bg-neutral-600 mb-10 rounded-md">
                        <div className="bg-[#36187d] rounded-l-md p-0.5 text-center text-xs font-medium leading-none text-white w-[92%] ">
                            92%
                        </div>
                    </div>
                    <h5 className='font-normal text-[#6c758f] Bellota_Text text-[1.2rem] text-left '>Office Security</h5>
                    <div className="w-full bg-neutral-200 dark:bg-neutral-600 mb-10 rounded-md">
                        <div className="bg-[#36187d] rounded-l-md p-0.5 text-center text-xs font-medium leading-none text-white w-[71%] ">
                            71%
                        </div>
                    </div>
                    <h5 className='font-normal text-[#6c758f] Bellota_Text text-[1.2rem] text-left '>CCTV Cameras</h5>
                    <div className="w-full bg-neutral-200 dark:bg-neutral-600 rounded-md">
                        <div className="bg-[#36187d] rounded-l-md p-0.5 text-center text-xs font-medium leading-none text-white w-[53%]">
                            53%
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default AboutUs;