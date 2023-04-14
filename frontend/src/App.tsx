import React from 'react';
import { BrowserRouter } from "react-router-dom";
import './App.css';
import { createStyles, MantineProvider } from '@mantine/core';
import { colors } from './app/constants/colors';
import { Provider } from 'react-redux';
import { store } from './app/store/store';
import RootRouter from './app/routes/root';

const useStyles = createStyles(() => ({
    bodyBackground: {
        backgroundColor: colors.lightBackground,
        minHeight: '100vh',
    },
}));

function App() {
    const { classes } = useStyles();

    return (
        <Provider store={store}>
            <MantineProvider
                withGlobalStyles
                withNormalizeCSS
                theme={{
                    colorScheme: 'light',
                }}
            >
                <div className={classes.bodyBackground}>
                    <BrowserRouter>
                        <RootRouter />
                    </BrowserRouter>
                </div>
            </MantineProvider>
        </Provider>
    );
}

export default App;
