import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import PokeCard from '../components/pokedex/PokeCard';


function pokedex({pokemon}) {
    console.log({pokemon});

    return (
        <div className="pokedex">

            <Header />

            <div className="body">
                <div className="poke-items">
                    {pokemon.map((item, index) => (
                        <li key={index}>
                            <Link href={`/pokemon/${index + 1}`}>
                                <a >
                                    {/* <img
                                        src={item.image}
                                        alt={item.name}
                                    />
                                    <span>
                                        {index + 1}.
                                    </span>
                                    {item.name} */}
                                    <PokeCard name={item.name} image={item.image} index={index + 1}  />
                                    <br />
                                </a>
                            </Link>                            
                        </li>
                    ))}
                </div>
            </div>

           
        </div>
    )
}

export default pokedex;

export const getStaticProps = async () => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
    const { results }  = await res.json();
    const pokemon = results.map((pokeman, index) => {
        const paddedId = ('00' + (index + 1)).slice(-3);
        const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
        return { ...pokeman, image };
    });
    return {
        props: { pokemon },
    };

}