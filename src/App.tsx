
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhySection from './components/WhySection'

function App() {
  return (
    <div className="app-root">
      <Navbar />
      <main>
        <Hero />
        
        <WhySection />
      </main>
    </div>
  )
}

export default App
