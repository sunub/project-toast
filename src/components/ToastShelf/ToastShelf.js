import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastProvider } from "../ToastContext/ToastContext";

function ToastShelf() {
	const { toastContent } = React.useContext(ToastProvider);

	return (
		<ol className={styles.wrapper}>
			{toastContent.size > 0 && (
				<>
					{[...toastContent.values()].map(({ message, variant }) => (
						<li key={message} className={styles.toastWrapper}>
							<Toast variant={variant} message={message} />
						</li>
					))}
				</>
			)}
		</ol>
	);
}

export default ToastShelf;
