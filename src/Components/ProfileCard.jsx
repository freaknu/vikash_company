import React from "react";

const ProfileCard = ({ openImageModal }) => {
  return (
    <div className="card mb-5">
      <div className="card-header position-relative mb-7">
        <input className="d-none" id="upload-profile-picture" type="file" />
        <label
          className="avatar avatar-5xl status-online cursor-pointer"
          htmlFor="upload-profile-picture"
        >
          <img
            className="rounded-circle img-thumbnail shadow-sm border-0 cursor-pointer"
            src="../../web_assets/vikash_image.jpeg"
            width="250"
            alt="Profile"
            onClick={() => openImageModal("../../web_assets/vikash_image.jpeg")}
          />
        </label>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-12">
            <div className="d-flex flex-wrap mb-3 align-items-center">
              <h3 className="me-2">Vikash Kumar</h3>
              <span className="fw-normal fs-8">Founder & Owner</span>
            </div>

            <div className="d-flex align-items-center mb-3">
              <span className="badge bg-success me-2">
                <i className="fas fa-crown me-1"></i> Business Owner
              </span>
              <span className="text-body-secondary">
                <i className="fas fa-calendar-alt me-1"></i> Since 2017
              </span>
            </div>

            <p className="fw-semibold mb-0">
              About me
              <a href="#!">
                <i className="fas fa-pencil fs-10 text-body-quaternary ms-3"></i>
              </a>
            </p>
            <p className="text-body-tertiary mb-3">
              "I founded Trinity Global with a vision to provide reliable
              appliance services with transparent pricing. With 8+ years in the
              industry, we've grown from a small team to one of Mumbai's most
              trusted service providers."
            </p>

            <div className="mt-4">
              <h6 className="fw-semibold mb-2">Business Philosophy:</h6>
              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <i className="fas fa-check-circle text-success me-2"></i>
                  Customer satisfaction first
                </li>
                <li className="mb-2">
                  <i className="fas fa-check-circle text-success me-2"></i>
                  Transparent pricing
                </li>
                <li className="mb-2">
                  <i className="fas fa-check-circle text-success me-2"></i>
                  Skilled & certified technicians
                </li>
                <li className="mb-2">
                  <i className="fas fa-check-circle text-success me-2"></i>
                  Same-day service availability
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="card-footer bg-transparent">
        <h6 className="fw-semibold mb-3">Professional Milestones:</h6>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-badge bg-primary"></div>
            <div className="timeline-content">
              <h6 className="fw-semibold">Founded Trinity Global</h6>
              <p className="text-body-secondary mb-1">2017 - Present</p>
              <p className="small text-body-tertiary">
                Established full-service appliance repair company serving Delhi
                NCR
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-badge bg-success"></div>
            <div className="timeline-content">
              <h6 className="fw-semibold">Partnership with Rentomojo</h6>
              <p className="text-body-secondary mb-1">2019</p>
              <p className="small text-body-tertiary">
                Became authorized service partner for appliance repairs
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-badge bg-info"></div>
            <div className="timeline-content">
              <h6 className="fw-semibold">Expanded Service Offerings</h6>
              <p className="text-body-secondary mb-1">2021</p>
              <p className="small text-body-tertiary">
                Added water purifier and treadmill repair services
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
