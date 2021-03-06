import React from 'react'
import DashboardIcon from '@material-ui/icons/Dashboard';
import UpdateIcon from '@material-ui/icons/Update';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
export const SidebarDataOnd = [
    // {
    //     title: 'Test',
    //     path: '/Test',
    //     icon: <DashboardIcon/>,
    //     cName: 'nav-text'
    // }, 
    {
        title: 'Dashboard',
        path: '/OndDashboard',
        icon: <DashboardIcon/>,
        cName: 'nav-text'
    },{
        title: 'Zendingen bekijken',
        path: './OndReservering',
        icon: <UpdateIcon/>,
        cName: 'nav-text'
    }, 
    //  {
    //     title: 'Cargobike zelf huren',
    //     path: '/',
    //     icon: <DirectionsBikeIcon/>,
    //     cName: 'nav-text'
    // }, {
    //     title: 'Paketten verzenden',
    //     path: '../',
    //     icon: <SendIcon/>,
    //     cName: 'nav-text'
    // }, {
    //     title: 'Paketten opzoeken',
    //     path: '../',
    //     icon: <AllInboxIcon/>,
    //     cName: 'nav-text'
    // }, {
    //     title: 'Bekijk binnenstad',
    //     path: '../',
    //     icon: <LocationCityIcon/>,
    //     cName: 'nav-text'
    // }, {
        //     title: 'Mijn zendingen',
    //     path: '../',
    //     icon: <SendIcon/>,
    //     cName: 'nav-text'
    // }, {
    //     title: 'Mijn cargobike huren',
    //     path: '../',
    //     icon: <DirectionsBikeIcon/>,
    //     cName: 'nav-text'
    // }, 
    {
        title: 'Mijn account',
        path: '../UserInformation',
        icon: <AccountCircleIcon/>,
        cName: 'nav-text'
    }, 
    // {
    //     title: 'Contact',
    //     path: '../',
    //     icon: <ContactSupportIcon/>,
    //     cName: 'nav-text'
    // }, 
    // {
    //     title: 'Registreren',
    //     path: '/Registration',
    //     icon: <AccountCircleIcon/>,
    //     cName: 'nav-text'
    // },
    // {
    //     title: 'Inloggen',
    //     path: '/Login',
    //     icon: <AccountCircleIcon/>,
    //     cName: 'nav-text'
    // },
    {
        title: 'Uitloggen',
        path: '../',
        icon: <ExitToAppIcon/>,
        cName: 'nav-text'
    }
]
