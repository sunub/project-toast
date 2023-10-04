import React from "react";
import {
	AlertOctagon,
	AlertTriangle,
	CheckCircle,
	Info,
	X,
} from "react-feather";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";
import { ToastProvider } from "../ToastContext/ToastContext";

const ICONS_BY_VARIANT = {
	notice: Info,
	warning: AlertTriangle,
	success: CheckCircle,
	error: AlertOctagon,
};

function Toast({ variant, message }) {
	const IconComponent = ICONS_BY_VARIANT[variant];
	const { toastContent, setToastContent } = React.useContext(ToastProvider);
	const className = styles[`${variant}`];

	return (
		<div className={`${styles.toast} ${className}`}>
			<div className={styles.iconContainer}>
				<IconComponent size={24} />
			</div>
			<p className={styles.content}>{message}</p>
			<button
				onClick={() => {
					const prev = new Map(toastContent);
					prev.delete(message);
					setToastContent(prev);
				}}
				className={styles.closeButton}
			>
				<X size={24} />
				<VisuallyHidden>Dismiss message</VisuallyHidden>
			</button>
		</div>
	);
}

export default Toast;
