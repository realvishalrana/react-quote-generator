/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import twitterIcon from "../svg/twitter.svg";

const Quotes = ({ changeColor }) => {
  const colorsArr = [
    "#4FC1FF",
    "#E8B9AB",
    "#CB769E",
    "#69995D",
    "#D2D7DF",
    "#3AA7A3",
    "#ECA400",
    "#006992",
    "#AFECE7",
    "#81F499",
    "#890620",
    "#B6465F",
    "#8ACDEA",
    "#FFB300",
  ];

  const [quote, setQuotes] = useState("title");
  const [author, setAuthor] = useState("");
  const [accentColor, setAccentColor] = useState("#4FC1FF");

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = () => {
    let url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        let dataQuotes = data.quotes;
        let randomNum = Math.floor(Math.random() * dataQuotes.length);
        let randomQuote = dataQuotes[randomNum];
        let randomColorNum = Math.floor(Math.random() * colorsArr.length);
        let randomColor = colorsArr[randomColorNum];
        setQuotes(randomQuote.quote);
        setAuthor(randomQuote.author);
        setAccentColor(randomColor);
        changeColor(randomColor);
      });
  };

  const handleClick = () => {
    getQuote();
  };

  return (
    <div id="quote-box">
      <div id="text" style={{ color: accentColor }}>
        <p>{quote}</p>
        <div id="author">
          <p>{author}</p>
        </div>
      </div>

      <div id="buttons">
        <div className="social-media">
          <a
            href={`https://twitter.com/intent/tweet?text=${quote}-${author}&hashtags=quote`}
            id="twek-quote"
            target="_blank"
            rel="noreferrer"
          >
            <span>
              <img src={twitterIcon} alt="" />
            </span>
          </a>
        </div>
        <button onClick={handleClick} id="new-quote">
          New Quotes
        </button>
      </div>
    </div>
  );
};

export default Quotes;
