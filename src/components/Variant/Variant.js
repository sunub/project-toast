import React from "react";
import VariantInput from "./VariantInput";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function Variant({ styles }, ref) {
	const [variant, setVariant] = React.useState("");

	React.useEffect(() => {
		console.log("Variant is rendered");
	}, []);

	React.useEffect(() => {
		ref.current = variant;
	}, [variant, ref]);

	return (
		<>
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
		</>
	);
}

export default React.forwardRef(Variant);
