import React from "react";
import Link from "next/link";
import Header from "../components/Header";
import PokeCard from "../components/pokedex/PokeCard";
import SearchPoke from '../components/pokedex/SearchPoke';

// import { useState } from "react";
import { data } from "../utils/allPoke";

function pokedex() {
  // console.log({pokemon});

  // const [pokemons, setPokemons] = React.useState(data);

  // const search = (term) =>
  //   setPokemons(
  //     data.filter((d) => d.name.toLowerCase().includes(term.toLowerCase()))
  //   );

  return (
    <div className="pokedex">
      <Header />

      <SearchPoke />

      {/* <div>
        <div>
          <input
            type="text"
            onChange={(e) => search(e.target.value)}
            className="bg-transparent outline-none"
          />
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"
                fill="rgba(0,0,0,0.92)"
              />
            </svg>
          </div>
        </div>
      </div> */}

        <div className="body">
                <div className="poke-items">
                {/* {pokemon.map((item, index) => (
                    <li key={index}>
                    <Link href={`/pokemon/${index + 1}`}>
                        <a>
                        <PokeCard
                            name={item.name}
                            image={item.image}
                            index={index + 1}
                        />
                        <br />
                        </a>
                    </Link>
                    </li>
                ))} */}

                {/* {pokemons.length === 0 ? (
                    <h3 className="text-gray-800 gn">Not found</h3>
                ) : (
                    pokemons.map((pokemon) => {
                    const poke_id = pokemon.url.split("/")[6];
                    const paddedId = poke_id.padStart(3, "0");
                    const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
                    return (
                        <Link href={`/pokemon/${poke_id}`} key={poke_id}>
                        <div className="w-24 md:w-28 bg-white p-3 m-1 sm:m-2 rounded text-center cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-300">
                            <PokeCard
                            name={pokemon.name}
                            image={image}
                            index={paddedId}
                            />
                            <br />
                        </div>
                        </Link>
                    );
                    })
                )} */}
                </div>
        </div>
    </div>
  );
}

export default pokedex;

// export const getStaticProps = async () => {
//     const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
//     const { results }  = await res.json();
//     const pokemon = results.map((pokeman, index) => {
//         const paddedId = ('00' + (index + 1)).slice(-3);
//         const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
//         return { ...pokeman, image };
//     });
//     return {
//         props: { pokemon },
//     };

// }
