import styled from 'styled-components'
import pokeball from '../../assets/pokeball.svg'

// Creation components that using styled-component
const Main = styled.main`
    display: flex;
    justify-content: center;
    height: 70vh;
`
const Title = styled.div`
    display: flex;
    align-items: center;
`
const H1 = styled.h1``
const Img = styled.img``

/**
 * Homepage component to display website's home page
 * @name Home
 * @returns {JSX}
 */
export default function Home() {
    return (
        <Main>
            <Title>
                <H1>Welcome, please sign in !</H1>
                <Img className="pokémon" src={pokeball} alt="Pokeball icon" />
            </Title>
        </Main>
    )
}

// import React, { useEffect } from 'react'
// import axios from 'axios'

// function App() {
//     useEffect(() => {
//         // Step 1 : "Hello, Heroku ! 👋"
//         axios
//             .get('https://blooming-basin-83218-ff39a65835a7.herokuapp.com')
//             .then((res) => console.log(res.data))

//         // Step 2 : "Get JWT token 🔓"
//         axios
//             .post(
//                 'https://blooming-basin-83218-ff39a65835a7.herokuapp.com/api/login',
//                 { username: 'pikachu', password: 'pikachu' },
//                 { headers: { 'Content-Type': 'application/json' } },
//             )
//             .then((res) => res.data)
//             .then((res) => {
//                 console.log(res)
//                 return res.token
//             })
//             .then((token) => fetchPokemonlist(token))
//     }, [])

//     // Step 3 : "Get pokemon list 🎉"
//     const fetchPokemonlist = (token) => {
//         return axios
//             .get(
//                 'https://blooming-basin-83218-ff39a65835a7.herokuapp.com/api/pokemons',
//                 {
//                     headers: { Authorization: `Bearer ${token}` },
//                 },
//             )
//             .then((res) => res.data)
//             .then((res) => console.log(res))
//     }
