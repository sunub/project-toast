import React from "react";

import styles from "./ToastPlayground.module.css";
import Message from "../Message";
import Variant from "../Variant";
import PopToast from "../PopToast";
import { MessagetProvider } from "../context/MessageContext";
import { VariantProvider } from "../context/VariantContext";
import ToastShelf from "../ToastShelf/ToastShelf";

function ToastPlayground() {
	const [toasts, setToasts] = React.useState(new Map());
	const { message } = React.useContext(MessagetProvider);
	const { variant } = React.useContext(VariantProvider);

	function handleSubmit(e) {
		e.preventDefault();

		const newToast = {
			message: message,
			variant: variant,
		};
		setToasts((prev) => {
			const newToasts = new Map(prev);
			newToasts.set(crypto.randomUUID(), newToast);
			return newToasts;
		});
	}

	return (
		<div className={styles.wrapper}>
			<header>
				<img alt="Cute toast mascot" src="/toast.png" />
				<h1>Toast Playground</h1>
			</header>

			<ToastShelf toasts={toasts} setToasts={setToasts} />

			<form
				onSubmit={(e) => handleSubmit(e)}
				className={styles.controlsWrapper}
			>
				<div className={styles.row}>
					<Message styles={styles} />
				</div>
				<div className={styles.row}>
					<Variant styles={styles} />
				</div>
				<div className={styles.row}>
					<PopToast styles={styles} />
				</div>
			</form>
		</div>
	);
}

export default ToastPlayground;
