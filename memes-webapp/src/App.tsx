import React, {useState, useEffect} from 'react';
import Nav from './components/Nav';
import Form from './components/Form';
import GetMemeButton from './components/GetMemeButton'
import MemeDisplayer from './components/MemeDisplayer';
import Footer from './components/Footer';
import { FormStateValues, MemesDataArr } from './interfaces';



export default function App():JSX.Element {
  const [arrIndex, setArrIndex] = useState<number>(30)
  const [memesDataArr, setMemesDataArr] = useState<MemesDataArr|null>(null)
  const [formValues, setFormValues] = useState<FormStateValues>(
    {
      topText:'',
      bottomText:'',
    }
  )
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const {value, name} = e.currentTarget
    setFormValues(prevState => ({
            ...prevState,
            [name]: value
        })
    )
  }
  function numGenerator(){
    setArrIndex(Math.floor(Math.random()*100+1))
  }

  useEffect(()=>{
    fetch('https://api.imgflip.com/get_memes')
    .then(data => data.json())
    .then(jsonData => setMemesDataArr(jsonData.data.memes))
  }, [])
  
  
  return (
    <>
      <Nav />
      <Form
        formValues={formValues}
        handleChange={handleChange}
      />
      <GetMemeButton numGenerator={numGenerator}/>
      {memesDataArr && <MemeDisplayer imgSrc={memesDataArr[arrIndex].url}
                                      formValues={formValues}/>}
      <Footer />
    </>
    
  )
}

