import React from 'react';
import { Box } from '@mui/material';
import { Navbar, Sidebar } from '../ui';




export const Layout = ({ title = 'servidor', children }) => {
    return (
        <Box sx={{ flexFlow: 1 }}>

            <Navbar />
            <Sidebar />

            <Box sx={{ padding: '10px 20px' }}>
                {children}
            </Box>

        </Box>
    )
};