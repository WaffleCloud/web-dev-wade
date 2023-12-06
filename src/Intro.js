import coderonaut from './space.jpg'

const Intro = () => {
    return(
        <div className='intro-container'> 
            <div className='intro-text-box'>T. Wade Front End Developer</div>
        <div className='profile-pic-container'>
        <img src={coderonaut} alt="coderonaut"
        style={{
            'height':'300px',
            'width': '300px',
            'border-radius': '200px',
            'border': '1px solid'
        }}/>
        </div>
        </div>
    )
}

export default Intro