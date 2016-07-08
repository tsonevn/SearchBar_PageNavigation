import { EventData, Observable } from "data/observable";
import { Page } from "ui/page";
import { HelloWorldModel } from "./main-view-model";
import {TextField} from "ui/text-field";
import {topmost} from "ui/frame";
import {SearchBar} from "ui/search-bar";

var tf:TextField;
var sb:SearchBar;
// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {
    // Get the event sender
    var page = <Page>args.object;
    tf =  <TextField>page.getViewById("textFieldId");
    sb = <SearchBar>page.getViewById("searchBar");
    
}


export function onTap(args:EventData) {
    tf.dismissSoftInput();
}
export function nextPage(args:EventData){
    topmost().navigate({moduleName:"secondPage"})
}


export function onSubmit(args:EventData){
    console.log("submit tap");
    sb.dismissSoftInput();
}

export function onClear(){
    console.log("clear tap");
    sb.dismissSoftInput();
}