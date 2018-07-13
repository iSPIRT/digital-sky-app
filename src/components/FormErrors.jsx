import React from 'react';


class FormErrors extends React.Component {
  render() {
    const {errors} = this.props;

    if(!errors) return;

    const errorsMarkup = errors.map((error) =>
       <li><p className='ds-form-error'>{error}</p></li>
    );

    return (
         <div className="grid-container">
            <div className="grid-x grid-padding-x">
                <div className="large-12 cell">
                    <ul>{errorsMarkup}</ul>
                </div>
            </div>
         </div>
    );
  }
}

export default FormErrors;