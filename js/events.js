var manifest = chrome.runtime.getManifest();
var appName = manifest.name;
var appVersion = manifest.version;

chrome.runtime.onInstalled.addListener(function() {
    console.log(appName+appVersion+" is reloaded.");
});

//checking for pagAction request
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
{
    if(request.todo == "showPageAction")
    {
        chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
            chrome.pageAction.show(tabs[0].id);
            console.log("doing something");
        })
    }
});

chrome.pageAction.onClicked.addListener(function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs)
    {
        chrome.tabs.sendMessage(tabs[0].id, {todo: "download_video"});
    })
})