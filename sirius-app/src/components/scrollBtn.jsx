import React, {useState , useEffect} from 'react';
import '../style/btn.css'


const Btn = () => {

    //control btn on scroll
    const [scrollPosition, setScrollPosition] = useState(0);
    const [showBtn,setShowBtn] = useState(false);


    useEffect(() => {
        const toggleBtn = () => {
            setScrollPosition(window.pageYOffset);
            if(scrollPosition >= 100){
                setShowBtn(true);
            }else if (scrollPosition < 100){
                setShowBtn(false);
            }

          }


          window.addEventListener("scroll", toggleBtn);
          toggleBtn();
          return () => window.removeEventListener("scroll", toggleBtn);
    });


    return (
        <div className="scroll_btn" >
            <a href="#top" className={`to_top${showBtn? 'show':''}`} id="btn">Top</a>
        </div>
    )
}

export default Btn;