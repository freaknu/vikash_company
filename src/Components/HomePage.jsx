import React, { useState } from "react";
import ProfileCard from "./ProfileCard";
import CompanyDetails from "./CompanyDetails";
import ReviewsSection from "./ReviewsSection";
import ServicesSection from "./ServicesSection";
import ServiceRequestModal from "./ServiceRequestModal";
import CommentModal from "./CommentModal";
import ImageModal from "./ImageModal";

const HomePage = () => {
  const [modalImage, setModalImage] = useState("");
  const [showServiceModal, setShowServiceModal] = useState(false);
  const [showCommentModal, setShowCommentModal] = useState(false);

  const openImageModal = (imageSrc) => {
    setModalImage(imageSrc);
  };

  const serviceImages = Array.from({ length: 17 }, (_, i) => ({
    src: `../../web_assets/serviceImages${i + 1}.jpeg`,
    alt: `Service Image ${i + 1}`,
  }));

  return (
    <div className="container">
      <style>
        {`
          .action-buttons {
            position: absolute;
            top: 20px;
            right: 20px;
            z-index: 10;
          }
          @media (max-width: 768px) {
            .action-buttons {
              position: static;
              margin-bottom: 20px;
              justify-content: center;
            }
          }
        `}
      </style>

      <div className="action-buttons d-flex gap-3">
        <button
          className="btn btn-primary btn-sm"
          onClick={() => setShowServiceModal(true)}
        >
          Request Service
        </button>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => setShowCommentModal(true)}
        >
          Add Review
        </button>
      </div>

      <div className="row gy-3 gx-5 gx-xxl-6">
        <div className="col-lg-5 col-xl-4">
          <ProfileCard openImageModal={openImageModal} />
          <CompanyDetails />
        </div>

        <div className="col-lg-7 col-xl-8">
          <ServicesSection
            serviceImages={serviceImages}
            openImageModal={openImageModal}
          />
          <ReviewsSection />
        </div>
      </div>

      <ServiceRequestModal
        show={showServiceModal}
        onHide={() => setShowServiceModal(false)}
      />
      <CommentModal
        show={showCommentModal}
        onHide={() => setShowCommentModal(false)}
      />
      <ImageModal imageSrc={modalImage} onHide={() => setModalImage("")} />
    </div>
  );
};

export default HomePage;
