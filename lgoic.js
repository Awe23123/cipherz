window.addEventListener("load", colorWow);

function colorWow() {
    var elements = document.getElementsByClassName("rainbow");
    for (let i = 0; i < elements.length; i++) {
        generateRainbowText(elements[i]);
    }
}

function generateRainbowText(element) {
    var text = element.innerText;
    element.innerHTML = "";
    for (let i = 0; i < text.length; i++) {
        let charElem = document.createElement("span");
        charElem.style.color = "hsl(" + (360 * i / text.length) + ",80%,50%)";
        charElem.innerHTML = text[i];
        element.appendChild(charElem);
    }
}

function pepe() {
    for (i = 0; i < 100; i++) {
        var img = document.createElement("IMG");
        img.setAttribute("src", "pepe.gif");
        document.body.appendChild(img);
    }
}

pepe();

window.onscroll = function(ev) {
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
        pepe();
        colorWow();
    }
};

function doCrypt(isDecrypt) {
    if (document.getElementById("key").value.length == 0) {
        alert("Key is empty");
        return;
    }
    var key = filterKey(document.getElementById("key").value);
    if (key.length == 0) {
        alert("Key has no letters");
        return;
    }
    if (isDecrypt) {
        for (var i = 0; i < key.length; i++)
            key[i] = (26 - key[i]) % 26;
    }
    var textElem = document.getElementById("text");
    textElem.value = crypt(textElem.value, key);
}

function crypt(input, key) {
    var output = "";
    for (var i = 0, j = 0; i < input.length; i++) {
        var c = input.charCodeAt(i);
        if (isUppercase(c)) {
            output += String.fromCharCode((c - 65 + key[j % key.length]) % 26 + 65);
            j++;
        } else if (isLowercase(c)) {
            output += String.fromCharCode((c - 97 + key[j % key.length]) % 26 + 97);
            j++;
        } else {
            output += input.charAt(i);
        }
    }
    return output;
}

function filterKey(key) {
    var result = [];
    for (var i = 0; i < key.length; i++) {
        var c = key.charCodeAt(i);
        if (isLetter(c))
            result.push((c - 65) % 32);
    }
    return result;
}

function isLetter(c) {
    return isUppercase(c) || isLowercase(c);
}

function isUppercase(c) {
    return c >= 65 && c <= 90;
}

function isLowercase(c) {
    return c >= 97 && c <= 122;
}