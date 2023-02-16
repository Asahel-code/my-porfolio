import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import Footer from "./general/Footer";
import Navbar from "./general/Navbar";

type UserLayoutProps = {
  children: ReactNode;
};

const UserLayout = ({ children }: UserLayoutProps) => {
  return (
    <>
      <Navbar />
      <Box className="mt-16">{children}</Box>
      <Footer />
    </>
  );
};

export default UserLayout;
