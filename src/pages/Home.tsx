import { Box } from "@chakra-ui/react";
import React from "react";
import About from "../components/home/About";
import Contact from "../components/home/Contact";
import Index from "../components/home/Index";
import Project from "../components/home/Project";
import UserLayout from "../components/UserLayout";

const Home = () => {
  return (
    <UserLayout>
      <Index />
      <About />
      <Project />
      <Contact />
    </UserLayout>
  );
};

export default Home;
