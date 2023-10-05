import React from "react";
import VariantInput from "./VariantInput";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function Variant({ styles, setVariant }) {
	return (
		<div className={styles.row}>
			<div className={styles.label}>Variant</div>
			<div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
				{VARIANT_OPTIONS.map((option) => (
					<VariantInput
						key={`variant-${option}`}
						value={option}
						onChange={(e) => setVariant(e.target.value)}
					/>
				))}
			</div>
		</div>
	);
}

export default React.memo(Variant);
