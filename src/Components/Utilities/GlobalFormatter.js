import moment from "moment";

class GlobalFormatter {
	toCapitalFirstLetter = (text) => {
		return text.charAt(0).toUpperCase() + text.substring(1);
	};
	getBase64 = (img, callback) => {
		if (img) {
			const reader = new FileReader();
			reader.addEventListener("load", () => callback(reader.result));
			reader.readAsDataURL(img);
		}
	};
	translateDate = (values) => {
		for (const [key, value] of Object.entries(values)) {
			if (moment.isMoment(value)) {
				values[key] = moment(values[key]).format("YYYY-MM-DD");
			}
		}
		return values;
	};
}

export default new GlobalFormatter();
