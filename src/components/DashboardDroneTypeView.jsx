import React from 'react';

import locationImg from '../img/temp/d1.jpg';

class DashboardDroneTypeView extends React.Component {

    constructor(props) {
        super(props);
        this.dronesMarkup = this.dronesMarkup.bind(this);
        this.getRedirectlink = this.getRedirectlink.bind(this);
    }

    getRedirectlink(id) {
        return "/droneType?id=" + id ;
    }

    dronesMarkup(droneTypes) { 
        
        const style =  { backgroundImage: 'url("'+locationImg+'")' };

        return droneTypes.map((droneType) => {
            return <div className="drones-wrap">
                        <a className="wrap" style={style} href= { this.getRedirectlink(droneType.id)}>
                            <p>{droneType.modelName}</p>
                        </a>
                    </div>
        })
    }

    render() {
        const {droneTypes} = this.props;
        if(!droneTypes) return null;
        if(droneTypes.length < 1) return <p> No Drones to Show </p>;
        return  (
            <div  className="drones-wrap">
                {this.dronesMarkup(droneTypes)}
            </div>
        );
    }
}

export default DashboardDroneTypeView;