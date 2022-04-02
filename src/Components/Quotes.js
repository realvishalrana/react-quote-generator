/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import twitterIcon from "../svg/twitter.svg";
import tumblrIcon from "../svg/tumblr.svg";
const Quotes = () => {
  return (
    <div id="quote-box">
      <div id="text">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit quam
          aspernatur delectus ab odio praesentium voluptatem. Dolorem libero
          ducimus quasi voluptas sit fugiat eveniet, laborum esse, deleniti
          rerum nostrum praesentium?
        </p>
        <div id="author">
          <p>Johe Doe</p>
        </div>
      </div>

      <div id="buttons">
        <div className="social-media">
          <a href="#" id="twek-quote">
            <span>
              <img src={twitterIcon} alt="" />
            </span>
          </a>
          <a href="#" id="tumlr-quote">
            <span>
              <img src={tumblrIcon} alt="" />
            </span>
          </a>
        </div>
        <button id="new-quote">New Quotes</button>
      </div>
    </div>
  );
};

export default Quotes;
