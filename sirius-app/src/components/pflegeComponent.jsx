import React, {useState,useEffect,useRef} from 'react'
import '../style/pflege.css'

//functional component
const Pflege = () => {
    //intersection observer for slide in 
        //ref is the element what should be intersected
        //first it is null but then pass it to an html element
        const containerRef_ = useRef(null);
        const [isVisible_, setIsVisible_] = useState(false);

        //callbackfunction to invoke setIsVisible
        const cbFunction_ = (entries) => {
            const [entry] = entries;
            setIsVisible_(entry.isIntersecting)
        }
        //options for observer
        //threshold : how much % of the element should be in viewport
        // eslint-disable-next-line
        const options_ = {
            root: null,
            rootMargin: "0px",
            threshold: 0
        }


        useEffect(() => {

            //observer instance
            const observer = new IntersectionObserver(cbFunction_,options_)
            if(containerRef_.current) observer.observe(containerRef_.current)

            return () => {
                // eslint-disable-next-line
                if(containerRef_.current) observer.unobserve(containerRef_.current)
            }
        }, [containerRef_,options_])
    
        //open / close Info Modal One
        const [showModalOne, setShowModalOne] = useState(false);

        const toggleModalOne = () => {
            setShowModalOne(showModalOne => !showModalOne);
        }
        //close modal
        const closeModalOne = () => {
            setShowModalOne(false);
        }
    
        //open Close SECOND modal
        const [showModalTwo, setShowModalTwo] = useState(false);

        const toggleModalTwo = () => {
            setShowModalTwo(showModalTwo => !showModalTwo);
        }
        //close modal
        const closeModalTwo= () => {
            setShowModalTwo(false);
        }

         //open Close THIRD modal
         const [showModalThree, setShowModalThree] = useState(false);

         const toggleModalThree = () => {
             setShowModalThree(showModalThree => !showModalThree);
         }
         //close modal
         const closeModalThree = () => {
             setShowModalThree(false);
         }


    //render elements
    return (
        <div className="pflege_content" id="pflege" ref={containerRef_}>
            <div className="beschreibung_desktop" >
                <h1>Pflegedienst</h1>
                <p>Der ambulante Pflegedienst unterstützt Pflegebedürftige Personen bei der Pflege zuhause. Sind sie Beschäftigt und auf der Suche nach jemandem, der sie bei der Pflege- und 
                    Alltagsaufgaben für ihre Pflegebedürftigen angehörigen unterstützt? Profitieren Sie von den Leistungen für die Grundpflege, die Intensivpflege und verschiedener Service Leistungen 
                    der Sirius Pflegedienst GmbH. Erhalten sie einen Einblick aus welchen Diensten sich unsere Leistungen zusammensetzen und entlasten sie sich und angehörige im Alltag.  </p>
                </div>
        <div className='pflege_container'  >
            <div className="beschreibung_mobile" >
            <h1>Pflegedienst</h1>
                <p>Der ambulante Pflegedienst unterstützt Pflegebedürftige Personen bei der Pflege zuhause. Sind sie Beschäftigt und auf der Suche nach jemandem, der sie bei der Pflege- und 
                    Alltagsaufgaben für ihre Pflegebedürftigen angehörigen unterstützt? Profitieren Sie von den Leistungen für die Grundpflege, die Intensivpflege und verschiedener Service Leistungen 
                    der Sirius Pflegedienst GmbH. Erhalten sie einen Einblick aus welchen Diensten sich unsere Leistungen zusammensetzen und entlasten sie sich und angehörige im Alltag.
                </p>
                </div>
            <article className="card_mobile">
                <img src={require("../assets/grund.jpg")} alt="grundpflege"/>
                <div className="card_content">
                    <h4>Grundpflege</h4>
                    <p>
                        Menschen, die körperlich und geistig nicht mehr so fit sind, können meistens alltägliche Tätigkeiten, wie z.B selbständig essen...
                        {/*  weiter lesen funktion folgt */}
                    </p>
                    <button className='info_btn' onClick={toggleModalOne}>Mehr erfahren</button>
                </div>
                <div className={`modal_mobile${showModalOne? 'show': ''}`}>
                    <div className="modal_mobile_content">
                        <span className="close" onClick={closeModalOne}>&times;</span> 
                            <img src={require("../assets/grund.jpg")} alt="grundpflege"/>
                                <h4>Grundpflege</h4>
                                    <p>
                                        Menschen, die körperlich und geistig nicht mehr so fit sind, können meistens alltägliche Tätigkeiten, wie z.B selbständig essen, das Klo aufsuchen und sich selbständig anziehen nicht mehr bewältigen. Natürlich fällt auch die Vorsorge in die Grundpflege. Durch die Vorsorge werden Einschränkungen wie Erkältung, Versteifung und weitere Beschwerden vermieden. Um eine sorgfältige Vorsorge durchzuführen, 
                                        kümmern wir uns um jegliche negative Einflüsse unserer Patienten und beseitigen diese.
                                    </p>
                    </div>
                </div>
            </article>

            <article className="card_mobile">
                <img src={require("../assets/intensiv.jpg")} alt="intensiv pflege"/>
                <div className="card_content">
                    <h4>Intensivpflege</h4>
                    <p>
                        Die Intensivpflege ist ein wesentlicher Bestandteil unserer Leistungen. Ambulante Intensivpflege bezeichnet die Behandlung pflegebedürftiger 
                        Menschen ... 
            
                    </p>
                    <button className='info_btn' onClick={toggleModalTwo}>Mehr erfahren</button>
                </div>
                <div className={`modal_mobile${showModalTwo? 'show_two': ''}`}>
                    <div className="modal_mobile_content">
                        <span className="close" onClick={closeModalTwo}>&times;</span> 
                            <img src={require("../assets/intensiv.jpg")} alt="intensiv pflege"/>
                                <h4>Intensivpflege</h4>
                                    <p>
                                        Die Intensivpflege ist ein wesentlicher Bestandteil unserer Leistungen. Ambulante Intensivpflege bezeichnet die Behandlung pflegebedürftiger Menschen mit lebensbedrohlicher Erkrankungen außerhalb der Klinik. 
                                        Sie tritt in kraft, wenn eine stationäre klinische Behandlung und medizinischer Versorgung nicht mehr erforderlich ist.
                                    </p>
                    </div>
                </div>
            </article>

            <article className="card_mobile">
                <img src={require("../assets/service.jpg")} alt="service leistungen"/>
                <div className="card_content">
                    <h4>Serviceleistungen</h4>
                    <p>
                        Zu unseren Servieleistungen gehört unter anderem die häusliche Krankenpflege nach §37 SGB V als Leistung der gesetzlichen Krankenversicherung...
                    </p>
                    <button className='info_btn' onClick={toggleModalThree}>Mehr erfahren</button>
                </div>
                <div className={`modal_mobile${showModalThree? 'show_three': ''}`}>
                    <div className="modal_mobile_content">
                        <span className="close" onClick={closeModalThree}>&times;</span> 
                            <img src={require("../assets/service.jpg")} alt="service leistungen"/>
                                <h4>Serviceleistungen</h4>
                                    <p>
                                        Zu unseren Servieleistungen gehört unter anderem die häusliche Krankenpflege nach §37 SGB V als Leistung der gesetzlichen Krankenversicherung, 
                                        welche unter anderem die Medikamentengabe, den Verbandswechsel und Injektionen beinhaltet.
                                    </p>
                    </div>
                </div>
            </article>


            {/* DESKTOP */}
        
            <article className={`card_desktop${isVisible_? 'visible': ''}`} >
                <img src={require("../assets/grund.jpg")} alt="grundpflege"/>
                <div className="card_content">
                    <h4>Grundpflege</h4>
                    <p>
                        Menschen, die körperlich und geistig nicht mehr so fit sind, können meistens alltägliche Tätigkeiten, wie z.B selbständig essen, 
                        das Klo aufsuchen und sich selbständig anziehen nicht mehr bewältigen. Natürlich fällt auch die Vorsorge in die Grundpflege. 
                        Durch die Vorsorge werden Einschränkungen wie Erkältung, Versteifung und weitere Beschwerden vermieden. 
                        Um eine sorgfältige Vorsorge durchzuführen, kümmern wir uns um jegliche negative Einflüsse unserer Patienten und beseitigen diese.
                    </p>
                </div>
            </article>

            <article className={`card_desktop${isVisible_? 'visible': ''}`}>
                <img src={require("../assets/intensiv.jpg")} alt="intensiv pflege"/>
                <div className="card_content">
                    <h4>Intensivpflege</h4>
                    <p>
                        Die Intensivpflege ist ein wesentlicher Bestandteil unserer Leistungen. 
                        Ambulante Intensivpflege bezeichnet die Behandlung pflegebedürftiger Menschen mit lebensbedrohlicher Erkrankungen außerhalb der Klinik. 
                        Sie tritt in kraft, wenn eine stationäre klinische Behandlung und medizinischer Versorgung nicht mehr erforderlich ist. 
                    </p>
                </div>
            </article>

            <article className={`card_desktop${isVisible_? 'visible': ''}`}>
                <img src={require("../assets/service.jpg")} alt="service leistungen"/>
                <div className="card_content">
                    <h4>Serviceleistungen</h4>
                    <p>
                    Zu unseren Servieleistungen gehört unter anderem die häusliche Krankenpflege nach §37 SGB V als Leistung der gesetzlichen Krankenversicherung, 
                    welche unter anderem die Medikamentengabe, den Verbandswechsel und Injektionen beinhaltet.
                    </p>
                </div>
            </article>
        </div>
    </div>
    );

};

export default Pflege;