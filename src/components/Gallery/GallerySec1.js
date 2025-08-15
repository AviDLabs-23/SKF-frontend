import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import "./gallery.css";
import images from "./../SampleData/GalleryData";

const GallerySec1 = () => {
  return (
    <div className="App">
      {images.map((section, index) => (
        <div key={index}>
          <div className="gallery-title" id={section.tag}>
            {section.title}
          </div>

          <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
            {section.pics.map((pic, key) => (
              <a href={pic.image} key={key}>
                <img
                  key={pic.id}
                  alt={pic.text}
                  src={pic.image}
                  className="gallery-img"
                />
              </a>
            ))}
          </LightGallery>
        </div>
      ))}
    </div>
  );
};

export default GallerySec1;
