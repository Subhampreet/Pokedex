import React from 'react'

function Stats() {
    return (
        <div className="stats">
            <div className="body">
                <div className="left">
                    <h1>all amazing <span>pokemons</span>  <br/> collections in here </h1>
                </div>
                <div className="right">
                    <div className="stat-item">
                        <h3>1 million+</h3>
                        <p>Users</p>    
                    </div>         
                    <div className="stat-item">
                        <h3>800+</h3>
                        <p>Pokemons</p>    
                    </div>   
                    <div className="stat-item">
                        <h3>10,000+</h3>
                        <p>Likes</p>    
                    </div>              
                </div>
            </div>
        </div>
    )
}

export default Stats
