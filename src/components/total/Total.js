import styles from "./Total.module.css";

export default function Total(){
    return (
        <div className={styles.totalContainer}>
            <form>
                <label htmlFor="tipAmount">Tip Amount <span>/ person</span></label>
                <p>$0.00</p>
                <label htmlFor="total">
                    Total <span>/ person</span>
                </label>
                <div className={styles.resetBtn}>
                <button className={styles.btn} >RESET</button>
                </div>
            </form>
        </div>
    )
}