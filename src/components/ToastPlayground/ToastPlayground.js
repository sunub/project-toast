import React from "react";

import styles from "./ToastPlayground.module.css";
import Message from "../Message";
import Variant from "../Variant";
import PopToast from "../PopToast";
import ToastShelf from "../ToastShelf/ToastShelf";
import Control from "../Control";
import { ToastContext } from "../context/ToastContext";

function ToastPlayground() {
	return (
		<div className={styles.wrapper}>
			<header>
				<img alt="Cute toast mascot" src="/toast.png" />
				<h1>Toast Playground</h1>
			</header>

			<ToastContext>
				<ToastShelf />

				<Control>
					<Message styles={styles} />
					<Variant styles={styles} />
					<PopToast styles={styles} />
				</Control>
			</ToastContext>
		</div>
	);
}

export default ToastPlayground;
