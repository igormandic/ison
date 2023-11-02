import SimpleImageSlider from "react-simple-image-slider";
import { VscClose } from "react-icons/vsc";
import { useEffect, useRef, useState } from "react";

const ModalComponent = ({
  show,
  handleClose,
  images,
  verticalImages = false,
}) => {
  let innerWidth = window.innerWidth;
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();
  const [oldImages, setOldImages] = useState([]);
  const divRef = useRef();

  const handleClickOutside = (event) => {
    if (divRef.current && !divRef.current.contains(event.target)) {
      handleClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    let innerWidth = window.innerWidth;
    let innerHeight = window.innerHeight;
    if (verticalImages) {
      // VERTICAL
      if (innerHeight > 1500) {
        innerWidth = 1500;
      }

      if ((innerHeight / 3) * 2 > innerWidth) {
        setHeight((innerWidth * 3) / 2);
        setWidth(innerWidth);
      } else {
        setHeight(innerHeight);
        setWidth((innerHeight / 3) * 2);
      }
    } else {
      // HORIZONTAL
      if (innerWidth > 1500) {
        innerWidth = 1500;
      }

      if ((innerWidth / 3) * 2 > innerHeight) {
        setHeight(innerHeight);
        setWidth((innerHeight * 3) / 2.8);
      } else {
        setHeight((innerWidth / 3) * 2);
        setWidth(innerWidth);
      }
    }
    setOldImages(images);
  }, [images]);

  return (
    <div>
      {images === oldImages && (
        <div
          ref={divRef}
          style={{
            display: show ? "block" : "none",
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1001,
          }}
        >
          <div className="modal-close">
            <span onClick={handleClose} style={{ fontWeight: 300 }}>
              <VscClose />
            </span>
          </div>
          <SimpleImageSlider
            width={innerWidth}
            height={height}
            images={images}
            showBullets={(images.length + 4) * 21 < width * 0.9}
            showNavs
            style={{
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ModalComponent;
