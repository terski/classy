import { Container, CssBaseline, Grid, styled } from '@material-ui/core';
import Head from 'next/head';
import TagInput from '../components/tag-input';

const AppContainer = styled(Container)({
    padding: '2rem 0',
});

const Index = () => {
    return (
        <AppContainer maxWidth="sm">
            <Head>
                <title>Classy</title>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    key="description"
                    name="description"
                    content="Classy categorization"
                />
            </Head>
            <CssBaseline />
            <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems="center"
            >
                <div>This is a test</div>
            </Grid>
        </AppContainer>
    );
};

export default Index;
