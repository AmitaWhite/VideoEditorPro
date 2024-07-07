import { Grid, useColorMode } from "@chakra-ui/react";
import { PiGifThin, PiFileVideoThin } from "react-icons/pi";
import { GiSoundWaves } from "react-icons/gi";
import styled from "@emotion/styled";

const VideoBtnArea = (): JSX.Element => {
  const { colorMode } = useColorMode();

  const VideoButton = styled.button({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "16px",
    background: colorMode === "dark" ? "#ffffff14" : "#F7FAFC",
    borderRadius: "8px",
  });

  const IconArea = styled.div({
    display: "flex",
    alignItems: "center",
    height: "40px",
    width: "40px",
    justifyContent: "center",
    borderRadius: "100px",
    color: "#fff",
    marginBottom: "8px",
  });

  return (
    <section className="ma-2">
      <Grid gap={2} gridTemplateColumns="repeat(3, minmax(0, 1fr))" mt="2">
        {/* <VideoButton _dark={{ background: #F7FAFC }}> */}
        <VideoButton>
          <IconArea className="orangeBg">
            <PiGifThin size={`28px`} />
          </IconArea>
          <p>GIF로 내보내기</p>
        </VideoButton>

        <VideoButton>
          <IconArea className="purpleBg">
            <GiSoundWaves size={`28px`} />
          </IconArea>
          <p>MP3로 내보내기</p>
        </VideoButton>

        <VideoButton>
          <IconArea className="blueBg">
            <PiFileVideoThin size={`28px`} />
          </IconArea>
          <p>MP4로 내보내기</p>
        </VideoButton>
      </Grid>
    </section>
  );
};

export default VideoBtnArea;
