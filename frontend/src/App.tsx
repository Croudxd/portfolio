import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import github from "./assets/icons8-github-100.png"
import linkedin from "./assets/icons8-linkedin-100.png"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
          <Intro />
          <About />
          <Work />
          <Experience title="Perforce" paragraph="Software engineer intern" timeworking="4 Months" howlongsinceleft={new Date("July 12 2024")} />
          <ProjectTitle />
          <Projects title="Stash" paragraph="Full-stack application with AI Vision to make cooking at home easier." link="https:gofuckurself.com" />
          <Projects title="Strategy-backtest-engine" paragraph="trading backtester + live trading engine." link="https:ilovegoths.com" />
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


function Intro(){
    return(
        <>
            <div className="goodmorning"><h1>👋 Good <GetTime /> I am Benjamin</h1></div>
        </>
            
    )
}
function About(){
    return(
        <>
            <div className="about">Inspiring quantative/software developer.</div>
        </>
            
    )
}
function GetTime(){
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


function getSinceDate({timeSinceThen} : SinceProp ): string{
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


function Work(){
    return(
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
function Experience({title, paragraph, timeworking, howlongsinceleft} : ExperienceProps){
    return(
        <div className="experience">
            <div>{title}</div>
            <b>{paragraph}</b>
            <div className="timeworking">{timeworking}</div>
            <div className="sincedate">{getSinceDate( { timeSinceThen :howlongsinceleft}) } </div>
        </div>

        
    )
}

function ProjectTitle()
{
    return(
        <div className="projecttitle"><h2>Projects</h2>
            <hr />
        </div>
    )
}
type ProjectProps = {
    title: String;
    paragraph: String;
    link: String;
};
function Projects({title, paragraph, link} : ProjectProps)
{
    return(
        <>
        <div className="projects">
            <div> { title } </div>
            <div className="projectspara"> { paragraph } </div>
            <a href={ link }>link</a>
        </div>
        </>
    )
}


function EducationTitle()
{
    return(
        <div className="educationTitle"> <h2>Education</h2>
            <hr/ >
        </div>
    )
}

function Education(){
   return(
       <div>BSc Computer Science With Honors: 1st</div>
   ) 
}

function TechTitle(){
    return(
        <div className="techtitle"><h2>Tech</h2>
            <hr />
        </div>   
    )
      
}

function Tech(){
    return(
        <div>
            Rust C++ C Python React Docker SQL Go Flutter
        </div>   
    )
      
}


function Socials(){
    return(
      <div className="socialrow">
        <div className="github"><a href="https://github.com/Croudxd"><img className="githubimage" src={github}></img></a></div> 
        <div className="linkedin"><a href="https://www.linkedin.com/in/benjamin-c-8a89011b0/"><img className="linkedinimage" src={linkedin}></img></a></div> 
      </div> 
    )
}

function Footer(){

    return(
        <footer>
            <p> i use arch btw</p>
        </footer>
    )
}
