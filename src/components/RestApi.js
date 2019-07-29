import React, { useState } from 'react';
import { Container, Headline, Button, Label } from '@lightelligence/react';
import useDataApi from './useDataApi';
import Loading from './Loading';
import Error from './Error';
import ListData from './ListData';

const RestApi = () => {

  const [query, setQuery] = useState('IoT');
  const [{ data, loadFlag, errFlag }, doFetch] = useDataApi(
    'http://hn.algolia.com/api/v1/search?query=IoT',
    { hits: [] },
  );

  const handleChange = e => setQuery(e.target.value);
  const handleSubmit = e => {
      e.preventDefault();
      doFetch(`http://hn.algolia.com/api/v1/search?query=${query}`,);
  }

    return (
        <Container>
            <Headline size={1}>Hacker News Search REST API</Headline>

            <form onSubmit={handleSubmit}>
                <Label>Topic:</Label>
                <input
                    type="text"
                    value={query}
                    onChange={handleChange}
                />
                <Button type="submit">Search</Button>
            </form>

             {errFlag && <Error />}

             {loadFlag ? (
                <Loading />
              ) : (
                <ListData {...data.hits} />
              )}
        </Container>
    );
}
export default RestApi;
