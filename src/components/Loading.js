import React from 'react';
import { Container, Headline, Image } from '@lightelligence/react';
import loader from '../assets/loader.gif';

const Loading = () => (
    <Container>
        <Headline size={5}>Loading...</Headline>
        <Image src={loader}/>
    </Container>
)

export default Loading
