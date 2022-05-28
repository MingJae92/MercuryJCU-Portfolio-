import Button from '@mui/material/Button';
import './Shop.css'
import {
  List,
  ListItemText,
  Drawer
} from "@material-ui/core";

import React from 'react'
import Homepage from './routes/Homapage';
import MyWork from './routes/MyWork';
import Commissions from './Commissions';
import Shop from './routes/Shop';
const listItems = [
    {
        listIcons: <Homepage/>,
        listText: "Home"
    },
    {
        listIcons: <MyWork/>,
        listText: "MyWork"
    },
    {
        listIcons: <Commissions/>,
        listText: "Commissions"
    },
    {
        listIcons: <Shop/>,
        listText: "Shop"
    },
    {
        listIcons: <AboutMe/>,
        listText: "AboutMe"
    },
    {
        listIcons: <ContactMe/>,
        listText: "ContactMe"
    },

]
const Sidebar = () => {
  return (
    <div>
      
    </div>
  )
}

export default Sidebar
