import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";
import { motion } from "framer-motion";
import React from "react";

export const Header: React.FC = () => {
  return (
    <motion.div
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -20, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar className="border-b border-divider" maxWidth="xl">
        <NavbarBrand>
          <p className="font-bold text-inherit">JOHN DOE</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#" underline="hover">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#projects" underline="hover">
              Projects
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#experience" underline="hover">
              Experience
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button as={Link} color="primary" href="#contact" variant="flat">
              Contact
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </motion.div>
  );
};
