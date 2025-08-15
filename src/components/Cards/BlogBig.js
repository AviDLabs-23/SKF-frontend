import React from "react";
import { Link } from "react-router-dom";
import "./blog.css";

const BlogBig = ({ name, author, subtitle, image, date, link }) => {
  return (
    <div className="editors-section d-flex flex-wrap">
      <div className="mob-full-w" style={{ width: "50%" }}>
        <div className="big-blog-card-title">{name}</div>
        <div className="my-2">
          <div
            className="blog-card-sub-text"
            style={{ fontSize: "24px", fontWeight: "600" }}
          >
            {author}
          </div>
          <div
            className="blog-card-sub-text"
            style={{ fontSize: "24px", fontWeight: "600" }}
          >
            {date}
          </div>
        </div>
        <div className="my-4" style={{ paddingRight: "1rem" }}>
          {subtitle}
        </div>
        <Link
          to={`/blog?title=${link}`}
          style={{ textDecoration: "none", color: "cyan" }}
          className="fw-bold"
        >
          {"READ MORE"}
        </Link>
      </div>
      <div className="mob-full-w my-auto" style={{ width: "50%" }}>
        <img
          src={image}
          alt="something"
          width="100%"
          style={{ borderRadius: "20px 0 20px 0" }}
        />
      </div>
    </div>
  );
};

export default BlogBig;
