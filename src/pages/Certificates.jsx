import React, { useState } from "react";
import certificates from "../data/certificate";
import "./Certificates.css";

import {
  Code2,
  Database,
  GitBranch,
  GraduationCap,
  ExternalLink,
  CalendarDays,
  ShieldCheck,
  FileText,
  X,
  ChevronRight,
  Award,
} from "lucide-react";

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(
    certificates[0]
  );

  const getCertificateIcon = (type) => {
    switch (type) {
      case "java":
        return <Code2 />;

      case "spring":
        return <Code2 />;

      case "database":
        return <Database />;

      case "git":
        return <GitBranch />;

      default:
        return <Award />;
    }
  };

  const handleCertificateClick = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const handleViewCertificate = () => {
    if (!selectedCertificate?.certificateImg) return;

    window.open(
      selectedCertificate.certificateImg,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="certificates-page" id="certificates">

      {/* Background decorations */}
      <div className="certificate-glow certificate-glow-one"></div>
      <div className="certificate-glow certificate-glow-two"></div>

      <div className="certificates-container">

        {/* =========================
            SECTION HEADER
        ========================== */}

        <div className="certificates-header">

          <div className="certificate-heading-badge">
            <GraduationCap size={16} />
            <span>MY CERTIFICATIONS</span>
          </div>

          <h1>
            Certifications
            <span>.</span>
          </h1>

          <p>
            Professional certifications and achievements that reflect my
            continuous learning and technical growth.
          </p>

          <div className="certificate-heading-line"></div>

        </div>


        {/* =========================
            MAIN CONTENT
        ========================== */}

        <div className="certificates-content">

          {/* =========================
              LEFT CERTIFICATE LIST
          ========================== */}

          <div className="certificate-list">

            {certificates.map((certificate) => {

              const isActive =
                selectedCertificate?.id === certificate.id;

              return (
                <button
                  type="button"
                  key={certificate.id}
                  className={`certificate-item ${isActive ? "active" : ""
                    }`}
                  onClick={() =>
                    handleCertificateClick(certificate)
                  }
                >

                  <div
                    className={`certificate-item-icon ${certificate.icon}`}
                  >
                    {getCertificateIcon(certificate.icon)}
                  </div>


                  <div className="certificate-item-info">

                    <h3>
                      {certificate.name}
                    </h3>

                    <div className="certificate-item-meta">

                      <span>
                        {certificate.issuer}
                      </span>

                      <i>•</i>

                      <span>
                        {certificate.issueDate}
                      </span>

                    </div>

                  </div>


                  <ChevronRight
                    className="certificate-item-arrow"
                    size={21}
                  />

                </button>
              );
            })}

          </div>


          {/* =========================
              RIGHT CERTIFICATE DETAILS
          ========================== */}

          {selectedCertificate && (
            <div className="certificate-preview">

              {/* Preview Header */}

              <div className="certificate-preview-header">

                <div className="certificate-preview-title">

                  <div
                    className={`certificate-preview-icon ${selectedCertificate.icon}`}
                  >
                    {getCertificateIcon(
                      selectedCertificate.icon
                    )}
                  </div>

                  <div>

                    <div className="certificate-title-row">

                      <h2>
                        {selectedCertificate.name}
                      </h2>

                      <span className="verified-badge">
                        <ShieldCheck size={13} />
                        Verified
                      </span>

                    </div>

                    <p>
                      Issued by{" "}
                      <strong>
                        {selectedCertificate.issuer}
                      </strong>
                    </p>

                  </div>

                </div>


                {/* Close-like decoration */}
                <div className="preview-status">
                  <span></span>
                </div>

              </div>


              {/* Preview Body */}

              <div className="certificate-preview-body">

                {/* Certificate Image */}

                <div className="certificate-image-wrapper">

                  {selectedCertificate.certificateImg ? (
                    <img
                      src={selectedCertificate.certificateImg}
                      alt={`${selectedCertificate.name} certificate`}
                    />
                  ) : (
                    <div className="certificate-image-placeholder">
                      <FileText size={50} />
                      <span>
                        Certificate image not available
                      </span>
                    </div>
                  )}

                </div>


                {/* Certificate Details */}

                <div className="certificate-information">

                  {/* Issuer */}

                  <div className="certificate-info-row">

                    <div className="certificate-info-icon">
                      <GraduationCap size={18} />
                    </div>

                    <div>
                      <span>Issuer</span>
                      <strong>
                        {selectedCertificate.issuer}
                      </strong>
                    </div>

                  </div>


                  {/* Date */}

                  <div className="certificate-info-row">

                    <div className="certificate-info-icon">
                      <CalendarDays size={18} />
                    </div>

                    <div>
                      <span>Issue Date</span>
                      <strong>
                        {selectedCertificate.issueDate}
                      </strong>
                    </div>

                  </div>


                  {/* Credential ID */}

                  <div className="certificate-info-row">

                    <div className="certificate-info-icon">
                      <FileText size={18} />
                    </div>

                    <div>
                      <span>Credential ID</span>
                      <strong>
                        {selectedCertificate.credentialId}
                      </strong>
                    </div>

                  </div>


                  {/* Skills */}

                  <div className="certificate-skills">

                    <span className="skills-label">
                      Skills Covered
                    </span>

                    <div className="skills-list">

                      {selectedCertificate.skills.map(
                        (skill, index) => (
                          <span key={index}>
                            {skill}
                          </span>
                        )
                      )}

                    </div>

                  </div>


                  {/* Description */}

                  <div className="certificate-description">

                    <span>Description</span>

                    <p>
                      {selectedCertificate.description}
                    </p>

                  </div>


                  {/* Button */}

                  {/* <button
                    type="button"
                    className="view-certificate-btn"
                    onClick={handleViewCertificate}
                  >
                    <ExternalLink size={18} />

                    <span>
                      View Certificate
                    </span>

                  </button> */}

                </div>

              </div>

            </div>
          )}

        </div>


        {/* =========================
            BOTTOM TRUST STRIP
        ========================== */}

        <div className="certificate-trust-strip">

          <div className="trust-item">

            <div className="trust-icon">
              <ShieldCheck size={21} />
            </div>

            <div>
              <h4>Verified Certificates</h4>
              <p>
                Authentic learning achievements
              </p>
            </div>

          </div>


          <div className="trust-item">

            <div className="trust-icon">
              <Award size={21} />
            </div>

            <div>
              <h4>Industry Recognized</h4>
              <p>
                From trusted platforms
              </p>
            </div>

          </div>


          <div className="trust-item">

            <div className="trust-icon">
              <Code2 size={21} />
            </div>

            <div>
              <h4>Skills Validation</h4>
              <p>
                Technical knowledge demonstrated
              </p>
            </div>

          </div>


          <div className="trust-item">

            <div className="trust-icon">
              <GraduationCap size={21} />
            </div>

            <div>
              <h4>Continuous Learning</h4>
              <p>
                Always learning, always growing
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Certificates;