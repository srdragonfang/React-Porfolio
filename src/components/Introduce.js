import React from "react";

const Introduce = ({ data }) => {
  if (data) {
    var bio = data.introduce.map((item, index) => (
      <p key={index}>{item.text}</p>
    ));
  }
  return (
    <section className="section introduce">
      <h1>Introduce</h1>
      {bio}
    </section>
  );
};

export default Introduce;
