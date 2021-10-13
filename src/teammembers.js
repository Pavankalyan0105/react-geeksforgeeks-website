import React, {Component} from "react";
import "./teammembers.css"
import nithin from "./images/Nithin Gonthina.jpeg"
import chakri from "./images/Chakri.jpg";
import yagnesh from "./images/Yagneswara.lead.jpg"
import yaswanth from "./images/Jami Yashwanth.jpeg"
import hrudai from "./images/Sree Sayi Hrudai.jpeg"
import srujana from "./images/Srujana Musti.jpeg"
import geethika from "./images/Geethika Priya.jpg"
import pavan from "./images/Pavan Kalyan.jpg"
import dinesh from "./images/Dinesh Sir.jpeg"
import karthik from "./images/Karthik Dasari.jpg"
import sai from "./images/Sai Kiran.jpeg"

class Teammembers extends Component {
    render(){
        return(
            <div className="main ">
                <h1>Team members</h1>
                <ul className="cards">
                    <li className="cards_item">
                    <div className="card">
                        <div className="card_image"><img src={dinesh}/></div>
                        <div className="card_content">
                        <h2 className="card_title">Mr.B.Dinesh Reddy</h2>
                        <p className="card_text">Faculty Coordinator</p>
                        </div>
                    </div>
                    </li>
                    <li className="cards_item">
                    <div className="card">
                        <div className="card_image"><img src={yagnesh}/></div>
                        <div className="card_content">
                        <h2 className="card_title">Yagneswara Naidu G</h2>
                        <p className="card_text">Chairperson</p>
                        </div>
                    </div>
                    </li>
                    <li className="cards_item">
                    <div className="card">
                        <div className="card_image"><img src={hrudai}/></div>
                        <div className="card_content">
                        <h2 className="card_title">Sree Sayi Hrudai</h2>
                        <p className="card_text">Vice-Chairperson</p>
                        </div>
                    </div>
                    </li>
                    <li className="cards_item">
                    <div className="card">
                        <div className="card_image"><img src={yaswanth}/></div>
                        <div className="card_content">
                        <h2 className="card_title">Jami Yashwanth</h2>
                        <p className="card_text">Competitive Programming Head</p>
                        </div>
                    </div>
                    </li>
                    <li className="cards_item">
                    <div className="card">
                        <div className="card_image"><img src={chakri}/></div>
                        <div className="card_content">
                        <h2 className="card_title">Kamminana Chakradhar</h2>
                        <p className="card_text">Competitive Programming Head</p>
                        </div>
                    </div>
                    </li>
                    <li className="cards_item">
                    <div className="card">
                        <div className="card_image"><img src={nithin}/></div>
                        <div className="card_content">
                        <h2 className="card_title">Nithin Gonthina</h2>
                        <p className="card_text">Technical Head</p>
                        </div>
                    </div>
                    </li>
                    <li className="cards_item">
                    <div className="card">
                        <div className="card_image"><img src={pavan}/></div>
                        <div className="card_content">
                        <h2 className="card_title">Pavan Kalyan K</h2>
                        <p className="card_text">Technical Head</p>
                        </div>
                    </div>
                    </li>
                    <li className="cards_item">
                    <div className="card">
                        <div className="card_image"><img src={sai}/></div>
                        <div className="card_content">
                        <h2 className="card_title">Sai Kiran Kolli</h2>
                        <p className="card_text">Events Head</p>
                        </div>
                    </div>
                    </li>
                    <li className="cards_item">
                    <div className="card">
                        <div className="card_image"><img src={srujana}/></div>
                        <div className="card_content">
                        <h2 className="card_title">Sai Srujana M</h2>
                        <p className="card_text">Events Head</p>
                        </div>
                    </div>
                    </li>
                    <li className="cards_item">
                    <div className="card">
                        <div className="card_image"><img src={geethika}/></div>
                        <div className="card_content">
                        <h2 className="card_title">Geethika Priya V</h2>
                        <p className="card_text">Content and Editorial Head</p>
                        </div>
                    </div>
                    </li>
                    <li className="cards_item">
                    <div className="card">
                        <div className="card_image"><img src={karthik}/></div>
                        <div className="card_content">
                        <h2 className="card_title">Karthik Dasari</h2>
                        <p className="card_text">Social Media and Outreach Head</p>
                        </div>
                    </div>
                    </li>
                </ul>
                </div>
        );
    }
}

export default Teammembers;