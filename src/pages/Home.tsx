import { useState } from "react";
import "../styles/header.css";
import "../styles/utility.css";
import "../styles/carousel.css";
import Carousel from "../components/carousel";
import "../styles/hero.css";
import { Menu, X } from "lucide-react";


export default function Home() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <>
            <header className="container py-sm">
                <nav className="flex items-center justify-between">
                    <img src={"/logo.svg"} alt="Logo projetostark" width={220} height={80} />
                    <div className="desktop-only">
                        <ul className="flex gap-1">
                            <li>
                                <a href="#">Home</a>
                            </li>
                        </ul>
                    </div>
                    <div className="desktop-only">
                    </div>
                    <div className="mobile-menu">
                        {showMobileMenu ?
                            <div className="mobile-menu-content">
                                <div className="container flex">
                                    <ul>
                                        <li>
                                            <a href="#">Home</a>
                                        </li>
                                    </ul>
                                    <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                        <X/>
                                    </span>
                                </div>
                            </div>
                            :
                            <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper" >
                                <Menu/>
                            </span>
                        }
                    </div>  


                </nav>
            </header>
            <section id="hero">
                <div className="container content">
                    <h1>Pagina do meu carro tunadão!</h1>
                    <p>Já pensou em turbinar um civic velho? venha acompanhar esse processo comigo.
                    </p>
                </div>
            </section>
            <section id="carousel">
                <Carousel styles="carousel" />
            </section>
        </>
    )
    
}
