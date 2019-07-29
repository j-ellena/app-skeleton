import React from 'react';
import { Navbar, Menu, MenuItem } from '@lightelligence/react';

const Navigation = () => (
    <Navbar color='dark' title='Skeleton'>
        <Menu navbar>
            <MenuItem to="/restapi">REST API</MenuItem>
        </Menu>
        <Menu navbar>
            <MenuItem to="/hooks">Hooks</MenuItem>
        </Menu>
    </Navbar>
)

export default Navigation;
