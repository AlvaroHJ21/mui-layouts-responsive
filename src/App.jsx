import { Stack, Box } from '@mui/material';
import './App.css';
import Form from './components/Form';
import Layout from './components/Layout';
import Table from './components/Table';

function App() {
    return (
        <Layout>
            <h1>Contenido</h1>

            {/* Columna con los hijos alineados a la izquierda */}
            <Stack gap={4} alignItems="flex-start">
                <Table />

                {/* Padre auxiliar para centar el formulario */}
                <Stack
                    alignItems="center"
                    sx={{
                        width: '100%',
                        border: '2px dashed #2d6073',
                    }}
                >
                    <Form />
                </Stack>
            </Stack>
        </Layout>
    );
}

export default App;
