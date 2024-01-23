import { motion } from "framer-motion";
import { ecosphereMedia } from "./assets/images";
import ProjectSwiper from "./components/StyledComponents/ProjectSwiper";

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
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Pellentesque non consequat diam, accumsan gravida felis. Nam eu massa a
              ccumsan mauris convallis vulputate. Sed a enim sit amet ligula bibendum
               luctus eu vitae tellus. Sed ante ligula, eleifend sit amet finibus eget, 
               efficitur in sem. Morbi auctor tincidunt quam, in dapibus quam ornare vitae. Se
               d ut malesuada nisl. Nunc interdum dignissim tempor. Proin ipsum ante, congue eu qua
               m at, ornare dictum velit. Vestibulum egestas erat eget enim ullamcorper, sollicitudin p
               ellentesque leo congue. Praesent rhoncus sed arcu sed pharetra. </p>
          </div>
        
        </div>
        <div className="container-project-slider"> 
          <ProjectSwiper projectMedia={ecosphereMedia} embededVideo={true} videoLink="https://www.youtube.com/embed/jVD6l2VARas?si=w3vGxLzcWUKnrOfv" videoThumbnail="http://img.youtube.com/vi/jVD6l2VARas/0.jpg"/> 
        </div>
        
      </div>
    </motion.div>
  );
}

export default Ecosphere;
