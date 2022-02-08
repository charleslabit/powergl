class GlobalFormatter {
    ToCapitalFirstLetter = (text) => {
        return text.charAt(0).toUpperCase() + text.substring(1);
    };
    GetBase64 = (img, callback) => {
        if (img) {
            const reader = new FileReader();
            reader.addEventListener("load", () => callback(reader.result));
            reader.readAsDataURL(img);
        }
    };
}

export default new GlobalFormatter();