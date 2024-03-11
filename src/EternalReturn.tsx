import { motion } from "framer-motion";
import ProjectSwiper from "./components/StyledComponents/ProjectSwiper";
import { eternalReturnMediaSwiper } from "./assets/images";


function EternalReturn() {

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="container-project">
          <div className="container-project-description"> 
            <h1> Eternal Return </h1> 
              <div>
                <p>
                    Reverse Sokoban is a simple puzzle game with a slight twist on the standard box-pushing genre of puzzles, aka "Sokoban".
                    <br/><br/>
                    Armed with a grappling hook, the player's objective is to solve the puzzles for each room by either pulling the box instead of pushing,
                    or by moving themselves to the box! Cross chasms, hold down buttons, and unlock doors in order to get through each level.
                    <br/><br/>
                </p>
              </div>

              {/* <div className="description-buttons"> 
              <a style={{width: "50%"}} href="https://thunderstore.io/c/lethal-company/p/Silvision/PaintColorSwitch/" target="_"> <StyledButton icon="play_circle_filled_two_tone" buttonColor="playButton" buttonSize="extraLarge" text="Play"/> </a>
              </div> */}
              
          </div>
          <div className="container-project-slider"> 
              <ProjectSwiper projectMedia={eternalReturnMediaSwiper} embededVideo={false} videoLink=""/> 
          </div>
        
        </div>

        <div className="project-details">
          <h1> Background </h1>
            <p>
              This project was another school group project that I managed to get a game out of instead of the normal class projects. I believe the goal of the class was to learn how to work with teammates, plan out a projection / application,
              and apply the Agile methodology we learned. So as long as we followed that, we were able to create this game.
              <br/><br/>

              My group members were excited to do a game, as two of us were experienced with it with one other project, and actually had the same idea of doing another game for this one. We planned what we wanted to do by highlighting what
              everyone's strengths were to gauge what was possible. We also used the standard brainstorming method of dumping ideas on a document, and essentially voting and narrowing which ideas we liked the best.

              <br/><br/>
              Of course, you can see we landed at a puzzle game. We wanted to have something relatively simple to present without too many mechanics, and were inspired to follow the Sokoban genre when the idea was brought up. The thing was, how
              would we make it unique? By "reversing" how Sokoban works. Instead of pushing, we pull! How would we pull things? With a grappling hook! 

            </p>

          <h1> Development </h1>
            <p>
            Similar to one of my other projects, we divied up the development of the game first by volunteers for whoever wanted what part, and then by who had the experience to tackle the job. I ended up with mainly the level design.
            The diagram below is showcases an extremely simple layout of how we wanted our C# classes to look like for our game.                
            </p>

            <h3> The Player </h3>
              <p>
                We had a simple state machine for the player when they're in a state of pulling, or about to grapple, or walking, etc.
                If the player was in their shooting state and shot their grapple, we would draw a raytrace in their direction and see if it hit a collision of a "box". If the box was hit, we'd move the player to the box. Relatively straight forward
                process, and if the player was simply next to a box and there was space in the direction where they were colliding towards, the box would move to that spot.
              </p>
          
            <h3> Tilemap </h3>
              <p>
                I used Unity tilemaps and followed a Brackeys tutorial (respect to a great Youtuber!) to create the levels. I learned about the tilemap collider 2D, which made collision pretty easy to setup on each level as long as I have my
                grid objects for the walls, floors, and holes organized and separated correctly in the hierarchy window.
                It was as simple as just attaching it to the tilemap containing walls and making sure the player also had a collider! 
              </p>

            <h3> Level Design </h3>
              <p>
                This was where I really learned I had to put some good amount of thoughts on how I wanted to lay out a puzzle level. For a lot of levels, I threw together some draft just to get a layout of a "nice" looking room,
                but then it would change drastically as I had to actually put in the boxes, holes, and adjust the size of each room as needed to have spaces for boxes to be shoved.
                A lot of effort went into imagining what a player would "initially" think of as a solution, then add a twist. I also used as much inspiration as I could from previous Sokoban games and puzzles, with some puzzles in Pokemon
                being extremely helpful.
                <br/> <br/>
                It was actually pretty fun to give these levels to my friends and family the playtest! One of the levels took them particularly long which I thought was great and it wasn't impossible either. It was like a perfect chord of
                not too easy, but not too hard.
                <br/> <br/>
                Since a couple of our teammates weren't familiar with Unity, and was relatively busy, I actually made a Youtube video tailored for our game to showcase how to quickly throw together a level. I figured it would help them
                contribute, as well as learn the basics on what was needed for our project, and how we were doing it. They were able to follow it pretty fast and in return, deliver some levels as well!

              </p>
              
          <h1> Conclusion </h1>
            <p>
              This project was pretty easy-going. It was fun seeing another teammate with a passion for creating games help deliver this game. I learned a lot watching and talking to them, and it was also a nice to help others learn Unity
              and have a guidance video for them to follow. It felt like I was a super miniature Unity Youtuber that helped others, which made me extremely happy. On top of that, creating puzzles that actually proved to have some difficulty
              was the cherry on top.
            </p>
          
        </div>
      </motion.div>     
    )

}

export default EternalReturn;


