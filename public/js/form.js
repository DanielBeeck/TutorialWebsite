document.addEventListener("DOMContentLoaded", function() {
    const textTutorialRadio = document.querySelector('input[value="text"]');
    const videoTutorialRadio = document.querySelector('input[value="video"]');
    const contentInput = document.getElementById("content");
    const durationInput = document.getElementById("duration");
    const durationLable = document.getElementById("time");

    function addTextarea(){
            var labelElement = document.getElementById("content");
            var textarea = document.createElement("TEXTAREA");
            textarea.name = "content";
            textarea.cols = 60;
            textarea.rows = 10;
            while (labelElement.childNodes.length > 0) {
                labelElement.removeChild(labelElement.childNodes[0]);
            }
            labelElement.appendChild(textarea);
    }
    function addInput(){
            var labelElement = document.getElementById("content");
            var textElement = document.createElement("input");
            textElement.name = "content";
            while (labelElement.childNodes.length > 0) {
                labelElement.removeChild(labelElement.childNodes[0]);
            }
            labelElement.appendChild(textElement);
    }
    textTutorialRadio.addEventListener("change", function() {
        durationInput.removeAttribute("required");
        durationLable.classList.remove("required");
        addInput();
    });

    videoTutorialRadio.addEventListener("change", function() {
        durationInput.setAttribute("required", "");
        durationLable.classList.add("required");
        addTextarea();
    });
});