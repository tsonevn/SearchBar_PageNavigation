"use strict";
var platform_1 = require("platform");
var tf2;
var sb2;
// Event handler for Page "navigatingTo" event attached in main-page.xml
function onNavigatedTo(args) {
    // Get the event sender
    console.log("on page navigatingTo");
    var page = args.object;
    tf2 = page.getViewById("textFieldId2");
    sb2 = page.getViewById("searchBar2");
    sb2.dismissSoftInput();
}
exports.onNavigatedTo = onNavigatedTo;
function onLoaded(args) {
    console.log("on loaded event");
    var page = args.object;
    var searchbarElement = page.getViewById("searchBar2");
    searchbarElement.dismissSoftInput();
    if (platform_1.isAndroid) {
        searchbarElement.android.clearFocus();
    }
}
exports.onLoaded = onLoaded;
function searchbarloaded(args) {
    console.log("search loaded");
    var searchbar2 = args.object;
    //do not clear focus
    searchbar2.dismissSoftInput();
    //only with native code - focus clear
    if (platform_1.isIOS) {
        searchbar2.ios.endEditing(true);
    }
}
exports.searchbarloaded = searchbarloaded;
function onTap(args) {
    tf2.dismissSoftInput();
}
exports.onTap = onTap;
function onSubmit2(args) {
    console.log("submit tap");
    sb2.dismissSoftInput();
}
exports.onSubmit2 = onSubmit2;
//# sourceMappingURL=secondPage.js.map