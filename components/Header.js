import React from 'react';
import Link from 'next/link';

function Header() {
    return (
        <div className="header">
            <Link href="/">
                <div className="logo">
                    <div className="main">P</div>
                    <div className="name">pokedex</div>
                </div>
            </Link>
            
            <div className="nav-list">
                <Link href="/">
                    <div className="nav-item active">Home</div>
                </Link>
                <div className="nav-item">About</div>
                <Link href="/pokedex">
                    <div className="nav-item">Pokedex</div>
                </Link>
                <div className="nav-item">Feedback</div>
            </div>
            <div className="button">
                CATCH TH&apos;M ALL
            </div>
        </div>
    )
}

export default Header
