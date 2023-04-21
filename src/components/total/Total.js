import styles from "./Total.module.css";

export default function Total(){
    return (
        <div className={styles.totalContainer}>
            <div className={styles.calculation}>
                <div className={styles.grid}>
                    <p className={styles.title}>Tip Amount<br/>/ person</p>
                    <p className={styles.amount}>$0.00</p>
                </div>
                <div className={styles.grid}>
                    <p className={styles.title}>Total<br/>/ person</p>
                    <p className={styles.amount}>$0.00</p>
                </div>
            </div>
            <div className={styles.resetBtn}>
            <button className={styles.btn} >RESET</button>
            </div>
        </div>
    )
}