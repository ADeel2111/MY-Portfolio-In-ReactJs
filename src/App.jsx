
import Bio from './components/Bio'
import Contact from './components/Contact'
import Education from './components/Education'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import WorkExperience from './components/WorkExperience'


export default function App() {
  return (
    
    <div className="relative h-full overflow-y-auto antialiased">
      <div className="bg-img fixed bg-cover bg-center bg-fixed inset-0"></div>
      <div className="relative z-10 flex flex-col items-center justify-center p-4 space-y-8 container mx-auto">
        <Hero/>
        <Navbar/>
        <Projects/>
        <Bio/>
        <Skills/>
        <WorkExperience/>
        <Education/>
        <Contact/>
        <Footer/>

      </div>

    </div>
  )
}