import React, { useState, useEffect} from "react"

const RANDOM_FACT = 'https://catfact.ninja/fact'
const RANDOM_IMG = 'https://cataas.com/cat/says/sombri'

export function App () {

  const [fact, setFact] = useState('')
  const [image, setImage] = useState('')

  useEffect( () => {
    fetch(RANDOM_FACT)
      .then(res => res.json())
      .then(data => setFact(data.fact))
      
    fetch(RANDOM_IMG)
      .then(res => setImage(res.url))
      /* .then(data => console.log(data))  */
    }, [])


  return (
    <>
      <h1>App de gatitos</h1>
      {fact && <h3> { fact } </h3>}

      {image && <img src= { image } width='600px' height=''/>}
    </>
  )
}