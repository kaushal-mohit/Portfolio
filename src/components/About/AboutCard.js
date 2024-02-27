import React from "react";
import Card from "react-bootstrap/Card";
import { FaStar } from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Mohit </span>
            from <span className="purple"> Punjab, India.</span>
            <br />I am a 4th year undergraduate at Chandigarh University.
            <br />
            <br />
            Some of my achievements are:
          </p>
          <ul>
            <li className="about-activity">
              <FaStar />  Max Rating 1663 in leetcode
            </li>
            <li className="about-activity">
              <FaStar /> Achieved Highest Rating of 1164 on Codeforces
            </li>
            <li className="about-activity">
              <FaStar />  Globally ranked 530 in Codechef Starters 57.

            </li>
            <li className="about-activity">
              <FaStar />  AIR 1208 in Coding Ninjas IICC Round 1
            </li>
            <li className="about-activity">
              <FaStar />  AIR 1210 in Leetcode Weekly Contest 362
            </li>
            <li className="about-activity">
              <FaStar />  AIR 1401 in Leetcode Weekly Contest 357
            </li>
            <li className="about-activity">
              <FaStar />   Received an award from Chandigarh University for being the
NPTEL Topper in Software Testing course
            </li>
            {/* <li className="about-activity">
              <FaStar /> Global Rank 156 in Codeforces Round 875 (Div. 2)
            </li>
            <li className="about-activity">
              <FaStar /> Global Rank 527 in Codeforces Round 865 (Div. 2)
            </li>
            <li className="about-activity">
              <FaStar /> Achieved Highest Rating of 2029 (5 Star) on <a className="purple" style={{ "textDecoration": "none" }} href="https://www.codechef.com/users/shivambhadani" target={"_blank"}>CodeChef</a>
            </li>
            <li className="about-activity">
              <FaStar /> Global Rank 617 (India Rank 411) in Google Kickstart Round G 2022
            </li>
            <li className="about-activity">
              <FaStar /> Global Rank 778 (India Rank 512) in Google Kickstart Round F 2022
            </li> */}
            {/* <li className="about-activity">
              <FaStar />  Guardian (Max Rating 2315) in <a className="purple" style={{ "textDecoration": "none" }} href="https://leetcode.com/shivambhadani/" target={"_blank"}>leetcode</a>
            </li> */}
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
