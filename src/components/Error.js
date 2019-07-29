import React from 'react';
import { Container, Headline, Image } from "@lightelligence/react";
import fail from '../assets/fail.gif'

const Error = () => (
    <Container>
        <Headline size={5}>Something went wrong ...</Headline>
        <Image src={fail}/>
    </Container>
)

export default Error
