'use strict'

const textareaFrom = document.querySelector("#textareaFrom");
const textareaTo = document.querySelector("#textareaTo");
const selects = document.querySelectorAll("select");

const countries = {
    "en-GB": "Inglês",
    "es-ES": "Espanhol",
    "it-IT": "Italiano",
    "ja-JP": "Japonês",
    "pt-BR": "Português",
};

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

// ******************************************************************************************
// ******************************************************************************************




const botaoTema = document.getElementById('button-theme')
const body = document.getElementById('body')

function mudarTema() {
    
    if(botaoTema.children[0].src.includes('sol')){
        botaoTema.children[0].src = './img/lua 1.png'
        botaoTema.children[0].alt = 'Lua'
    } else {
        botaoTema.children[0].src = './img/sol.png'
        botaoTema.children[0].alt = 'Sol'
    }
    botaoTema.classList.toggle('tema-escuro')
    body.classList.toggle('tema-escuro')
}

botaoTema.addEventListener('click', mudarTema)

// ******************************************************************************************
// ******************************************************************************************

textareaFrom.addEventListener("keypress", (event) => {
    if (event.code === "Enter") {
        if (textareaFrom.value.toLowerCase() === "alice") {
        mudarTema(true);
    }else {
        loadTranslation();
    }
}
});



