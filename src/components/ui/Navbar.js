
// import { useContext } from 'react';
import { AppBar, IconButton, Link, Toolbar, Typography } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import React from 'react';
// import { UIContext } from '../../context/ui';

export const Navbar = () => {

    // const { openSideMenu } = useContext(UIContext);


    return (
        <AppBar position='sticky'>
            <Toolbar>
                <IconButton
                    size='large'
                    edge="start"
                // onClick={ openSideMenu }
                >
                    <MenuOutlinedIcon />
                </IconButton>


                <Link underline='none' color="white">
                    <Typography variant='h6'>Sena IA Socket</Typography>
                </Link>
            </Toolbar>
        </AppBar>
    )
};