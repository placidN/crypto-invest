import React, { useState, useEffect } from 'react';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import MenuOpenRoundedIcon from '@material-ui/icons/MenuOpenRounded';
import { useStateValue } from '../../contextAPI/StateProvider';

import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import PowerSettingsNewRoundedIcon from '@material-ui/icons/PowerSettingsNewRounded';

import Overview from './Overview';
import Portfolio from './Portfolio';
import Invest from './Invest';
import Profile from './Profile';
import Withdraw from './Withdrawal';
import Transactions from './Transactions';

const useWindowSize = () => {
    const [size, setSize] = useState([window.innerWidth, window.innerHeight]);

    useEffect(() => {
        const handleResize = () => {
            setSize([window.innerWidth, window.innerHeight]);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize',handleResize);
        }
    }, [])

    return size;
}

const Header = ({ loadContent, loader }) => {
    const [{ user, images, API_URL }, dispatch] = useStateValue();
    const [mobileView, setMobileView] = useState(false);
    const [menuClass, setMenuClass] = useState('mainheader__desktopMenu');
    const [screenWidth, screenHeight] = useWindowSize();
    const [activeContent, setActiveContent] = useState(0);

    const [contentArr, setContentArr] = useState([
        {
            index: 0,
            content: <Overview />,
            title: 'Overview'
        },
        {
            index: 1,
            content: <Portfolio />,
            title: 'Portfolio'
        },
        {
            index: 2,
            content: <Invest />,
            title: 'Invest'
        },
        {
            index: 3,
            content: <Profile />,
            title: 'Profile'
        },
        {
            index: 4,
            content: <Withdraw />,
            title: 'Withdraw'
        },
        {
            index: 5,
            content: <Transactions />,
            title: 'Transactions'
        },
    ]); 

    const selectContent = (index, content) => {
        if (['mainheader__mobileMenuOpen', 'mainheader__mobileMenuClose'].includes(menuClass)){
            setMenuClass('mainheader__mobileMenuClose');
        }

        loader(true);
        setActiveContent(index);
        setContentArr(contentArr);
        loader(false);

        return loadContent(content);
    }

    const showMobileMenu = (choice) => {
        // Toggles the mobile menu on click
        // mainheader__mobileMenuClose would hide the menu box (-150px - the_width_of_the_menu_box) to the left of the screen using a transaition property
        // mainheader__mobileMenuOpen would bring the full width of the menu box into UI
        // both classes would be of position absolute overide all other elements. would have a slide in and out behaviour.

        if (choice){
            setMenuClass('mainheader__mobileMenuOpen');
        }else{
            setMenuClass('mainheader__mobileMenuClose');
        }
    }

    useEffect(() => {
        loadContent(<Overview />);
    }, [])

    useEffect(() => {
        if (screenWidth <= 900){
            setMenuClass('mainheader__mobileMenuClose');
            setMobileView(true);
        }else{
            setMenuClass('mainheader__desktopMenu');
            setMobileView(false);
        }

    }, [screenWidth, screenHeight])

    return (
        <nav className="mainheader__nav">
            {
                mobileView && (<MenuRoundedIcon className="menu__toggle toggle__open" onClick={() => showMobileMenu(true)} />)
            }
            <div className="img__contain">
                <img onClick={() => window.location.assign('http://probityvest.com')} src={images.logo_white} alt="" className="logo" />
            </div>
            <ul className={menuClass}>
                {
                    mobileView && (
                        <li className="listItem__header">
                            <img onClick={() => window.location.assign('http://probityvest.com')} src={images.logo_white} alt="" className="logo" />
                            <MenuOpenRoundedIcon className="menu__toggle toggle__close" onClick={() => showMobileMenu(false)} />
                        </li>
                    )
                }
                {
                    contentArr && contentArr.map(({title, content, index}) => index === activeContent ? <li className="list__item active__item" key={index} onClick={() => selectContent(index, content)}>{title}</li> : <li className="list__item" key={index} onClick={() => selectContent(index, content)} >{title}</li>)
                }
            </ul>
            <ul className="user__ctrl">
                <li className="ctrl__item ctrl__item1" onClick={() => selectContent(3, <Profile />)}>
                    <div className="user__iconContain">
                        <AccountCircleOutlinedIcon />
                    </div>
                    <span>User's First name</span>
                </li>
                <li className="ctrl__item ctrl__item2">
                    <PowerSettingsNewRoundedIcon className="logout__icon" />
                </li>
            </ul>
        </nav>
    )
}

export default Header
