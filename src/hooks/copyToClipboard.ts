import { useCallback, useState } from "react";

export const useCopyToClipboard = () => {
	const [copiedText, setCopiedText] = useState<string | null>(null);

	const onCopyToClipboard = useCallback((text: string, label: string) => {
		navigator.clipboard.writeText(text).then(() => {
			setCopiedText(label);
			setTimeout(() => setCopiedText(null), 2000);
		});
	}, []);
	return { copiedText, setCopiedText, onCopyToClipboard };
};
