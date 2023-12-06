

const Nav = ({homeDiv, bioDiv, projectsDiv, contactDiv, setHomeDiv, setBioDiv, setProjectsDiv, setContactDiv, resumeDiv, setResumeDiv}) => {

    const homeDivClickHandler = () => {
        setHomeDiv(true)
        setBioDiv(false)
        setContactDiv(false)
        setProjectsDiv(false)
        setResumeDiv(false)
      }
    
      const bioDivClickHandler = () => {
        setBioDiv(true)
        setHomeDiv(false)
        setContactDiv(false)
        setProjectsDiv(false)
        setResumeDiv(false)
      }
    
      const projectsDivClickHandler = () => {
        setProjectsDiv(true)
        setBioDiv(false)
        setHomeDiv(false)
        setContactDiv(false)
        setResumeDiv(false)
      }
    
      const contactDivClickHandler = () => {
        setContactDiv(true)
        setProjectsDiv(false)
        setBioDiv(false)
        setHomeDiv(false)
        setResumeDiv(false)
      }

      const resumeDivClickHandler = () => {
        setContactDiv(false)
        setProjectsDiv(false)
        setBioDiv(false)
        setHomeDiv(false)
        setResumeDiv(true)
      }

    return (
        <div className="nav-container">
            <div className="nav-button" onClick={homeDivClickHandler}>Home</div>
            <div className="nav-button" onClick={bioDivClickHandler}>Bio</div>
            <div className="nav-button" onClick={projectsDivClickHandler}>Projects</div>
            <div className="nav-button" onClick={contactDivClickHandler}>Contact</div>
            <div className="nav-button" onClick={resumeDivClickHandler}>CV</div>
        </div>
    )
}

export default Nav