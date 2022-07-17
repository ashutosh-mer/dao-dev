import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles/header.css";
import "./styles/style.css";
import "./styles/media.css";
import RouterInfo from "./components/RouterInfo";
function App() {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div className="App">
      <RouterInfo />
    </div>
  );
}

export default App;
