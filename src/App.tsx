import LeftComponent from './components/LeftComponent';
import RightComponent from './components/RightComponent';
import styles from './App.module.scss';

const App = () => (
  <div className={styles.wrapper}>
    <LeftComponent />
    <RightComponent />
  </div>
);

export default App;
