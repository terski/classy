import {
    CardMedia,
    Container,
    CssBaseline,
    Grid,
    styled,
    Typography,
    Button,
} from '@material-ui/core';
import Head from 'next/head';
import TagInput from '../components/tag-input';
import { microTags } from '../data/microtags';
import { generate } from '../data/generator';

const AppContainer = styled(Container)({
    padding: '2rem 1rem',
});

const Index = () => {
    for (var i = 0; i < 12; i++) {
        setTimeout(function() {
            console.log(generate());
        }, 500);
    }
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
                    <Typography variant="h3">{generate()}</Typography>
                    <CardMedia src="/public/classcards.png"></CardMedia>
                    <Button variant="contained" color="primary">
                        Generate
                    </Button>
                </Grid>
                <Grid item>
                    <TagInput
                        label="Technique and Content"
                        helperText="What will you learn or do?"
                        dataSource={['test', 'test', 'test']}
                    />
                </Grid>
            </Grid>
        </AppContainer>
    );
};

export default Index;
