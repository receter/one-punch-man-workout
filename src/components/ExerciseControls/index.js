import styles from './styles.module.css';

export function ExerciseControls({ onClickAdd }) {
  return <div className={styles.exerciseControls}>
    <div className={styles.groupAdd}>
      <button onClick={(e) => onClickAdd(e, -1)}>-1</button>
      <button onClick={(e) => onClickAdd(e, -5)}>-5</button>
    </div>
    <div className={styles.groupSub}>
      <button onClick={(e) => onClickAdd(e, 1)}>+1</button>
      <button onClick={(e) => onClickAdd(e, 5)}>+5</button>
    </div>
  </div>
}