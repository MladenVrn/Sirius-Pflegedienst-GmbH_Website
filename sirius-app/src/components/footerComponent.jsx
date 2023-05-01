import React, {useState} from 'react';
import '../style/footer.css'

const Footer = () => {
    
    //handle visibiloty of impressum
    const [showImpr,setShowImpr] = useState(false);

    const toggleImpr = () => {
        setShowImpr(showImpr => !showImpr);
    }

    return(
        <div className="footer_content">
            <div className="footer">
                <div className="footer_left">
                    <h2>Kontakt</h2>
                        <p>Sirius Pflegedienst GmbH</p> 
                        <p>Geschäftsführer: Dalibor Stankovic</p> 
                        <p>Schleussnerstr. 90</p> 
                        <p>63263 Neu Isenburg</p> 
                        <br /> 
                        <p>E-Mail: sirius.pd@outlook.de</p> 
                        <p>Tel: 06102 815 3335</p>
                        <p>Fax: 06102 815 3336</p>
                </div> <br />
                
                <div className="footer_right">
                    <h2>Öffnungszeiten</h2>
                    <p>Montag: 08:00-16:00h</p>
                    <p>Dienstag: 08:00-16:00h</p>
                    <p>Mittwoch: 08:00-16:00h</p>
                    <p>Donnerstag: 08:00-16:00h</p>
                    <p>Freitag: 08:00-16:00h</p>
                </div>
            </div>
            <div className="footer_mid">
                <a href="https://www.flaticon.com/free-icon/doctor_872097">Icons used from</a><br />
                <a href="https://de.freepik.com/search?format=search&query=pflege">Pictures used from</a><br /> <br />
                    <a href="#impressum" onClick={toggleImpr}>Impressum</a>
                </div>
            <div className="copy">
                    <p>© Sirius Pflegedienst GmbH | Designed by Sirius Pflegedienst GmbH</p>
            </div>
            <div className={`impr${showImpr? 'show':''}`} id="impressum">
                <div className={`impr_content${showImpr? 'show':''}`}>
                    <h1>Impressum</h1>
                        <p>Sirius Pflegedienst GmbH</p>
                        <p>Schleussnerstr. 90</p>
                        <p>63263 Neu Isenburg</p>
                        <p>sirius.pd@outlook.de</p>
                        <p>Tel: 06102 815 3335</p>
                        <p>Fax: 06102 815 3336</p>
                        <br />
                        <h2>Firmendaten:</h2>
                            <p>Geschäftsführer: Dalibor Stankovic</p>
                            <p>Sirius Pflegedienst GmbH</p>
                            <p>HRB 52817</p>
                            <p>Amtsgericht Offenbach am Main</p>
                </div>
        </div>

        </div>
    )

}

export default Footer;