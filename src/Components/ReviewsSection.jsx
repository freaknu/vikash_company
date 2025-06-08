import { useState } from "react";
import React from "react";

const ReviewsSection = () => {
  const [comments] = useState([
    {
      name: "Rahul Sharma",
      comment:
        "Trinity Global provided excellent service for my split AC. The technician was professional and fixed the issue in no time. Highly recommend their services!",
      rating: 5,
      timestamp: "06/01/2025, 10:30 AM",
      service: "AC Repair",
    },
    {
      name: "Priya Singh",
      comment:
        "Quick response and efficient service for my washing machine. The owner Vikash himself followed up to ensure I was satisfied. Will definitely call them again.",
      rating: 4,
      timestamp: "06/02/2025, 2:15 PM",
      service: "Washing Machine",
    },
    {
      name: "Amit Patel",
      comment:
        "Reliable water purifier service. The team is honest about pricing and doesn't push unnecessary repairs. A rare find in Delhi's service market.",
      rating: 5,
      timestamp: "06/03/2025, 9:45 AM",
      service: "Water Purifier",
    },
    {
      name: "Sneha Verma",
      comment:
        "Good refrigerator repair service, though it took longer than expected due to part availability. The communication could be better but overall satisfactory.",
      rating: 3,
      timestamp: "06/04/2025, 4:20 PM",
      service: "Refrigerator",
    },
    {
      name: "Vikram Rao",
      comment:
        "Exceptional treadmill repair service. The technician was knowledgeable and even gave maintenance tips. Trinity Global sets the standard for appliance services.",
      rating: 5,
      timestamp: "06/05/2025, 11:00 AM",
      service: "Treadmill",
    },
  ]);

  return (
    <div className="card">
      <div className="card-header">
        <div className="d-flex justify-content-between align-items-center">
          <h3 className="mb-0">Customer Reviews</h3>
          <div className="d-flex align-items-center">
            <span className="badge bg-primary me-2">
              <i className="fas fa-star me-1"></i> 4.8/5
            </span>
            <span className="text-body-secondary small">
              Based on 127 reviews
            </span>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {comments.map((comment, index) => (
            <div key={index} className="col">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <div>
                      <h5 className="card-title mb-0">{comment.name}</h5>
                      <small className="text-body-secondary">
                        {comment.service} Service
                      </small>
                    </div>
                    <div>
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`star ${
                            i < comment.rating ? "filled" : ""
                          }`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="card-text mt-2">{comment.comment}</p>
                </div>
                <div className="card-footer bg-transparent border-top-0">
                  <small className="text-muted">{comment.timestamp}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;
