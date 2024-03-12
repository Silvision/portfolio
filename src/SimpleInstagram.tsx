import { motion } from "framer-motion";
import ProjectSwiper from "./components/StyledComponents/ProjectSwiper";
import { simpleInstagramMediaSwiper } from "./assets/images";
import StyledButton from "./components/StyledComponents/StyledButton";
import GitHubIcon from '@mui/icons-material/GitHub';


function SimpleInstagram() {

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="container-project">
          <div className="container-project-description"> 
            <h1> Simple Instagram </h1> 
              <div>
                <p>
                    This Android application is similar to Instagram. It has its own timeline where you can scroll and see posts of pictures from the app's database.
                    <br/><br/>

                    Developed with Java in Android Studio, it uses Parse Open Source as the backend-as-a-service platform to power the database that holds the posts.
                </p>
              </div>

              <div className="description-buttons"> 
                <a style={{width: "50%"}} href="https://github.com/Silvision/SimpleInstagram" target="_"> <StyledButton icon={<GitHubIcon/>} buttonColor="playButton" buttonSize="extraLarge" /> </a>
              </div>
              
          </div>
          <div className="container-project-slider"> 
              <ProjectSwiper projectMedia={simpleInstagramMediaSwiper} embededVideo={false} videoLink=""/> 
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

export default SimpleInstagram;


