import { useState, useEffect } from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import greenMarket from "../../assets/images/green-market.png";
import heeran from "../../assets/images/heeran.png";
import freshGrocery from "../../assets/images/freshgrocery.png";
import koytollc from "../../assets/images/koytollc.png";
import sgrReservation from "../../assets/images/sgr-reservation.png";
import weatherMonitor from "../../assets/images/weather-monitor.png";
import sokofiti from "../../assets/images/sokofiti.png";
import summerWaterSource from "../../assets/images/summerwatersource.png";

const Project = () => {
  const [projects, setProject] = useState([
    {
      name: "",
      image: "",
      link: "",
    },
  ]);

  useEffect(() => {
    setProject(myProjects?.slice(0, 4));
  }, []);

  const handleViewMore = () => {
    setProject(myProjects);
  };

  const handleViewLess = () => {
    setProject(myProjects?.slice(0, 4));
  };

  console.log(projects?.length);
  return (
    <Box
      className="text-white bg-bg_color pt-20 pb-10 lg:px-20 xs:px-5"
      id="projects"
    >
      <Box className="text-center">
        <Text className="font-bold lg:text-5xl md:text-2xl xs:text-xl lg:tracking-wider xs:tracking-wide">
          Checkout some of my works
        </Text>
      </Box>
      <Box className="grid lg:grid-cols-2 xs:grid-cols-1 lg:gap-10 xs:gap-5">
        {projects?.map((project, index) => (
          <Link
            key={index}
            to={project?.link}
            target="_blank"
            className="my-10 rounded-3xl shadow-primary_color shadow-md hover:shadow-primary_color hover:shadow-xl cursor-pointer p-4"
          >
            <img src={project?.image} alt="project" className="w-full" />
            <Box className="text-center pt-3">
              <Text className="text-primary_color font-bold text-lg">
                {project?.name}
              </Text>
            </Box>
          </Link>
        ))}
      </Box>
      {projects?.length <= 4 ? (
        <Box className="mt-5 flex justify-center">
          <Button
            borderColor={"#E1B7BF"}
            textColor={"#E1B7BF"}
            variant={"outline"}
            className="hover:bg-primary_color hover:text-bg_color"
            onClick={handleViewMore}
          >
            View more
          </Button>
        </Box>
      ) : (
        <Box className="mt-5 flex justify-center">
          <Button
            borderColor={"#E1B7BF"}
            textColor={"#E1B7BF"}
            variant={"outline"}
            className="hover:bg-primary_color hover:text-bg_color"
            onClick={handleViewLess}
          >
            View less
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Project;

const myProjects = [
  {
    name: "Green house monitory app(IOT)",
    image: weatherMonitor,
    link: "https://green-house-control-panel.netlify.app",
  },
  {
    name: "Green market",
    image: greenMarket,
    link: "https://github.com/Asahel-code/green_market.git",
  },
  {
    name: "Heeran",
    image: heeran,
    link: "https://heeran.netlify.app",
  },
  {
    name: "Railway reservation",
    image: sgrReservation,
    link: "https://github.com/Asahel-code/railway-reservation.git",
  },
  {
    name: "KoytoLLC",
    image: koytollc,
    link: "https://www.koytollc.com",
  },
  {
    name: "Fresh grocery",
    image: freshGrocery,
    link: "https://github.com/Asahel-code/ecommerce_webapp.git",
  },
  {
    name: "Sokofiti",
    image: sokofiti,
    link: "https://github.com/Asahel-code/sokofiti.git",
  },
  {
    name: "Summer Water source",
    image: summerWaterSource,
    link: "#",
  },
];
