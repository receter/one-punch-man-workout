import styles from './styles.module.css'
import { useState } from 'react';
import { ExerciseControls } from './components/ExerciseControls';
import dayjs from 'dayjs';

function App() {

  const [activeControlGroup, setActiveControlGroup] = useState(null);

  function handleClickExercise(id) {
    if (activeControlGroup === id) {
      setActiveControlGroup(null)
    } else {
      setActiveControlGroup(id);
    }
  }

  function handleClickAddPushUps(value) {

  }

  function handleClickAddSitUps(value) {

  }

  function handleClickAddSquats(value) {

  }

  function handleClickAddRunning(value) {

  }


  return (
    <div className={styles.app}>
      <div className={styles.exercise} onClick={() => handleClickExercise(0)}>
        <div className={styles.exerciseTitle}>push-ups</div>
        <div className={styles.exerciseValue}>0</div>
        {activeControlGroup === 0 &&
          <ExerciseControls onClickAdd={handleClickAddPushUps} />}
      </div>
      <div className={styles.exercise} onClick={() => handleClickExercise(1)}>
        <div className={styles.exerciseTitle}>sit-ups</div>
        <div className={styles.exerciseValue}>0</div>
        {activeControlGroup === 1 &&
          <ExerciseControls onClickAdd={handleClickAddSitUps} />}
      </div>
      <div className={styles.exercise} onClick={() => handleClickExercise(2)}>
        <div className={styles.exerciseTitle}>squats</div>
        <div className={styles.exerciseValue}>0</div>
        {activeControlGroup === 2 &&
          <ExerciseControls onClickAdd={handleClickAddSquats} />}
      </div>
      <div className={styles.exercise} onClick={() => handleClickExercise(3)}>
        <div className={styles.exerciseTitle}>running</div>
        <div className={styles.exerciseValue}>0</div>
        {activeControlGroup === 3 &&
          <ExerciseControls onClickAdd={handleClickAddRunning} />}
      </div>
      <div>
        Today Key: {dayjs().format('YYYY-MM-DD')}
      </div>
    </div>
  );
}

export default App;
