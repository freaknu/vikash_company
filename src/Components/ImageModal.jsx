import React from "react";
import { Modal } from "react-bootstrap";

const ImageModal = ({ imageSrc, onHide }) => {
  return (
    <Modal show={!!imageSrc} onHide={onHide} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Image Preview</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        <img
          src={imageSrc}
          className="img-fluid"
          alt="Preview"
          style={{ maxHeight: "70vh" }}
        />
      </Modal.Body>
    </Modal>
  );
};

export default ImageModal;
