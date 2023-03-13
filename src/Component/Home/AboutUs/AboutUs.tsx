import React from 'react';
import Container from '@mui/material/Container';


const AboutUs = () => {
    return (
        <Container maxWidth="lg" className='mt-40'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                    <h4 className='font-normal text-[#6c758f] Bellota_Text text-[1.2rem] text-left '>About Us</h4>
                    <h2 className='font-normal text-[#36187d] Bellota_Text text-[2.8rem]'>Secure Features</h2>
                    <p className='font-normal text-[#6c758f] Bellota_Text text-[1.2rem] text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elitdo eiusmod temporeum dicant partem scripserit.</p>
                </div>
                <div>02</div>
            </div>
        </Container>
    );
};

export default AboutUs;