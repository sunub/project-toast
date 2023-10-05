import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastProvider } from "../context/ToastContext";

function ToastShelf() {
	const { toasts, dismissToast } = React.useContext(ToastProvider);
	console.log(toasts);
	return (
		<ol
			role="region"
			aria-label="Notification"
			aria-live="polite"
			className={styles.wrapper}
		>
			{toasts.length > 0 &&
				toasts.map(({ id, message, variant }) => (
					<li key={id} className={styles.toastWrapper}>
						<Toast
							id={id}
							variant={variant}
							message={message}
							dismissToast={dismissToast}
						/>
					</li>
				))}
		</ol>
	);
}

export default React.memo(ToastShelf);

// {[...toasts.entries()].map((id, { message, variant }) => (
// 	<li key={id} className={styles.toastWrapper}>
// 		<Toast
// 			id={id}
// 			variant={variant}
// 			message={message}
// 		/>
// 	</li>
// ))}
