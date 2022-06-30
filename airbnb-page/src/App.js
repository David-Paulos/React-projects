import React from 'react'
import Navbar from './components/Navbar'
import Experiences from './components/Experiences'
import Intro from './components/Intro'
import Card from './components/Card'
import Data from './data'

import './style.css'

export default function App() {
    const cardCreator = Data.map((x) => {
        return (
            <Card
                key={x.id}
                // This will pass all data at once 
                allData={x}
                // Or use simply {...x} to replace allData={x} in order to spread the entire object
            />
        )
    })
    return (
        <div>
            <Navbar />
            <Experiences />
            <Intro />
            <section className='cards'>
                {cardCreator}
            </section>   
        </div>
    )
}
