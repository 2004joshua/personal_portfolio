import React from "react";
import '../styling.css';

function _button({ label, onClick, href }) {
  const handleClick = () => {
    if (href && href.endsWith('.pdf')) {
      const link = document.createElement('a'); // Create a hidden <a> element
      link.href = href; // Set the href to the provided link
      link.download = href.split('/').pop(); 
      link.click(); 
    }
    else if(href) {
      window.location.href = href; 
    }

    if(onClick) {
      onClick();
    }
  }
  return (
    <button className="_button" onClick={handleClick}>
      {label}
    </button>
  );
}

export default _button;
