import { useState,useEffect } from 'react'
import axios from 'axios'
import Card from './components/Card'
import './styles.css'

function Pokemon(props) {
    
    const [characters, setCharacters] = useState([])
    const [abilities, setAbilities] = useState([])

    useEffect (
        function(){
            axios(
                {url: "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"}
            ).then(function(response){
                setCharacters(response.data.results)
                console.log(response)
            })
        },
        
    [])

    useEffect (
        function(){
            axios(
                {url: "https://pokeapi.co/api/v2/pokemon/1"}
            ).then(function(response){
                setAbilities(response.data.abilities[0].ability)
                console.log(response)
            })
        },
        
    [])

    return(
        <section>
            <h1>Pokemon Cards</h1>

            <div className="grid">
            {characters.map(
                function(characters){
                    return <Card characters={characters} abilities={abilities}/>
                }
            )}
            </div>
        </section>
    )
}
export default Pokemon;