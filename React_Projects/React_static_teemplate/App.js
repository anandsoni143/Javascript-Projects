import React from 'react'
import MastHead from './MastHead';
import NavBar from './NavBar';
import Portfolio from './Portfolio'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'
import Portfoliomodals from './Portfolio_modals'
// import ReactDOM from 'react-dom'
import './styles.css'
const App = () => ( 
<div>
    <NavBar />
    <MastHead />
    <Portfolio />
    <About />
    <Contact />
    <Footer />
    <Portfoliomodals />
    </div>
)


export default App;

