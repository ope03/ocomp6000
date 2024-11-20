"use client"; // Enable Client Components

import { useState } from 'react';

export default function HomePage () {
  const [markingCriteria, setMarkingCriteria] = useState(1);
  const [markingCategories, setMarkingCategories] = useState(1);
  const [overallMarks, setOverallMarks] = useState(10);

  const [info, setInfo] = useState("");

  const handleMouseEnter = (message) => setInfo(message);
  const handleMouseLeave = () => setInfo("");

  return (
    <div className="container">
      {/* Sidebar Menu */}
      <nav className="menu">
        <ul>
          <li><a href="#"><img src="/images/image3.png" alt="plus" className="plus" /></a></li>
        </ul>
        <h2>Menu</h2>
        <ul>
          <li><a href="#"><img src="/images/image1.png" alt="Home" className="menu-icon" />Home</a></li>
          <li><a href="#"><img src="/images/image1.png" alt="Mark Schemes" className="menu-icon" />Mark Schemes</a></li>
          <li><a href="#"><img src="/images/image1.png" alt="FAQ" className="menu-icon" />FAQ</a></li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <h1 className="title">Rubric Generator</h1>

        {/* Form Section for Rubric Setup and Assignment Content */}
        <div className="form-layout">
          <div className="form-container">
            {/* Rubric Setup Section (Left Column) */}
            <section className="rubric-setup">
              <h2 className="subheading">Insert Rubric Details</h2>

              <form>
                <div className="form-group">
                  <label htmlFor="markingCriteria">Number of Marking Criteria</label>
                  <button type="button" onMouseEnter={() => handleMouseEnter("How many 'vertical' drop down criterias do you want for your marking criteria")} onMouseLeave={handleMouseLeave}>Info</button>
                  <input
                    type="number"
                    id="markingCriteria"
                    value={markingCriteria}
                    min="1"
                    max="5"
                    onChange={(e) => setMarkingCriteria(e.target.value)}
                  />
                  <p>{info}</p>
                </div>

                <div className="form-group">
                  <label htmlFor="markingCategories">Number of Marking Categories</label>
                  <button type="button" onMouseEnter={() => handleMouseEnter("How many 'Horizontal' categories do you want for your marking criteria")} onMouseLeave={handleMouseLeave}>Info</button>
                  <input
                    type="number"
                    id="markingCategories"
                    value={markingCategories}
                    min="1"
                    max="5"
                    onChange={(e) => setMarkingCategories(e.target.value)}
                  />
                  <p>{info}</p>
                </div>

                <div className="form-group">
                  <label htmlFor="overallMarks">Overall Marks</label>
                  <button type="button" onMouseEnter={() => handleMouseEnter("How many total marks for the assignment?")} onMouseLeave={handleMouseLeave}>Info</button>
                  <input
                    type="number"
                    id="overallMarks"
                    value={overallMarks}
                    min="1"
                    onChange={(e) => setOverallMarks(e.target.value)}
                  />
                  <p>{info}</p>
                </div>
              </form>
            </section>

            {/* Assignment Content Section (Right Column) */}
            <section className="assignment-content1">
              <h2 className="assignment">Assignment Content & Details</h2>
              <textarea className="assignment-content" placeholder="Assignment Content *"></textarea>
            </section>
          </div>
        </div>
      </main>

      <style jsx>{`
        /* Main Styles */
        body {
          background-color: #ddace3;
          font-family: "Roboto", sans-serif;
        }

        .title {
          font-weight: bold;
          font-size: 50px;
          color: #000000;
          text-align: center;
          margin-bottom: 20px;
        }

        .subheading {
          font-weight: bold;
          color: #000000;
          font-size: 24px;
          margin-bottom: 10px;
        }
        
        .assignment {
          font-weight: bold;
          color: #000000;
          font-size: 24px;
          margin-bottom: 10px;
          margin-left: 60px;
        }
        
        .form-group {
          color: #000000;
          font-size: 18px;
          margin-bottom: 30px;
          margin-top: 70px;
        }

        button {
          font-size: 10px;
          color: white;
          background-color: pink; 
          padding: 5px 10px;
          border: none;
          border-radius: 2px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        button:hover {
          background-color: rgb(196, 54, 78); 
        }

        input[type="number"], textarea {
          font-size: 14px;
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 4px;
          width: 100%;
          box-sizing: border-box;
          margin-bottom: 20px;
        }

        textarea {
          height: 100px;
        }

        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }

        .form-layout {
          width: 1200px; /*max width*/
          margin: 0 auto;
          padding: 20px;
          background-color: #ffffff;
          border-radius: 8px;
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
          display: flex;
        }

        /* Menu Style */
        .menu {
          width: 200px;
          height: 600px;
          background-color: #ddace3;
          padding: 20px;
          border-radius: 8px;
          margin-right: 20px;
          margin-top: 50px;
        }

        .menu h2 {
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 20px;
          margin-left: 40px;
        }

        .menu ul {
          list-style-type: none;
          padding: 0;
        }

        .menu ul li {
          margin-bottom: 15px;
        }

        .menu ul li a {
          text-decoration: none;
          color: #000000;
          font-size: 12px;
          transition: color 0.3s ease;
          display: flex;
          align-items: center;
        }

        .menu ul li a:hover {
          color: #ff4747;
        }

        .menu-icon {
          width: 30px;
          height: 30px; 
          margin-right: 10px; 
          border-radius: 60%;
        }

        .plus {
          width: 50px;
          height: 50px; 
          margin-right: 10px; 
          border-radius: 70px;
          border: 2px solid #000000;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 40px;
          margin-top: 10px;
        }
      `}</style>
    </div>
  );
};

