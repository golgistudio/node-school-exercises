console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html(input, ...args) {
    var str = input[0];
    for (var i = 0; i < args.length; i++) {
        str = str + htmlSafe(args[i]) + input[i + 1];
    };
    return str;
}

function htmlSafe(raw) {
    return raw.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/'/g, "&apos;")
            .replace(/"/g, "&quot;");
};
