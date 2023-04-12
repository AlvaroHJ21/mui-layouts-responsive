import { Box, Typography, Grid, Stack, Container } from '@mui/material';
import Input from './Input';

export default function Form() {
    return (
        <Stack
            sx={{
                width: {
                    xs: '100%',
                    sm: 400,
                    md: 600
                },
                flexDirection: {
                    md: 'row',
                },

                gap: 2,
                bgcolor: '#d0d2e3',
                justifyContent: 'center',
                alignItems: {
                    xs: 'center',
                },
                p: 2,
                borderRadius: 2,
            }}
        >
            {/* Imagen */}
            <Box
                sx={{
                    width: 200,
                    height: 200,
                    bgcolor: 'red',
                    borderRadius: 2,
                    overflow: 'hidden',
                }}
            >
                <img
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                    alt=""
                />
            </Box>

            {/* Columas */}
            <Stack
                sx={{
                    width: {
                        xs: "100%"
                    },
                    flexDirection: {
                        xs: 'col',
                        sm: "row"
                    },
                    
                }}
            >

                {/* Columna 1 */}
                <Box
                    sx={{
                        bgcolor: '#d9dbdb',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1,
                        p: 1,
                        flexGrow:{
                            sm: 1
                        }
                    }}
                >
                    Col 1
                    <Input />
                    <Input />
                    <Input />
                </Box>

                 {/* Columna 2 */}
                <Box
                    sx={{
                        // width: 200,
                        bgcolor: '#d9dbdb',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1,
                        p: 1,
                        flexGrow:{
                            sm: 1
                        }
                    }}
                >
                    Col 2
                    <Input />
                    <Input />
                    <Input />
                </Box>
            </Stack>
        </Stack>
    );
}
