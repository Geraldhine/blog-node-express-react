import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Box, Typography, Link, IconButton } from "@mui/material";
import "./footer.css";

const Footer = () => {
    return (
        <Box component="footer" className="footer">
            <Box className="footer-container">
                <Box className="footer-section">
                    <Typography variant="h6">Sobre Nosotros</Typography>
                    <Typography variant="body2">
                        Ofrecemos las mejores propiedades con diseños modernos y cómodos, ideales para ti y tu familia.
                    </Typography>
                </Box>
                <Box className="footer-section">
                    <Typography variant="h6">Contacto</Typography>
                    <Typography variant="body2"><FaMapMarkerAlt /> Av. Los Cedros 123, Huancayo</Typography>
                    <Typography variant="body2"><FaPhoneAlt /> +51 987 654 321</Typography>
                    <Typography variant="body2"><FaEnvelope /> contacto@misitioweb.com</Typography>
                </Box>
                <Box className="footer-section">
                    <Typography variant="h6">Síguenos</Typography>
                    <Box className="social-icons">
                        <IconButton component={Link} href="#" aria-label="Facebook">
                            <FaFacebookF />
                        </IconButton>
                        <IconButton component={Link} href="#" aria-label="Instagram">
                            <FaInstagram />
                        </IconButton>
                        <IconButton component={Link} href="#" aria-label="Twitter">
                            <FaTwitter />
                        </IconButton>
                    </Box>
                </Box>
            </Box>
            <Box className="footer-bottom">
                <Typography variant="body2">© 2025 MiSitioWeb. Todos los derechos reservados.</Typography>
            </Box>
        </Box>
    );
};

export default Footer;
