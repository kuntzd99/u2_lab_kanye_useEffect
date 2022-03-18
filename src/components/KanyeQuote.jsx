import { useState, useEffect } from 'react'
import axios from 'axios'

const KanyeQuote = (props) => {
  const [quote, setQuote] = useState('')

  useEffect(() => {
    const getQuote = async () => {
      try {
        const response = await axios.get('https://api.kanye.rest')
        setQuote(response.data.quote)
      } catch(err) {
        console.log(err)
      }
    }
    getQuote()
  }, [props.displayQuote])

  return (
    <h2 style={{fontStyle: 'italic'}}>{quote !== '' && quote}</h2>
  )
}

export default KanyeQuote