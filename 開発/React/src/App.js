import React from 'react'
import TopPageIndex from './Pages/index'
import Header from '../src/Template/header';
import Footer from '../src/Template/footer';

function App () {
  return (
    <div className='App'>
      <header className='App-header'>
      </header>
      <Header />
        <TopPageIndex />
      <Footer />
    </div>
  )
}

export default App
