import { Button } from "@mui/material"
import { keyframes } from "@emotion/react"
import { useRef, useState } from "react";
import videoPath from '../../assets/makessense.mp4'
import imagePath from '../../assets/cover15.jpg'


const glow = keyframes`
  25% {
    transform: scale(1.05);
    box-shadow: 0 0 60px #1e9bff;
  }

  100% {
    transform: scale(1);
    box-shadow: 0 0 30px #1e9bff;
  }
`
function ProjectSquare() {

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);


  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current){
      videoRef.current.play();
    }
  }

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current){
      videoRef.current.pause();
    }
  }

  return (
    <>
      <Button
        variant="contained"
        sx={{
            borderRadius: '1em',
            padding: '12em 12em',
            transition: '0.5s',
            '&:hover': {
                background: '#1e9bff',
                animation: `${glow} 0.5s ease-in-out forwards`,
                outline: 'solid 0.3em rgba(138, 150, 152, 0.8)',
                outlineOffset: '0.25em',
            },
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >

        { isHovered ? (<video ref={videoRef} src={videoPath} style={{position: 'absolute', objectFit: 'cover', width: '100%', height: '100%',borderRadius: '1em'}} loop muted></video>) : <img src={imagePath} alt="Project Image" style={{position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1em'}} /> }

      </Button>
    </>
  )

}

export default ProjectSquare