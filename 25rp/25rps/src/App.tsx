import { useState } from "react";
import "./App.css";
import ImageSlider from "./components/ImageSlider";
import "./index.css";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-red-500">hello</div>
      <ImageSlider />
    </>
  );
}

export default App;
