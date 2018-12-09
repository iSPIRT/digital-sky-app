import React from 'react';

import locationImg from '../img/temp/d1.jpg';

class DashBoardOperatorDroneView extends React.Component {

    constructor(props) {
        super(props);
        this.operatorDronesMarkup = this.operatorDronesMarkup.bind(this);
        this.getRedirectlink = this.getRedirectlink.bind(this);
    }

    getRedirectlink(id) {
        return "/operatorDrone?id=" + id ;
    }

    operatorDronesMarkup(operatorDrones) { 
        
        const style =  { backgroundImage: 'url("'+locationImg+'")' };

        return operatorDrones.map((operatorDrone) => {
            return <div className="drones-wrap">
                        <a className="wrap" style={style} href= { this.getRedirectlink(operatorDrone.id)}>
                            <p>{operatorDrone.droneType.modelName}</p>
                        </a>
                    </div>
        })
    }

    render() {
        const {operatorDrones} = this.props;
        if(!operatorDrones) return null;
        if(operatorDrones.length < 1){
            return  <div className="drone no-data">
                        <p>Once you're registered your RPAS through your manufacturer, you will see it appear here automatically. Post that, you may apply on Digital Sky for receiving your UIN and permission to fly. Please contact your manufacturer for further details.</p>
                        <a className="button disabled">Apply now</a>
                    </div>;
        } 
        return  (
            <div  className="drones-wrap">
                {this.operatorDronesMarkup(operatorDrones)}
            </div>
        );
    }
}

export default DashBoardOperatorDroneView;