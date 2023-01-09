import styles from './styles.module.css'
import dayjs from 'dayjs';
import { useMemo, useState } from 'react';

export function Calendar({ daysWithData }) {

  const [today] = useState(dayjs());

  const [year, setYear] = useState(today.year());
  const [month, setMonth] = useState(today.month());

  const firstDayOfMonth = useMemo(() => {
    return dayjs(new Date(year, month, 1));
  }, [year, month]);

  const days = [];
  for (let i = 0; i < firstDayOfMonth.daysInMonth(); i++) {
    days.push({});
  }

  function handleClickNext() {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  }

  function handleClickPrev() {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  }

  const firstDayOfMonthOffset = firstDayOfMonth.day();

  return <div className={styles.calendar}>
    <button onClick={handleClickPrev}>Prev</button>
    <button onClick={handleClickNext}>Next</button>
    <div>Year: {year}</div>
    <div>Month: {month}</div>
    <div>daysInCurrentMonth: {firstDayOfMonth.daysInMonth()}</div>
    <div>firstDayOfMonthOffset: {firstDayOfMonthOffset}</div>
    <div className={styles.days}>
      <div>SU</div>
      <div>MO</div>
      <div>TU</div>
      <div>WE</div>
      <div>TH</div>
      <div>FR</div>
      <div>SA</div>
      <div></div>
      {days.map((item, key) =>
        <div
          key={key}
          style={{
            gridColumnStart: key===0 ? firstDayOfMonthOffset + 1 : undefined, // grid cols 1 based
          }}
        >
          {key + 1}
        </div>)}
    </div>
  </div>
}