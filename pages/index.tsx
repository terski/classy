import { Container, CssBaseline, Grid } from '@material-ui/core';
import Head from 'next/head';

const Index = () => (
    <Container maxWidth="sm">
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
            This is classy.
        </Grid>
    </Container>
);

export default Index;
