import { useState } from 'react';
import { useColor } from '../../hooks/useColor';
import styles from './LeftComponent.module.scss';

const LeftComponent = () => {
  const [colorIn, setColorIn] = useState <string | undefined>('');

  const color = useColor(colorIn);
  return (
    <section className={styles.wrapper}>
      <h2>Left Side Component</h2>
      <input
        style={{ color }}
        type="text"
        value={colorIn}
        onChange={e => setColorIn(e.target.value)}
        placeholder="try inputting a rainbow color"
      />
    </section>
  );
};

export default LeftComponent;
