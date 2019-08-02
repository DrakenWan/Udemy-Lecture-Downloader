chrome.runtime.sendMessage({
    todo: "showPageAction"
});

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    if (msg.todo == "download_video") {
        var edx = "https://courses.edx.org/courses/*";
        var others = "vjs-tech";
        var video = null;

        
            if (RegExp(edx).exec(location.href)) {
                var video = document.getElementsByClassName("video-download-button");
            } else {
                video = document.getElementsByClassName(others);
            }

        if (video.length != 0) {
            video = video[0];
            var src = video.getAttribute("src") || video.getAttribute("href");
            if (confirm("Confirm download the lecture?")) {
                window.open(src, "_blank");
                alert("Video is downloading...")
            } else {
                alert("Download has been cancelled.");
            }
        } else {
            alert("There is no video container. Visit a page that contains a video lecture.");
        }
    }

});