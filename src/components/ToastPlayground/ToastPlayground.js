import React from "react";

import styles from "./ToastPlayground.module.css";
import Message from "../Message";
import Variant from "../Variant";
import PopToast from "../PopToast";
import useToggle from "../hooks/use-toggle";
import { ToastProvider } from "../ToastContext/ToastContext";

function ToastPlayground() {
	const messageRef = React.useRef(null);
	const variantRef = React.useRef(null);
	const [isToast, toggleIsToast] = useToggle(false);
	const { setToastContent } = React.useContext(ToastProvider);

	React.useEffect(() => {
		if (messageRef.current.value !== "" && variantRef.current !== "") {
			const newToast = {
				message: messageRef.current.value,
				variant: variantRef.current,
			};
			setToastContent((prev) => {
				const newToastContent = new Map(prev);
				newToastContent.set(newToast.message, newToast);
				return newToastContent;
			});
		}
		messageRef.current.value = "";
	}, [isToast, setToastContent]);

	React.useEffect(() => {
		console.log("Playground is rendered");
	}, []);

	return (
		<div className={styles.wrapper}>
			<header>
				<img alt="Cute toast mascot" src="/toast.png" />
				<h1>Toast Playground</h1>
			</header>

			<div className={styles.controlsWrapper}>
				<div className={styles.row}>
					<Message ref={messageRef} styles={styles} />
				</div>
				<div className={styles.row}>
					<Variant ref={variantRef} styles={styles} />
				</div>
				<div className={styles.row}>
					<PopToast styles={styles} toggleIsToast={toggleIsToast} />
				</div>
			</div>
		</div>
	);
}

export default ToastPlayground;
