import { Box, Center, Text } from "@chakra-ui/react";
import kenyaMap from "../../assets/svg/kenyamap.svg";
import desk from "../../assets/svg/desk.svg";
import { BsWhatsapp } from "react-icons/bs";

const Index = () => {
  const handleWhatsapp = () => {
    window.open(
      ` https://web.whatsapp.com/send?phone=254711959117&text=Hi%20Asahel%2C%0D%20I%20just%20viewed%20your%20porfolio`,
      "_blank"
    );
  };

  return (
      <Box className="min-h-screen bg-bg_color text-white grid lg:grid-cols-2 xs:grid-cols-1 gap-2 pt-20 pb-10 lg:px-20 xs:px-5" id="home">
        <Box className="flex items-center">
          <Box>
            <Text className="font-bold lg:text-4xl md:text-5xl xs:text-2xl md:tracking-widest xs:tracking-wider uppercase">
              Hi <span className="lg:text-4xl md:text-3xl xs:text-lg">&#128075;&#127998;</span>, I'm a full stack web developer, an embedded system engineer and a network installation expert
            </Text>
            <Box className="my-5 text-md text-primary_color">
              <Text>
                2+ years experience in web development and network installation, and 1+ year experience in embedded system engineering.
                My mission is to develop solutions that you and your audience will truly love.
              </Text>
            </Box>
            <Box className="flex items-center gap-4">
              <Text className="font-bold lg:text-3xl md:text-4xl xs:text-xl tracking-wider">
                from Kenya
              </Text>
              <img src={kenyaMap} alt="kenyaMap" className="h-[2rem]" />
            </Box>
            <Box 
            className="bg-[#075E54] text-white flex items-center gap-2 mt-5 p-3 rounded-full cursor-pointer w-[250px]"
            onClick={handleWhatsapp}
            >
              <BsWhatsapp className="text-xl" />
              <Text className="uppercase text-sm font-semibold">Let's chat on whatsapp</Text>
            </Box>
          </Box>
        </Box>
        <Center className="">
          <img src={desk} alt="desk" className="h-[30rem] lg:block xs:hidden" />
        </Center>
      </Box>
  );
};

export default Index;
