import React from 'react';
import { AppBar , Typography } from '@mui/material';
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";

const Header = () => {
    return <div>
        <AppBar position='sticky'>
            <toolbar>

            <Typography>
                <LibraryBooksOutlinedIcon />
            </Typography>

            </toolbar>
        

        </AppBar>
    </div>;

};

export default Header;