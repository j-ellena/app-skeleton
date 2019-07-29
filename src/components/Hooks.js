import React, { useState, useEffect } from 'react';
import { Container, Headline, Button, Paragraph } from '@lightelligence/react';

const Hooks = () => {

    const initialCount = 0;
    const [count, setCount] = useState(initialCount);
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });

    const resetValue = () => { setCount(initialCount) };
    const increaseValue = () => { setCount(count => count + 1) }
    const decreaseValue = () => { setCount(count => count - 1) }

    return (
        <Container>
            <Headline size={3}>
                Counter button
            </Headline>
            <Paragraph >
                <Button color="info" outline>{count}</Button>
            </Paragraph>
            <Paragraph>
                <Button color="success" onClick={increaseValue}>+</Button>
                <Button color="error" onClick={decreaseValue}>-</Button>
            </Paragraph>
            <Paragraph>
                <Button color="secondary" outline onClick={resetValue}>Reset</Button>
            </Paragraph>
        </Container>
    );
}

export default Hooks;
