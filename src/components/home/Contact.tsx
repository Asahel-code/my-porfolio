import { Box, Center, Text } from "@chakra-ui/react";
import { BsLinkedin, BsTwitter, BsGithub, BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { TfiWorld } from "react-icons/tfi";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <Box
      className="bg-primary_color text-bg_color pt-20 pb-10 lg:px-20 xs:px-5"
      id="contact"
    >
      <Box className="text-center">
        <Text className="font-bold lg:text-5xl md:text-2xl xs:text-xl lg:tracking-wider xs:tracking-wide">
          Get in touch
        </Text>
      </Box>
      <Center>
        <Box className="grid lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-8 my-8">
          <Box className="rounded-3xl shadow-bg_color shadow-md hover:shadow-bg_color hover:shadow-xl cursor-pointer p-8 text-center">
            <Center>
              <CiMail className="text-4xl" />
            </Center>
            <Text className="font-bold text-lg py-3">Email</Text>
            <Text>kirwaasahel@gmail.com</Text>
          </Box>
          <Box className="rounded-3xl shadow-bg_color shadow-md hover:shadow-bg_color hover:shadow-xl cursor-pointer p-8 text-center">
            <Center>
              <TfiWorld className="text-4xl" />
            </Center>
            <Text className="font-bold text-lg py-3">Social Media</Text>
            <Box className="flex items-center justify-center gap-3">
              <Link
                to="https://www.linkedin.com/in/asahel-kigen-586b3a253"
                target="_blank"
                className="hover:text-white"
              >
                <BsLinkedin className="text-xl" />
              </Link>
              <Link
                to="https://twitter.com/asahelkk"
                target="_blank"
                className="hover:text-white"
              >
                <BsTwitter className="text-xl" />
              </Link>
              <Link
                to="https://github.com/Asahel-code"
                target="_blank"
                className="hover:text-white"
              >
                <BsGithub className="text-xl" />
              </Link>
            </Box>
          </Box>
          <Box className="rounded-3xl shadow-bg_color shadow-md hover:shadow-bg_color hover:shadow-xl cursor-pointer p-8 text-center">
            <Center>
              <BsTelephone className="text-4xl" />
            </Center>
            <Text className="font-bold text-lg py-3">Phone</Text>
            <Text>(+254) 711959117</Text>
          </Box>
        </Box>
      </Center>
    </Box>
  );
};

export default Contact;
