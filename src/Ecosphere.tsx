import { motion } from "framer-motion";
import { ecosphereMedia, ecosphereMediaSwiper } from "./assets/images";
import ProjectSwiper from "./components/StyledComponents/ProjectSwiper";
import StyledButton from "./components/StyledComponents/StyledButton";
import './Ecosphere.css'


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
            <a style={{width: "50%"}} href="https://silvre.github.io/ecosphere/" target="_"> <StyledButton icon="play_circle_filled_two_tone" buttonColor="playButton" buttonSize="extraLarge" text="Play"/> </a>
            {/* <a style={{width: "50%"}} href="https://www.google.com/"> <StyledButton icon={<GitHubIcon/>} buttonColor="playButton" buttonSize="extraLarge"/> </a> */}
          </div>

        </div>
        <div className="container-project-slider"> 
          <ProjectSwiper projectMedia={ecosphereMediaSwiper} embededVideo={true} videoLink="https://www.youtube.com/embed/jVD6l2VARas?si=w3vGxLzcWUKnrOfv"/> 
        </div>
        
      </div>

      <div className="ecosphere-details">
        <h1> Background </h1>
          <p>
            This was a basic learning / passion project between my friends and I, where we tried learning Unreal Engine 5 to make some semblance of a game. 
            We didn't have much game development experience, but were ambitious and curious enough to see if we could push out a functioning game as our senior project, instead of the other desiginated class projects.
            Inspired by game genres we love such as roguelikes and adventures, and the then popular game, Vampire Survivors, we went to the drawing board with those ideas in mind.
          </p>
        
        <br></br>
        
        <h1> Design </h1>
          <p>
            Thinking of what kind of game we wanted to create actually took a good chunk of time. Between trying to stay "within scope" of what our limited capabilities were, and wanting to chase "cool concepts", we struggled
            a lot on finding a good concensus. We went from a story-based adventure, where the player would progress through 7 levels based off the seven deadly sins, to a survival game where crafting and defending a main base
            was the major theme, and several more concepts until finally we landed on the description above. About halfway through the brainstorming, we knew we wanted to keep specific mechanics through each concept such as
            the different element types, weapons, and material gathering for progression.

          </p>
      </div>
    </motion.div>
  );
}

export default Ecosphere;
