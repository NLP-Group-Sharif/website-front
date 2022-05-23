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

function Persian() {
  return (
  <>
  
  <link href='https://fonts.googleapis.com/css?family=Anton' rel='stylesheet'></link>
  <link href='https://fonts.googleapis.com/css?family=Oxygen' rel='stylesheet'></link>
  <link href='https://fonts.googleapis.com/css?family=Lato' rel='stylesheet'></link>
  <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'></link>
    <Navbar bg="" expand="lg" className="navbar-container">
  <Container className='container-fa'>
    <Navbar.Brand href="#home"></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto container-fa">
        <Nav.Link href="#home">کارهای ما</Nav.Link>
        <Nav.Link href="#link">دمو</Nav.Link>
        <Nav.Link href="#link">مشتریان ما</Nav.Link>
        <Nav.Link href="#link">درباره ما</Nav.Link>
        <Nav.Link href="#link">تماس با ما</Nav.Link>
        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown> */}
      </Nav>
    </Navbar.Collapse>
    <button className="demo-button">درخواست دمو</button>
  </Container>
</Navbar>
<div className="absolute"><img src={cir1} alt="circle" width="240" height="200"></img></div>
<div className="absolute-2" id='navbar-logo'><img src={websiteLogo} alt="logo" width="80"></img></div>
<div className="absolute"><div className='lang-container'><button className="button-submit">En</button> <div className='white-text'>|</div> <button className="button-submit">Fa</button></div></div>
<div className="header-container">
  <div className="title-container">
    <div className='grid-container grid-container-fa' id='class-logo'>
    <div class="item1 zoom"><div><div>پردازش متن</div><img src={textline} alt="textline" width="150"></img></div></div>
  <div class="item2"></div>
  <div class="item3 zoom">دستیار صوتی</div>  
  <div class="item4 zoom">گفتار به نوشتار</div>
  <div class="item5"></div>
  <div class="item6 zoom"><img src={message} alt="message" width="100" height="100"></img></div>
  <div class="item7 zoom">تشخیص صدا</div>
  <div class="item8"><img src={cir2} alt="circle" width="200" height="200"></img></div>  
  <div class="item9"></div>
  <div class="item10"></div>
  <div class="item11"></div>
  <div class="item12"></div>
  <div class="item13"></div>
  <div class="item14"></div>
  <div class="item15 zoom">دسته بندی</div>
    </div>
    <img src={logo} alt="logo" width="500" height="600" id='text-logo-p'></img>
    <img src={logo} alt="logo" width="500" height="500" id='image-logo' className='display-none'></img>
    <h1 className="title-box title-box-fa sadgan" id='text-logo-p'>راهکارهای نوین<br></br> <div className="colored-title typed-out">پردازش گفتار</div><div className="colored-title typed-out">فارسی</div>را با ما تجربه کنید</h1>
    <h1 className="title-box title-box-fa sadgan display-none" id='text-logo'> راهکارهای نوین <div className="colored-title typed-out">پردازش گفتار </div><div className="colored-title typed-out">فارسی </div>را با ما تجربه کنید </h1>
  </div>
</div>

<div className='works-title-container works-title-container-margin zoom2 works-title-container-margin-fa works-title-container-fa'>
<h1 className="title-box-5 title-box-5-fa">کارهای<br></br>ما</h1>
</div>

<div className='title-container demo-container-1'>

<img src={mob1} alt="demo" width="350" id="class-logo" className="demo-1"></img>

<h4 className="left-aligned left-aligned-2 left-aligned-fa" id="image-logo">فقط با دادن تعداد محدودی صوت از خودتان، بتوانید تشخیص شخصیت انجام دهید.</h4>

  <h1 className="title-box title-box-2 title-box-3 title-box-2-fa" id="title-logo">تصدیق<br></br>صدا</h1>

</div>

<div className='title-container demo-container-1 demo-container-2'>


<h1 className="title-box title-box-2 title-box-3 title-box-2-fa" id="title-logo">تبدیل گفتار<br></br>به<br></br>متن</h1>
  
  <h4 className="left-aligned left-aligned-2 left-aligned-fa" id="image-logo">سه مدل زبانی که گفتار شما را به خوبی به متن تبدیل می‌کنند.</h4>

<img src={mob2} alt="demo" width="350" id="class-logo" className="demo-2"></img>

</div>

<div className='title-container demo-container-1 demo-container-3'>

  <img src={mob3} alt="demo" width="350" id="class-logo" className="demo-3"></img>
  
  <h4 className="left-aligned left-aligned-2 left-aligned-fa" id="image-logo">یک ماژول برای تولید زیرنویس زنده برای فیلم‌های شما</h4>

<h1 className="title-box title-box-2 title-box-3 title-box-2-fa" id="title-logo">تولید زیرنویس<br></br>زنده</h1>

</div>

<div className="playground playground-fa">
<h1 className="title-box-5 play-background zoom2 play-background-fa">دمو</h1>
<h4 className="left-aligned left-aligned-2 left-aligned-fa">روی میکروفون کلیک کنید و صدای خود را تبدیل به متن کنید</h4>
<img src={line} alt="line" className="line line-fa"></img>

<div className="margin">
</div>

<div className="title-container margined">
<div className="model-container">
    <h1 className="title-box-4 title-box-4-fa">گوگل</h1>
    <div className="model-box model-box-fa">مدل یک یک مدل برای تبدیل صدا به متن به روش مناسب است</div>
  </div>
  <div className="model-container">
    <h1 className="title-box-4 title-box-4-fa">مدل ۱</h1>
    <div className="model-box model-box-fa">مدل یک یک مدل برای تبدیل صدا به متن به روش مناسب است</div>
  </div>
  <div className="model-container">
    <h1 className="title-box-4 title-box-4-fa">مدل ۲</h1>
    <div className="model-box model-box-fa">مدل یک یک مدل برای تبدیل صدا به متن به روش مناسب است</div>
  </div>
</div>

<div className="margin">
</div>

<div className="mic-box-fa">
<button className="mic-button mic-button-fa"> <img src={microphone} alt="logo" width="50"></img> </button>
</div>

<div className='right-aligned right-aligned-fa'><button className="demo-button">درخواست دمو</button></div>
</div>
<div class="skew title-container-2">
<div className="title-container">
<img src={brands} alt="brands" width="550"></img>
<div> 
<div className='works-title-container zoom2'><h1 className="title-box-5 title-box-5-fa">مشتریان<br></br>ما</h1></div>
<h4 className="left-aligned left-aligned-fa">مشتری بعدی می‌توانید شما باشید</h4>
</div>
</div>
<div className="title-container">
<img src={robot} alt="robot" width="400" height="400"></img>
<div>
<div className='works-title-container zoom2'><h1 className="title-box-5 title-box-5-fa">درباره<br></br>ما</h1></div>
<h4 className="left-aligned2 left-aligned2-fa">
ما یک تیم جوان و با انگیزه هستیم که هدف اصلی آن رشد است.
اعضای اصلی این تیم عمدتا از دانشجویان و فارغ‌التحصیلان دانشگاه صنعتی شریف هستند .
رهبری این تیم با دکتر ابولفضل مطهری،
استادیار دانشکده مهندسی کامپیوتر دانشگاه صنعتی شریف است
</h4>
</div>
</div>
{/* <div className="margin-2">
</div> */}
</div>

<div className="">
<img src={halfup} alt="logo" width="100%"></img>
<div className="title-container title-container-3">
<div className='works-title-container zoom2'><h1 className="title-box-5 title-box-5-fa">تماس با<br></br>ما</h1></div>
    <div>
    <h4 className="left-aligned2 left-aligned2-fa">تنها کافیست آدرس ایمیل خود را در این قسمت بگذارید و ما با شما تماس می‌گیریم</h4><br></br>
 <form className="form-box">
  <div className="label-box label-box-fa"><label>
    ایمیل شما:
  </label></div>
  <div className="input-box"><input type="text" name="name" className="input-text" /></div>
  <ReCAPTCHA
    sitekey="Your client site key"
    onChange={onChange}
    className="captcha-box"
  />
  <div className="button-box"><input className="button-submit label-box-fa" type="submit" value="ارسال" /></div>
</form>
</div>
  </div>
  <img src={halfdown} alt="logo" width="100%"></img>
</div>

<div className="footer">
<div className="title-container">
  <div className='desinged-box'></div>
  <h3 className='desinged-box'>&#169; 2022 NLP Team</h3>
  <div className='desinged-box'><button className="button-submit" onclick={topFunction} id="myBtn" title="Go to top">بالا</button></div>
</div>
<div className='margin-3'></div>
<div className="title-container">
  <div className='desinged-box'>
  <div>دانلود اپلیکیشن دموی ما</div>
  <div><img  src={appStore} class="store"/><img src={googlePlay} class="store"/></div>
  </div>
  <div className='desinged-box padding-top'>Designed by Sina, Mohammad</div>
  <div className='desinged-box padding-top'><img className='social-media-icon' src={instagram} width="40"/><img className='social-media-icon' src={telegram} width="40"/><img className='social-media-icon' src={youtube} width="40"/></div>
</div>
</div>
</>
  );
}

export default Persian;
