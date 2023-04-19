import styles from "./Bill.module.css";
import { MdAttachMoney } from "react-icons/md"

export default function Bill(){
    return (
        <div className={styles.spacing}>
            <form className={styles.form}>
                <label 
                    htmlFor="bill"
                    className={styles.label}
                >
                    Bill
                </label>
                <div>
                <MdAttachMoney className={styles.moneySign}/>
                <input
                    className={styles.input}
                    type="number"
                    placeholder="0"
                    pattern="^[0-9]*"
                    required
                />
                </div>
            </form>
        </div>
    )
}