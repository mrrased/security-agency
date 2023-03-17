import React from 'react';
import facebook from '../../../Images/facebook-logo.png';
import twitter from '../../../Images/twitter.png';
import instagram from '../../../Images/instagram.png';

const MobileView = () => {
    return (
        <div>
            <div className='py-10'>
                <div>
                    <h2 className='text-center mb-3 font-bold text-[#36187d] Bellota_Text text-[1.2rem]'>Security Agency</h2>
                </div>
                <ul className='text-center space-y-3 font-normal text-[#6c758f] Bellota_Text text-xl'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Features</li>
                    <li>+88 (017) 329 20 164</li>
                </ul>
                <ul className='flex items-center justify-center space-x-4 mt-4'>
                    <li className='p-3 rounded-full shadow-boxShadow transition duration-700 hover:bg-white hover:duration-700 hover:cursor-pointer'><img src={facebook} alt="f" className='h-5 w-5 ' /></li>
                    <li className='p-3 rounded-full shadow-boxShadow transition duration-700 hover:bg-white hover:duration-700 hover:cursor-pointer'><img src={twitter} alt="f" className='h-5 w-5' /></li>
                    <li className='p-3 rounded-full shadow-boxShadow transition duration-700 hover:bg-white hover:duration-700 hover:cursor-pointer'><img src={instagram} alt="f" className='h-5 w-5' /></li>
                </ul>
            </div>
        </div>
    );
};

export default MobileView;