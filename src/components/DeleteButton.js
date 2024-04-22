import React, { useState } from "react";
import './DeleteButton.scss';
import PropTypes from 'prop-types';

const DeleteButton = ({ onClick, children, className, onAnimationEnd }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true); // Spustí animaci
    if (onAnimationEnd) onAnimationEnd(true);
    setTimeout(() => {
      setIsAnimating(false);
      if (onAnimationEnd) onAnimationEnd(false);
      onClick(); // Volání onClick po dokončení animace
    }, 2050); // Délka animace DeleteButton
  }

  // Rozdělení textu na jednotlivá písmena pro animaci, pokud je text string
  const textSpans = children && typeof children === 'string'
    ? children.split('').map((char, index) => (
      <span key={index}>{char}</span>
    ))
    : children;

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
        <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="top">
          <path d="M15,3.75 C15.5522847,3.75 16,4.19771525 16,4.75 L16,5.75 L18.25,5.75 C18.6642136,5.75 19,6.08578644 19,6.5 C19,6.91421356 18.6642136,7.25 18.25,7.25 L5.75,7.25 C5.33578644,7.25 5,6.91421356 5,6.5 C5,6.08578644 5.33578644,5.75 5.75,5.75 L8,5.75 L8,4.75 C8,4.19771525 8.44771525,3.75 9,3.75 L15,3.75 Z" />
        </symbol>
        <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="bottom">
          <path d="M7.02498527,8.25 L16.9751371,8.25 C17.5411532,8.25 18,8.69771525 18,9.25 C18,9.2951932 17.9968602,9.34033442 17.9906022,9.3851132 L16.6878729,18.7066989 C16.6389095,19.0569074 16.4041276,19.3558931 16.0703039,19.4931212 C14.8428392,19.9977071 13.4860916,20.25 12.0000612,20.25 C10.5140229,20.25 9.1572688,19.9977044 7.92979891,19.4931132 C7.59597391,19.3558774 7.36118974,19.0568881 7.31224574,18.7066728 L6.00952014,9.3851132 C5.93304388,8.83789281 6.32568685,8.33379079 6.88651275,8.25916983 C6.93240487,8.25306363 6.97866843,8.25 7.02498527,8.25 Z" />
        </symbol>
      </svg>
      <button
        className={`${isAnimating ? "button delete " + className : "button " + className}`}
        onClick={handleClick}>
        <div className="icon">
          {/* Referencing SVG Icons */}
          <svg className="top">
            <use xlinkHref="#top" />
          </svg>
          <svg className="bottom">
            <use xlinkHref="#bottom" />
          </svg>
        </div>
        <span className="text">{textSpans}</span>
      </button>
    </>
  );
};

DeleteButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onAnimationEnd: PropTypes.func
};

export default DeleteButton;
