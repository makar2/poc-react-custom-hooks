import { useEffect, useState } from 'react';

const palette: { name: string, color: string }[] = [
  { name: 'red', color: '#ff0000' },
  { name: 'orange', color: '#ffa500' },
  { name: 'yellow', color: '#ffff00' },
  { name: 'green', color: '#008000' },
  { name: 'blue', color: '#0000ff' },
  { name: 'indigo', color: '#4b0082' },
  { name: 'violet', color: '#ee82ee' },
];

export const useColor = (colorIn: string | undefined) => {
  const [color, setColor] = useState <string | undefined>('#000000');

  useEffect(() => {
    const found = palette.find(el => el.name === colorIn);
    if (found) setColor(found.color);
    else setColor('#000000');
  }, [colorIn]);
  return color;
};
