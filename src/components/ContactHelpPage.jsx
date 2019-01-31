import React from 'react';

import $ from 'jquery';

import 'foundation-sites';

class ContactHelpPage extends React.Component {

    componentDidMount() {
        $(document).foundation();
    }

    render(){
        return (
            <div>
                <section id="faq">
                    <div className="grid-container">
                        <div className="grid-x grid-padding-x">
                            <div className="large-12 cell">
                                <h2>Officers incharge for more questions:</h2>
                                <ul>
                                    <li>
                                        <strong>For Operations:</strong><br />
                                        Capt. Amit Garg, Senior Flight Operations Inspector, FSD <br />(M) 9717900923, <br />e-mail
                                        ID: amitg.dgca@nic.in<br /><br />
                                    </li>
                                    <li>
                                        <strong>For Import and Local acquisition of RPAS:</strong><br />
                                        Sh. Pramod Nagare- Assistant Director (Ops)<br /> 011-24622495  Extn: 263, <br />email-Id:
                                        pramod.dgca@nic.in<br /><br />
                                    </li>
                                    <li>
                                        <strong>For issuance of  UIN:</strong><br />
                                        Sh. Vishav Raj Meena- Asst. Director (Airworthiness) <br />(M) 9968414272, <br />e-mail ID:
                                        vishavraj.dgca@nic.in<br /><br />
                                    </li>
                                    <li>
                                        <strong>For issuance of UAOP, design certification:</strong><br />
                                        Sh. K. Thulasiraman- Deputy Director (AE)<br /> 011-24522500 Etxn. 448, <br />e-mail ID:
                                        thulasiraman.dgca@nic.in<br /><br />
                                    </li>
                                    <li>
                                        <strong>For import:</strong><br />
                                        Sh. S. P. Roy, Joint DGFT, DGFT,<br /> 011-2306 2240, <br />e-mail ID:
                                        shyama.roy@nic.in<br /><br />
                                    </li>
                                    <li>
                                        <strong>For ETA:</strong><br />
                                        Sh. Bhagirath, Sr. DWA, WPC, DoT,<br /> 011-2373 1488 , <br />e-mail ID:
                                        bhagirath.32@gov.in<br /><br />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default ContactHelpPage