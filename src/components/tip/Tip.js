import styles from "./Tip.module.css";

export default function Tip(){
    return (
        <div className={styles.spacing}>
            <form className={styles.form}>
                <label
                    htmlFor="label"
                    className={styles.label}
                >
                    Select Tip %
                </label>
                <div className={styles.tips}>
                    <button
                        type="button"
                    >
                        15%
                    </button>
                    <button
                        type="button"
                    >
                        18%
                    </button>
                    <button
                        type="button"
                    >
                        20%
                    </button>
                    <button
                        type="button"
                    >
                        22%
                    </button>
                    <button
                        type="button"
                    >
                        24%
                    </button>
                    <input
                        type="number"
                        placeholder="Custom"
                    />
                </div>
            </form>
        </div>
    )
}