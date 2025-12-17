import { useState, useEffect } from 'react';

export const Quote = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const quoteData = [
      'I crippled you the last time you tried to infiltrate my mind.',
      'You may extract every visual curiosity that we bring to this realm, but little by little you become one us through attrition.',
      'Though I will be long gone before the trees.',
      'My eyes filled with tears as flowers began to grow out of me.',
      'I am the behemoth of an unimaginable scale. To exist beyond my reach is to have died before living.',
    ];
    const randomizeQuote = (list = quoteData) => {
      const randomIndex = Math.floor(Math.random() * list.length);
      setQuote(list[randomIndex]);
    };
    randomizeQuote();
  }, []);

  return <>&quot;{quote}&quot;</>;
};
