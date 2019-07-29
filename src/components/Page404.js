import React from 'react';
import { Container, Headline, Grid, GridItem, Image } from '@lightelligence/react';
import funkyChicken from '../assets/funky-chicken.gif'

const Page404 = () => (
    <Container>
        <Headline size={1}>
            Page404
        </Headline>
        <Grid>
            <GridItem size={7}>
                <Image src={funkyChicken}/>
            </GridItem>
        </Grid>
        <Headline size={5}>
            Try typing that again, you funky chicken!
        </Headline>
    </Container>
)

export default Page404;
