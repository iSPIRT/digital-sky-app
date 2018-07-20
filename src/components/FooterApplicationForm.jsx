import React from 'react';

import back from '../img/back.svg';

const FooterApplicationForm = (props) => {

    return (<div className="form-footer">
            <div className="grid-container">
                <div className="grid-x grid-padding-x">
                    <div className="large-12 cell">
                        { props.step !=1 && (
                            <a className="back" onClick = { props.goBack } > 
                                <img src={ back } alt="back" /> Go back to previous step
                            </a>
                        )}
                        <button type="submit" className="button" name="button">Save &amp; Continue</button>
                    </div>
                </div>
            </div>
        </div>)
}

export default FooterApplicationForm;