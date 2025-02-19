import React from 'react';
import { useState } from 'react';
import '@cscfi/csc-ui-react/css/theme.css';
import { CButton, CIcon, CAccordion, CAccordionItem } from '@cscfi/csc-ui-react';
import { mdiMagnify, mdiMenu } from '@mdi/js';

const style = {
    "--_c-button-font-size": 12,
    "--_c-button-min-width": 0,
    "--_c-button-height": "auto",
    "--_c-icon-color": "black"
};

const NavButton = props => {
    const isActive = window.location.pathname === props.href;

    var styleClass = "text-black py-2"
    if (isActive) {
        styleClass = styleClass + " underline underline-offset-8 decoration-2"
    }

    return (
            <CButton
            className='w-min'
                text
                style={style}
                onClick={() => (window.location.href = props.href)}
            >
                <p className={styleClass}>{props.title}</p>
            </CButton>
    );
};

const NavSearchButton = ({ text }) => {

    return (
        <div>
            <CButton
                className='w-min'
                text
                style={style}
            >
                <p className="text-black py-2">{text}</p>
                <CIcon style={style} path={mdiMagnify} />
            </CButton>
        </div>
    );
};

export const NavigationHeader = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const pageButtons = SITE.constants.nav.map(page => <NavButton {...page} />)

    return (
        <div className='flex flex-col'>
            <div className="flex mx-5 items-center justify-between py-3">
                <div className="flex items-center">
                    <a href='/'>
                        <img
                            src={ SITE.constants.logo }
                            alt="Logo"
                            className="h-7"
                        />
                    </a>
                </div>
                
                <div className="lg:flex flex-wrap justify-end hidden">
                    { pageButtons }
                    <NavSearchButton text="Search" />
                </div>
                
                <div className='flex lg:hidden h-max'>
                    <CIcon onClick={toggleMenu} size={40} path={mdiMenu} />
                </div>
            </div>
            {isOpen && 
                <div className='lg:hidden mx-1.5 mb-10 top-10 w-full flex flex-col justify-center items-left gap-2' >
                    { pageButtons }
                    <NavSearchButton text="Search" />
                </div>
            }
        </div>
        

    );
};