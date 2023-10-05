import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import useEscapeKey from "../hooks/use-esacpe";

function ToastShelf({ toasts, setToasts }) {
	return (
		<ol
			role="region"
			aria-label="Notification"
			aria-live="polite"
			className={styles.wrapper}
		>
			{toasts.size > 0 &&
				[...toasts.entries()].map((value, i) => {
					const key = value[0];
					const content = value[1];
					return (
						<li key={`${i}${key}`} className={styles.toastWrapper}>
							<Toast
								id={key}
								message={content.message}
								variant={content.variant}
								setToasts={setToasts}
							/>
						</li>
					);
				})}
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
