import React from "react";
import { Box, colors, responsiveFontSizes } from "@mui/material";
import { FaLeaf, FaUser } from "react-icons/fa";
import './Header.css'

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { blue } from "@mui/material/colors";
const Header = () => {
    return (

            <Box className="container-header">
                <Box>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyfxqCNAuu3fy_h4nesfhtLBhrwQPTvAkZGw&s" // Cambia esto a la ruta de tu logo
                    alt="logo"
                    width="200px"
                />
                </Box>
                <Box className="User-Icon" >
                    <AccountCircleIcon sx={{ fontSize: 30 }}/>
                </Box>
            </Box>
    );
};

export default Header;
