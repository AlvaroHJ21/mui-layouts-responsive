import { Box, Typography, Grid, Stack, Container } from '@mui/material';
import React from 'react';
import Sidebar from './Sidebar';

export default function Layout({ children }) {
    return (
        <Stack minHeight={'100vh'} direction={'row'}>
            <Box
                flexBasis={200}
                bgcolor={'#181848'}
                color="white"
                sx={{
                    display: {
                        xs: 'none',
                        md: 'initial',
                    },
                }}
            >
                <Sidebar />
            </Box>
            <Box flexGrow={1} bgcolor={'#ebf2f2'}>
                <Container>{children}</Container>
            </Box>
        </Stack>
    );
}
