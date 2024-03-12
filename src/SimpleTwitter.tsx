import { motion } from "framer-motion";
import ProjectSwiper from "./components/StyledComponents/ProjectSwiper";
import { simpleTwitterMediaSwiper } from "./assets/images";
import StyledButton from "./components/StyledComponents/StyledButton";
import GitHubIcon from '@mui/icons-material/GitHub';


function SimpleTwitter() {

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="container-project">
          <div className="container-project-description"> 
            <h1> Simple Twitter </h1> 
              <div>
                <p>
                    This Android application is similar to Twitter. Users can log into their own Twitter acccounts after authorizing the application to access the account. Main features of the application include:
                    <br/><br/>

                    <li> See Tweets from your timeline </li>
                    <li> Post Tweets </li>
                    <br/><br/>

                    Developed with Java in Android Studio, it uses Twitter's API in order to push and pull data.
                </p>
              </div>

              <div className="description-buttons"> 
                <a style={{width: "50%"}} href="https://github.com/Silvision/Flixster" target="_"> <StyledButton icon={<GitHubIcon/>} buttonColor="playButton" buttonSize="extraLarge" /> </a>
              </div>
              
          </div>
          <div className="container-project-slider"> 
              <ProjectSwiper projectMedia={simpleTwitterMediaSwiper} embededVideo={false} videoLink=""/> 
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

export default SimpleTwitter;


