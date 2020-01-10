import React, { useState } from "react";

function Image({ className, img }) {
  const [hovered, setIsHovered] = useState(false);
  const favIcon = hovered && <i className="ri-heart-line favorite"></i>;
  const plusIcon = hovered && <i className="ri-add-circle-line cart"></i>;
  console.log(hovered);
  return (
    <div className={`${className} image-container`}>
      <img
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        src={img.url}
        alt=""
        className="image-grid"
      />
      {favIcon}
      {plusIcon}
    </div>
  );
}

export default Image;
