import "./App.css";
import Bigbox from "./Components/Bigbox";
import img1 from "./Components/rp2.jpg";
import img2 from "./Components/p1.png";
import img3 from "./Components/p2.jpg";
import img4 from "./Components/p3.jpg";

function App() {
  return (
    <div className="">
      <div className="collaborate">
        <h4>Let's Collaborate</h4>
      </div>

      <div className="servicesMainDiv">
        <Bigbox 
          title = "AI + RPA is what we do"
          description = "Future-Proof your business. Drive efficiency, profitability and deliver on customer experience"
          link = "https://www.xivtech.io./services/AIandRPAautomation"
          linktext = "AI + RPA Automation"
          image = {img1}
        />
      </div>

      <div className="servicesMainDiv">
        <Bigbox 
          title = "Make Bolder Choices"
          description = "Digital focused strategies to realize market-changing ideas"
          link = "https://www.xivtech.io./services/enterprise-apps"
          linktext = "Build Better Apps"
          image = {img2}
        />
      </div>

      <div className="servicesMainDiv">
        <Bigbox 
          title = "Innovate with Speed"
          description = "Create higher quality software, deliver on customer expectations and business goals"
          link = "https://www.xivtech.io./services/delivery-pipeline-automation"
          linktext = "DevOps"
          image = {img3}
        />
      </div>

      <div className="servicesMainDiv">
        <Bigbox 
          title = "Embrace Cloud"
          description = "With Cloud-First accelerate innovation and optimize performance"
          link = "https://www.xivtech.io./services/cloud"
          linktext = "Cloud Services"
          image = {img4}
        />
      </div>
    </div>
  );
}

export default App;
