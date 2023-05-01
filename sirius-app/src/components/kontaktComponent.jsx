import React, {useRef,useState} from 'react';
import emailjs from '@emailjs/browser';
import '../style/kontakt.css'
import axios from 'axios'

const Kontakt = () => {

   //state
   const [obj , setObj] = useState({
            fname: '', 
            email: '',
            message: '',
            mailSent: false,
            error: null
        });

    //change values of object
    function handleForm(e) {

        let updatedValue = {...obj};
        updatedValue[e.target.id] = e.target.value;
        setObj(updatedValue);

           console.log(updatedValue);
    }

  
    // const serviceId = process.env.REACT_APP_SERVICE_ID;
    // const templateId = process.env.REACT_APP_TEMPLATE_ID;
    // const public_key = process.env.REACT_APP_API_KEY;
    const SERVICE_API = 'http://localhost:443/php_scripts/email_service.php';

    // //email function
    const form = useRef();

    const sendMail = (e) => {
        e.preventDefault();
        axios({
            method: 'post',
            url: `${SERVICE_API}`,
            headers: { 'content-type': 'application/json' },
            data: obj
        })
        .then(result => {
            setObj({
                mailSent: result.data.sent
            })
            .catch(error => setObj({ error: error.message }));
        })

    // //emailjs config
    // emailjs.sendForm(serviceId,templateId,form.current,public_key)
    //     .then((result) => {
    //         console.log(result.text);
    //     }, (error) => {
    //         console.log(error.text)
    //     });
    }

    //send form data to backend service


    return (
        <div className="kontakt_content" id="kontakt">
            <div className="kontakt">
                <div className="text">
                    <h1>Kontaktieren Sie uns direkt</h1>
                </div>
            <form ref={form} onSubmit={sendMail} action={SERVICE_API}>
                    <label htmlFor="fname" name="Vorname">Name</label>
                    <input type="text" id="fname" name="from_name" placeholder="Name.." 
                     onChange={(e) => handleForm(e)} value={obj.fname} required></input>

                    <label htmlFor="email">E-Mail Adresse</label>
                    <input type="email" id="email" name="from_mail" placeholder="E-Mail.." 
                    onChange={(e) => handleForm(e)} value={obj.email} required></input>

                    <label htmlFor="subject">Nachricht</label>
                    <textarea id="message" name="message" placeholder="Verfassen Sie eine Nachricht..." 
                    onChange={(e) => handleForm(e)} value={obj.message} required></textarea>

                    <input type="submit" value="Senden"></input>
                </form>
                <div>
                    {obj.mailSent &&
                        <div>Thank you for contcting us.</div>
                    }
                    </div>
            </div>
        </div>
    )
}

export default Kontakt;
