import React, { useState, useContext } from "react";
import { Context } from "../Context";

function Image({ className, img }) {
  const { toggleFavorite } = useContext(Context);
  const [hovered, setIsHovered] = useState(false);
  const favIcon = hovered && (
    <i
      className="ri-heart-line favorite"
      onClick={() => toggleFavorite(img.id)}
    ></i>
  );
  const plusIcon = hovered && <i className="ri-add-circle-line cart"></i>;
  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={img.url} alt="" className="image-grid" />
      {favIcon}
      {plusIcon}
    </div>
  );
}

export default Image;
