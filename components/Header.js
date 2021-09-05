import React from 'react';

function Header() {
    return (
        <div className="header">
            <div className="logo">
                <div className="main">P</div>
                <div className="name">pokedex</div>
            </div>
            <div className="nav-list">
                <div className="nav-item active">Home</div>
                <div className="nav-item">About</div>
                <div className="nav-item">Pokedex</div>
                <div className="nav-item">Feedback</div>
            </div>
            <div className="button">
                CATCH TH'M ALL
            </div>
        </div>
    )
}

export default Header
