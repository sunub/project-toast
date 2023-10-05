import React from "react";
import styles from "../ToastPlayground/ToastPlayground.module.css";
import { ToastProvider } from "../context/ToastContext";

function Control({ children }) {
	const [message, setMessage] = React.useState("");
	const [variant, setVariant] = React.useState("");
	const { createToasts } = React.useContext(ToastProvider);

	function handleSubmit(e) {
		e.preventDefault();

		createToasts(message, variant);
		setMessage("");
	}

	const childrenWithProps = React.Children.map(children, (child) => {
		if (React.isValidElement(child) && child === children[0]) {
			return React.cloneElement(child, {
				message: message,
				setMessage: setMessage,
			});
		} else if (React.isValidElement(child) && child === children[1]) {
			return React.cloneElement(child, {
				setVariant: setVariant,
			});
		}
		return child;
	});
	return (
		<form
			onSubmit={(e) => handleSubmit(e)}
			className={styles.controlsWrapper}
		>
			{childrenWithProps}
		</form>
	);
}

export default Control;
