import { EventData, Observable } from "data/observable";
import { Page } from "ui/page";
import {TextField} from "ui/text-field";
import {SearchBar} from "ui/search-bar";
import {isAndroid, isIOS} from "platform"

var tf2:TextField;
var sb2:SearchBar;
// Event handler for Page "navigatingTo" event attached in main-page.xml
export function onNavigatedTo(args: EventData) {
    // Get the event sender
    console.log("on page navigatingTo");
    var page = <Page>args.object;
    tf2 =  <TextField>page.getViewById("textFieldId2");
    sb2 = <SearchBar>page.getViewById("searchBar2");
    sb2.dismissSoftInput();
    
    
}

export function onLoaded(args: EventData){
    console.log("on loaded event");
     var page = <Page>args.object;
    var searchbarElement = <SearchBar>page.getViewById("searchBar2");
    searchbarElement.dismissSoftInput();
}


export function searchbarloaded(args:EventData){
    console.log("search loaded");
    var searchbar2:SearchBar =<SearchBar> args.object;
    //do not clear focus
    searchbar2.dismissSoftInput();
    //only with native code - focus clear
    if(isAndroid){
        searchbar2.android.clearFocus();
    }
    if(isIOS){
        searchbar2.ios.endEditing(true);
    }
}

export function onTap(args:EventData) {
    tf2.dismissSoftInput();
}


export function onSubmit2(args:EventData){
    console.log("submit tap");
    sb2.dismissSoftInput();
}