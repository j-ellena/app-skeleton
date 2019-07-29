import React from 'react';
import { Container, Headline, Grid, GridItem, Card, Image } from '@lightelligence/react';
import logoReact from '../assets/logoReact.svg';
import logoRouter from '../assets/logoRouter.png';
import logoLightelligence from '../assets/logoLightelligence.png';
import skeleton from '../assets/skeleton.png';

const Home = () => (
    <Container>
        <Headline size={1}>
            Skeleton App
        </Headline>
        <Grid>
            <GridItem size={3}>
                <Image src={skeleton}></Image>
            </GridItem>
            <GridItem size={3}>
                <Card
                    title='React'
                >
                    <Image src={logoReact}></Image>
                    <code>create-react-app</code>
                </Card>
            </GridItem>
            <GridItem size={3}>
                <Card
                    title='React Router'
                >
                    <Image src={logoRouter}></Image>
                    Declarative dynamic routing
                </Card>
            </GridItem>
            <GridItem size={3}>
                <Card
                    title='Lightelligence Styles'
                >
                    <Image src={logoLightelligence}></Image>
                    Prettified by UI Styleguide
                </Card>
            </GridItem>
        </Grid>

    </Container>
)

export default Home;
