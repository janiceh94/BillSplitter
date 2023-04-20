import styles from "./Container.module.css";
import Bill from "../bill/Bill";
import Tip from "../tip/Tip";
import People from "../people/People";
import Total from "../total/Total";

export default function Container(){
    return (
        <div className={styles.container}>
            <div>
                <Bill/>
                <Tip/>
                <People/>
            </div>
            <div>
                <Total/>
            </div>
        </div>
    )
}