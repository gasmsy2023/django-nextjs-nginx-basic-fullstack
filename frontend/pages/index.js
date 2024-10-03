import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Home() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    axios.get('http://localhost:8000/api/hello/')
      .then(response => setMessage(response.data.message))
      .catch(error => console.error('Error:', error))
  }, [])

  return (
    <div className="container">
      <h1>{message}</h1>
    </div>
  )
}