import React , {useState , useEffect} from 'react'
import './Navbar.css'

function Navbar() {
    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll" ,() =>{
            if(window.scrollY > 100){
                handleShow(true);
            }else {
                handleShow(false);
            }
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);
    return (
        <div className={`navbar ${show && "navbar__black"}`}>
            <img 
            className="navbar__logo"
            src="https://www.logo.wine/a/logo/Netflix/Netflix-Logo.wine.svg"
            alt="NETFLIX LOGO" 
            />

            <img 
            className="navbar__avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="AVATAR"
             />
        </div>
    )
}

export default Navbar
