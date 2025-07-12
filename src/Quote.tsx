import React from 'react';
import './Quote.css';

interface QuoteProps {
  quote: string;
  credit: string;
}

const Quote: React.FC<QuoteProps> = ({ quote, credit }) => {
  return (
    <div className="quote-container">
      <p className="quote-text">{quote}</p>
      <span className="quote-credit">{credit}</span>
    </div>
  );
};

export default Quote; 