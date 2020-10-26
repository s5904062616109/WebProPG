import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div >
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/"><img src="./images/logo/icon.png" width="50" height="50"/></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/About">About</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Product
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" href="/Fender">Fender</a>
                            <a className="dropdown-item" href="/Gibson">Gibson</a>
                            <a className="dropdown-item" href="/Ibanez">Ibanez</a>
                            <a className="dropdown-item" href="/Taylor">Taylor</a>
                            <a className="dropdown-item" href="/Martin">Martin</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Contact">Contact</a>
                        </li>
                        </ul>
                    </div>
                    </nav>
            </div>
        )
    }
}
