import { Box, Text } from "@chakra-ui/react";
import html from "../../assets/svg/html.svg";
import css from "../../assets/svg/css.svg";
import sass from "../../assets/svg/sass.svg";
import javascript from "../../assets/svg/javascript.svg";
import react from "../../assets/svg/react.svg";
import node from "../../assets/svg/nodejs.svg";
import laravel from "../../assets/svg/laravel.svg";
import arduino from "../../assets/svg/arduino.svg";

const About = () => {
  return (
    <Box className="bg-primary_color text-bg_color pt-20 pb-10 lg:px-20 xs:px-5" id="about">
      <Box className="text-center pt-8">
        <Text className="font-bold lg:text-5xl md:text-2xl xs:text-xl lg:tracking-wider xs:tracking-wide">
          Hello, this is what i do Best
        </Text>
      </Box>
      <Box className="my-10 rounded-3xl shadow-bg_color shadow-md hover:shadow-bg_color hover:shadow-xl cursor-pointer">
        <Box className="grid lg:grid-cols-8 md:grid-cols-4 xs:grid-cols-2 gap-10 p-10">
          {myStacks?.map((myStack, index) => (
            <Box key={index}>
              <img src={myStack?.icon} alt="icon" className="h-[100px]" />
              <Box className="text-center pt-4 capitalize">
                <Text className="font-bold">{myStack?.name}</Text>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default About;

const myStacks = [
  {
    name: "Html",
    icon: html,
  },
  {
    name: "Css",
    icon: css,
  },
  {
    name: "Sass",
    icon: sass,
  },
  {
    name: "Javascript",
    icon: javascript,
  },
  {
    name: "Node",
    icon: node,
  },
  {
    name: "React",
    icon: react,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "Arduino",
    icon: arduino,
  },
];
