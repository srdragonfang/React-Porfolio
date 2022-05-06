import React, { useState, useEffect } from "react";
import "./App.css";
import "./styles/index.css";
import Banner from "./components/Banner";
import Portfolio from "./components/Portfolio";
import SocialBar from "./components/SocialBar";
import Credits from "./components/Credits";
function App() {
  const [resumeData, setResumeData] = useState({});
  useEffect(() => {
    fetch("data/resumeData.json")
      .then((res) => res.json())
      .then((data) => {
        setResumeData(data);
      });
  }, []);

  return (
    <div className="App">
      <Banner />
      <Portfolio data={resumeData.portfolio} />
      <SocialBar data={resumeData.main} />
      <Credits />
    </div>
  );
}

export default App;
