import React, { useState, useRef, useEffect } from 'react';
//icon library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone,faEnvelope, faBars} from '@fortawesome/free-solid-svg-icons'
import '../style/navbar.css';

//navigation bar 
const Navbar = () => {         
        //change menu status
        const [open,setOpen] = useState(false);

        //function to change state 
        const toggleHam = () => {
            setOpen(open => !open);
        }

        //intersection observer for slide in 
        //ref is the element what should be intersected
        //first it is null but then pass it to an html element
        const containerRef = useRef(null);
        const [isVisible, setIsVisible] = useState(false);

        //callbackfunction to invoke setIsVisible
        const cbFunction = (entries) => {
            const [entry] = entries;
            setIsVisible(entry.isIntersecting)
        }
        //options for observer
        //threshold : how much % of the element should be in viewport
        // eslint-disable-next-line
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0
        }


        useEffect(() => {

            //observer instance
            const observer = new IntersectionObserver(cbFunction,options)
            if(containerRef.current) observer.observe(containerRef.current)

            return () => {
                // eslint-disable-next-line
                if(containerRef.current) observer.unobserve(containerRef.current)
            }
        }, [containerRef,options])

        //HTML rendering starts
        return(
            <header id="top">
                {/* outer Container */}
                <div className="container"> 
                    <div className="row">   
                        {/* LOGO */}
                        <div className="left_side_nav">
                            <img src={require("../assets/sirius.png")} alt="firmenlogo" />
                        </div>

                        {/* right nav */}
                        <nav className="header-kontakt-icon">
                            <div className="pohne-btn">
                            <h3><FontAwesomeIcon icon={faPhone} color='#4682b4' size='2x'></FontAwesomeIcon>&nbsp;
                                 06102 815 3335</h3>
                            </div>
                            {/* kontakt aufnahme */}
                            <a href="#kontakt" className='direkt-kontakt'>
                                <span><FontAwesomeIcon icon={faEnvelope} size='lg'/>&nbsp;Kontaktieren Sie uns Direkt</span>
                                </a>
                            </nav>              
                        </div>
                {/* navigation links */}
                <div className="row_2">  
                    {/* links in mid */}
                    <nav className="nav_links" >
                        <div className="link"><a href="#top">Startseite</a></div>  
                        <div className="link"><a href="#pflege">Pflegedienst</a></div>  
                        <div className="link"><a href="#leistungen">Leistungen</a></div>  
                        <div className="link"><a href="#kontakt">Kontakt</a></div>  
                    </nav>
                </div>

                {/* MOBILE NAV */}
                <div className={`mobile-nav-info${isVisible? 'visible': ''}`} >
                        <FontAwesomeIcon icon={faPhone} color='#fff' size='sm'></FontAwesomeIcon>&nbsp;06102 815 3335
                </div>
                <div className="mobile-nav" ref={containerRef}>
                    <img src={require("../assets/sirius.png")} alt="firmenlogo" />
                   
                    <button className="ham_icon" onClick={toggleHam}>
                        <FontAwesomeIcon icon={faBars} color="#4682b4;" size="3x" />
                    </button>

                    {/* mobile navbar links  */}
                    <nav className={`MobileNavLinks${open ? 'show_menu' : ''}`}>
                        <ul >
                          <li> <a href="/" onClick={toggleHam}>Startseite</a></li>
                          <li> <a href="#pflege" onClick={toggleHam}>Pflegedienst</a></li>
                          <li> <a href="#leistungen" onClick={toggleHam}>Leistungen</a></li>
                          <li> <a href="#kontakt" onClick={toggleHam}>Kontakt</a></li>
                        </ul>
                    </nav>
                </div>
            </div>  
        </header>
        
        );
    }
 
export default Navbar;