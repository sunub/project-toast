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
import useEscapeKey from "../hooks/use-esacpe";

const ICONS_BY_VARIANT = {
	notice: Info,
	warning: AlertTriangle,
	success: CheckCircle,
	error: AlertOctagon,
};

function Toast({ id, variant, message, setToasts }) {
	const IconComponent = ICONS_BY_VARIANT[variant];
	const className = styles[`${variant}`];
	const deleteAllToasts = React.useCallback(() => {
		setToasts((currentValue) => (currentValue = new Map()));
	}, [setToasts]);
	useEscapeKey(deleteAllToasts);

	return (
		<div className={`${styles.toast} ${className}`}>
			<div className={styles.iconContainer}>
				<IconComponent size={24} />
			</div>
			<p className={styles.content}>
				<VisuallyHidden>{`${variant}`}</VisuallyHidden>
				{message}
			</p>
			<button
				aria-label={`${variant} message`}
				aria-live="off"
				onClick={() =>
					setToasts((prev) => {
						const newToasts = new Map(prev);
						newToasts.delete(id);
						return newToasts;
					})
				}
				className={styles.closeButton}
			>
				<X size={24} />
				<VisuallyHidden>Dismiss message</VisuallyHidden>
			</button>
		</div>
	);
}

export default Toast;
