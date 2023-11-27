import ProjectSquare from './components/StyledComponents/ProjectSquare';
import image1 from '../src/assets/cover15.jpg'
import video1 from '../src/assets/makessense.mp4'


function ProjectsGrid() {

    return (
        <>
            <ProjectSquare imageURL={image1} videoURL={video1}/>
        
        </>
    );

}

export default ProjectsGrid