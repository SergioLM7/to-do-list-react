import React from 'react'
import 'normalize.css';
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


library.add(faGithub);

const App = () => {

  return (
    <>
      <Header/>
      <Main />
      <Footer />
    </>
  )
}

export default App
