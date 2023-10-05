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

function Toast({ id, variant, message, dismissToast }) {
	const IconComponent = ICONS_BY_VARIANT[variant];
	const className = styles[`${variant}`];
	useEscapeKey(() => dismissToast("all"));

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
				onClick={() => dismissToast(id)}
				className={styles.closeButton}
			>
				<X size={24} />
				<VisuallyHidden>Dismiss message</VisuallyHidden>
			</button>
		</div>
	);
}

export default Toast;
