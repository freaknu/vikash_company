import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const CommentModal = ({ show, onHide }) => {
  const [commentData, setCommentData] = useState({
    name: "",
    comment: "",
    rating: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCommentData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRating = (value) => {
    setCommentData((prev) => ({ ...prev, rating: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (commentData.name.trim() && commentData.comment.trim()) {
      console.log("Comment Submitted:", commentData);
      setCommentData({ name: "", comment: "", rating: 0 });
      onHide();
    }
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add Your Review</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={commentData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Rating</label>
            <div>
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`star ${
                    commentData.rating >= star ? "filled" : ""
                  }`}
                  onClick={() => handleRating(star)}
                  style={{ cursor: "pointer", fontSize: "1.5rem" }}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Your Review</label>
            <textarea
              className="form-control"
              name="comment"
              value={commentData.comment}
              onChange={handleInputChange}
              rows="3"
              required
            ></textarea>
          </div>
          <div className="d-grid gap-2">
            <Button type="submit" variant="primary">
              Submit Review
            </Button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default CommentModal;
