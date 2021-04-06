import React, { useContext } from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

import useStyles from './NavBarStyles';

import logo from 'assets/logo.png';
import { NavBarItem } from 'Models/NavBarItem';
import { SelectedPageContextType } from 'Context/SelectedPageContext/SelectedPageContextType';
import { allNavBarItems, SelectedPageContext } from 'Context/SelectedPageContext/SelectedPageContext';


const NavBar = (): JSX.Element => {
    const { selectedNavBarItem, setSelectedNavBarItem } = useContext(SelectedPageContext) as SelectedPageContextType;
    const classes = useStyles();

    const handleItemClick = (event: React.MouseEvent, clickedIndex: number) => {
        setSelectedNavBarItem(clickedIndex);
    }

    return (
        <div className={classes.navContainer}>
            <img src={logo} alt={'logo'} className={classes.logo}/>
            <List component='nav' className={classes.navBar}>
                {
                    allNavBarItems.map((navItem: NavBarItem) => {
                        return (
                            <ListItem
                                key={navItem.id}
                                className={selectedNavBarItem === navItem.id ? classes.item + ' ' + classes.selectedItem : classes.item}
                                button
                                selected={navItem.id === selectedNavBarItem}
                                onClick={event => handleItemClick(event, navItem.id)}>
                                <ListItemIcon>
                                    <img src={navItem.icon} alt={'icon'}/>
                                </ListItemIcon>
                                <ListItemText primary={navItem.text}/>
                            </ListItem>
                        )
                    })
                }
            </List>
        </div>);
}

export default NavBar;