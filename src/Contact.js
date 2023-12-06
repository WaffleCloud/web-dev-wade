import x from './icons/x.png';
import codewars from './icons/codewars.png';
import email from './icons/email.png';
import github from './icons/github.png';
import medium from './icons/medium.png';
import linkedin from './icons/linkedin.png';



const Contact = () => {

    return(
        <div 
        style={{
            'font-size': '30px'
        }}>
           <a href="mailto:hello@webdevwade.io"> <img className='icon' src={email} alt=""/>      hello@webdevwade.io</a> <br/>
            <a href='https://www.linkedin.com/in/webdevwade/'><img className='icon' src={linkedin} alt=""/>   https://www.linkedin.com/in/webdevwade/ </a> <br/>
            <a href='https://github.com/WaffleCloud'><img className='icon' src={github} alt=""/>     github.com/WaffleCloud</a> <br/>
            <a href='https://www.codewars.com/users/Ceysuls'><img className='icon' src={codewars} alt=""/>   https://www.codewars.com/users/Ceysuls</a> <br/>
            <a href='https://medium.com/@webdevwade42'><img className='icon' src={medium} alt=""/>     https://medium.com/@webdevwade42</a><br/>
            <a href='https://twitter.com/hello_Foond'><img className='icon' src={x} alt=""/>      https://twitter.com/hello_Foond </a>
        </div>
    )
}

export default Contact