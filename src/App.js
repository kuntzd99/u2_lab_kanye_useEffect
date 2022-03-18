import { useState } from 'react'
import './styles/App.css'
import KanyeQuote from './components/KanyeQuote'

const App = () => {
  const [displayQuote, setDisplayQuote] = useState(false)

  const toggleQuotes = () => {
    setDisplayQuote(!displayQuote)
  }

  return (
    <div className="App">
      <header className="kanye-header"></header>
      <main>
        <div className="quote-container">
          <h1>Kanye Quotes</h1>
          <h2>
            {displayQuote === false ? (
              'Need some inspiration? See what Kanye thinks.'
            ) : (
              <KanyeQuote displayQuote={displayQuote} />
            )}
          </h2>
        </div>
        <button onClick={toggleQuotes}>
          {displayQuote === false ? 'New Quote' : 'Clear Quote'}
        </button>
      </main>
    </div>
  )
}

export default App
