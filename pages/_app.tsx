import type { AppProps } from 'next/app';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
    palette: { type: 'dark' },
    typography: { fontSize: 16 },
});

function App({ Component, pageProps }: AppProps) {
    return (
        <MuiThemeProvider theme={theme}>
            <Component {...pageProps} />;
        </MuiThemeProvider>
    );
}

export default App;
