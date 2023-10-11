const textArea = document.getElementById("textaArea");

function f1(e) {
    let value = e.value;
    textArea.style.fontSize = value + "px";
}

function f2(e) {
    if (textArea.style.fontWeight === "bold") {
        textArea.style.fontWeight = "normal";
        e.classList.remove("active");
    } else {
        textArea.style.fontWeight = "bold";
        e.classList.add("active");
    }
}

function f3(e) {
    if (textArea.style.fontStyle === "italic") {
        textArea.style.fontStyle = "normal";
        e.classList.remove("active");
    } else {
        textArea.style.fontStyle = "italic";
        e.classList.add("active");
    }
}

function f4(e) {
    if (textArea.style.textDecoration === "underline") {
        textArea.style.textDecoration = "none";
        e.classList.remove("active");
    } else {
        textArea.style.textDecoration = "underline";
        e.classList.add("active");
    }
}

function f5() {
    textArea.style.textAlign = "left";
}

function f6() {
    textArea.style.textAlign = "center";
}

function f7() {
    textArea.style.textAlign = "right";
}

function f8(e) {
    if (textArea.style.textTransform === "uppercase") {
        textArea.style.textTransform = "none";
        e.classList.remove("active");
    } else {
        textArea.style.textTransform = "uppercase";
        e.classList.add("active");
    }
}

function f9() {
    textArea.style.fontWeight = "normal";
    textArea.style.textAlign = "left";
    textArea.style.fontStyle = "normal";
    textArea.style.textTransform = "capitalize";
    textArea.value = "";
}

function f10(e) {
    let value = e.value;
    textArea.style.color = value;
}

window.addEventListener("load", () => {
    textArea.value = "";
});
