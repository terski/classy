import {
    Card,
    CardMedia,
    Container,
    CssBaseline,
    Grid,
    styled,
    Typography,
    Button,
    Box,
} from '@material-ui/core';
import Head from 'next/head';
import TagInput from '../components/tag-input';
import { buckets, microTags } from '../data/microtags';
import { generate } from '../data/generator';
import { useState, useEffect } from 'react';

const AppContainer = styled(Container)({
    padding: '3rem 1rem',
});

const Index = () => {
    const handleGenerate = () => {
        setHeadline(generate());
    };

    const [headline, setHeadline] = useState(generate());

    useEffect(() => {
        const interval = setInterval(() => {
            handleGenerate();
        }, 3000);
        return () => clearInterval(interval);
    }, []);

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
                justify="center"
                alignItems="stretch"
                spacing={8}
            >
                <Grid item>
                    <Box textAlign="center">
                        <Typography variant="h5">{headline}</Typography>
                    </Box>
                </Grid>
                <Grid item>
                    <Card>
                        <CardMedia component="img" image="classcards.png" />
                    </Card>
                </Grid>
                <Grid item>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleGenerate}
                    >
                        Generate
                    </Button>
                </Grid>
                {buckets.map((b) => (
                    <Grid item key={b.title}>
                        <TagInput
                            label={b.title}
                            helperText={b.description}
                            dataSource={microTags
                                .filter((t) => t.bucket === b.name)
                                .map((t) => t.value)}
                        />
                    </Grid>
                ))}
            </Grid>
        </AppContainer>
    );
};

export default Index;
