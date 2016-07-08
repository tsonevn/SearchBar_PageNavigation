"use strict";
var frame_1 = require("ui/frame");
var tf;
var sb;
// Event handler for Page "navigatingTo" event attached in main-page.xml
function navigatingTo(args) {
    // Get the event sender
    var page = args.object;
    tf = page.getViewById("textFieldId");
    sb = page.getViewById("searchBar");
}
exports.navigatingTo = navigatingTo;
function onTap(args) {
    tf.dismissSoftInput();
}
exports.onTap = onTap;
function nextPage(args) {
    frame_1.topmost().navigate({ moduleName: "secondPage" });
}
exports.nextPage = nextPage;
function onSubmit(args) {
    console.log("submit tap");
    sb.dismissSoftInput();
}
exports.onSubmit = onSubmit;
function onClear() {
    console.log("clear tap");
    sb.dismissSoftInput();
}
exports.onClear = onClear;
//# sourceMappingURL=main-page.js.map