// https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
export function numberWithCommas(x: number | string) {
	return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
}

export function shortenString(str: string, length: number) {
	if (str.length <= length) return str;
	return str.substring(0, length) + '...';
}
