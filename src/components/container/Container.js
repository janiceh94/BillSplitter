import styles from "./Container.module.css";
import Bill from "../bill/Bill";

export default function Container(){
    return (
        <div className={styles.container}>
            <Bill/>
        </div>
    )
}