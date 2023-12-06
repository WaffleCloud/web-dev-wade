
// import twade from './videos/twade.gif'
// import cirqueDeDelire from './videos/cirqueDeDelire.gif'
// import dreamWarriorActing from './videos/dreamWarriorActing.gif'
import dwaSite from './videos/dwaSite.mov'
import cddSite from './videos/cddSite.mov'
import twSite from './videos/twSite.mov'

const Projects = () => {
    return(
        <div style={{'display': 'flex', 'flex-direction':'column'}}>
            
           <div className='video-box'>
            <a href='https://dreamwarrioracting.com' target='blank'>
                {/* <img src={dreamWarriorActing}
                    alt=''
                     style={{
                        'margin-right': '50px',
                        'padding': '10px',
                        'width': '480px',
                        'height': '300px',
                }}/> */}
                <video controls autoPlay loop muted
                style={{
                    'margin-right': '50px',
                    'padding': '10px',
                    'width': '480px',
                    'height': '300px'}}>
                <source src={dwaSite} 
                style={{
                    'height': '230px',
                    'width' : '480px',
                }}
                type="video/mp4"
                ></source>
                </video>
                </a>
                <p>
                        This website was commisioned for a Martial Artist Actor.  <br/>
                        I wanted to acheve a website that could contain a lot of <br/>
                        visual information and still have scalabiilty. <br/>
                        The useState hook was implemented greatly to achieve  <br/>
                        the functionaly of the gallery. <br/>
                        As with all my projects, I designed the UI/UX. <br/>
                        Made with React.<br/>
                        dreamWarriorActing.com
                </p>
            </div>

              <br/>
            <div className='video-box'>
                <a href='https://cirquededelire.com' target='blank'>
                {/* <img src={cirqueDeDelire} 
                alt=''
                style={{
                    'padding': '10px',
                    'margin-right': '50px',
                    'width': '480px',
                    'height': '310px',
                }}
                /> */}
                <video controls autoPlay loop muted
                style={{
                    'margin-right': '50px',
                    'padding': '10px',
                    'width': '480px',
                    'height': '300px'}}>
                <source src={cddSite}
                 style={{
                    'height': '230px',
                    'width' : '480px',
                }} 
                type="video/mp4"
                ></source>
                </video>
                </a>
                <p>
                        I designed and created this responsive website to showcase <br/>
                        my artstic endeavors. I wanted the aesthetic and <br/>
                        energy of my work to show through the UX.<br/>
                        For this I utilized, color, font choices, <br/>
                        and a dynamic background. <br/>
                        Made with React.<br/>
                        cirqueDeDelire.com
                        
                </p>
            </div>
                <br/>

                <br/>
            <div className='video-box'> 
               {/* <img src={twade}
                    alt=''
                     style={{
                        'margin-right': '50px',
                        'padding': '10px',
                        'width': '480px',
                        'height': '310px',
                }}/> */}
                <video controls autoPlay loop muted
                style={{
                    'margin-right': '50px',
                    'padding': '10px',
                    'width': '480px',
                    'height': '300px'}}>
                <source src={twSite} 
                 style={{
                    'height': '230px',
                    'width' : '480px',
                }}
                type="video/mp4"
                ></source>
                </video>
                <p>
                        Here I have implemented a straightforward design. <br/>
                        Reminescent of the popular linkTree structure,  <br/>
                        but with a creative twist.  <br/>
                        Made with Vanilla JS.
                </p>
                
            </div>
            
            
        </div>
    )
}

export default Projects