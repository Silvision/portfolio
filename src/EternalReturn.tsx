import { motion } from "framer-motion";
import ProjectSwiper from "./components/StyledComponents/ProjectSwiper";
import { eternalReturnMediaSwiper } from "./assets/images";
import StyledButton from "./components/StyledComponents/StyledButton";
import GitHubIcon from '@mui/icons-material/GitHub';


function EternalReturn() {

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="container-project">
          <div className="container-project-description"> 
            <h1> Eternal Return Stat Tracker </h1> 
              <div>
                <p>
                  This is an Android application that tracks stats from the MOBA game, Eternal Return: Black Survival, developed and published by Nimble Neuron.
                  Developed with Java in Android Studio, it uses Retrofit 2 as a REST client.
                  <br/><br/>
                  This application retrieves the stats through the game's REST API at Eternal Return's Developer Portal. It can display stats such as
                  Match History, Wins, MMR, Placements, Leaderboards, and more.
                  The GIF quality is not great in this thrown-together slider, but if you'd like, you can refer to more in the GitHub link below.
                  This project is actually one of the ones I learned the most from, despite how oddly unpolished it is!
                </p>
              </div>

              <div className="description-buttons"> 
                <a style={{width: "50%"}} href="https://github.com/Team-TenZ/EternalReturnTracker" target="_"> <StyledButton icon={<GitHubIcon/>} buttonColor="playButton" buttonSize="extraLarge"/> </a>
              </div>
              
          </div>
          <div className="container-project-slider"> 
              <ProjectSwiper projectMedia={eternalReturnMediaSwiper} embededVideo={false} videoLink=""/> 
          </div>
        
        </div>

        <div className="project-details">
          <h1> Background </h1>
            <p>
              This project was an end-of-course project for CodePath's Android class. My friends and I were curious about learning mobile development for fun,
              so during one of our spring semesters alongside our normal courses, we took this class and learned how to use Android Studio and work with APIs.
              <br/><br/>

              The final project let us decide freely what we wanted to make, as long as it utilized what we learned during the course. Since my friends and I were extremely
              into Eternal Return at the time, we thought it'd be cool if we could somehow combined these two.
              <br/><br/>

              It first started with seeeing if ti was plausible, and we were lucky to find out that there was an API available to access game stats from the actual
              game developers. There was only a few issues:
              <br/><br/>

              <li>1. I had to apply for access to the API </li>
              <li>2. I had to navigate through the entire API by translating from Korean. </li>

            </p>

          <h1> Challenges </h1>
            <h3> Gaining Access </h3>
              <p>
                Ok, so bullet point 1 wasn't actually all that difficult. It only involved us filling out a form along with our intended use case for the API. Pretty
                standard stuff I think. The only issue that arose was when it took awhile and we were on a time-crunch, and also figuring out how to use our tokens.
                We ended up using another friend's token since he got his access approved first for whatever reason, and so we went forward from there.               
              </p>

            <h3> Translating the API and Resources from Korean </h3>
              <p>
                Alright now this is where things got fun. Since the game was relatively new, and on top of that not originating in the US, but localized over here,
                the game developers had their API mainly in all Korean. Looking back at it now, it wasn't too bad but with a combined problem of me using APIs for the first time, it was so confusing. I had no idea what to do
                or where to start, but I figured the community could help, so I readied myself to start asking a lot of questions.
                <br/><br/>

                I went to the community developer Discord for the game, which was relatively small because the game was just released and well, not too big.
                From there, I had to ALSO translate messages sent in the Discord to see what people were talking about. 
                Half the time what I would try to "Ctrl + F" the code and errors, and they wouldn't appear because it was in the wrong language.
                <br/><br/>

                I was lucky that HTTP methods are universal, so looking for "GET", "POST", "UPDATE", and "DELETE" weren't in Korean, which also helped me lead to people
                sending screenshots of code on how they sent API requests, but again since I was new, half the requests I looked at were not only mumbo jumbo for awhile,
                but was hard to piece together since I was unfamiliar with the REST clients others were using.

                <br/><br/>
                Quite literally it took hours for me and my friends to piece together everything to where we understood the code. A lot of, "Oh this piece of code" is
                actually what THIS does" to each other while trying to fit our API requests to match how people were doing it. The cherry on top was this was one of my
                first experiences figuring out JSON and how to parse it. You would not believe how lost I was when I kept getting "undefined", when looking back now, I was
                simply just accessing non-existent fields from what we got from the API LOL

              </p>

          <h1> Conclusion </h1>
            <p>
              This project was extremely tiring since it was just a side-project and not part of my real school curriculum. However I was extremely motivated to
              figure out how APIs work and get data from a game that was popular at the time. It seemed awesome that I could show my friends, "Hey, these are your stats right now!"
              right after they got out of playing some games.
              <br/><br/>

              Looking back this was also an amazing experience to learn about using APIs and parsing data we get back from them. It was a real struggle for sure,
              but it laid the foundations for me in figuring out how they worked in the future. I'm now working with them daily, and it's almost comical how simple it really is, but
              I'm grateful I struggled here instead of in the real world, where just like this project, requirements and resources are unfamiliar. It isn't like how classes
              lay out easy access and clear instructions for what we want from our services. Just like translating Korean and adapting other people's advice and resources,
              this all came together to be a surprising gold mine for experience despite being just a simple course outside of school.
            </p>
          
        </div>
      </motion.div>     
    )

}

export default EternalReturn;


