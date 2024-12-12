import { useState } from "react";

const images = [
  "/images/1.png",
  "/images/2.png",
  "/images/3.png",
  "/images/4.png",
  "/images/5.png",
];
const ImageSlider = () => {
  const [imageNo, setImageNo] = useState(0);
  console.log(imageNo);
  if (imageNo === images.length - 1) {
  }
  const handleNext = () => {
    if (imageNo < images.length - 1) {
      setImageNo((imageNo) => imageNo + 1);
    } else {
      alert("end of next, no more images");
    }
    console.log(imageNo);
    //disable the next button on raching length of the array
  };
  const handlePrev = () => {
    if (imageNo > 0) setImageNo((imageNo) => imageNo - 1);
    else alert("end of prev, nothing in back");
  };

  return (
    <div>
      {/* <img style={{ width: "500px", height: "auto" }} src={images[1]}></img> */}
      <div className="flex justify-around">
        <button onClick={handlePrev}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
      <img
        style={{ width: "500px", height: "auto" }}
        src={images[imageNo]}
      ></img>
    </div>
  );
};
export default ImageSlider;

//learnings
//1. using public folder images(assest didn't work for me)
