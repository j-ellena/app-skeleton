import React from 'react';

const ListElement = ({ objectID, url, title }) => (
    <li key={objectID}>
        <a href={url}>{title}</a>
    </li>
)

export default ListElement;
