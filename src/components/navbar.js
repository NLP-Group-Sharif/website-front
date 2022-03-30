import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import './style.css';
import logo from '../images/robot.png';
import line from '../images/line.png';
import microphone from '../images/microphone.png';
import robot from '../images/robot2.png';
import brands from '../images/brands.png';
import halfup from '../images/halfup.png';
import halfdown from '../images/halfdown.png';
import googlePlay from '../images/googlePlay.png';
import appStore from '../images/appStore.png';
import instagram from '../images/instagram.png';
import telegram from '../images/telegram.png';
import youtube from '../images/youtube.png';
import message from '../images/message.png';
import textline from '../images/textline.png';
import mob1 from '../images/mob1.png';
import mob2 from '../images/mob2.png';
import mob3 from '../images/mob3.png';
import websiteLogo from '../images/logo.png';
import cir1 from '../images/cir1.png';
import cir2 from '../images/cir2.png';
import ReCAPTCHA from "react-google-recaptcha";

// const Button = styled.`
  
// `
function onChange(value) {
  console.log("Captcha value:", value);
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function Navbarr() {
  return (
  <>
  
  <link href='https://fonts.googleapis.com/css?family=Anton' rel='stylesheet'></link>
  <link href='https://fonts.googleapis.com/css?family=Oxygen' rel='stylesheet'></link>
  <link href='https://fonts.googleapis.com/css?family=Lato' rel='stylesheet'></link>
  <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'></link>
    <Navbar bg="" expand="lg" className="navbar-container">
  <Container>
    <Navbar.Brand href="#home"></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Our Works</Nav.Link>
        <Nav.Link href="#link">Play</Nav.Link>
        <Nav.Link href="#link">Our Customers</Nav.Link>
        <Nav.Link href="#link">About Us</Nav.Link>
        <Nav.Link href="#link">Contact Us</Nav.Link>
        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown> */}
      </Nav>
    </Navbar.Collapse>
    <button className="demo-button">Request a demo</button>
  </Container>
</Navbar>
<div className="absolute"><img src={cir1} alt="circle" width="240" height="200"></img></div>
<div className="absolute-2"><img src={websiteLogo} alt="logo" width="80"></img></div>
<div className="absolute"><div className='lang-container'><button className="button-submit">En</button> <div className='white-text'>|</div> <button className="button-submit">Fa</button></div></div>
<div className="header-container">
  <div className="title-container">
    <h1 className="title-box">We Create <br></br> <div className="colored-title"> Persian <br></br> NLP </div> Solutions</h1>
    <img src={logo} alt="logo" width="500" height="600"></img>
    <div className='grid-container'>
    <div class="item1"><div><div>Text Processing</div><img src={textline} alt="textline" width="150"></img></div></div>
  <div class="item2"></div>
  <div class="item3">Assistants</div>  
  <div class="item4">Speech to Text</div>
  <div class="item5"></div>
  <div class="item6"><img src={message} alt="message" width="100" height="100"></img></div>
  <div class="item7">Voice Verification</div>
  <div class="item8"><img src={cir2} alt="circle" width="200" height="200"></img></div>  
  <div class="item9"></div>
  <div class="item10"></div>
  <div class="item11"></div>
  <div class="item12"></div>
  <div class="item13"></div>
  <div class="item14"></div>
  <div class="item15">Categorization</div>
    </div>
  </div>
</div>

<div className='works-title-container works-title-container-margin'>
<h1 className="title-box-5">Our<br></br>Works</h1>
</div>

<div className='title-container demo-container-1'>
  <h1 className="title-box title-box-2 title-box-3">Voice<br></br>Verification</h1>
  
  <h4 className="left-aligned left-aligned-2">Give it a few voices of yours and 
it will approve your voice.</h4>

<img src={mob1} alt="demo" width="350"></img>
</div>

<div className='title-container demo-container-1 demo-container-2'>

  <img src={mob2} alt="demo" width="350"></img>
  
  <h4 className="left-aligned left-aligned-2">3 Language models to play around with
and turn any persian voice to text.</h4>

<h1 className="title-box title-box-2 title-box-3">Speech<br></br>to<br></br>Text</h1>
  
</div>

<div className='title-container demo-container-1 demo-container-3'>

  <h1 className="title-box title-box-2 title-box-3">Live<br></br>Subtitles</h1>
  
  <h4 className="left-aligned left-aligned-2">A plugin to generate live sutitles and context
for any persian video.</h4>

<img src={mob3} alt="demo" width="350"></img>
</div>

<div className="playground">
<h1 className="title-box-5 play-background">Play</h1>
<h4 className="left-aligned left-aligned-2">Tap the microphone and say something to turn it into text.</h4>
<img src={line} alt="line" className="line"></img>

<div className="margin">
</div>

<div className="title-container margined">
  <div className="model-container">
    <h1 className="title-box-4">Model 1</h1>
    <div className="model-box">Lorem Ipsum is thenew 
factory for the test and
new hey.</div>
  </div>
  <div className="model-container">
    <h1 className="title-box-4">Model 2</h1>
    <div className="model-box">Lorem Ipsum is thenew 
factory for the test and
new hey.</div>
  </div>
  <div className="model-container">
    <h1 className="title-box-4">Google</h1>
    <div className="model-box">Lorem Ipsum is thenew 
factory for the test and
new hey.</div>
  </div>
</div>

<div className="margin">
</div>

<button className="mic-button"> <img src={microphone} alt="logo" width="50"></img> </button>

<div className='right-aligned'><button className="demo-button">Request a demo</button></div>
</div>
<div class="skew title-container-2">
<div className="title-container">
<div>
<div className='works-title-container'><h1 className="title-box-5">Our<br></br>Customers</h1></div>
<h4 className="left-aligned">You can be the next one!</h4>
</div>
<img src={brands} alt="brands" width="550"></img>
</div>
<div className="title-container">
<div>
<div className='works-title-container'><h1 className="title-box-5">About<br></br>Us</h1></div>
<h4 className="left-aligned2">We are a young and ambitious team whose main 
focus is to grow. Our members are mostly graduates
from Sharif University of Technology. This team is led
by Dr. Abolfazl Motahari who is an assistant professor
at Sharif University of Technology too.</h4>
</div>
<img src={robot} alt="robot" width="400" height="400"></img>
</div>
{/* <div className="margin-2">
</div> */}
</div>

<div className="">
<img src={halfup} alt="logo" width="100%"></img>
<div className="title-container title-container-3">
<div className='works-title-container'><h1 className="title-box-5">Contact<br></br>Us</h1></div>
    <div>
    <h4 className="left-aligned2">Just put your email address here
 and we will contact you!</h4><br></br>
 <form className="form-box">
  <div className="label-box"><label>
    Your Email:
  </label></div>
  <div className="input-box"><input type="text" name="name" className="input-text" /></div>
  <ReCAPTCHA
    sitekey="Your client site key"
    onChange={onChange}
    className="captcha-box"
  />
  <div className="button-box"><input className="button-submit" type="submit" value="Submit" /></div>
</form>
</div>
  </div>
  <img src={halfdown} alt="logo" width="100%"></img>
</div>

<div className="footer">
<div className="title-container">
  <div className='desinged-box'></div>
  <h3 className='desinged-box'>&#169; 2022 NLP Team</h3>
  <div className='desinged-box'><button className="button-submit" onclick={topFunction} id="myBtn" title="Go to top">Top</button></div>
</div>
<div className='margin-3'></div>
<div className="title-container">
  <div className='desinged-box'>
  <div>Download our demo app</div>
  <div><img  src={appStore} class="store"/><img src={googlePlay} class="store"/></div>
  </div>
  <div className='desinged-box padding-top'>Designed by Sina, Mohammad</div>
  <div className='desinged-box padding-top'><img className='social-media-icon' src={instagram} width="40"/><img className='social-media-icon' src={telegram} width="40"/><img className='social-media-icon' src={youtube} width="40"/></div>
</div>
</div>
</>
  );
}

export default Navbarr;
