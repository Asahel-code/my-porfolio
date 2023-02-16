import { Box, Center, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";

const Footer = () => {
  let datenow = new Date();

  return (
    <Center className="py-4 bg-[#45335D] text-white">
      <Box>
        <Box className="flex items-center justify-center gap-3">
          <Link
            to="https://www.linkedin.com/in/asahel-kigen-586b3a253"
            target="_blank"
            className="text-primary_color hover:text-white"
          >
            <BsLinkedin className="text-xl"/>
          </Link>
          <Link
            to="https://twitter.com/asahelkk"
            target="_blank"
            className="text-primary_color hover:text-white"
          >
            <BsTwitter className="text-xl"/>
          </Link>
          <Link
            to="https://github.com/Asahel-code"
            target="_blank"
            className="text-primary_color hover:text-white"
          >
            <BsGithub className="text-xl"/>
          </Link>
        </Box>
        <Box className="flex items-center mt-4">
          <Text>
            &copy; {datenow.getFullYear()} Asahelkigen. All right reserved
          </Text>
        </Box>
      </Box>
    </Center>
  );
};

export default Footer;
