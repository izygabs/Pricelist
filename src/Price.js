import React, { useState } from "react";
import "../src/Price.css";

function Price() {
  const [basic, setBasic] = useState("$19.99");

  const [prof, setProf] = useState("$24.99");

  const [master, setMaster] = useState("$39.99");

  const [click, setClicked] = useState(true);

  const toggle = () => {
    setClicked(!click);

    if (basic === "$19.99" && prof === "$24.99" && master === "$39.99") {
      setBasic("$199.99");

      setProf("$249.99");

      setMaster("$399.99");
    } else {
      setBasic("$19.99");

      setProf("$24.99");

      setMaster("$39.99");
    }
  };
  return (
    <div>
      <section className="section">
        <nav className="navbar">
          <h2>Our Pricing</h2>
          <div className="togglebar">
            <p>Anually</p>
            <label className="toggle">
              <input type="checkbox" onChange={toggle} clicked></input>
              <span className="togg"></span>
            </label>
            <p>Monthly</p>
          </div>
        </nav>
        <div className="content">
          <div className="card2">
            <p>Basic</p>
            <h2 className="head">{basic}</h2>
            <p className="para">500 GB Storage</p>
            <p className="para">2 Users Allowed</p>
            <p className="para">Send up to 3 GB</p>
            <button>LEARN MORE</button>
          </div>
          <div className="card">
            <p>Professional</p>
            <h2 className="head">{prof}</h2>
            <p className="para">1 TB Storage</p>
            <p className="para">5 Users Allowed</p>
            <p className="para">Send up to 10 GB</p>
            <button>LEARN MORE</button>
          </div>
          <div className="card2">
            <p>Master</p>
            <h2 className="head">{master}</h2>
            <p className="para">2 TB Storage</p>
            <p className="para">10 Users Allowed</p>
            <p className="para">Send up to 20 GB</p>
            <button>LEARN MORE</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Price;
