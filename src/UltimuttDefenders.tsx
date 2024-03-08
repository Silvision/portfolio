import { motion } from "framer-motion";
import ProjectSwiper from "./components/StyledComponents/ProjectSwiper";
import StyledButton from "./components/StyledComponents/StyledButton";
import { ultimuttDefendersMediaSwiper } from "./assets/images";


function UltimuttDefenders() {

    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="container-project">
          <div className="container-project-description"> 
            <h1> Ultimutt Defenders </h1> 
            <div>
              <p>
                PaintColorSwitch is a simple mod for Lethal Company with over <b>10k+</b> downloads, made in C#.
                <br/><br/>
                From the popular co-op horror game Lethal Company, this mod enables players to switch through the colors of the paint can that exists in the game. By pressing 'T' on the keyboard
                while holding the spray can, the color will cycle from Yellow -> Purple -> Green -> Red.
                <br/><br/>
              </p>
            </div>
  
            <div className="description-buttons"> 
              <a style={{width: "50%"}} href="https://thunderstore.io/c/lethal-company/p/Silvision/PaintColorSwitch/" target="_"> <StyledButton icon="play_circle_filled_two_tone" buttonColor="playButton" buttonSize="extraLarge" text="Play"/> </a>
            </div>
  
          </div>
          <div className="container-project-slider"> 
            <ProjectSwiper projectMedia={ultimuttDefendersMediaSwiper} embededVideo={false} videoLink=""/> 
          </div>
          
        </div>

        <div className="project-details">
        <h1> Background </h1>
          <p>
            There isn't too much background behind this one. I really enjoyed playing Lethal Company with my friends, and realized there wasn't any functionality to easily switch paint colors so players didn't have to:
            <br/><br/>
            1. Depend on RNG to get a different spray paint color when buying the can.
            <br/>
            2. Differentiate colors between each other.
            <br/> <br/>
            I didn't know how to mod, so I joined a discord community and learned to use Harmony 2 to inject patches into code I wanted to alter. After awhile of tinkering and figuring out how Unity's Netcode for GameObjects worked,
            I had a functioning mod that was arguably the first in the community to sync this specific functionality between players.

          </p>
        </div>

      </motion.div>     
    )

}

export default UltimuttDefenders;


