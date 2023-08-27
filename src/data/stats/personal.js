import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1996-09-06T22:48:00.000Z');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'countries',
    label: 'Countries visited',
    value: 2,
    link:
      'https://www.google.com/maps/d/u/0/edit?mid=186kQvYReH6YeAygnc_Ml2e1-dBd_PaY&ll=35.43580747970653%2C-116.64642525&z=5',
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Santa Ana, CA',
  },
];

export default data;
