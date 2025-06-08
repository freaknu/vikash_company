import React from "react";

const CompanyDetails = () => {
  return (
    <div className="card mb-5">
      <div className="card-header">
        <h3 className="mb-0">Company Details</h3>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-12">
            <div className="mb-4">
              <p className="fw-semibold mb-2">
                Company Name:{" "}
                <span className="text-primary">Trinity Global</span>
              </p>
              <p className="fw-semibold mb-2">
                Founded: <span className="fw-normal">2017</span>
              </p>
              <p className="fw-semibold mb-2">
                Ownership:{" "}
                <span className="fw-normal">Vikash Kumar (Proprietor)</span>
              </p>
              <p className="fw-semibold mb-2">
                Headquarters: <span className="fw-normal">Delhi, India</span>
              </p>
            </div>

            <div className="mb-4">
              <h6 className="fw-semibold mb-3">Key Partnerships:</h6>
              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <i className="fas fa-handshake text-primary me-2"></i>
                  Edunetwork PVT LTD (Rentomojo)
                </li>
                <li className="mb-2">
                  <i className="fas fa-handshake text-primary me-2"></i>
                  Multiple housing societies in Delhi NCR
                </li>
                <li className="mb-2">
                  <i className="fas fa-handshake text-primary me-2"></i>
                  Corporate clients including co-working spaces
                </li>
              </ul>
            </div>

            <div className="mb-4">
              <h6 className="fw-semibold mb-3">Management Team:</h6>
              <div className="row">
                <div className="col-md-6">
                  <p className="fw-semibold mb-1">
                    <i className="fas fa-user-tie me-2"></i>
                    Owner: <span className="fw-normal">Vikash Kumar</span>
                  </p>
                  <p className="fw-semibold mb-1">
                    <i className="fas fa-user-cog me-2"></i>
                    Manager: <span className="fw-normal">Praphul Kumar</span>
                  </p>
                </div>
                <div className="col-md-6">
                  <p className="fw-semibold mb-1">
                    <i className="fas fa-user-shield me-2"></i>
                    Supervisor: <span className="fw-normal">Satrohan Roy</span>
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h6 className="fw-semibold mb-3">Technician Team:</h6>
              <div className="row">
                <div className="col-md-6">
                  <ul className="list-unstyled mb-0">
                    <li className="fw-normal mb-1">
                      <i className="fas fa-user-hard-hat me-2"></i>
                      Ashish Kumar (AC Specialist)
                    </li>
                    <li className="fw-normal mb-1">
                      <i className="fas fa-user-hard-hat me-2"></i>
                      Lakshman Kumar (Refrigerator Expert)
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="list-unstyled mb-0">
                    <li className="fw-normal mb-1">
                      <i className="fas fa-user-hard-hat me-2"></i>
                      Kaif Khan (Washing Machine)
                    </li>
                    <li className="fw-normal mb-1">
                      <i className="fas fa-user-hard-hat me-2"></i>
                      Samim Ansari (Multi-brand)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
