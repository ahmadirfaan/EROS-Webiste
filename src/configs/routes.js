import Register from "../pages/Registration/Register";
import Login from "../pages/Login/Login";
import Guide from "../pages/Guide/Guide";
// import Dashboard from "../component/Dashboard";
import Success from './../pages/Registration/Success';
import Dashboard from "../SideBar/Dashboard";
import FormElement from "../pages/Registration/Form/FormElement";
import HomeSideBar from "../SideBar/HomeSideBar";
import Home from "../pages/Home/Home";
import TableDashboar from "../SideBar/TableDashboard";
import TableDashboard from "../SideBar/TableDashboard";
import GlassesClaims from "../SideBar/FormClaims/GlassesClaims";
import NavigationSideBar from "../SideBar/NavigationSideBar";
import React from "react";
import BirthingClaims from "../SideBar/FormClaims/BirthingClaims";
import TrainingClaims from "../SideBar/FormClaims/TrainingClaims";
import OfficeTravelClaims from "../SideBar/FormClaims/OfficeTravelClaims";
import InsuranceClaims from "../SideBar/FormClaims/InsuranceClaims";


export default  [
    {
        path:'/',
        component: <Home/>,
        exact: true
    },
    {
        path:'/register',
        component: <Register/>,
        exact: true
    },
    {
        path:'/login',
        component: <Login/>,
        exact: true
    },
    {
        path: '/petunjuk',
        component: <Guide/>,
        exact: true
    },
    {
        path: '/dashboard',
        component:<Dashboard/>,
        exact: true
    },
    {
        path: '/success-register',
        component: <Success/>,
        exact: true 
    }
    {
        path: '/home/sidebar',
        component: <HomeSideBar/>,
        exact: true
    },
    {
        path: '/dashboard/table',
        component: <TableDashboard/>,
        exact: true
    },
    {
        path: '/claims/glasses',
        component: <GlassesClaims/>,
        exact: true
    },
    {
        path: '/claims/birthing',
        component: <BirthingClaims/>,
        exact: true

    },

    {
        path: '/claims/training',
        component: <TrainingClaims/>,
        exact: true
    },

    {
        path: '/claims/officeTravel',
        component: <OfficeTravelClaims/>,
        exact: true
    },
    {
        path: '/claims/insurance',
        component: <InsuranceClaims/>,
        exact: true
    }

]