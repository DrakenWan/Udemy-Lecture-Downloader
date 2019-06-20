chrome.runtime.sendMessage({todo: "showPageAction"});

chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse)
 {
    if(msg.todo == "download_video")
    {
        var video = document.getElementsByClassName("vjs-tech");
        if(video.length != 0) {
             video = video[0];
             var src = video.getAttribute("src");
             if(confirm("Confirm download the lecture?"))
             {
                window.open(src, "_blank");
                alert("Video is downloading...")
             }
             else {
                 alert("Download has been cancelled.");
             }
        }
        else {
            alert("There is no video container. Visit a page that contains a video lecture.");
        }
    }
        
 });