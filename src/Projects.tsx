import ProjectSquare from "./components/StyledComponents/ProjectSquare";
import image1 from "../src/assets/cover15.jpg";
import video1 from "../src/assets/makessense.mp4";

function Projects() {
  return (
    <>
      <ProjectSquare linkURL="ecosphere" imageURL={image1} videoURL={video1} />
    </>
  );
}

export default Projects;
