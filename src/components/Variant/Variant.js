import React from "react";
import VariantInput from "./VariantInput";
import { VariantProvider } from "../context/VariantContext";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function Variant({ styles }) {
	const { setVariant } = React.useContext(VariantProvider);

	return (
		<>
			<div className={styles.label}>Variant</div>
			<div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
				{VARIANT_OPTIONS.map((option) => (
					<VariantInput
						key={`variant-${option}`}
						value={option}
						onChange={(e) =>
							setVariant((newVaraint) => {
								newVaraint = e.target.value;
								return newVaraint;
							})
						}
					/>
				))}
			</div>
		</>
	);
}

export default React.memo(Variant);
