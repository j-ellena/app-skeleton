import React from 'react';
import ListElement from './ListElement';

const ListData = ( {...data} ) => (
    <ul>
        {Object.values(data).map(
            ({...element}) => <ListElement key={element.objectID} {...element} />
        )}
    </ul>
)

export default ListData;
