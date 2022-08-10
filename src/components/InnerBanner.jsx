import React from "react";

const InnerBanner = ({ title, desc }) => {
  return (
    <>
      <section className="inner-banner-wrap">
        <div className="container">
          <div className="content-block">
            <h1 className="h1 title mb-4">{title}</h1>
            <p className="desc">{desc}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default InnerBanner;
