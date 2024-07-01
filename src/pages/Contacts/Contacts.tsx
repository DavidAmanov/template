import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import Map from "../../components/Map/Map"
import Slider from "../../components/Slider/Slider"
import ContactsCss from './Contacts.module.css'

const Contacts = () =>{
    return(<>
    <Header />
    <div className={ContactsCss.contacts__container}>
        <section className={ContactsCss.text}>
            <span>Phone: +1-111-111-11-11 <br />
                  Email: DavidAmanovIs@gmail.com <br />
                  Address: Somewhere in Tokyo <br />
                  Email for your suggestions: Piece@gmail.com
            </span>
        </section>
        <section className={ContactsCss.map}>
            <Map orderPage={false}/>
        </section>
    </div>
    <div className={ContactsCss.slider}>
        <Slider numberOfProduct={5}/>
    </div>
    <Footer />
    </>)
}

export default Contacts