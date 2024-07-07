import React from "react";

// @ rel : UI 요소
import { Box, VStack, Circle, Text } from "@chakra-ui/react";
import { FaVideo } from "react-icons/fa";

// @ rel : state
import { useColorMode } from "@chakra-ui/react";

const VideoPlaceHolder = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  // 3. videoExists 에 대한 부분

  // TODO: 아래 박스 사이즈 결정하는 변수 Refactoring 필요
  const externalBoxSize = { width: 768, height: 667 };

  const styles = {
    boxBgColor: `${colorMode === "dark" ? "pink" : "orange"}`,
    boxWidth: externalBoxSize.width * 0.8 + "px",
    boxHeight: externalBoxSize.height * 0.6 + "px",
    iconSize: "40px",
    iconBgColor: `${colorMode === "dark" ? "black" : "green"}`,
    color: "white",
    fontSize: 15,
  };

  return (
    <Box
      width={styles.boxWidth}
      height={styles.boxHeight}
      bg={styles.boxBgColor}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <VStack>
        <Circle
          size={styles.iconSize}
          bg={styles.iconBgColor}
          color={styles.color}
        >
          <FaVideo />
        </Circle>
        <Text fontSize={styles.fontSize} fontWeight="bold">
          비디오를 선택 해 주세요.
        </Text>
        <Text fontSize={styles.fontSize * 0.8} fontWeight="semibold">
          비디오 파일을 여기에 드래그앤드랍 해 주세요.
        </Text>
      </VStack>
    </Box>
  );
};

export default VideoPlaceHolder;
