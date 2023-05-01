import React, {useState,useEffect,useRef} from 'react';
import '../style/home.css'
//icon library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Home = () => {

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


    return(
        <div className="home_screen" ref={containerRef}>
            <img src={require("../assets/care_giver.jpg")} alt="care giver"/>

            <div className="home_text_mobile">
                <div className="home_content_mobile">
                    <h3>Ihr Pflegedienst in Frankfurt und Umgebung</h3>
                    <p>
                        Sie suchen einen hochqualifizierten Pflegedienst in Ihrer Umgebung? 
                        Dann sind sie bei uns genau richtig! Wir betreuen jede Art von Patienten, 
                        ob einfacher Pflegefall oder Intensivfall, die Sirius Pflegedienst GmbH steht Ihnen zur verfügung.  
                    </p> 
                    <a href="#kontakt" className={`direkt_kontakt_mobile${isVisible? 'visible': ''}`}>
                        <span><FontAwesomeIcon icon={faEnvelope} size='lg'/>&nbsp;Kontaktieren Sie uns Direkt</span>
                    </a>
                </div>
            </div>
            {/* DESKTOP  */}
            <div className="home_text_desktop">
                <div className="home_content_desktop">
                    <h1>Ihr Pflegedienst in Frankfurt und Umgebung</h1>
                    <p>
                        Sie suchen einen hochqualifizierten Pflegedienst in Ihrer Umgebung? 
                        Dann sind sie bei uns genau richtig! Wir betreuen jede Art von Patienten, 
                        ob einfacher Pflegefall oder Intensivfall, die Sirius Pflegedienst GmbH steht Ihnen zur verfügung. 
                        Außerdem stehen wir Ihnen auch außerhalb der Öffnungszeiten bei Notfällen 24h zur verfügung. 
                        Bei uns steht das Wolhbefinden der Patienten an erster Stelle. Wir wollen das Vertrauen unserer Patienten gewinnen, 
                        um all die Pflegenotwendingen Leistungen zusammen durchzuführen und der Patient sich während der gesamten Verpflegung wohl und sicher fühlt.  
                    </p> 
                        <a href="#kontakt" className={`direkt_kontakt_desktop${isVisible? 'visible': ''}`}>
                            <span><FontAwesomeIcon icon={faEnvelope} size='lg'/>&nbsp;Kontaktieren Sie uns Direkt</span>
                        </a>
                </div>
            </div>
        </div>
    )
}

export default Home;