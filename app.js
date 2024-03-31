function make_shirt(size, text) {
    if (size === void 0) { size = 'large'; }
    if (text === void 0) { text = 'i love type_script.'; }
    console.log("creating a ".concat(size, " shirt with the message: ").concat(text));
}
make_shirt();
make_shirt('Medium');
make_shirt('small', 'i love python');
