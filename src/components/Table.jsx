import { Box, Typography, Grid, Stack, Container } from '@mui/material';

export default function Table() {
    return (
        <Box
            bgcolor="#ade0db"
            sx={{
                width: '100%',
                height: 200,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Typography fontWeight={900}>TABLA</Typography>
        </Box>
    );
}
