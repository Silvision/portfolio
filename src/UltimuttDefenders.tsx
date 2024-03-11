import { motion } from "framer-motion";
import ProjectSwiper from "./components/StyledComponents/ProjectSwiper";
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
                    Ultimutt Defenders is a gacha tower defense game with a focus on dogs! Developed with C# in Unity3D, it uses Back4Apps, a backend-as-a-service platform powered by Parse Open Source, to store user data.
                    <br/><br/>
                    Take control of the dog parks and more as slimes invade! Place different dog breeds that all have unique attacks and abilities to eliminate them before they reach the dog houses.
                    Get Kibble and Chew Toys through playing to either train your dogs, or get a chance to "adopt" stronger, even mythical dog breeds to your arsenal!
                    <br/><br/>


                    Unfortunately, the GitHub repository is privated, and I do not have an updated APK available to easily download. However, I am heavily thinking about rebooting this project as of 3/7/2024.
                </p>
              </div>

              {/* <div className="description-buttons"> 
              <a style={{width: "50%"}} href="https://thunderstore.io/c/lethal-company/p/Silvision/PaintColorSwitch/" target="_"> <StyledButton icon="play_circle_filled_two_tone" buttonColor="playButton" buttonSize="extraLarge" text="Play"/> </a>
              </div> */}
              
          </div>
          <div className="container-project-slider"> 
              <ProjectSwiper projectMedia={ultimuttDefendersMediaSwiper} embededVideo={false} videoLink=""/> 
          </div>
        
        </div>

        <div className="project-details">
          <h1> Background </h1>
            <p>
                This project was a school project that I wanted to do, instead of the simple defined project they provided. My friends and I, plus a classmate we were introduced to, put our heads together to develop a relatively simple game on Unity,
                the game engine we were interested in learning.
                <br/><br/>

                Planning the game was relatively straight forward since everyone everyone was new to game dev and make basically, well anything. So it didn't take long before we thought of some our favorite things: dogs, and combine it with a relatively
                simple game design, tower defenses.

                <br/><br/>
                As for the other technology mentioned, my friend and I actually took a class from CodePath for Android apps. It was there that we learned briefly of Back4Apps, the backend-as-a-service platform that let us store user data
                relatively easily using a NoSQL database. So we decided to transfer our skills we learned there to help setup a simple database for this game.

            </p>

          <h1> Development </h1>
              <p>
                The development process was relatively straight forward too until the latter half. Setting up the core game mainly consisted of following guides and understanding the basics of Unity. When we got to straying off the guides, of course
                is where things got interesting. We split roles where a couple of us worked on the main core game design, then the others worked on things such as sound design, UI, and the custom 3D models we had for the dogs.
              </p>

              <h3> My Role </h3>
                <p>
                  I worked on the core gameplay design, creating turrets, enemies, the maps, currencies, waves, attacks, etc. Hooking up the database was hard, since the documentation for Parse, the open source framework for backend applications provided
                  by Back4Apps, was kind of outdated for Unity. However enough hours and tinkering with function names led me to a consistent flow for the GET, POST, PUT, and DELETE HTTP methods.
                  <br/> <br/>
                  I learned a lot about Unity collisions when learning to set up the projectiles shot by the dogs as well as tagging and setting up detection ranges. Towards the end however, whenever I packaged the game, I seemed to get bugs related to
                  detection and collisions that I couldn't figure out unfortunately. As a solution, I said "this dog fires... when it wants to" since the bug only happened perodically! Great solution I'd say!
                  <br/> <br/>
                  Another thing I did due to bugs and time limit, was instead of implementing an entirely new projectile and have more collision issues I didn't understand, I took pre-existing working ones and refactored how it looked and its damage
                  to still present a new dog with a different damage method. The deadline for the project was rapidly approaching, and we had promised / advertised having X amount of dog turrets, so this on-the-fly fix seemed to end up working just fine.
                  <br/> <br/>
                  Finally, I ended up actually helping my friends a lot here and there, with the UI, sound, and even our gacha mechanic a little bit. To get some of them involved in the core game itself, I created a youtube video tutorial tailored towards
                  our game and how to create some levels / maps and help out. 
                </p>

              <h3> Other Roles </h3>
                <p>
                  As I mentioned, my other friends worked a bit on UI. In fact, I have to give big props to two people outside of our project that wanted to help with our game. One my good friends that was getting into art design helped create the
                  logo for our Ultimutt Defenders, and my girlfriend helped enormously in creating the nice menu backgrounds. I'm extremely appreciative of the extra help they gave us, as our game would definitely look a lot worse than it is now.
                  <br/> <br/>

                  One of my teammates created the buttons to click to each level and the design of them, and another worked mainly on the gacha portion where we use "Kibble" on what is essentially loot boxes to give the player a chance to get
                  stronger, unique dog breeds to use.
                  <br/> <br/>

                  Lastly, our models are custom made by our new classmate we had met, who offered to learn Blender to create them. He took an enormous chunk of time to learn it and delivered some extremely nice models in my opinion! He also
                  helped rig them up and helped in gameplay design as well.

                </p>

          <h1> Conclusion </h1>
              <p>
                All in all, this entire project was extremely fun to work on. I got a chance to work with on a game with teammates and see what we could create when we put our efforts together. It's nowhere near a polished game or even a good beta one,
                but the experience I got from this project was invaluable. It definitely felt a lot better working on this than a standard, overdone calender or itinerary app.
              </p>
          
        </div>
      </motion.div>     
    )

}

export default UltimuttDefenders;


