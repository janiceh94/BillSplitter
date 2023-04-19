import styles from "./Container.module.css";
import Bill from "../bill/Bill";
import Tip from "../tip/Tip";

export default function Container(){
    return (
        <div className={styles.container}>
            <div>
                <Bill/>
                <Tip/>
            </div>
            <div>

            </div>
        </div>
    )
}