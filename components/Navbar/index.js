import React, {useState, useEffect} from 'react'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon'
import IconButton from '@material-ui/core/IconButton'
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import MenuIcon from '@material-ui/icons/Menu';

import classes from './style.module.scss'
import {Sidebar} from '../Sidebar'

export const Navbar = ({region}) => {
    const [open, setOpen] = useState(false)
    const [displayIconOnly, setDisplayIconOnly] = useState(false)
    useEffect(() => {
        setDisplayIconOnly(window.innerWidth > 700);
    }, [])
    return (
        <>
        <AppBar position="sticky" className={classes.appbar}>
            <ToolBar className={classes.toolbar}>
                <Icon>
                    <EmojiEmotionsIcon />
                </Icon>
                <Typography>
                    You are in {region.city}, {region.region_name}
                </Typography>
                <IconButton onClick={() => !displayIconOnly && setOpen(!open)}>
                {
                !displayIconOnly && <MenuIcon />
                }
                </IconButton>
            </ToolBar>
            <Sidebar open={open} setOpen={setOpen} displayIconOnly={displayIconOnly} />
        </AppBar>
        </>
    )
}
