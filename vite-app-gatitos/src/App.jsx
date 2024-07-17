import React, { useState, useEffect} from "react"

const RANDOM_FACT = 'https://catfact.ninja/fact'
const RANDOM_IMG = ' https://cataas.com/cat/says/'

export function App () {

  const [fact, setFact] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  useEffect( () => {
    fetch(RANDOM_FACT)
      .then(res => {
        /* const contentType = res.headers.get('content-type') */
        return res.json()
      })
      .then(data => {
        const { fact } = data
        setFact(fact)

        const firstThreeWords = fact.split(' ', 3).join(' ')
        console.log(firstThreeWords)
        
        fetch(`${RANDOM_IMG}${firstThreeWords}`)
          .then(res => {
            /* const contentType = res.headers.get('content-type')
            console.log(contentType) */
            
            const { url } = res
            console.log(url)
            setImageUrl(url)
          })
      })
    
       
    }, [])


  return (
    <main>
      <h1>App de gatitos</h1>
      {fact && <h3> { fact } </h3>}

      {imageUrl && <img src= { imageUrl } width='600px' height=''/>}
    </main>
  )
}