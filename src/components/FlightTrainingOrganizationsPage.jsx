import React from 'react';

import $ from 'jquery';

import locationButton from '../img/location-button-icon.svg';

class FlightTrainingOrganizationsPage extends React.Component {

    componentDidMount() {
        $(document).foundation();
    }

    render(){
        return (<div>
    <div class="test-loaction-header">
        <div class="grid-container">
            <div class="grid-x grid-padding-x">
                <div class="large-12 cell">
                    <h2>List of DGCA approved flying training organisations</h2>
                </div>
            </div>
        </div>
    </div>

    <div class="test-loaction-content">
        <div class="grid-container">
            <div class="grid-x grid-padding-x">
                <div class="large-12 cell">
                    <h2>North India</h2>

                    <ul class="accordion" data-accordion data-allow-all-closed="true">
                        <li class="accordion-item" data-accordion-item>
                            <a href="#" class="accordion-title">Uttar Pradesh</a>
                            <div class="accordion-content" data-tab-content>
                                <div class="locations">
                                    <div class="location">
                                        <div class="details">
                                            <div class="wrap">
                                                <h3>Aligarh</h3>
                                                <p>Ambitions Flying Club Pvt. Ltd.</p>
                                            </div>
                                        </div>
                                        <div class="go-to-location">
                                            <a href="https://maps.google.com/maps?q=Ambitions%20Flying%20Club%20Pvt.%20Ltd.,%20MS-%2010%20NH-91,%20Aligarh%20Airstrip,%20Dhanipur,%20Post%20Panethi,%20Aligarh-202001%20UP"
                                                class="button" target="_blank"><img src={locationButton}
                                                    alt="" /></a>
                                        </div>
                                    </div>

                                    <div class="location">
                                        <div class="details">
                                            <div class="wrap">
                                                <h3>Faizabad</h3>
                                                <p>Falcon Aviation Academy</p>
                                            </div>
                                        </div>
                                        <div class="go-to-location">
                                            <a href="https://maps.google.com/maps?q=Falcon%20Aviation%20Academy,%20Faizabad%20(UP)"
                                                class="button" target="_blank"><img src={locationButton}
                                                    alt="" /></a>
                                        </div>
                                    </div>

                                    <div class="location">
                                        <div class="details">
                                            <div class="wrap">
                                                <h3>Kanpur</h3>
                                                <p>Garg Aviation Ltd.</p>
                                            </div>
                                        </div>
                                        <div class="go-to-location">
                                            <a href="https://maps.google.com/maps?q=Garg%20Aviation%20Ltd.,%20Hanger%20No.3,%20Civil%20Aerodrome,%20Cantt.%20Kanpur-%20208004,%20UP"
                                                class="button" target="_blank"><img src={locationButton}
                                                    alt="" /></a>
                                        </div>
                                    </div>

                                    <div class="location">
                                        <div class="details">
                                            <div class="wrap">
                                                <h3>Fursatganj</h3>
                                                <p>Indira Gandhi Rashtriya Udan Akademi</p>
                                            </div>
                                        </div>
                                        <div class="go-to-location">
                                            <a href="https://maps.google.com/maps?q=Indira%20Gandhi%20Rashtriya%20Udan%20Akademi%20Fursatganj,%20Dist.%0ARaebareilly,%20%20UP-229302"
                                                class="button" target="_blank"><img src={locationButton}
                                                    alt="" /></a>
                                        </div>
                                    </div>
                                    <div class="location">
                                        <div class="details">
                                            <div class="wrap">
                                                <h3>Aligarh</h3>
                                                <p>Pioneer Flying Academy Pvt. Ltd</p>
                                            </div>
                                        </div>
                                        <div class="go-to-location">
                                            <a href="https://maps.google.com/maps?q=Pioneer%20Flying%20Academy%20Pvt.%20Ltd,%20MS-10,%20NH-91,%20Dhanipur%20Airport,%20Post%20Panethi,%20Aligarh-202001%20UP"
                                                class="button" target="_blank"><img src={locationButton}
                                                    alt="" /></a>
                                        </div>
                                    </div>
                                    <div class="location">
                                        <div class="details">
                                            <div class="wrap">
                                                <h3>Sultanpur</h3>
                                                <p>Saraswati Aviation Academy</p>
                                            </div>
                                        </div>
                                        <div class="go-to-location">
                                            <a href="https://maps.google.com/maps?q=Saraswati%20Aviation%20Academy,%20Sultanpur,%20Amhat%20Airfield,%20UP"
                                                class="button" target="_blank"><img src={locationButton}
                                                    alt="" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="accordion-item" data-accordion-item>
                            <a href="#" class="accordion-title">Uttarakhand</a>
                            <div class="accordion-content" data-tab-content>
                                <div class="locations">
                                    <div class="location">
                                        <div class="details">
                                            <div class="wrap">
                                                <h3>Pant Nagar</h3>
                                                <p>Amber Aviation Pvt.Ltd.</p>
                                            </div>
                                        </div>
                                        <div class="go-to-location">
                                            <a href="https://maps.google.com/maps?q=Amber%20Aviation%20Pvt.Ltd.,%20Pant%20Nagar"
                                                class="button" target="_blank"><img src={locationButton}
                                                    alt="" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li class="accordion-item" data-accordion-item>
                            <a href="#" class="accordion-title">Bihar</a>
                            <div class="accordion-content" data-tab-content>
                                <div class="locations">
                                    <div class="location">
                                        <div class="details">
                                            <div class="wrap">
                                                <h3>Patna</h3>
                                                <p>Bihar Flying Instt. Government of Bihar</p>
                                            </div>
                                        </div>
                                        <div class="go-to-location">
                                            <a href="https://maps.google.com/maps?q=Bihar%20Flying%20Instt.%20Government%20of%20Bihar,%20Cabinet%20Secretariate%20Civil%20Aviation%20Directorate,%20Patna%20Airport,%20Patna"
                                                class="button" target="_blank"><img src={locationButton}
                                                    alt="" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li class="accordion-item" data-accordion-item>
                            <a href="#" class="accordion-title">Jharkhand</a>
                            <div class="accordion-content" data-tab-content>
                                <div class="locations">
                                    <div class="location">
                                        <div class="details">
                                            <div class="wrap">
                                                <h3>Jamshedpur</h3>
                                                <p>Alchemist Aviation Pvt. Ltd.</p>
                                            </div>
                                        </div>
                                        <div class="go-to-location">
                                            <a href="https://maps.google.com/maps?q=Alchemist%20Aviation%20Pvt.%20Ltd.%20Sonari%20Aerodrome,%20Jamshedpur,%20Jharkhand-831011"
                                                class="button" target="_blank"><img src={locationButton}
                                                    alt="" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li class="accordion-item" data-accordion-item>
                            <a href="#" class="accordion-title">Gujarat</a>
                            <div class="accordion-content" data-tab-content>
                                <div class="locations">

                                    <div class="location">
                                        <div class="details">
                                            <div class="wrap">
                                                <h3>Ahmedabad</h3>
                                                <p>Ahmedabad Aviation & Aeronautics Ltd., AAA Hanger.</p>
                                            </div>
                                        </div>
                                        <div class="go-to-location">
                                            <a href="https://maps.google.com/maps?q=Ahmedabad%20Aviation%20&%20Aeronautics%20Ltd.,%20AAA%20Hanger.%20Old%20Terminal%20Airport,%20Ahmedabad%2038003,%20Gujarat"
                                                class="button" target="_blank"><img src={locationButton}
                                                    alt=""/></a>
                                        </div>
                                    </div>

                                    <div class="location">
                                        <div class="details">
                                            <div class="wrap">
                                                <h3>Vadodara</h3>
                                                <p>Gujarat Flying Club</p>
                                            </div>
                                        </div>
                                        <div class="go-to-location">
                                            <a href="https://maps.google.com/maps?q=Gujarat%20Flying%20Club,Vadodara"
                                                class="button" target="_blank"><img src={locationButton}
                                                    alt="" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li class="accordion-item" data-accordion-item>
                            <a href="#" class="accordion-title">Haryana</a>
                            <div class="accordion-content" data-tab-content>
                                <div class="locations">
                                    <div class="location">
                                        <div class="details">
                                            <div class="wrap">
                                                <h3>Hisar</h3>
                                                <p>Haryana Institute of Civil Aviation</p>
                                            </div>
                                        </div>
                                        <div class="go-to-location">
                                            <a href="https://maps.google.com/maps?q=Haryana%20Institute%20of%20Civil%20Aviation"
                                                class="button" target="_blank"><img src={locationButton}
                                                    alt="" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li class="accordion-item" data-accordion-item>
                            <a href="#" class="accordion-title">Madhya Pradesh</a>
                            <div class="accordion-content" data-tab-content>
                                <div class="locations">
                                    <div class="location">
                                        <div class="details">
                                            <div class="wrap">
                                                <h3>Indore</h3>
                                                <p>Madhya Pradesh Flying Club</p>
                                            </div>
                                        </div>
                                        <div class="go-to-location">
                                            <a href="https://maps.google.com/maps?q=Madhya%20Pradesh%20Flying%20Club,%20Devi%20Ahilyabai%20Holkar%20Airport,%20Civil%20Aerodrome,%20Bijasan%20Road,%20Indore-%20452005"
                                                class="button" target="_blank"><img src={locationButton}
                                                    alt="" /></a>
                                        </div>
                                    </div>
                                    <div class="location">
                                        <div class="details">
                                            <div class="wrap">
                                                <h3>Bhopal</h3>
                                                <p>Madhya Pradesh Flying Club</p>
                                            </div>
                                        </div>
                                        <div class="go-to-location">
                                            <a href="https://maps.google.com/maps?q=Madhya%20Pradesh%20Flying%20Club,%20Raja%20Bhoj%20Airport,%20Bhopal"
                                                class="button" target="_blank"><img src={locationButton}
                                                    alt="" /></a>
                                        </div>
                                    </div>
                                    <div class="location">
                                        <div class="details">
                                            <div class="wrap">
                                                <h3>Sagar</h3>
                                                <p>Chimes Aviation</p>
                                            </div>
                                        </div>
                                        <div class="go-to-location">
                                            <a href="https://maps.google.com/maps?q=Chimes%20Aviation,%20Sagar,%20(MP)"
                                                class="button" target="_blank"><img src={locationButton}
                                                    alt="" /></a>
                                        </div>
                                    </div>
                                    <div class="location">
                                        <div class="details">
                                            <div class="wrap">
                                                <h3>Guna</h3>
                                                <p>Sha- Shib Flying Academy</p>
                                            </div>
                                        </div>
                                        <div class="go-to-location">
                                            <a href="https://maps.google.com/maps?q=Sha-%20Shib%20Flying%20Academy,%20(Guna)%20M.P."
                                                class="button" target="_blank"><img src={locationButton}
                                                    alt="" /></a>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </li>

                        <li class="accordion-item" data-accordion-item>
                            <a href="#" class="accordion-title">Punjab</a>
                            <div class="accordion-content" data-tab-content>
                                <div class="locations">
                                    <div class="location">
                                        <div class="details">
                                            <div class="wrap">
                                                <h3>Patiala</h3>
                                                <p>Patiala Aviation Club</p>
                                            </div>
                                        </div>
                                        <div class="go-to-location">
                                            <a href="https://maps.google.com/maps?q=Patiala%20Aviation%20Club,%20Civil%20Aerodrome,%20Sangrur%20Road,%20Patiala"
                                                class="button" target="_blank"><img src={locationButton}
                                                    alt="" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li class="accordion-item" data-accordion-item>
                            <a href="#" class="accordion-title">Rajasthan</a>
                            <div class="accordion-content" data-tab-content>
                                <div class="locations">
                                    <div class="location">
                                        <div class="details">
                                            <div class="wrap">
                                                <h3>Banasthali</h3>
                                                <p>Banasthali Vidyapith Gliding Flying Club</p>
                                            </div>
                                        </div>
                                        <div class="go-to-location">
                                            <a href="https://maps.google.com/maps?q=Banasthali%20Vidyapith%20Gliding%20Flying%20Club,%20Banasthali%20Univ.,%20Banasthali,%20Dist.%20Tonk%20Raj.-304022"
                                                class="button" target="_blank"><img src={locationButton}
                                                    alt="" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>


                    <h2>South India</h2>

                    <ul class="accordion" data-accordion data-allow-all-closed="true">
                        <li class="accordion-item" data-accordion-item>
                            <a href="#" class="accordion-title">Telangana</a>
                            <div class="accordion-content" data-tab-content>
                                <div class="locations">
                                    <div class="location">
                                        <div class="details">
                                            <div class="wrap">
                                                <h3>Hyderabad</h3>
                                                <p>Asia Pacific Flight Training Academy Ltd.</p>
                                            </div>
                                        </div>
                                        <div class="go-to-location">
                                            <a href="https://maps.google.com/maps?q=Asia%20Pacific%20Flight%20Training%20Academy%20Ltd.%20GMR%20HIAL%20Airport%20Office%20Rajiv%20Gandhi%20International%20Airport%20Shamshabad,%20%20Hyderabad-500409"
                                                class="button" target="_blank"><img src={locationButton}
                                                    alt="" /></a>
                                        </div>
                                    </div>

                                    <div class="location">
                                        <div class="details">
                                            <div class="wrap">
                                                <h3>Secunderabad</h3>
                                                <p>Flytech Aviation Academy</p>
                                            </div>
                                        </div>
                                        <div class="go-to-location">
                                            <a href="https://maps.google.com/maps?q=Flytech%20Aviation%20Academy,%20A1-%20Kauser,%20Plot%20No.295,%20Road%20No.%2010,%20West%20Maredpally.%20Secunderabad."
                                                class="button" target="_blank"><img src={locationButton}
                                                    alt="" /></a>
                                        </div>
                                    </div>

                                    <div class="location">
                                        <div class="details">
                                            <div class="wrap">
                                                <h3>Hyderabad</h3>
                                                <p>Telangana State Aviation Academy,</p>
                                            </div>
                                        </div>
                                        <div class="go-to-location">
                                            <a href="https://maps.google.com/maps?q=Telangana%20State%20Aviation%20Academy,Andhra%20Pradesh,old%20Air%20port,Hyderabad-500011"
                                                class="button" target="_blank"><img src={locationButton}
                                                    alt="" /></a>
                                        </div>
                                    </div>
                                    <div class="location">
                                        <div class="details">
                                            <div class="wrap">
                                                <h3>Hyderabad</h3>
                                                <p>Wings Aviation Pct. Ltd.</p>
                                            </div>
                                        </div>
                                        <div class="go-to-location">
                                            <a href="https://maps.google.com/maps?q=Wings%20Aviation%20Pct.%20Ltd.,%201-11-256/B,%20Plot%20No.%20108,%20Adjacent%20Airport%20Road,%20Begumpet,%20%20Hyderabad."
                                                class="button" target="_blank"><img src={locationButton}
                                                    alt="" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="accordion-item" data-accordion-item>
                            <a href="#" class="accordion-title">Maharashtra</a>
                            <div class="accordion-content" data-tab-content>
                                <div class="locations">
                                    <div class="location">
                                        <div class="details">
                                            <div class="wrap">
                                                <h3>Nagpur</h3>
                                                <p>Nagpur Flying Club</p>
                                            </div>
                                        </div>
                                        <div class="go-to-location">
                                            <a href="https://maps.google.com/maps?q=Nagpur%20Flying%20Club,%20Office%20of%20the%20Divisional%20Commissioner,%20Civil%20Lines,%20Nagpur-01"
                                                class="button" target="_blank"><img src={locationButton}
                                                    alt="" /></a>
                                        </div>
                                    </div>

                                    <div class="location">
                                        <div class="details">
                                            <div class="wrap">
                                                <h3>Gondia</h3>
                                                <p>National Flying Training Institute,Pvt. Ltd</p>
                                            </div>
                                        </div>
                                        <div class="go-to-location">
                                            <a href="https://maps.google.com/maps?q=National%20Flying%20Training%20Institute,%20Pvt.%20Ltd,%20C/o%20Airport%20Authority%20of%20India,%20Birsi%20Airport,%20P.O.%20Paraswada,%20Gondia,%20425%20614%20Maharashtra"
                                                class="button" target="_blank"><img src={locationButton}
                                                    alt="" /></a>
                                        </div>
                                    </div>

                                    <div class="location">
                                        <div class="details">
                                            <div class="wrap">
                                                <h3>Dhule</h3>
                                                <p>SKVM’s Flying Academy of Aviation</p>
                                            </div>
                                        </div>
                                        <div class="go-to-location">
                                            <a href="https://maps.google.com/maps?q=SKVM%E2%80%99s%20Flying%20Academy%20of%20Aviation,%20Campus-Babulde,%20Banks%20of%20Tapi%20River,%20Mumbai-Agra%20Road,%20Shirpur,%20Dist.-Dhule-425%20405"
                                                class="button" target="_blank"><img src={locationButton}
                                                    alt="" /></a>
                                        </div>
                                    </div>
                                    <div class="location">
                                        <div class="details">
                                            <div class="wrap">
                                                <h3>Santacruz</h3>
                                                <p>The Bombay Flying Club</p>
                                            </div>
                                        </div>
                                        <div class="go-to-location">
                                            <a href="https://maps.google.com/maps?q=The%20Bombay%20Flying%20Club,%20Juhu%20Airport,%20Santacruz%20(W),%20Mumbai"
                                                class="button" target="_blank"><img src={locationButton}
                                                    alt="" /></a>
                                        </div>
                                    </div>
                                    <div class="location">
                                        <div class="details">
                                            <div class="wrap">
                                                <h3>Baramati</h3>
                                                <p>Academy of Carver Aviation</p>
                                            </div>
                                        </div>
                                        <div class="go-to-location">
                                            <a href="https://maps.google.com/maps?q=Academy%20of%20Carver%20Aviation,%20Plot%20No.%20P-50,MIDC%20Ind.%20Area,%20Near%20Baramati%20Airport,%20Baramati-413133"
                                                class="button" target="_blank"><img src={locationButton}
                                                    alt="" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>


                        <li class="accordion-item" data-accordion-item>
                            <a href="#" class="accordion-title">Karnataka</a>
                            <div class="accordion-content" data-tab-content>
                                <div class="locations">
                                    <div class="location">
                                        <div class="details">
                                            <div class="wrap">
                                                <h3>Mysore</h3>
                                                <p>Orient Flight Aviation Academy</p>
                                            </div>
                                        </div>
                                        <div class="go-to-location">
                                            <a href="https://maps.google.com/maps?q=Orient%20Flight%20Aviation%20Academy,Mysore."
                                                class="button" target="_blank"><img src={locationButton}
                                                    alt="" /></a>
                                        </div>
                                    </div>
                                    <div class="location">
                                        <div class="details">
                                            <div class="wrap">
                                                <h3>Bangalore</h3>
                                                <p>Govt. Flying Training School</p>
                                            </div>
                                        </div>
                                        <div class="go-to-location">
                                            <a href="https://maps.google.com/maps?q=Govt.%20Flying%20Training%20School,%20Jakkur,%20Bangalore."
                                                class="button" target="_blank"><img src={locationButton}
                                                    alt="" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li class="accordion-item" data-accordion-item>
                            <a href="#" class="accordion-title">Orissa</a>
                            <div class="accordion-content" data-tab-content>
                                <div class="locations">
                                    <div class="location">
                                        <div class="details">
                                            <div class="wrap">
                                                <h3>Bhubaneshwar</h3>
                                                <p>Govt. Aviation Training Instt.</p>
                                            </div>
                                        </div>
                                        <div class="go-to-location">
                                            <a href="https://maps.google.com/maps?q=Govt.%20Aviation%20Training%20Instt.,%20Directorate%20of%20Aviation,%20Orissa,%20Civil%20Aerodrome,%20%20Bhubaneshwar."
                                                class="button" target="_blank"><img src={locationButton}
                                                    alt="" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li class="accordion-item" data-accordion-item>
                            <a href="#" class="accordion-title">Kerala</a>
                            <div class="accordion-content" data-tab-content>
                                <div class="locations">
                                    <div class="location">
                                        <div class="details">
                                            <div class="wrap">
                                                <h3>Thiruvanathapuram</h3>
                                                <p>Rajiv Gandhi Academy for Aviation Technology</p>
                                            </div>
                                        </div>
                                        <div class="go-to-location">
                                            <a href="https://maps.google.com/maps?q=Rajiv%20Gandhi%20Academy%20for%20Aviation%20Technology,%20%20Thiruvanathapuram"
                                                class="button" target="_blank"><img src={locationButton}
                                                    alt="" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>);
    }
}

export default FlightTrainingOrganizationsPage;