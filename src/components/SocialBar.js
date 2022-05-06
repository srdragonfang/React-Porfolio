import React from "react";
const SocialBar = ({ data }) => {
  if (data) {
    var socialBar = data.info.map((item, index) => {
      return (
        <div className="socialBar" id="contact-id">
          <div className="socialBar-top">
            <h3 className="socialBar-logo">{item.name}</h3>
            <div className="socialBar-list">
              <div className="socialBar-item">
                <a href={item.github}>github</a>
              </div>
              <div className="socialBar-item">
                <a href={item.instagram}>instagram</a>
              </div>
            </div>
          </div>
          <div className="socialBar-bottom flex-col">
            <p>Contact</p>
            <h3 className="email">{item.email}</h3>
          </div>
        </div>
      );
    });
  }
  return <div className="footer">{socialBar}</div>;
};

export default SocialBar;
