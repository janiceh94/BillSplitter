import styles from "./People.module.css";
import { BsFillPersonFill } from "react-icons/bs"

export default function people(){
    return (
        <div className={styles.spacing}>
            <form className={styles.form}>
                <label 
                    htmlFor="people"
                    className={styles.label}
                >
                    Number of People
                </label>
                <div>
                <BsFillPersonFill className={styles.personSign}/>
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