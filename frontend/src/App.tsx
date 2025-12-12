import './App.css'
import github from "./assets/icons8-github-100.png"
import linkedin from "./assets/icons8-linkedin-100.png"

function App() {

  return (
    <>
      <Intro />
      <About />
      <Work />
      <Experience title="Perforce" paragraph="Software engineer intern" timeworking="4 Months" howlongsinceleft={new Date("July 12 2024")} />
      <ProjectTitle />
      <Projects title="stash" paragraph="full-stack application with AI Vision to make cooking at home easier. (currently private)" link="" />
      <Projects title="env" paragraph="enviromental simulation built in cpp using opengl, glfw and monte carlo/probability algorithms." link="https://github.com/Croudxd/env" />
      <Projects title="backtester" paragraph="Modular trading backtester with indicators such as sma, rsi and ema." link="https://github.com/Croudxd/backtester" />
      <EducationTitle />
      <Education />
      <TechTitle />
      <Tech />
      <Socials />
      <Footer />
    </>
  )
}

export default App


function Intro() {
  return (
    <>
      <div className="goodmorning"><h1>👋 Good <GetTime /> I'm Benjamin Croud</h1></div>
    </>

  )
}
function About() {
  return (
    <>
      <div className="about">Inspiring quantative/software developer.</div>
    </>

  )
}
function GetTime() {
  const now = new Date();
  const hours: number = now.getHours();
  if (hours < 12)
    return (
      <>Morning</>
    )
  if (hours > 12)
    return (
      <>Afternoon</>
    )
  if (hours > 19)
    return (
      <>Evening</>
    )
  if (hours > 5 && hours > 2)
    return (
      <>Should probably go to sleep</>
    )

}


type SinceProp = {
  timeSinceThen: Date
};


function getSinceDate({ timeSinceThen }: SinceProp): string {
  const now = new Date();

  let years = now.getFullYear() - timeSinceThen.getFullYear();
  let months = now.getMonth() - timeSinceThen.getMonth();

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  if (years === 0 && months === 0) return 'Less than a month ago';

  const yearStr = years > 0 ? `${years} year${years > 1 ? 's' : ''}` : '';
  const monthStr = months > 0 ? `${months} month${months > 1 ? 's' : ''}` : '';

  return [yearStr, monthStr].filter(Boolean).join(', ') + ' ago';
}


function Work() {
  return (
    <div className="worktitle"><h2>Work</h2>
      <hr />
    </div>
  )
}
type ExperienceProps = {
  title: string;
  paragraph: string;
  timeworking: string;
  howlongsinceleft: Date;
};
function Experience({ title, paragraph, timeworking, howlongsinceleft }: ExperienceProps) {
  return (
    <div className="experience">
      <div>{title}</div>
      <b>{paragraph}</b>
      <div className="timeworking">{timeworking}</div>
      <div className="sincedate">{getSinceDate({ timeSinceThen: howlongsinceleft })} </div>
    </div>


  )
}

function ProjectTitle() {
  return (
    <div className="projecttitle"><h2>Projects</h2>
      <hr />
    </div>
  )
}
type ProjectProps = {
  title: String;
  paragraph: String;
  link: string;
};
function Projects({ title, paragraph, link }: ProjectProps) {
  return (
    <>
      <div className="projects">
        <div> {title} </div>
        <div className="projectspara"> {paragraph} </div>
        <a href={link}>link</a>
      </div>
    </>
  )
}


function EducationTitle() {
  return (
    <div className="educationTitle"> <h2>Education</h2>
      <hr />
    </div>
  )
}

function Education() {
  return (
    <div className="educationpara">BSc Computer Science With Honors: 1st</div>
  )
}

function TechTitle() {
  return (
    <div className="techtitle"><h2>Tech</h2>
      <hr />
    </div>
  )

}

function Tech() {
  return (
    <div className="tech">
      Rust C++ C Python React Docker SQL Go Flutter
    </div>
  )

}


function Socials() {
  return (
    <div className="socialrow">
      <div className="github"><a href="https://github.com/Croudxd"><img className="githubimage" src={github}></img></a></div>
      <div className="linkedin"><a href="https://www.linkedin.com/in/benjamin-c-8a89011b0/"><img className="linkedinimage" src={linkedin}></img></a></div>
    </div>
  )
}

function Footer() {

  return (
    <footer>
      <p> i use arch btw</p>
    </footer>
  )
}
