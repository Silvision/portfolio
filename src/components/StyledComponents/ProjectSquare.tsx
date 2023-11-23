import { Button } from "@mui/material"
import { keyframes } from "@emotion/react"
import { Scale } from "@mui/icons-material"


const bounce = keyframes`
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

    return (
        <>
            <Button
                variant="contained"   
                sx={{
                    letterSpacing: '0.1em',      
                    padding: '5em 5em',
                    transition: '0.5s', 
                    '&:hover': {
                        background: '#1e9bff',
                        animation: `${bounce} 0.5s ease-in-out forwards`,
                        outline: 'solid 0.3em rgba(138, 150, 152, 0.8)',
                        outlineOffset: '0.25em',
                    },
                }}
            >
                PROJECT 1
            </Button>
        </>
    )

}

export default ProjectSquare