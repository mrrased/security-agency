import React, { useEffect } from 'react';
import { Container } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faUserGroup, faPlane } from '@fortawesome/free-solid-svg-icons';
import MenuIcon from '@mui/icons-material/Menu';
import facebook from '../../Images/facebook-logo.png';
import twitter from '../../Images/twitter.png';
import instagram from '../../Images/instagram.png';
import MenuDrawer from './HeaderTop/MenuDrawer';



type Anchor = 'top';


  


const HeaderTop = () => {
    const [state, setState] = React.useState({ top: false });
    const [color, setColor] = React.useState(false);
    const [change, setChange] = React.useState(false);

    const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
      
    };

    

    const ChangeColor = () =>{

        // if(typeof window !== "undefined"){
        //     if(window.pageXOffset > 100){
        //         setColor(true)
        //     }
        //     }else{
        //             setColor(false);
        //         }

        if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
            setColor(true)
        }else{
            setColor(false);
        }
    } 
    window.addEventListener('scroll', ChangeColor)
    console.log(color,'working');

    return (
        <div className={`${color ? 'bg-[#f2f3f7] py-5 transition_custom transition duration-600 z-20 fixed overflow-hidden top-0' : 'bg-none'} bg-[#f2f3f7] top-0 py-10 fixed transition_custom transition duration-600 overflow-hidden w-full`}>
            <div className='flex items-center justify-around '>
                <div>
                    <h2>Security Agency</h2>
                </div>
                <ul className='hidden lg:flex justify-evenly space-x-10 font-normal text-[#6c758f] Bellota_Text text-xl'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Features</li>
                    <li>+88 (017) 329 20 164</li>
                </ul>
                <ul className='hidden lg:flex items-center justify-center space-x-4'>
                    <li className='p-7 rounded-full shadow-boxShadow transition duration-700 hover:bg-white hover:duration-700 hover:cursor-pointer'><img src={facebook} alt="f" className='h-5 w-5 ' /></li>
                    <li className='p-7 rounded-full shadow-boxShadow transition duration-700 hover:bg-white hover:duration-700 hover:cursor-pointer'><img src={twitter} alt="f" className='h-5 w-5' /></li>
                    <li className='p-7 rounded-full shadow-boxShadow transition duration-700 hover:bg-white hover:duration-700 hover:cursor-pointer'><img src={instagram} alt="f" className='h-5 w-5' /></li>
                </ul>
                <div className='block lg:hidden' onClick={toggleDrawer('top', true)}>
                    <MenuIcon color="action" sx={{ fontSize: 75 }}/>
                </div>
            </div>
            <MenuDrawer 
                state={state}
                toggleDrawer={toggleDrawer}
            />
        </div>
    );
};

export default HeaderTop;