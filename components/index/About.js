import React from 'react'

function About() {
    return (
        <div className="about">
            <div className="body">
                <div className="left">
                    <h2>ABOUT US</h2>
                    <h1>The official source for Pokémon news and information on the Pokémon</h1>
                    <p>
                    The original <span>Pokémon</span>  is a role-playing game based around building a small team of monsters to battle other monsters in a quest to become the best. <span>Pokémon</span> are divided into types, such as water and fire, each with different strengths. ... With experience, Pokémon grow stronger, gaining new abilities.
                    <br /><br />
                    <span>Pokedex</span> is a small demo application based on Next.js. The pokemons will be fetched from the Pokemon API using the SWR library. The project introduces you to data fetching on the client-side with the SWR library, Dynamic Routing, and many more advanced Next JS Concepts.
                    <br /><br />
                    Since I was a little boy, I've been passionate about <span>Pokémon</span>. It was always fun playing the games on the Game Boy and conquering all the Leagues. Now as a developer, I want to play around with the <span>Pokémon API</span>.
                    </p>
                </div>
                <div className="right">
                    <img src="./poke-3.png" />            
                </div>
            </div>
        </div>
    )
}

export default About
