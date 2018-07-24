import React from 'react';

const HeaderApplicationFormReview = (props)=> {

    let step1ClassName = "now step-1";
    let step2ClassName = "todo step-2";
    let step3ClassName = "todo step-3";

    switch (props.step) {
        case 2: 
            step1ClassName = "done step-1";
            step2ClassName = "now step-2";
            step3ClassName = "todo step-3";
            break;
        case 3:
            step1ClassName = "done step-1";
            step2ClassName = "done step-2";
            step3ClassName = "now step-3";
            break;
        default:
    }
    
    return (
        <div className="grid-container">
            <div className="grid-x grid-padding-x">
                <div className="large-12 cell">
                    <h2>Application <br/>for { props.applicationType }</h2>
                    <div className="form-steps">
                        <ul>
                            <li className={ step1ClassName }><p>Step 1</p>
                                <div className="circle"></div>
                            </li>
                            <li className={ step2ClassName }><p>Step 2</p>
                                <div className="circle"></div>
                            </li>
                            <li className={ step3ClassName }><p>Step 3</p>
                                <div className="circle"></div>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* <div className="large-12 cell" >
                    <label>Review your application</label>
                </div> */}
            </div>
        </div>
    );
}

export default HeaderApplicationFormReview 