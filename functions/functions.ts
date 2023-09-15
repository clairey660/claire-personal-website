function toggleStyleSheetTS() {
    var t = document.getElementById("mainStyleSheet") as HTMLLinkElement | null;
    var s = document.getElementById("buttonStyle") as HTMLLinkElement | null;

    if (!t || !s) {
        return;
    }

    let main = t.getAttribute('href');
    let on_off = s.getAttribute('src');

    if (main === "../styles/default.css") {
        on_off = "../images/off.png";
        main = "../styles/special.css";
    } else {
        on_off = "../images/on.png";
        main = "../styles/default.css";
    }

    t.setAttribute("href", main);
    s.setAttribute("src", on_off);
    localStorage.setItem("storedColor", main);
    localStorage.setItem("storedButton", on_off);
}

window.onload = () => {
    const storedColor = localStorage.getItem("storedColor");
    const storedButton = localStorage.getItem("storedButton");
    const styleColor = document.getElementById("mainStyleSheet") as HTMLLinkElement | null;
    const toggleStyle = document.getElementById("buttonStyle") as HTMLLinkElement | null;

    if (styleColor && storedColor) {
        styleColor.setAttribute("href", storedColor);
    }
    if (toggleStyle && storedButton) {
        toggleStyle.setAttribute("src", storedButton);
    }
};