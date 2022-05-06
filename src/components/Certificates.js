import React from "react";
import { ImCloudDownload } from "react-icons/im";

const Certificates = ({ data }) => {
  if (data) {
    var itemPDF = data.certificates.frontEnd.map((item, index) => {
      return (
        <div className="section-item btn-effect-1" key={index}>
          <div className="item-title">{item.title}</div>
        </div>
      );
    });
  }
  return (
    <div>
      <section className="section">
        <h1>Certificates & Curriculum Vitae</h1>
        <div className="section-list">{itemPDF}</div>
        <div className="section-container">
          <div class="btn-effect-1 section-item-download">
            <a href="#contact-id" className="item-hide">
              Download
            </a>
            <ImCloudDownload className="item-icon" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certificates;
