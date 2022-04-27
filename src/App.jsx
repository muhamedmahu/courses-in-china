import React from 'react'
import About from './components/About/About'
import { Contact } from './components/Contact/Contact'
import Expirience from './components/expirience/Expirience'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Nav } from './components/Nav/Nav'
import { Portfolio } from './components/Portfolio/Portfolio'
import Services from './components/Services/Services'
import { Testimonials } from './components/Testimonials/Testimonials'

const App = () => {
  return (
<>
<Header />
<About />
<Nav />
<Expirience />
<Footer />
<Portfolio />
<Services />
<Testimonials />
<Contact />
</>
  )
}

export default App