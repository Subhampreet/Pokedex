import React from 'react'

function PokeCard({name, image, index}) {
    return (
        <div className="pokedex-card">
            <div className="container">
                <div className="index">#{index}</div>
                <div className="image">
                    <img src={image} alt={name} />
                </div>
                <div className="info">
                    <h2>{name}</h2>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
                </div>
            </div>
        </div>
    )
}

export default PokeCard
