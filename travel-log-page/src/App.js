import React from 'react';
import Header from './components/Header';
import Cards from './components/Cards'
import dataObjects from './Data'
import './App.css';

export default function App() {
  const myData = dataObjects.map( (info) => {
    return(
      <Cards  
        key={info.id}
        {...info}
      />
    )
  })
  return(
    <div>
      <Header />
      <div>
      {myData}
      </div>  
    </div>    
  )
}
