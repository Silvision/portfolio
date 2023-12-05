import { Button } from "@mui/material";
import { keyframes } from "@emotion/react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

type ProjectSquareProps = {
  linkURL: string;
  imageURL: string;
  videoURL: string;
};

const glow = keyframes`
  25% {
    transform: scale(1.05);
    box-shadow: 0 0 60px #1e9bff;
  }

  100% {
    transform: scale(1);
    box-shadow: 0 0 30px #1e9bff;
  }
`;
function ProjectSquare({ linkURL, imageURL, videoURL }: ProjectSquareProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <>
      <Link to={linkURL}>
        <Button
          variant="contained"
          sx={{
            borderRadius: "1em",
            width: "400px",
            height: "400px",
            transition: "animation",
            "&:hover": {
              background: "#1e9bff",
              animation: `${glow} 0.5s ease-in-out forwards`,
              outline: "solid 0.3em rgba(138, 150, 152, 0.8)",
              outlineOffset: "0.25em",
            },
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          disableRipple
        >
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              display: isHovered ? "none" : "block",
            }}
          >
            <img
              src={imageURL}
              alt="Project Image"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "1em",
              }}
            />
          </div>

          <video
            ref={videoRef}
            src={videoURL}
            style={{
              position: "absolute",
              objectFit: "cover",
              width: "100%",
              height: "100%",
              borderRadius: "1em",
              display: isHovered ? "block" : "none",
            }}
            loop
            muted
          ></video>
        </Button>
      </Link>
    </>
  );
}

export default ProjectSquare;
