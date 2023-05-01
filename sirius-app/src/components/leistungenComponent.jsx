import React from 'react'
import '../style/leistungen.css'


const Leistungen = () => {
    return (
        <div className="leistungen_content" id="leistungen">
            <div className="leistungen">
                {/*  GRUNDPFLEGE */}
                <div className="grundpflege_l">
                    <div className="grundpflege_logo">
                        <img src={require("../assets/icons/health.png")} alt="pflege icon"/>
                    </div>
                    <div className="grundpflege_dienst">
                        <h4>Leistungsübersicht Grundpflege</h4>
                            <ul>
                                <li>Körperpflege</li>
                                <li>Hilfe beim An- und Ausziehen</li>
                                <li>Hilfe beim Essen und Trinken</li>
                                <li>Bewegungshilfe</li>
                                <li>Hauswirtschaftliche Aufgaben</li>
                            </ul>
                    </div>
                </div>
                {/* MED . MA?NAHMEN */}
                <div className="mobi_l">
                    <div className="mobi_logo">
                    <img src={require("../assets/icons/intensiv_pflege.png")} alt="mobilisation icon"/>
                    </div>
                    <div className="mobi_dienst">
                        <h4>Leistungsübersicht Medizinische Maßnahmen</h4>
                            <ul>
                                <li>Verabreichen von Medikamenten</li>
                                <li>Injektionen</li>
                                <li>Blutdruck & Zucker Kontrolle</li>
                                <li>Wundversorgung</li>
                            </ul>
                    </div>
                </div>
                {/* INTENSIVPFLEGE */}
                <div className="intensiv_l">
                    <div className="intensiv_logo">
                    <img src={require("../assets/icons/grund_pflege.png")} alt="intensiv icon"/>
                    </div>
                    <div className="intensiv_dienst">
                        <h4>Leistungsübersicht Intensivpflege</h4>
                            <ul>
                                <li>Überwachung & Vitalisierung</li>
                                <li>Lagerungsbehandlung</li>
                                <li>Mobilisation</li>
                            </ul>
                    </div>
                </div>
                {/* SERVICE */}
                <div className="service_l">
                    <div className="service_logo">
                    <img src={require("../assets/icons/behindert.png")} alt="service icon"/>
                    </div>
                    <div className="service_dienst">
                        <h4>Übersicht Serviceleistungen</h4>
                            <ul>
                                <li>Pflegehilfe</li>
                                <li>Begleitung bei Spaziergängen</li>
                                <li>Pflege nach §37 Abs. 3 SGB XI</li>
                                <li>Häusliche Pflege nach §37 SGB V</li>
                            </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Leistungen