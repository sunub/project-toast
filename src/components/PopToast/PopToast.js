import React from "react";
import Button from "../Button";

function PopToast({ styles, toggleIsToast }) {
	return (
		<>
			<div className={styles.label} />
			<div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
				<Button onClick={toggleIsToast}>Pop Toast!</Button>
			</div>
		</>
	);
}

export default PopToast;
