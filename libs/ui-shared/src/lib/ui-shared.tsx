import styles from './ui-shared.module.css';

interface Props {
  parent: string;
}

export function UiShared(props: Props) {
  return (
    <div className={styles['container']}>
      <h1>Called from {props.parent}</h1>
    </div>
  );
}

export default UiShared;
