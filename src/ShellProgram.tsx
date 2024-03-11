import { motion } from "framer-motion";
import ProjectSwiper from "./components/StyledComponents/ProjectSwiper";
import { shellProgramMediaSwiper } from "./assets/images";
import StyledButton from "./components/StyledComponents/StyledButton";
import GitHubIcon from '@mui/icons-material/GitHub';


function ShellProgram() {

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="container-project">
          <div className="container-project-description"> 
            <h1> Shell Program </h1> 
              <div>
                <p>
                    This shell program is created in Ubuntu using C. The Mav Shell or, "msh", supports any Linux command found in the following
                    PATHs:
                
                    <ul style={{marginLeft: '2em'}}>
                        <li>Current Working Directory</li>
                        <li>/usr/local/bin</li>
                        <li>/usr/bin</li>
                        <li>/bin</li>
                    </ul>

                    <br/><br/>
                    It supports up to 10 command line parameters, fork a child process, and execute those commands.

                </p>
              </div>

              <div className="description-buttons"> 
                <a style={{width: "50%"}} href="https://github.com/Silvision/Shell-Assignment" target="_"> <StyledButton icon={<GitHubIcon/>} buttonColor="playButton" buttonSize="extraLarge"/> </a>
              </div>
              
          </div>
          <div className="container-project-slider"> 
              <ProjectSwiper projectMedia={shellProgramMediaSwiper} embededVideo={false} videoLink=""/> 
          </div>
        
        </div>

        <div className="project-details">
          <h1> Background </h1>
            <p>
                A project that gave me experience with coding in C. Relatively straight forward, at the time kind of hard but fun to learn!
            </p>
          
        </div>
      </motion.div>     
    )

}

export default ShellProgram;


