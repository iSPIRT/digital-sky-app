import React from "react";
import Modal from "@bit/react-bootstrap.react-bootstrap.modal";
class SearchByModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: "Call Sign"
    };
    this.radioChange = this.radioChange.bind(this);
  }

  radioChange(e) {
    this.setState({
      selectedOption: e.currentTarget.value
    });
  }
  render() {
    return (
      <Modal
        {...this.props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          crossOrigin="anonymous"
        />
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Search By
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="#">
            <p>
              <label>
                <input
                  value="id"
                  name="group1"
                  type="radio"
                  checked={this.state.selectedOption === "id"}
                  onChange={this.radioChange}
                />
                Call Sign
              </label>
            </p>
            <p>
              <label>
                <input
                  value="startDateTime"
                  name="group1"
                  type="radio"
                  checked={this.state.selectedOption === "startDateTime"}
                  onChange={this.radioChange}
                />ETD
              </label>
            </p>
            <p>
              <label>
                <input
                  value="ficNumber"
                  className="group1"
                  name="group1"
                  type="radio"
                  checked={this.state.selectedOption === "ficNumber"}
                  onChange={this.radioChange}
                />FIC No
              </label>
            </p>
            <p>
              <label>
                <input
                  value="adcNumber"
                  name="group1"
                  type="radio"
                  checked={this.state.selectedOption === "adcNumber"}
                  onChange={this.radioChange}
                />ADC No
              </label>
            </p>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button
            class="button"
            onClick={() =>
              this.props.handleChangeSearchBy(this.state.selectedOption)
            }
          >
            Done
          </button>
        </Modal.Footer>
      </Modal>
    );
  }
}
export default SearchByModal;
