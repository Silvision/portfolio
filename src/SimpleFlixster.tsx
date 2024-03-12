import { motion } from "framer-motion";
import ProjectSwiper from "./components/StyledComponents/ProjectSwiper";
import { simpleFlixsterMediaSwiper } from "./assets/images";
import StyledButton from "./components/StyledComponents/StyledButton";
import GitHubIcon from '@mui/icons-material/GitHub';


function SimpleFlixster() {

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="container-project">
          <div className="container-project-description"> 
            <h1> Simple Flixster </h1> 
              <div>
                <p>
                    This Android application is similar to Flixster. It shows movies currently in theatres, as well as their summaries. Clicking a movie shows its trailer in the app and its ratings.
                    <br/><br/>

                    Developed with Java in Android Studio, it uses The Movie Database API to retrieve movie information.
                    <br/><br/>

                    Further details in the GitHub repository.
                </p>
              </div>

              <div className="description-buttons"> 
                <a style={{width: "50%"}} href="https://github.com/Silvision/Flixster" target="_"> <StyledButton icon={<GitHubIcon/>} buttonColor="playButton" buttonSize="extraLarge" /> </a>
              </div>
              
          </div>
          <div className="container-project-slider"> 
              <ProjectSwiper projectMedia={simpleFlixsterMediaSwiper} embededVideo={false} videoLink=""/> 
          </div>
        
        </div>

        <div className="project-details">
          <h1> Background </h1>
            <p>
                A project made from CodePath's Android Studio course to learn how to create mobile applications and use REST APIs.
            </p>
          
        </div>
      </motion.div>     
    )

}

export default SimpleFlixster;


