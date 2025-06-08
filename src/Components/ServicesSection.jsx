import React from "react";

const ServicesSection = ({ serviceImages, openImageModal }) => {
  return (
    <div className="card mb-5">
      <div className="card-header">
        <h3 className="mb-0">Our Services</h3>
      </div>
      <div className="card-body">
        <div className="mb-4">
          <h6 className="fw-semibold mb-3">Services Offered:</h6>
          <div className="row">
            <div className="col-md-6">
              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <i className="fas fa-snowflake text-primary me-2"></i>
                  <strong>AC Services:</strong> Split, Window, Central AC
                </li>
                <li className="mb-2">
                  <i className="fas fa-tint text-primary me-2"></i>
                  <strong>Water Purifiers:</strong> Installation & Repair
                </li>
                <li className="mb-2">
                  <i className="fas fa-tshirt text-primary me-2"></i>
                  <strong>Washing Machines:</strong> All brands
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <i className="fas fa-blender text-primary me-2"></i>
                  <strong>Refrigerators:</strong> Domestic & Commercial
                </li>
                <li className="mb-2">
                  <i className="fas fa-running text-primary me-2"></i>
                  <strong>Treadmills:</strong> Electronic Repairs
                </li>
                <li className="mb-2">
                  <i className="fas fa-clipboard-check text-primary me-2"></i>
                  <strong>AMC Plans:</strong> Annual Maintenance Contracts
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h6 className="fw-semibold mb-3">Why Choose Us?</h6>
          <div className="row">
            <div className="col-md-6">
              <div className="d-flex mb-3">
                <div className="flex-shrink-0 text-primary">
                  <i className="fas fa-check-circle fa-lg"></i>
                </div>
                <div className="flex-grow-1 ms-3">
                  <h6 className="fw-semibold mb-1">Certified Technicians</h6>
                  <p className="text-body-secondary mb-0">
                    All technicians undergo rigorous training and certification
                  </p>
                </div>
              </div>
              <div className="d-flex mb-3">
                <div className="flex-shrink-0 text-primary">
                  <i className="fas fa-check-circle fa-lg"></i>
                </div>
                <div className="flex-grow-1 ms-3">
                  <h6 className="fw-semibold mb-1">Genuine Parts</h6>
                  <p className="text-body-secondary mb-0">
                    We use only manufacturer-approved spare parts
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex mb-3">
                <div className="flex-shrink-0 text-primary">
                  <i className="fas fa-check-circle fa-lg"></i>
                </div>
                <div className="flex-grow-1 ms-3">
                  <h6 className="fw-semibold mb-1">Same-Day Service</h6>
                  <p className="text-body-secondary mb-0">
                    Emergency services available within 4 hours
                  </p>
                </div>
              </div>
              <div className="d-flex mb-3">
                <div className="flex-shrink-0 text-primary">
                  <i className="fas fa-check-circle fa-lg"></i>
                </div>
                <div className="flex-grow-1 ms-3">
                  <h6 className="fw-semibold mb-1">Warranty</h6>
                  <p className="text-body-secondary mb-0">
                    90-day service warranty on all repairs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h6 className="fw-semibold mb-3">Service Gallery:</h6>
          <div className="image-scroller">
            <div className="image-scroller-inner">
              {[...serviceImages, ...serviceImages].map((image, index) => (
                <img
                  key={`${image.src}-${index}`}
                  src={image.src}
                  alt={image.alt}
                  className="rounded-3 cursor-pointer"
                  style={{
                    width: "200px",
                    height: "150px",
                    objectFit: "cover",
                  }}
                  onClick={() => openImageModal(image.src)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
