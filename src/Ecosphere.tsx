import { motion } from "framer-motion";
import { ecosphereMedia } from "./assets/images";
import ProjectSwiper from "./components/StyledComponents/ProjectSwiper";
import StyledButton from "./components/StyledComponents/StyledButton";
import GitHubIcon from '@mui/icons-material/GitHub';


function Ecosphere() {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container-project">
        <div className="container-project-description"> 
          <h1> EcoSphere </h1> 
          <div>
            <p>
              EcoSphere is a 3D roguelike adventure game.
              <br/><br/>
              Playing as either a Mage or Sword class, the player adventures through multiple biomes and encounters different types of enemies to destroy for EXP, gaining
              new strengths and abilities.
              Each run can have randomized abilities based on an element unlocked through the biomes the player is free to choose to adventure through.
              The randomization allows for new methods of fighting through each playthrough.
              <br/><br/>
              Some featured abilities can range from heals, massive sword slashes, meteor crashes, fireworks, and more.
              As for enemies, there are plenty to fight and discover, from fire types and stone golem bosses protecting their beloved, to massive penguins and a 
              cave teeming with ice golems.
            </p>
          </div>

          <div className="description-buttons"> 
            <StyledButton icon="play_circle_filled_two_tone" buttonColor="playButton" buttonSize="extraLarge"/>  
            <StyledButton icon={<GitHubIcon/>} buttonColor="playButton" buttonSize="extraLarge"/>  
          </div>

        </div>
        <div className="container-project-slider"> 
          <ProjectSwiper projectMedia={ecosphereMedia} embededVideo={true} videoLink="https://www.youtube.com/embed/jVD6l2VARas?si=w3vGxLzcWUKnrOfv"/> 
        </div>
        
      </div>
    </motion.div>
  );
}

export default Ecosphere;
