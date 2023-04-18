import styles from "./App.module.css";
import Container from "./components/container/Container";

export default function App(){
  return (
    <div>
      <h1 className={styles.title}>Bill Splitter</h1>
      <Container/>
    </div>
  )
}
