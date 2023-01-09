import styles from './styles.module.css'
import { useEffect, useState } from 'react';
import { ExerciseControls } from './components/ExerciseControls';
import dayjs from 'dayjs';
import { Calendar } from './components/Calendar';

// localStorage.clear();

function getInitalStateData() {
  const dataString = localStorage.getItem('one-punch-man-v1');
  let result = { days: [] };
  if (dataString) {
    result = JSON.parse(dataString);
  }
  return result;
}

function App() {

  const [data, setData] = useState(getInitalStateData);
  const [today] = useState(dayjs());
  const [activeControlGroup, setActiveControlGroup] = useState(null);
  const currentDayData = data.days.find(elm => elm.day === today.format('YYYY-MM-DD'));

  useEffect(() => {
    console.log('saving:', data);
    localStorage.setItem('one-punch-man-v1', JSON.stringify(data));
  }, [data])

  function handleClickExercise(id) {
    if (activeControlGroup === id) {
      setActiveControlGroup(null)
    } else {
      setActiveControlGroup(id);
    }
  }

  function updateDayData(dayKey, dayModifier) {
    const newDays = [...data.days];
    const currentDayIndex = newDays.findIndex(elm => elm.day === dayKey);

    if (currentDayIndex === -1) {
      // Create day in array
      const newDay = { day: today.format('YYYY-MM-DD') };
      newDays.push(dayModifier(newDay));
    } else {
      // Cool day is already here, modify it
      newDays.splice(currentDayIndex, 1, dayModifier(newDays[currentDayIndex]));
    }

    setData({ ...data, days: newDays });
  }

  function handleClickAddPushUps(e, value) {
    e.stopPropagation();
    updateDayData(today.format('YYYY-MM-DD'), day => ({ ...day, pushUps: (day?.pushUps ?? 0) + value }))
  }

  function handleClickAddSitUps(e, value) {
    e.stopPropagation();
    updateDayData(today.format('YYYY-MM-DD'), day => ({ ...day, sitUps: (day?.sitUps ?? 0) + value }))
  }

  function handleClickAddSquats(e, value) {
    e.stopPropagation();
    updateDayData(today.format('YYYY-MM-DD'), day => ({ ...day, squats: (day?.squats ?? 0) + value }))
  }

  function handleClickAddRunning(e, value) {
    e.stopPropagation();
    updateDayData(today.format('YYYY-MM-DD'), day => ({ ...day, running: (day?.running ?? 0) + value }))
  }


  return (
    <div className={styles.app}>
      <div className={styles.exercise} onClick={() => handleClickExercise(0)}>
        <div className={styles.exerciseTitle}>push-ups</div>
        <div className={styles.exerciseValue}>{currentDayData?.pushUps ?? 0}</div>
        {activeControlGroup === 0 &&
          <ExerciseControls onClickAdd={handleClickAddPushUps} />}
      </div>
      <div className={styles.exercise} onClick={() => handleClickExercise(1)}>
        <div className={styles.exerciseTitle}>sit-ups</div>
        <div className={styles.exerciseValue}>{currentDayData?.sitUps ?? 0}</div>
        {activeControlGroup === 1 &&
          <ExerciseControls onClickAdd={handleClickAddSitUps} />}
      </div>
      <div className={styles.exercise} onClick={() => handleClickExercise(2)}>
        <div className={styles.exerciseTitle}>squats</div>
        <div className={styles.exerciseValue}>{currentDayData?.squats ?? 0}</div>
        {activeControlGroup === 2 &&
          <ExerciseControls onClickAdd={handleClickAddSquats} />}
      </div>
      <div className={styles.exercise} onClick={() => handleClickExercise(3)}>
        <div className={styles.exerciseTitle}>running</div>
        <div className={styles.exerciseValue}>{currentDayData?.running ?? 0}</div>
        {activeControlGroup === 3 &&
          <ExerciseControls onClickAdd={handleClickAddRunning} />}
      </div>
      <div>
        Today Key: {dayjs().format('YYYY-MM-DD')}
        <Calendar />
      </div>
    </div>
  );
}

export default App;
