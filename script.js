// API TRANSLATION
const textareaFrom = document.querySelector("#textareaFrom");
const textareaTo = document.querySelector("#textareaTo");
const selects = document.querySelectorAll("select");

// API VOICE IN
listener.addEventListener('click', function() {
    var speech = true
    window.SpeechRecognition = window.webkitSpeechRecognition
    const recognition = new SpeechRecognition()
    recognition.interimResults = true

    recognition.addEventListener('result', e => {
        const transcript = Array.from(e.results)
            .map(result => result[0])
            .map(result => result.transcript)

        textareaFrom.innerHTML = transcript;
    })

    if (speech == true) {
        recognition.start();
        console.log("True")
        console.log(textareaFrom.value)
    } else {
        console.log("False")
        console.log(textareaFrom.value)
    }
})

const countries = {
    "en-GB": "Inglês",
    "es-ES": "Espanhol",
    "it-IT": "Italiano",
    "ja-JP": "Japonês",
    "pt-BR": "Português",
};

// API TRANSLATION
selects.forEach((tag) => {
    for (let country in countries) {
        let selected;
        if (tag.className.includes("selectFrom") && country == "pt-BR") {
            selected = "selected";
        } else if (tag.className.includes("selectTo") && country == "en-GB") {
            selected = "selected";
        }

        const option = `<option value="${country}" ${selected}>${countries[country]}</option>`;

        tag.insertAdjacentHTML("beforeend", option);
    }
});

textareaFrom.addEventListener("keypress", (event) => {
    if (event.code === "Enter") {
        loadTranslation();
    }
});

function loadTranslation() {
    fetch(
            `https://api.mymemory.translated.net/get?q=${textareaFrom.value}&langpair=${selects[0].value}|${selects[1].value}`
        )
        .then((res) => res.json())
        .then((data) => {
            textareaTo.value = data.responseData.translatedText;
        });
}

// API VOICE IN