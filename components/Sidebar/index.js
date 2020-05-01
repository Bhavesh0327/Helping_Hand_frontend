import React from 'react'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import StorefrontIcon from '@material-ui/icons/Storefront';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import WorkIcon from '@material-ui/icons/Work';
import Divider from '@material-ui/core/Divider'

import classes from './style.module.scss'

export const Sidebar = ({open, setOpen, displayIconOnly}) => {
    const tabs = [
        {
            name: 'Hospitals',
            icon: LocalHospitalIcon
        },
        {
            name: 'Ration shops',
            icon: StorefrontIcon
        }
    ]
    if (displayIconOnly) open = true;
    return (
        <SwipeableDrawer classes={{paper: displayIconOnly && classes.onlyIcon}} variant={displayIconOnly ? `persistent` : 'temporary'} anchor="right" open={open} onOpen={() => {}} onClose={() => {}}>
            <List>
                <ListItem key="Services">
                    <ListItemIcon><WorkIcon /></ListItemIcon>
                    <ListItemText primary="Services" />
                </ListItem>
                <Divider />
            {
            tabs.map(item => (
                <ListItem className={classes.service} key={item.name}>
                    <ListItemIcon>{<item.icon />}</ListItemIcon>
                    <ListItemText primary={item.name} />
                </ListItem>
            ))
            }
            </List>
        </SwipeableDrawer>
    )
}
