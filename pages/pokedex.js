import React from 'react';
import Link from 'next/link';

function pokedex({pokemon}) {
    console.log({pokemon});

    return (
        <div>
           <h1>Welcome to Pokedex</h1> 

           <ul>
                {pokemon.map((item, index) => (
                    <li key={index}>
                        <Link href={`/pokemon/${index + 1}`}>
                            <a className="border p-4 border-grey my-2 hover:shadow-md capitalize flex items-center text-lg bg-gray-200 rounded-md">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-20 h-20 mr-3"
                                />
                                <span className="mr-2 font-bold">
                                    {index + 1}.
                                </span>
                                {item.name}
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
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