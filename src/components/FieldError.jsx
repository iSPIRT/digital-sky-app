import React from 'react';


class FieldError extends React.Component {
  render() {
    const {fieldErrors, field} = this.props;

    if( fieldErrors[field] && fieldErrors[field].message ){
        return <p className="field-error-message">{ fieldErrors[field].message } </p>;
    }
    return null;
  }
}

export default FieldError;

