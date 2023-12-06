import Intro from './Intro'
import Bio from './Bio'
import Contact from './Contact'
import Projects from './Projects'
import Resume from './Resume'

const Main = ({homeDiv, projectsDiv, bioDiv, contactDiv, resumeDiv}) => {

  

    return (
        <div className='main-box'>
            {homeDiv && <Intro/>}
            {bioDiv && <Bio/>}
            {projectsDiv && <Projects/>}
            {contactDiv && <Contact/>}
            {resumeDiv && <Resume/>}
        </div>
    )
}

export default Main