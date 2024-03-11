import { motion } from "framer-motion";
import { profileMedia } from "./assets/images";
import './Profile.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import StyledButton from "./components/StyledComponents/StyledButton";


function Profile() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>
        <h1> Profile </h1>

        <br/><br/>
        <div className="container-profile">
          <div className="text-profile">
            <p>
              Hi! My name is Richard Nguyen, or "Silvision".
              <br/><br/>
              I'm a full-stack Software Engineer with a passion for game development when I have the time.
              <br/><br/>
              I love to try and create things that make people happy, or find cool, and I want to help create an impact.
              <br/><br/>
              I enjoy what I create now as a Software Engineer, and as I journey through becoming a better engineer and learning new tech, I hope to someday also help
              deliver products that have etched their names into the gaming community such as Lethal Company, Palworld, Baldurs Gate 3, and much more but especially
              my main inspiration, League of Legends.
              
            </p>
          </div>
          <div className="image-profile">
            <img src={profileMedia[0]} alt="Example Image"/>
          </div>

        </div>
        

        <div style={{marginTop: '5%', width: '50%', height: '175px', justifyContent: 'center'}}> 
          <a style={{width: '50%'}} href="https://github.com/Silvision/" target='_'> <StyledButton icon={<GitHubIcon/>} buttonColor="playButton" buttonSize="extraLarge"/> </a>
        </div>
      </div>
    </motion.div>
  );
}

export default Profile;
