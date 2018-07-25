import React from 'react';

const FooterApplicationReviewDeclaration = (props) => {
    
    const date = new Date().toDateString();
    return (
        <div id="declaration">
            <div className="grid-container">
                    <div className="grid-x grid-padding-x">
                        <div className="large-12 cell">
                            <p>  UNDERTAKING  
                            The RPA shall be used only for the purpose for which it is being imported/acquired and meet the regulations contained in CAR Section 3, Series X, Part II.
                            <br/><br/>
                            RPA shall be maintained and operated in accordance with the regulation specified by DGCA from time to time and there is no binding or limitation of any kind in this regard in the lease agreement for the acquisition of the RPAS.
                            <br/><br/>
                            Certified that the information given above is correct.
                        </p>
                            <div className="meta">
                                <h5>Date: { date }  </h5>
                                <h5>Name: { props.applicant }</h5>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        )
}

export default FooterApplicationReviewDeclaration;