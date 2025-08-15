import React from "react";
import { Link } from "react-router-dom";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import "./blog.css";

const Blog = ({ image, name, author, date, subtitle, link }) => {
  return (
    <Link to={`/blog?title=${link}`}>
      <MDBCard
        style={{
          maxWidth: "80%",
          borderRadius: "20px",
          margin: "auto",
          backgroundColor: "#F5F5DC",
        }}
      >
        <MDBRow className="g-0">
          <MDBCol md="5">
            <MDBCardImage
              src={image}
              alt={name}
              fluid
              style={{ borderRadius: "20px 0 0 20px", height: "100%" }}
              className="blog-image"
            />
          </MDBCol>
          <MDBCol md="7">
            <MDBCardBody className="p-2">
              <MDBCardTitle className="fw-bold">{name}</MDBCardTitle>
              <MDBCardText className="text-black">{subtitle}</MDBCardText>
              <MDBCardText>
                <small className="text-muted fw-bold">
                  {author}
                  <p>{date}</p>
                </small>
              </MDBCardText>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </Link>
  );
};

export default Blog;
