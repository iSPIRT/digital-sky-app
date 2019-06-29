import React from "react";
import Modal from "@bit/react-bootstrap.react-bootstrap.modal";
class AlertModal extends React.Component {
  constructor(props) {
    super(props);
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
            Confirm {" " + this.props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Are you sure you want to <b>{this.props.title}</b> the application{" "}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <button
            class="button"
            onClick={() => this.props.handleConfirm(this.props.title)}
          >
            Confirm
          </button>
          <button class="button" onClick={this.props.onHide}>
            Cancel
          </button>
        </Modal.Footer>
      </Modal>
    );
  }
}
export default AlertModal;
