import { motion } from "framer-motion";
import { ecosphereMedia, ecosphereMediaSwiper } from "./assets/images";
import ProjectSwiper from "./components/StyledComponents/ProjectSwiper";
import StyledButton from "./components/StyledComponents/StyledButton";
import './components/ProjectDetails.css'


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

      <div className="project-details">
        <h1> Background </h1>
          <p>
            This was a basic learning / passion project between my friends and I, where we tried learning Unreal Engine 5 to make some semblance of a game. 
            We didn't have much game development experience, but were ambitious and curious enough to see if we could push out a functioning game as our senior project, instead of the other desiginated class projects.
            Inspired by game genres we love such as roguelikes and adventures, and the then popular game, Vampire Survivors, we went to the drawing board with those ideas in mind.
          </p>
        
        <br/>
        
        <h1> Design </h1>
          <p>
            Thinking of what kind of game we wanted to create actually took a good chunk of time. Between trying to stay "within scope" of what our limited capabilities were, and wanting to chase "cool concepts", we struggled
            a lot on finding a good concensus. We went from a story-based adventure, where the player would progress through 7 levels based off the seven deadly sins, to a survival game where crafting and defending a main base
            was the major theme, and several more concepts until finally we landed on the description above. 
            <br/><br/><br/>
            About halfway through the brainstorming, we knew we wanted to keep specific mechanics through each concept such as
            the different element types, weapons, and material gathering for progression. Below is an unfortunately low quality photo of how we sort of had inital designs going for our classes, and how we wanted them to interact.
            All in all, definitely basic ideas, but we knew we had to start somewhere.
          </p>

          <br/>
          <img src={ecosphereMedia[2]}/>
          <br/>


        <br/>

        <h1> Early Development </h1>
          <p>
            Unfamiliar with Unreal Engine 5 and its new features, Nanite and Lumen, we took a lot of time towards understanding these things as well as creating simple game mechanics. 
            Shown by one of our first demos below, we created enemy collision interactions, initial landscape laid out to practice the engine tools, weapon model switches, and hovering items that would magnetize to the player, similar to Minecraft.
            Nanite and Lumen would be implemented further on once we generated more of the terrain and wanted to optimize the lighting and performance of the open world we wanted to achieve.
          </p>

          <br/>
          <iframe src="https://www.youtube.com/embed/PfxSlrbJTz4?si=L1sZuG2wGsQRg14m" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <br/>

          <p>
            One mechanic I had fun creating was the items. I envisioned an object that could hover and rotate just like Minecraft's but the journey to get there was extremely buggy. Not only that, but the item would "pop" out of enemies or
            resources when its spawned, having a kind of arc when coming out and then landing down. It consisted of enabling and disabling physics for an object, scanning for collisions (collisions are not fun but I finally have it all figured out), 
            applying a timeline for the animation, moving the object to the player when in range, and then after discussion with my teammate, he helped me figure out how to check for the floor in our project using a raycast downwards. 
            Looking back, I believe if we had a better understanding of our world building, this would've been slightly easier with the proper collision tags, 
            but nevertheless the end result was extremely satisfying. 
          </p>

          <br/>
          <img src={ecosphereMedia[3]}/>
          <br/>
          <sub>A screenshot of us trying to figure out how to get the items not stuck in other objects on spawn</sub>
          <br/>
        

        <br/>

        <h1> The World </h1>
          <p>
            Creating the open world terrain proved to be pretty time consuming. Ultimately we saved a lot of time by buying assets on the marketplace, which consisted of models, nature, terrain, animations, and more, which definitely made this project
            10x easier. However, on top of being new, I came to learn that it was still difficult to combine everything together. The world building came first, where we elected to create an initial 3 biomes: Forest, Desert, and Tundra.
            We envisioned a world with more biomes, maybe up to 8 with more elements, however we were restricted by how long everything took and settled for 3.
            Each biome more or less started from the top image, where it was all just a plain surface. I used Gaea to create a landscape, imported it into Unreal Engine 5, then spent a lot of time learning how Unreal's landscape tools worked so I could
            seemlessly integrate Gaea's landscape (it was not importing nicely at all; A lot of videos cover this but the mapping of axis' and scale were off, and when importing multiple Gaea terrains, it became a really bad time.)
            
          </p>

          <br/>
          <img src={ecosphereMedia[4]}/>
          <br/>

          <p>
            I severely underestimated the process in trying to make a somewhat decent looking world. Even though I'm helped by the efficiency of Unreal's foliage tool, ensuring each cluster of grass, trees, rocks, and more looking ok
            was so time consuming. Not only that, but for the cliffs I manually transformed each and every big rock, so the bigger areas are all handmade / carved. This was quite the grind, and 
            I was only motivated by how "nice" I thought each biome looked, which to be honest, I think look pretty great! I think
            there could definitely be a LOT more details, but for one of my first few passionate game design levels, I'm proud of the screenshots I can show of this world.
          </p>

        
        <br/>

        <h1> More Challenges </h1>
          <p>
            This whole thing was a challenge. I'm joking... kinda. I've already talked about items above, but here i'll talk about some other features I'm particularly proud of.
          </p>
          <br/>
          
          <h3> Enemies and AI </h3>
            <p>
              To set up the enemies for our world, or monsters, I used basic behavior trees and overlayed a NavMesh across our entire world. At first, getting a monster to move was simple, but it instantly got complicated when the
              NavMesh had to go around objects such as rock, trees, and shifting heights in terrain. I had to create different sized Nav Agents, and spent countless hours adjusting settings that took forever to understand. In fact,
              some settings barely had any documentation or experience on it, and of course I resulted to piecing together fragments of videos and forum posts just to get a larger sized enemy to move properly in the game.
              Here's a picture of our ice golem that decided to take a trip up a tree due to its massive agent size and not interacting with its correctly sized radius properly, as well as some more details / insight on how we documented
              and worked on changes together as a team.
            </p>

            <br/>
            <img src={ecosphereMedia[5]}/>
            <br/>
            <img src={ecosphereMedia[6]}/>
            <br/>

          <h3> Abilities </h3>
            <p>
              I spent a lot of time working on the meteor ability. A lot of research went into first, how do I create an "ability" that had like spell indicators? Recommendations included using Unreal's GAS (Gameplay Ability System), but
              I determined that would take too much time to integrate, and wasn't suitable for our small scale project. I ended up breaking down my meteor into two parts: Step 1, when a player presses their abiility button, put the player
              into a state where they are "aiming". Second, when they click fire, trace where their mouse was aiming on the floor in the 3D world and summon our "meteor" there, but like way above so it comes from the sky.
              <br/><br/>

              Starting with part one, I created the UI I wanted the player to see when they want to start aiming. I also figured if it like spun on the floor, it'd look a bit cooler. So here it is:
            </p>

            <img style={{width:"100%"}} src={ecosphereMedia[7]}/>

            <p>
              Looks great right! Yea no, I had to actually apply this decal flat to the 3D world to actually like have it not spin in the wrong axis... I had to basically grab where the player's cursor was pointing, take those coordinates and 
              plug it into the location of where I spawn the indicator decal, and keep spawning it / erasing it consistently so that the decal would look like it moves along with the cursor. As far the rotation, it was really just animating the decal
              itself and ensuring that it had the right settings to actually be applied to material of the landscape. Unfortunately I don't have a gif to show the actual final result, but it's at 0:50 in my video showcase that's at the gallery
              at the top of this article.
            </p>

          <h3> UI / Objectives </h3>
            <p>
              UI was relatively easy once I got the hang of it. It just got confusing sometimes with how to map variables and actually transfer data from blueprint to blueprint. Kind of related to the previous section, I created an Objective Indicator
              for the player so that in the beginning, they could follow this indicator and get a gist of how to play the game. Essentially, a simple tutorial guide. I took the same spinning animation decal from the ability, changed the icon and speed
              of it, then applied it to the player screen. Where it got fun was I had to also create an entire array stored in the player that kept track of each "objective". An objective would be a rock, an enemy, or just exp, and for the formers, I'd
              do a scan of their location, take those coordinates, convert it to the screen viewport, then apply it to the decal so that whenver the player's camera moved, the decal would stay on the screen and hide just on the edge. If they panned
              their camera over towards the indicator, it would of course start moving to where the objective was on their screen if it was in view. This was a pretty neat functionality, once I got through the weird "bugs" (me not understanding)
              such as the coordinates and mappings between screen and world, as well as forgetting a CRUCIAL, easily forgotten drop-down checkbox I had to check that would otherwise BREAK the UI functionality when I built the project.
            </p>
            

        <br/>

        <h1> Conclusion </h1>
          <p>
            Ultimately, there is a lot more involved that wasn't mentioned in this project such as animations, integrating the models with it, stats, resources, sound, etc, but I wasn't particularly proud of those parts of the project
            I worked on. It is without a doubt, that this game has <b>obvious shortcomings</b> seen in the showcase. Everything isn't smooth, very obviously not polished, inconsistent gameplay, missing animations, and of course the player model
            is Unreal Engine's default because our actual attempt at a player model failed and we couldn't implement it in time.
            <br/> <br/>
            However, as mentioned through this article and its sections, I believe I learned a lot and it was honestly fun when I DID reach working functionality in the things I worked on. I don't have the GitHub link to show the source code,
            as it is privated by my old teammate, however the "Play" button at the top isn't for show. That button will take you to our simple website where we hosted the downloads for anyone such as our friends to try it out. I don't think
            anyone would really uh... click on a random download button but on the off chance, I hope you enjoy what little there is to enjoy LOL.
            <br/> <br/>
            I definitely look forward to applying what I've learned from this project to future personal, or hopefully, professional projects that I will strive hard to join.
          </p>
        

      </div>
    </motion.div>
  );
}

export default Ecosphere;
