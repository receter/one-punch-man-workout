import styles from './styles.module.css';

export function ExerciseControls({ onClickAdd }) {
  return <div className={styles.exerciseControls}>
    <div className={styles.groupAdd}>
      <button onClick={() => onClickAdd(-1)}>-1</button>
      <button onClick={() => onClickAdd(-5)}>-5</button>
    </div>
    <div className={styles.groupSub}>
      <button onClick={() => onClickAdd(1)}>+1</button>
      <button onClick={() => onClickAdd(5)}>+5</button>
    </div>
  </div>
}