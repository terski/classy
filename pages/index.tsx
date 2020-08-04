import { Container, CssBaseline, Grid, styled } from '@material-ui/core';
import Head from 'next/head';
import TagInput from '../components/tag-input';
import { microTags } from '../data/microtags';
import { generate } from '../data/generator';

const AppContainer = styled(Container)({
    padding: '2rem 1rem',
});

const Index = () => {
    console.log(generate());
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
                    <TagInput
                        label="Technique and Content"
                        helperText="What will you learn or do?"
                        dataSource={[... new Set(microTags.map(t => t.bucket))]}
                    />
                </Grid>
                <Grid item>
                    <TagInput
                        label="Class Mechanics"
                        helperText="What is the methodology does the class use?"
                    />
                </Grid>
                <Grid item>
                    <TagInput
                        label="Demographics"
                        helperText="Who is this class for? What is the teacher like?"
                    />
                </Grid>
                <Grid item>
                    <TagInput
                        label="Adjectives"
                        helperText="What tone are you hearing and seeing in this class?"
                    />
                </Grid>
            </Grid>
        </AppContainer>
    );
};

export default Index;
