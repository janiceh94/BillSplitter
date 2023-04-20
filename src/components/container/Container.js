import styles from "./Container.module.css";
import Bill from "../bill/Bill";
import Tip from "../tip/Tip";
import People from "../people/People";

export default function Container(){
    return (
        <div className={styles.container}>
            <div>
                <Bill/>
                <Tip/>
                <People/>
            </div>
            <div>

            </div>
        </div>
    )
}