import brand from "../assets/img/rainbowunicorn-white.svg";
import { Link } from 'react-scroll';

export const Navigation = () => {
    return (
        <nav id="navigation" className="navbar fixed-top navbar-expand-lg navbar-dark">
            <div className="container">
                <a className="navbar-brand" href="#home">
                    <img src={brand} alt="Rainbow Unicorn" width="174" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link activeClass="active" className="nav-link" to="home" spy={true} smooth={true} duration={500}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link activeClass="active" className="nav-link" to="about" spy={true} smooth={true} duration={500}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link activeClass="active" className="nav-link" to="why" spy={true} smooth={true} duration={500}>Why</Link>
                        </li>
                        <li className="nav-item">
                            <Link activeClass="active" className="nav-link" to="how" spy={true} smooth={true} duration={500}>Howitworks</Link>
                        </li>
                        <li className="nav-item">
                            <Link activeClass="active" className="nav-link" to="features" spy={true} smooth={true} duration={500}>Features</Link>
                        </li>
                        <li className="nav-item">
                            <Link activeClass="active" className="nav-link" to="roadmap" spy={true} smooth={true} duration={500}>Roadmap</Link>
                        </li>
                        <li className="nav-item">
                            <Link activeClass="active" className="nav-link" to="mintnow" spy={true} smooth={true} duration={500}>MintNow</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
