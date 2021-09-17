import React from "react";
import Link from "next/link";
import { data } from "../../utils/allPoke";

import PokeCard from "../pokedex/PokeCard";

function SearchPoke() {
  const [pokemons, setPokemons] = React.useState(data);

  const search = (term) =>
    setPokemons(
      data.filter((d) => d.name.toLowerCase().includes(term.toLowerCase()))
    );

  return (
    <div className="Search">
      
      <div className="search-body">

      <div className="search-content">
        <h3>Pokemon Go ⚡ &apos;</h3>
        <h1>Gocha Catch them All 🦊 !</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium ⚡, totam rem aperiam, eaque ipsa quae ab 🦔 illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo 🐩.</p>
      </div>


        <div className="container">
          <input
            type="text"
            onChange={(e) => search(e.target.value)}
            className="bg-transparent outline-none"
            placeholder="Search Pokemon"
          />
          <div className="search-icon">
            <p>SEARCH</p>
          </div>
        </div>
      </div>

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

                {pokemons.length === 0 ? (
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
                )}
                </div>
        </div>
    </div>
  );
}

export default SearchPoke;
