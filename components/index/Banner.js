import React from 'react';


function Banner() {
    return (
        <div className="banner">
            <div className="banner-body">
                <div className="left">
                    <div className="left-body">
                        <h2>Welcome to Pokedex</h2>
                        <h1>Catch em ! Collect the Strongest and Rarest Pokemon</h1>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        <div className="button">CATCH TH'M ALL</div>
                    </div>
                </div>
                <div className="right">
                    <img src="./poke-2.png" className="bounce-2" />
                </div>
            </div>
        </div>
    )
}

export default Banner
