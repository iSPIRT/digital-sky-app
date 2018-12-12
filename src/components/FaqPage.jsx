import React from 'react';

import $ from 'jquery';

import 'foundation-sites';

class FaqPage extends React.Component {

    componentDidMount() {
        $(document).foundation();
    }

    render(){
        return(
        < div >
            <section id="faq">
                <div className="grid-container">
                    <div className="grid-x grid-padding-x">
                        <div className="large-6 cell">
                            <h2>Glossary</h2>
                            <table id="faq-glossory">
                                <tbody>
                                    <tr>
                                        <td>AAI</td>
                                        <td>
                                            Airports Authority of India</td>
                                    </tr>
                                    <tr>
                                        <td>ADS-B</td>
                                        <td>
                                            Automatic Dependent Surveillance - Broadcast</td>
                                    </tr>
                                    <tr>
                                        <td>AGL</td>
                                        <td>
                                            Above Ground Level</td>
                                    </tr>
                                    <tr>
                                        <td>ATC</td>
                                        <td>
                                            Air Traffic Control</td>
                                    </tr>
                                    <tr>
                                        <td>BCAS</td>
                                        <td>
                                            Bureau of Civil Aviation Security</td>
                                    </tr>
                                    <tr>
                                        <td>CAR</td>
                                        <td>
                                            Civil Aviation Requirements</td>
                                    </tr>
                                    <tr>
                                        <td>DGCA</td>
                                        <td>
                                            Directorate General of Civil Aviation</td>
                                    </tr>
                                    <tr>
                                        <td>DGFT</td>
                                        <td>
                                            Directorate General of Foreign Trade</td>
                                    </tr>
                                    <tr>
                                        <td>FTO</td>
                                        <td>
                                            Flying Training Organisation</td>
                                    </tr>
                                    <tr>
                                        <td>GPS</td>
                                        <td>
                                            Global Positioning System</td>
                                    </tr>
                                    <tr>
                                        <td>IAF</td>
                                        <td>
                                            Indian Air Force</td>
                                    </tr>
                                    <tr>
                                        <td>ICAO</td>
                                        <td>
                                            International Civil Aviation Organization</td>
                                    </tr>
                                    <tr>
                                        <td>IPC</td>
                                        <td>
                                            Indian Penal Code</td>
                                    </tr>
                                    <tr>
                                        <td>MHA</td>
                                        <td>
                                            Ministry of Home Affairs</td>
                                    </tr>
                                    <tr>
                                        <td>MoCA</td>
                                        <td>
                                            Ministry of Civil Aviation</td>
                                    </tr>
                                    <tr>
                                        <td>MoD</td>
                                        <td>
                                            Ministry of Defence</td>
                                    </tr>
                                    <tr>
                                        <td>MTOW</td>
                                        <td>
                                            Maximum Take-off Weight</td>
                                    </tr>
                                    <tr>
                                        <td>NPNT</td>
                                        <td>
                                            No Permission-No Take off</td>
                                    </tr>
                                    <tr>
                                        <td>PPL</td>
                                        <td>
                                            Private Pilot License</td>
                                    </tr>
                                    <tr>
                                        <td>RF-ID</td>
                                        <td>
                                            Radio Frequency Identification</td>
                                    </tr>
                                    <tr>
                                        <td>RPA</td>
                                        <td>
                                            Remotely Piloted Aircraft</td>
                                    </tr>
                                    <tr>
                                        <td>RPAS</td>
                                        <td>
                                            Remotely Piloted Aircraft System(s)</td>
                                    </tr>
                                    <tr>
                                        <td>RPS</td>
                                        <td>
                                            Remote Pilot Station(s)</td>
                                    </tr>
                                    <tr>
                                        <td>SIM</td>
                                        <td>
                                            Subscriber Identity Module</td>
                                    </tr>
                                    <tr>
                                        <td>UA</td>
                                        <td>
                                            Unmanned Aircraft</td>
                                    </tr>
                                    <tr>
                                        <td>UAOP</td>
                                        <td>
                                            Unmanned Aircraft Operator Permit</td>
                                    </tr>
                                    <tr>
                                        <td>UAS</td>
                                        <td>
                                            Unmanned Aircraft System(s)</td>
                                    </tr>
                                    <tr>
                                        <td>UIN</td>
                                        <td>
                                            Unique Identification Number</td>
                                    </tr>
                                    <tr>
                                        <td>VFR</td>
                                        <td>
                                            Visual Flight Rules</td>
                                    </tr>
                                    <tr>
                                        <td>VLOS</td>
                                        <td>
                                            Visual Line-Of-Sight</td>
                                    </tr>
                                    <tr>
                                        <td>VMC</td>
                                        <td>
                                            Visual Meteorological Conditions
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="large-12 cell">
                            <h2>FAQ</h2>

                            <ul className="accordion" data-accordion data-allow-all-closed="true">
                                <li className="accordion-item is-active" data-accordion-item>
                                    <a href="#" className="accordion-title">1. What is a drone and UAS?</a>
                                    <div className="accordion-content" data-tab-content>
                                        <p>
                                            Drone is a layman terminology for Unmanned Aircraft (UA). There are three
                                            subsets of Unmanned Aircraft, a) Remotely Piloted Aircraft, b) Autonomous
                                            Aircraft and c) Model Aircraft.
                                        </p>
                                        <p>
                                            An aircraft and its associated elements, which are operated with no pilot on
                                            board is called as Unmanned Aircraft System (UAS).
                                        </p>
                                    </div>
                                </li>
                                <li className="accordion-item" data-accordion-item>
                                    <a href="#" className="accordion-title">2. What is Remotely Piloted Aircraft System (RPAS) and its categories?</a>
                                    <div className="accordion-content" data-tab-content>
                                        <p>
                                            RPAS is one subset of UAS. A remotely piloted aircraft (RPA), its associated
                                            remote pilot station(s), the required command and control links and any other
                                            components, as specified in the type design.</p>
                                        <p>
                                            Civil RPA is categorized in accordance with MTOW (including payload) as
                                            indicated below:
                                        </p>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td>Nano
                                                    </td>
                                                    <td>
                                                        Less than or equal to 250 grams.</td>
                                                </tr>
                                                <tr>
                                                    <td>Micro
                                                    </td>
                                                    <td>
                                                        Greater than 250 grams and less than or equal to 2 kg.</td>
                                                </tr>
                                                <tr>
                                                    <td>Small
                                                    </td>
                                                    <td>
                                                        Greater than 2 kg and less than or equal to 25 kg.</td>
                                                </tr>
                                                <tr>
                                                    <td>Medium
                                                    </td>
                                                    <td>
                                                        Greater than 25 kg and less than or equal to 150 kg.</td>
                                                </tr>
                                                <tr>
                                                    <td>Large
                                                    </td>
                                                    <td>
                                                        Greater than 150 kg.
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </li>
                                <li className="accordion-item" data-accordion-item>
                                    <a href="#" className="accordion-title">3. What does Civil Aviation Requirements
                                        (CAR) mean, and when the same on Remotely Piloted Aircraft System (RPAS) will be
                                        effective?
                                    </a>
                                    <div className="accordion-content" data-tab-content>
                                        <p>Civil Aviation Requirements (CAR) is a set of regulations issued by the
                                            Directorate General of Civil Aviation (DGCA). The CAR on RPAS shall be effective
                                            from 1st December, 2018.
                                        </p>
                                    </div>
                                </li>

                                <li className="accordion-item" data-accordion-item>
                                    <a href="#" className="accordion-title">4. What is Digital Sky Platform, and when it will be operational?
                                    </a>
                                    <div className="accordion-content" data-tab-content>
                                        <p>It is an online IT platform developed for handling UIN, UAOP applications,
                                            permission to fly drones in India. The link shall be available in Homepage of
                                            DGCA website
                                            <a href="http://www.dgca.nic.in" target="_blank">www.dgca.nic.in</a>, and it will be operational from 1st December, 2018.
                                        </p>
                                    </div>
                                </li>
                                <li className="accordion-item" data-accordion-item>
                                    <a href="#" className="accordion-title">5. What permissions are required to operate drones and from where?</a>
                                    <div className="accordion-content" data-tab-content>
                                        <p>
                                            Roles & responsibilities of govt. stakeholders on various aspects of operation
                                            of civil remotely piloted aircraft system
                                        </p>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>
                                                        No.
                                                    </th>
                                                    <th>
                                                        Stakeholder
                                                    </th>
                                                    <th>
                                                        Responsibility
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr >
                                                    <td>1.
                                                    </td>
                                                    <td>Directorate General of Civil Aviation</td>
                                                    <td>
                                                        <p>Import clearance
                                                        </p>
                                                        <p>Issuance of UIN
                                                        </p>
                                                        <p>Issuance & renewal of UAOP</p>
                                                        <p>
                                                            Suspension / Cancellation of UIN & UAOP in case of violations of regulations.
                                                        </p>
                                                    </td>
                                                </tr>

                                                <tr >
                                                    <td>2.
                                                    </td>
                                                    <td>Directorate General of Foreign Trade
                                                    </td>
                                                    <td>
                                                        <p>Import license</p>
                                                    </td>
                                                </tr>

                                                <tr >
                                                    <td>3.
                                                    </td>
                                                    <td>Ministry of Home Affairs</td>
                                                    <td>
                                                        <p>Security clearance
                                                        </p>
                                                    </td>
                                                </tr>

                                                <tr >
                                                    <td>4.
                                                    </td>
                                                    <td>Ministry of Defence
                                                    </td>
                                                    <td>
                                                        <p>Permission for aerial survey/imageries/ videography/ still photography over
                                                            the restricted/prohibited areas on case-tocase basis
                                                        </p>
                                                    </td>
                                                </tr>

                                                <tr >
                                                    <td>5.
                                                    </td>
                                                    <td>Indian Air Force
                                                    </td>
                                                    <td>
                                                        <p>Air Defence Clearance</p>
                                                        <p>Monitoring of RPA movements in thecountry
                                                        </p>
                                                    </td>
                                                </tr>

                                                <tr >
                                                    <td>6.
                                                    </td>
                                                    <td>Wireless Planning and Coordination Wing, DoT</td>
                                                    <td>
                                                        <p>Equipment Type Approval (ETA) or License for drone
                                                        </p>
                                                    </td>
                                                </tr>

                                                <tr >
                                                    <td>7.
                                                    </td>
                                                    <td>Bureau of Civil Aviation Security
                                                    </td>
                                                    <td>
                                                        <p>Approval of Security Programme</p>
                                                    </td>
                                                </tr>

                                                <tr >
                                                    <td>8.
                                                    </td>
                                                    <td>Airport Authority of India
                                                    </td>
                                                    <td>
                                                        <p>Flight Plan Approval
                                                        </p>
                                                        <p>Monitoring of RPA movements in the country
                                                        </p>
                                                    </td>
                                                </tr>

                                                <tr >
                                                    <td>9.
                                                    </td>
                                                    <td>Local Police Office</td>
                                                    <td>
                                                        <p>Enforcement of violators as per applicable IPCs</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </li>

                                <li className="accordion-item" data-accordion-item>
                                    <a href="#" className="accordion-title">6. What are the requirements for import of
                                        Drones (with or without camera) in India?
                                    </a>
                                    <div className="accordion-content" data-tab-content>
                                        <ul>
                                            <li>
                                                <p>Any entity intending to import RPAS in India shall obtain Equipment Type
                                                    Approval (ETA) from WPC Wing, Department of Telecommunication for operating in
                                                    de-licensed frequency band(s). Such approval shall be valid for a particular
                                                    make and model.</p>
                                            </li>
                                            <li>
                                                <p>The applicant, other than Nano category, shall apply to DGCA along with ETA
                                                    for import clearance. Based upon the import clearance issued by DGCA, DGFT shall
                                                    issue license for import of RPAS.
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </li>

                                <li className="accordion-item" data-accordion-item>
                                    <a href="#" className="accordion-title">7. What is NPNT and how do I comply with that?</a>
                                    <div className="accordion-content" data-tab-content>
                                        <p>NPNT or ‘No Permission – No Take-off” is a software programme that enables
                                            every RPA (except Nano) to obtain a valid permissions through digital sky
                                            platform before operating in India. Please contact your OEM/ Manufacturer for
                                            complying with this requirement.</p>
                                    </div>
                                </li>
                                <li className="accordion-item" data-accordion-item>
                                    <a href="#" className="accordion-title">8. What is controlled and uncontrolled airspace?
                                    </a>
                                    <div className="accordion-content" data-tab-content>
                                        <p>
                                            <strong>Controlled airspace</strong>
                                            is
                                            <strong>airspace</strong>
                                            of defined dimensions within which ATC services are provided.</p>
                                        <p>
                                            <strong>Uncontrolled airspace</strong>
                                            is
                                            <strong>airspace</strong>
                                            where an Air Traffic Control (ATC) service is not necessary or cannot be
                                            provided for practical reasons.</p>
                                    </div>
                                </li>
                                <li className="accordion-item" data-accordion-item>
                                    <a href="#" className="accordion-title">9. I am intending to locally purchase one
                                        drone operating in de-licensed frequency band, should I still require ETA from
                                        WPC Wing, DoT?
                                    </a>
                                    <div className="accordion-content" data-tab-content>
                                        <p>ETA from WPC Wing is required for all wireless equipment working in
                                            de-licensed frequency band(s) in India. Ensure to get ETA from the seller or
                                            manufacturer of RPA which is required to be uploaded while applying for UIN.
                                        </p>
                                    </div>
                                </li>
                                <li className="accordion-item" data-accordion-item>
                                    <a href="#" className="accordion-title">10. Whether drones fall under the category
                                        of restricted items for carrying in hand baggage in aircrafts?
                                    </a>
                                    <div className="accordion-content" data-tab-content>
                                        <p>Drones are restricted items and can’t be carried in hand baggage.
                                        </p>
                                    </div>
                                </li>
                                <li className="accordion-item" data-accordion-item>
                                    <a href="#" className="accordion-title">11. Where can I find the filing instructions for UIN/ UAOP etc.?
                                    </a>
                                    <div className="accordion-content" data-tab-content>
                                        <p>Instructions for filing all applications online shall be available in Digital
                                            Sky Manual. The Manual will be available in DGCA website homepage
                                            <a href="http://www.dgca.nic.in" target="_blank">www.dgca.nic.in</a>
                                            , and also in the Digital Sky portal homepage. The Digital sky manual shall be
                                            available in the above mentioned website from 1st December, 2018.
                                        </p>
                                    </div>
                                </li>
                                <li className="accordion-item" data-accordion-item>
                                    <a href="#" className="accordion-title">12. I am a foreigner and want to fly drones
                                        in India. What are the permission do I require?
                                    </a>
                                    <div className="accordion-content" data-tab-content>
                                        <p>Foreigners are currently not allowed to fly drones in India. For commercial
                                            purpose, they need to lease RPAS to an Indian entity who in-turn will obtain
                                            Unique Identification Number (UIN) and UAOP from DGCA.
                                        </p>
                                    </div>
                                </li>
                                <li className="accordion-item" data-accordion-item>
                                    <a href="#" className="accordion-title">13. What is UIN?
                                    </a>
                                    <div className="accordion-content" data-tab-content>
                                        <p>UIN is unique identification number issued by DGCA for a particular RPA
                                            (except Nano).</p>
                                    </div>
                                </li>
                                <li className="accordion-item" data-accordion-item>
                                    <a href="#" className="accordion-title">14. How much is the fees for UIN & UAOP?
                                    </a>
                                    <div className="accordion-content" data-tab-content>
                                        <ul>
                                            <li>
                                                <strong>For UIN</strong>: - One thousand Indian Rupees (Rs.1000/-).
                                            </li>
                                            <li>
                                                <strong>For fresh UAOP</strong>
                                                :- Twenty Five Thousand Rupees (Rs.25,000/-)
                                            </li>
                                            <li>
                                                <strong>For Renewal of UAOP</strong>:- Ten Thousand Rupees (Rs.10,000/-)
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="accordion-item" data-accordion-item>
                                    <a href="#" className="accordion-title">15. Where do I pay fees for UIN and UAOP for drone?
                                    </a>
                                    <div className="accordion-content" data-tab-content>
                                        <p>You will be prompted for payment through payment Gateway in the Digital Sky
                                            Platform.</p>
                                        <p>Or</p>
                                        <p>The link for paying the fees is https://bharatkosh.gov.in/.You need to
                                            mention the transaction receipt number and upload copy of the payment receipt in
                                            Digital Sky Platform at the time of your application.</p>
                                    </div>
                                </li>
                                <li className="accordion-item" data-accordion-item>
                                    <a href="#" className="accordion-title">16. How do I mark my unmanned aircraft with my UIN?
                                    </a>
                                    <div className="accordion-content" data-tab-content>
                                        <p>After you have been issued with UIN for a particular drone; engrave it on a
                                            fire resistant plate and firmly affix on your drone. Ensure the number remains
                                            affixed to the aircraft during routine handling and all operating conditions and
                                            is readily accessible and legible upon close visual inspection.</p>
                                    </div>
                                </li>
                                <li className="accordion-item" data-accordion-item>
                                    <a href="#" className="accordion-title">17. If I'm just flying my UAS inside a building, do I have to register it?
                                    </a>
                                    <div className="accordion-content" data-tab-content>
                                        <p>For Nano, no UIN is required. However, for micro category and above, UIN is
                                            required.
                                        </p>
                                    </div>
                                </li>
                                <li className="accordion-item" data-accordion-item>
                                    <a href="#" className="accordion-title">18. What is UAOP?
                                    </a>
                                    <div className="accordion-content" data-tab-content>
                                        <p>UAOP is Unmanned Aircraft Operator Permit.</p>
                                    </div>
                                </li>
                                <li className="accordion-item" data-accordion-item>
                                    <a href="#" className="accordion-title">19. Who all are required to obtain UAOP?
                                    </a>
                                    <div className="accordion-content" data-tab-content>
                                        <p>All operators other than exempted categories mentioned below are required to
                                            obtain UAOP from DGCA:-</p>
                                        <ul>
                                            <li>
                                                <p>Operators of Nano &Micro category in uncontrolled airspace/ enclosed premises
                                                    upto 50ft and 200ft respectively</p>
                                            </li>
                                            <li>
                                                <p>RPA operated by NTRO, ARC, and Central Intelligence Agencies.</p>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="accordion-item" data-accordion-item>
                                    <a href="#" className="accordion-title">20. What is the validity of UAOP?</a>
                                    <div className="accordion-content" data-tab-content>
                                        <p>Five years</p>
                                    </div>
                                </li>
                                <li className="accordion-item" data-accordion-item>
                                    <a href="#" className="accordion-title">21. What format do I use for renewal of UAOP?
                                    </a>
                                    <div className="accordion-content" data-tab-content>
                                        <p>Same format is used for issue /renewal of UAOP through Digital Sky app.
                                            However,please note you will need fresh security clearance from MHA.
                                        </p>
                                    </div>
                                </li>
                                <li className="accordion-item" data-accordion-item>
                                    <a href="#" className="accordion-title">22. How do I report an incident or accident?</a>
                                    <div className="accordion-content" data-tab-content>
                                        <p>The operator of all RPA except Nano RPA will notify any incident/accident
                                            involving RPA to the Director of Air Safety, DGCA through Digital Sky Platform.
                                        </p>
                                    </div>
                                </li>
                                <li className="accordion-item" data-accordion-item>
                                    <a href="#" className="accordion-title">23. I was travelling and lost my bag along
                                        with my drone. Whom should I contact now?
                                    </a>
                                    <div className="accordion-content" data-tab-content>
                                        <p>Please lodge FIR immediately in local police and report occurrence in Digital
                                            Sky along with a copy of FIR.
                                        </p>
                                    </div>
                                </li>
                                <li className="accordion-item" data-accordion-item>
                                    <a href="#" className="accordion-title">24. My drone is completely broken. Can I use
                                        its UIN for another drone of same make and model?</a>
                                    <div className="accordion-content" data-tab-content>
                                        <p>No. The operator has to apply for fresh UIN.
                                        </p>
                                    </div>
                                </li>
                                <li className="accordion-item" data-accordion-item>
                                    <a href="#" className="accordion-title">25. I want to sell my used drone to someone. What is the procedure?</a>
                                    <div className="accordion-content" data-tab-content>
                                        <p>RPAS if issued with UIN, cannot be transferred or disposed-off without
                                            permission from DGCA. You are required for cancellation of UIN and the buyer has
                                            to apply for fresh UIN through Digital Sky Platform.
                                        </p>
                                    </div>
                                </li>
                                <li className="accordion-item" data-accordion-item>
                                    <a href="#" className="accordion-title">26. We are a company registered elsewhere
                                        than in India and we have a remote pilot who is licensed by our civil aviation
                                        authority.
                                        <br/>
                                        We want to lend our services to an Indian Organisation. What permissions do we
                                        require?</a>
                                    <div className="accordion-content" data-tab-content>
                                        <p>Foreign Entity has to lease their RPAS to the Indian Entity. The Indian
                                            entity shall apply for UIN and UAOP. Remote Pilot (if a foreign national) should
                                            be security cleared. Foreigners are currently not allowed to fly drones in
                                            India.
                                        </p>
                                    </div>
                                </li>
                                <li className="accordion-item" data-accordion-item>
                                    <a href="#" className="accordion-title">27. Where should I apply for security clearance?</a>
                                    <div className="accordion-content" data-tab-content>
                                        <p>For Security clearance, apply as per the form available in the CAR on RPAS or
                                            Use “ESahaj– Online portal for processing security clearance applications”
                                            available in DGCA homepage
                                            <a href="http://www.dgca.nic.in" target="_blank">www.dgca.nic.in
                                            </a>
                                        </p>
                                    </div>
                                </li>
                                <li className="accordion-item" data-accordion-item>
                                    <a href="#" className="accordion-title">28. I have a Nano drone. What permissions to I require?
                                    </a>
                                    <div className="accordion-content" data-tab-content>
                                        <p>Nano RPA (less than 250 gm) is exempted from obtaining UIN and UAOP. Please
                                            ensure not to fly it beyond 50 ft (15m) AGL. Also, ensure you are not flying in
                                            controlled airspace and no other manned or unmanned aircraft is flying nearby.
                                            If operations to be done in controlled airspace you need to apply for UIN, UAOP
                                            and your RPA shall be NPNT complaint. It is recommended to fly in uncontrolled
                                            airspace/ enclosed premises and go through Do’s and Don’ts every time before you
                                            fly.
                                        </p>
                                    </div>
                                </li>
                                <li className="accordion-item" data-accordion-item>
                                    <a href="#" className="accordion-title">29. I have a micro drone engaged in wedding
                                        photography, what permission do I need to keep doing it legally.
                                    </a>
                                    <div className="accordion-content" data-tab-content>
                                        <ul>
                                            <li>
                                                <p>You need to obtain UIN.
                                                </p>
                                            </li>
                                            <li>
                                                <p>You will not require an UAOP if you are flying your drone below 200 ft (60m)
                                                    AGL in uncontrolled airspace/ enclosed premises. However, you shall intimate the
                                                    local police office at least 24 hours prior to conduct of actual operations.
                                                </p>
                                            </li>
                                            <li>
                                                <p>Your drone needs to NPNT compliant and you have to obtain permission through
                                                    digital sky before flying.
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="accordion-item" data-accordion-item>
                                    <a href="#" className="accordion-title">30. I am an individual want to film my
                                        friend’s marriage using drones. What permission do I need?
                                    </a>
                                    <div className="accordion-content" data-tab-content>
                                        <p>If you have a micro drone, flying within enclosed premises and below 200ft
                                            then; you need to apply for UIN and to intimate local police before operating
                                            your drone.You will require UAOP and NPNT if you are flying in controlled
                                            airspace.</p>
                                        <p>Also ensure, no other manned or unmanned aircraft is flying nearby.</p>
                                    </div>
                                </li>
                                <li className="accordion-item" data-accordion-item>
                                    <a href="#" className="accordion-title">31. Is delivery of items allowed under the DGCA CAR on UAS?
                                    </a>
                                    <div className="accordion-content" data-tab-content>
                                        <p>Not allowed as of now</p>
                                    </div>
                                </li>
                                <li className="accordion-item" data-accordion-item>
                                    <a href="#" className="accordion-title">32. I want to deliver foods using drones and
                                        it will be fully autonomous and fly below 50 ft. whom should I contact for
                                        necessary permission.
                                    </a>
                                    <div className="accordion-content" data-tab-content>
                                        <p>Not allowed as of now.</p>
                                    </div>
                                </li>
                                <li className="accordion-item" data-accordion-item>
                                    <a href="#" className="accordion-title">33. Do I require remote pilot license to fly drone?
                                    </a>
                                    <div className="accordion-content" data-tab-content>
                                        <p>No, as of now but you need to undergo minimum training requirements specified
                                            in the Civil Aviation Requirements on “Requirements for Operation of Civil
                                            RPAS”.
                                        </p>
                                    </div>
                                </li>
                                <li className="accordion-item" data-accordion-item>
                                    <a href="#" className="accordion-title">34. What are the minimum requirements and
                                        eligibility for becoming a remote pilot for flying drones?
                                    </a>
                                    <div className="accordion-content" data-tab-content>
                                        <p>You should have attained 18 years of age, having passed 10th exam in English,
                                            and undergone training at DGCA approved flying training organisation (FTO).
                                        </p>
                                    </div>
                                </li>
                                <li className="accordion-item" data-accordion-item>
                                    <a href="#" className="accordion-title">35. Should I maintain flying log when and where I am flying?
                                    </a>
                                    <div className="accordion-content" data-tab-content>
                                        <p>All individuals / operators (except Nano), shall maintain records of each RPA
                                            flight records and should be produced on demand by DGCA.
                                        </p>
                                    </div>
                                </li>
                                <li className="accordion-item" data-accordion-item>
                                    <a href="#" className="accordion-title">
                                        Should I maintain maintenance log for the repair/maintenance carried out on
                                        RPAS?
                                    </a>
                                    <div className="accordion-content" data-tab-content>
                                        <p>All RPA holders shall maintain maintenance records and, should be able to
                                            produce on demand by DGCA.
                                        </p>
                                    </div>
                                </li>
                                <li className="accordion-item" data-accordion-item>
                                    <a href="#" className="accordion-title">37. What are the mandatory equipment required to fly upto 400 ft. AGL?
                                    </a>
                                    <div className="accordion-content" data-tab-content>
                                        <p>Flying drone upto 400 ft. AGL and visual line of sight are allowed. However,
                                            you need to have the following equipment installed on your drones:
                                        </p>
                                        <ol type="a">
                                            <li>
                                                <p>GNSS (GPS) for horizontal and vertical position fixing</p>
                                            </li>
                                            <li>
                                                <p>Autonomous Flight Termination System or Return Home (RH) option
                                                </p>
                                            </li>
                                            <li>
                                                <p>Flashing anti-collision strobe lights
                                                </p>
                                            </li>
                                            <li>
                                                <p>RFID and GSM SIM Card/ NPNT compliant for APP based real time tracking</p>
                                            </li>
                                            <li>
                                                <p>Fire resistant identification plate inscribed with UIN
                                                </p>
                                            </li>
                                            <li>
                                                <p>Flight Controller with flight data logging capacity.</p>
                                            </li>
                                            <li>
                                                <p>SSR transponder (Mode ‘C’ or ‘S’) or ADS-B OUT equipment</p>
                                            </li>
                                            <li>
                                                <p>Barometric equipment with capability for remote sub-scale setting
                                                </p>
                                            </li>
                                            <li>
                                                <p>Geo-fencing capability
                                                </p>
                                            </li>
                                            <li>
                                                <p>Detect and Avoid capability
                                                </p>
                                            </li>
                                        </ol>
                                    </div>
                                </li>
                                <li className="accordion-item" data-accordion-item>
                                    <a href="#" className="accordion-title">
                                        38. What is an SOP?
                                    </a>
                                    <div className="accordion-content" data-tab-content>
                                        <p>SOP or standard operating procedure is a catalogue of procedures that is
                                            agreed between prospective UAOP holder and DGCA for safe operation of drones in
                                            India.
                                        </p>
                                    </div>
                                </li>
                                <li className="accordion-item" data-accordion-item>
                                    <a href="#" className="accordion-title">
                                        39. What is the visual line of sight for flying a drone?
                                    </a>
                                    <div className="accordion-content" data-tab-content>
                                        <p>Generally 450m (unaided) in Visual Meteorological Conditions (VMC) with a
                                            minimum ground visibility of 5 km.
                                        </p>
                                    </div>
                                </li>
                                <li className="accordion-item" data-accordion-item>
                                    <a href="#" className="accordion-title">
                                        40. I am a wedding photographer and I have a micro drone. Most of the marriages
                                        in Northern India happen after sunset. Can I use my drone for covering marriages
                                        at night?
                                    </a>
                                    <div className="accordion-content" data-tab-content>
                                        <p>All drone operations are restricted to day light and within visual line of
                                            sight. However, if you are shooting in well-lit enclosed premises using micro
                                            drone upto 200 ft. AGL is allowable. Ensure your drone is NPNT compliant and
                                            issued with UIN. Also, you need to inform local police before flying.
                                        </p>
                                        <p>Ensure that you follow Do’s and Don’ts and respect individuals’ privacy.
                                        </p>
                                    </div>
                                </li>
                                <li className="accordion-item" data-accordion-item>
                                    <a href="#" className="accordion-title">
                                        41. I have a Nano drone, should I also intimate local police each time before I
                                        fly?
                                    </a>
                                    <div className="accordion-content" data-tab-content>
                                        <p>No. But there is no harm in keeping your local police office informed. In
                                            addition, please go through Do’s and Don’ts before flying your Nano drone each
                                            time.
                                        </p>
                                    </div>
                                </li>
                                <li className="accordion-item" data-accordion-item>
                                    <a href="#" className="accordion-title">
                                        42. Can I use my small drone for agricultural purpose?
                                    </a>
                                    <div className="accordion-content" data-tab-content>
                                        <p>RPAS can be used for agricultural purpose except for the purpose of spraying
                                            pesticides until specifically cleared.
                                        </p>
                                    </div>
                                </li>
                                <li className="accordion-item" data-accordion-item>
                                    <a href="#" className="accordion-title">
                                        43. I have developed a drone that can carry passenger, where can I test it?</a>
                                    <div className="accordion-content" data-tab-content>
                                        <p>Carriage of explosives, animal or human payload are not allowed at this
                                            instance. Nevertheless, you can test your drones with dummy on any of the test
                                            sites specified in the CAR.
                                        </p>
                                    </div>
                                </li>
                                <li className="accordion-item" data-accordion-item>
                                    <a href="#" className="accordion-title">
                                        44. What are no-drone zones?
                                    </a>
                                    <div className="accordion-content" data-tab-content>
                                        <p>Areas over which flying a drone is prohibited/ restricted. Please go through
                                            the list of nodrone zones in Civil Aviation Requirements.
                                        </p>
                                    </div>
                                </li>
                                <li className="accordion-item" data-accordion-item>
                                    <a href="#" className="accordion-title">
                                        45. What is the minimum distance to fly drones from the border areas?</a>
                                    <div className="accordion-content" data-tab-content>
                                        <p>You need to keep at least 25 km distance from international border which
                                            includes Line of Control (LoC), Line of Actual Control (LAC) and Actual Ground
                                            Position Line (AGPL).</p>
                                    </div>
                                </li>
                                <li className="accordion-item" data-accordion-item>
                                    <a href="#" className="accordion-title">46. What if I require to fly over a no-drone
                                        zone for a genuine purpose? How do I obtain special authorisation for the same?
                                    </a>
                                    <div className="accordion-content" data-tab-content>
                                        <p>Flying drone over no-drone zone is prohibited. However, DGCA may authorize
                                            such operations on case-to-case basis subject to approval of MoD.
                                        </p>
                                    </div>
                                </li>
                                <li className="accordion-item" data-accordion-item>
                                    <a href="#" className="accordion-title">47. What if I want to test my drone that
                                        built for night operation and beyond meteorological conditions, will I be
                                        permitted by DGCA?
                                    </a>
                                    <div className="accordion-content" data-tab-content>
                                        <p>DGCA may authorise such operation on case-to-case basis subject to adequate
                                            justification is provided by you for safe conduct of RPAS operation. Please
                                            note, DGCA may impose additional conditions for permitting such operations.
                                        </p>
                                        <p>In addition, you may test your drone in the test sites specified in the Civil
                                            Aviation Requirements.
                                        </p>
                                    </div>
                                </li>
                                <li className="accordion-item" data-accordion-item>
                                    <a href="#" className="accordion-title">48. What is the minimum amount of insurance should I require for my drone?
                                    </a>
                                    <div className="accordion-content" data-tab-content>
                                        <p>DGCA has not stipulated any requirement on minimum amount of insurance for
                                            any category of drone. It should be of an adequate amount to cover the risks,
                                            damages or other factors that is posed by operation of drone. Further, it is an
                                            agreement between the insurance company and you (the policy holder).
                                        </p>
                                    </div>
                                </li>
                                <li className="accordion-item" data-accordion-item>
                                    <a href="#" className="accordion-title">49. What will be the enforcement action on
                                        violation of the rules and regulations for drones?
                                    </a>
                                    <div className="accordion-content" data-tab-content>
                                        <p>In case of violation of the rules and regulations for drones, the UIN/UAOP
                                            issued by DGCA shall be suspended/cancelled.
                                        </p>
                                        <p>Violation of compliance to any of the requirements and falsification of
                                            records/documents shall attract penal action including imposition of penalties
                                            as per applicable IPCs (such as 287, 336, 337, 338 or any relevant section of
                                            IPC) or Aircraft Act 1934 or Aircraft Rules 1937 or any statutory provisions.
                                        </p>
                                    </div>
                                </li>
                                <li className="accordion-item" data-accordion-item>
                                    <a href="#" className="accordion-title">50. Where can I lodge my grievance regarding Drones?</a>
                                    <div className="accordion-content" data-tab-content>
                                        <p>You can lodge your grievance in
                                            <a href="http://www.pgportal.gov.in" target="_blank">www.pgportal.gov.in</a>
                                        </p>
                                    </div>
                                </li>
                                <li className="accordion-item" data-accordion-item>
                                    <a href="#" className="accordion-title">51. Where do I file flight plan? What is the procedure for filing flight plan?
                                    </a>
                                    <div className="accordion-content" data-tab-content>
                                        <p>You can file flight plan online through Digital Sky Platform. Procedure for
                                            filing flight plan is available in Digital Sky Manual. The link for the Digital
                                            Sky Platform/ Manual shall be available in Homepage of DGCA website
                                            www.dgca.nic.in, and it will be operational from 1st December, 2018.</p>
                                    </div>
                                </li>
                                <li className="accordion-item" data-accordion-item>
                                    <a href="#" className="accordion-title">52. Whats the point of contact in WPC & DGFT?
                                    </a>
                                    <div className="accordion-content" data-tab-content>
                                      <p><strong>For import:</strong><br>Sh. S. P. Roy, Joint DGFT, DGFT, <br>Phone: <a href="tel:+9101123062240">011-2306 2240</a><br>Email: <a href="mailto:shyama.roy@nic.in">shyama.roy@nic.in</a></p>
                                      <p><strong>For ETA:</strong><br>Sh. Bhagirath, Sr. DWA, WPC, DoT, <br>Phone: <a href="tel:+9101123731488">011-2373 1488</a> <br>Email: <a href="mailto:bhagirath.32@gov.in">bhagirath.32@gov.in</a></p>
                                    </div>
                                </li>
                            </ul>



                            <br>
                            <br>
                            <h2>Officers incharge for more questions:</h2>
                            <ul>
                              <li>
                                <strong>For Operations:</strong><br>
                                Capt. Amit Garg, Senior Flight Operations Inspector, FSD <br>(M) 9717900923, <br>e-mail ID: amitg.dgca@nic.in<br><br>
                              </li>
                              <li>
                                <strong>For Import and Local acquisition of RPAS:</strong><br>
                                Sh. Pramod Nagare- Assistant Director (Ops)<br>(M) 9892066343, <br>email-Id: pramod.dgca@nic.in<br><br>
                              </li>
                              <li>
                                <strong>For issuance of  UIN:</strong><br>
                                Sh. Vishav Raj Meena- Asst. Director (Airworthiness) <br>(M) 9968414272, <br>e-mail ID: vishavraj.dgca@nic.in<br><br>
                              </li>
                              <li>
                                <strong>For issuance of UAOP, design certification:</strong><br>
                                Sh. K. Thulasiraman- Deputy Director (AE)<br>(M) 9999910195, <br>e-mail ID: thulasiraman.dgca@nic.in<br><br>
                              </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            < div className = "clearfix" > </div>
        </div>
        );
    }
}

export default FaqPage;
