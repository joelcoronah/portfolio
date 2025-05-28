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
          <p className="font-bold text-inherit">JOEL CORONA</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link
              color="foreground"
              href="#"
              underline="hover"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("#")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              color="foreground"
              href="#projects"
              underline="hover"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Projects
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              color="foreground"
              href="#experience"
              underline="hover"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("experience")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Experience
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button variant="flat">
              <Link
                color="foreground"
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Contact
              </Link>
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </motion.div>
  );
};
