import { Box, Text } from "@chakra-ui/react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { AiFillThunderbolt } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document?.body?.scrollTop > 80 ||
        document?.documentElement?.scrollTop > 80
      ) {
        headerRef?.current?.classList?.add("shrink");
      } else {
        headerRef?.current?.classList?.remove("shrink");
      }
    });
  }, [headerRef]);

  const handleClickScroll = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      // 👇 Will scroll smoothly to the top of the selected section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navList = (
    <div className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:justify-between lg:gap-6 text-white">
      <Link
        className="font-semibold text-lg"
        to="/#home"
        onClick={() => handleClickScroll("home")}
      >
        Home
      </Link>
      <Link
        className="font-semibold text-lg"
        to="/#about"
        onClick={() => handleClickScroll("about")}
      >
        About me
      </Link>
      <Link
        className="font-semibold text-lg"
        to="https://drive.google.com/file/d/1HNMKSw1xDAdhK_ighiqQAs6TyaZLIe0a/view?usp=share_link"
        target="_blank"
      >
        Resume
      </Link>
      <Link
        className="font-semibold text-lg"
        to="/#projects"
        onClick={() => handleClickScroll("projects")}
      >
        Projects
      </Link>
      <Link
        className="font-semibold text-lg"
        to="/#contact"
        onClick={() => handleClickScroll("contact")}
      >
        Contact
      </Link>
    </div>
  );
  return (
    <Box
      className="fixed w-full top-0 left-0 z-[99] bg-bg_color text-white"
      ref={headerRef}
    >
      <Box mx="4" my="4">
        <Box className="mx-auto flex items-center justify-between">
          <Link to="/">
            <Box className="flex items-center gap-2">
              <Text className="lg:text-xl xs:text-md uppercase font-bold">
                My Portfolio
              </Text>
              <AiFillThunderbolt className="text-2xl text-[#E1B7BF]" />
            </Box>
            <Box className="bg-primary_color p-[2px] rounded-xl mt-2"></Box>
          </Link>
          <div className="hidden lg:block">{navList}</div>
          <button
            className="focus:outline-none ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <RxCross2 className="text-3xl" />
            ) : (
              <BiMenuAltRight className="text-3xl" />
            )}
          </button>
        </Box>
        {openNav && (
          <Box
            className="fixed top-15 right-0 w-full px-5 bg-bg_color z-[99]"
            style={{
              transform: "translateX(-0%)",
              transition: "transform 0.10s ease",
            }}
          >
            {navList}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Navbar;
