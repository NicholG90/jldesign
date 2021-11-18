import React from "react";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import images from "./galleryContent.js";
import { SRLWrapper } from "simple-react-lightbox";
import { Link } from "react-scroll";
import styles from "./gallery.module.css"



function Gallery() {
  
  return (
    <div>
      <SRLWrapper>
      <ResponsiveMasonry
        columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
      >
        <Masonry gutter="15px">

          {images.map((image, i) => (
                    <img key={i} src={image} style={{width: "100%", display: "block"}} alt="Portfolio Images" />
          ))}
        </Masonry>
      </ResponsiveMasonry>
      <div className={styles.topScroll}>
        <Link
            activeClass="active"
            to="header"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}

        >↑ Back to the top</Link>
      </div>
      </SRLWrapper>
    </div>
  );
}

export default Gallery;

