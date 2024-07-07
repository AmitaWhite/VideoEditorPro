import React from "react";
import VideoBtnArea from "../components/VideoBtnArea.tsx";

import VideoPlaceHolder from "../components/VideoPlaceHolder.tsx";
// TODO: Video 작업 관련 기능 컴포넌트 버튼 추가

const Video = () => {
  return (
    <>
      <VideoPlaceHolder />
      <VideoBtnArea />
    </>
  );
};

export default Video;
