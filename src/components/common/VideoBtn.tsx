import styled from "@emotion/styled";

const VideoBtn = ({ icon, text }: { icon: JSX.Element; text: string }) => {
  const VideoButton = styled.button({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "16px",
    background: "#ffffff14",
    borderRadius: "8px",
  });

  const IconArea = styled.div({
    display: "flex",
    alignItems: "center",
    height: "40px",
    width: "40px",
    background: "#F74F09",
    justifyContent: "center",
    borderRadius: "100px",
    color: "#fff",
    marginBottom: "8px",
  });

  return (
    <div>
      <VideoButton>
        <IconArea>{icon}</IconArea>
        <p>{text}</p>
      </VideoButton>
    </div>
  );
};

export default VideoBtn;
