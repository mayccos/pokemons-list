import logo from './logo.svg'
import './App.css'
import React, { useEffect } from 'react'
import axios from 'axios'

function App() {
    useEffect(() => {
        // Step 1 : "Hello, Heroku ! 👋"
        axios
            .get('https://blooming-basin-83218-ff39a65835a7.herokuapp.com')
            .then((res) => console.log(res.data))

        // Step 2 : "Get JWT token 🔓"
        axios
            .post(
                'https://blooming-basin-83218-ff39a65835a7.herokuapp.com/api/login',
                { username: 'pikachu', password: 'pikachu' },
                { headers: { 'Content-Type': 'application/json' } },
            )
            .then((res) => res.data)
            .then((res) => {
                console.log(res)
                return res.token
            })
            .then((token) => fetchPokemonlist(token))
    }, [])

    // Step 3 : "Get pokemon list 🎉"
    const fetchPokemonlist = (token) => {
        return axios
            .get(
                'https://blooming-basin-83218-ff39a65835a7.herokuapp.com/api/pokemons',
                {
                    headers: { Authorization: `Bearer ${token}` },
                },
            )
            .then((res) => res.data)
            .then((res) => console.log(res))
    }
    return (
        <div className="App">
            <header className="App-header">
                <h1>Hello, Heroku ! 👋</h1>
                <img src={logo} className="App-logo" alt="logo" />
            </header>
        </div>
    )
}

export default App
