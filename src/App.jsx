import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="pfolio">
      <div className='topp'>
        <p className='topText'>If you were waiting for the most
        opportune moment, that was <strong>IT</strong> !</p>
      </div>
      <nav className='navbar'>
        <div className='namee'>
          <p className='name'>Shashank</p>
        </div>
        <div className='buttons'>
          <button className='btn'>Home</button>
          <button className='btn'>About</button>
          <button className='btn'>Skills</button>
          <button className='btn'>Projects</button>
          <button className='btn' id='btn2'>Contact</button>
        </div>
      </nav>
      <div className='mainArea'>
        <div className='main1'>
          <div className='mainleft'>
            <p id='hello'>Hey there!</p>
            <h1 id='intro'></h1>
            <p id='idd'>A <strong>UI/UX</strong> Designer</p>
            <button id='hireMe'>Hire Me</button>
          </div>
          <div className='mainright'>
            <div id='pic'>
            </div>
            <p id='desc'>I work to create innovative solutions that inspire, and foster memorable
              relationships between brands and their clients. With a focus on branding, 
              on UI/Web, I strive to create usable and polished products through passionate
              and deliberate design.
            </p>
            <button id='vres'>VIEW RESUME</button>
          </div>
        </div>
        <div className='main2'>
          <div className='boxes'>
            <h1 className='bh1'>About</h1>
            <p>I'm Shashank. Born & brought up in Hooghly, W.B, I keep
              great enthusiasm for coding & web-development.
            </p>
          </div>
          <div className='boxes'>
            <h1 className='bh1'>Skills</h1>
            <div className="skills">
              <i class="fa-brands fa-html5"></i>
              <i class="fa-brands fa-css3-alt"></i>
              <i class="fa-brands fa-js"></i>
              <i class="fa-brands fa-java"></i>
              <i class="fa-brands fa-python"></i>
              <i class="fa-brands fa-github"></i>
              <i class="fa-brands fa-react"></i>
            </div>
          </div>
          <div className='boxes'>
            <h1 className='bh1'>Projects</h1>
          </div>
        </div>
      </div>
      <div className='bottomm'>
          <div className='connect'>
            <p className='phone'>Phone:- (+91) 9433778372</p>
            <p className='mail'>E-mail:- shashanksp1704@gmail.com</p>
            <div className="socials">
              <i class="fa-brands fa-linkedin-in"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-x-twitter"></i>
              <i class="fa-brands fa-github"></i>
            </div>
          </div>
        </div>
    </div>
  )
}

export default App
