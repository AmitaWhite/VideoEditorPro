import { CiLight } from "react-icons/ci";
import { PiMoonThin } from "react-icons/pi";
import { Flex, Text, useColorMode } from "@chakra-ui/react";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header className="bgGray">
      <Flex
        align="center"
        justify="space-between"
        px="2"
        py="1"
        bg="#EDF2F7"
        _dark={{ background: "#ffffff14" }}
      >
        <Text fontSize="xl" fontWeight="thin">
          VIDEO EDITOR
        </Text>
        {colorMode === "dark" ? (
          <CiLight size={`24px`} onClick={toggleColorMode} />
        ) : (
          <PiMoonThin size={`24px`} onClick={toggleColorMode} />
        )}
      </Flex>
    </header>
  );
};

export default Header;
