const frame = document.getElementById("browserFrame");
const input = document.getElementById("urlInput");

// Navigate function
function navigate() {
    let value = input.value.trim();

    if (!value) return;

    let url;

    // Detect URL or Search
    if (value.includes(".") && !value.includes(" ")) {
        url = value.startsWith("http") ? value : "https://" + value;
    } else {
        url = "https://www.bing.com/search?q=" + encodeURIComponent(value);
    }

    frame.src = url;
}

// Navigation controls
function goBack() {
    frame.contentWindow.history.back();
}

function goForward() {
    frame.contentWindow.history.forward();
}

function reloadPage() {
    frame.contentWindow.location.reload();
}

// Enter key support
input.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        navigate();
    }
});