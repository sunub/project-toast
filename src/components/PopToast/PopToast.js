import React from "react";
import Button from "../Button";

function PopToast({ styles }) {
	return (
		<>
			<div className={styles.label} />
			<div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
				<Button>Pop Toast!</Button>
			</div>
		</>
	);
}

export default PopToast;
