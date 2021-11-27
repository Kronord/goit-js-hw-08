import throttle from "lodash.throttle";
const STORAGE_KEY = "feedback-form-state";

const feedBack = {};

const refs = {
    form: document.querySelector(".feedback-form"),
    email: document.querySelector(".feedback-form input"),
    message: document.querySelector(".feedback-form textarea"),
};

refs.form.addEventListener('submit', handleOnFormSubmit);
refs.form.addEventListener('input', throttle(handleOnFormInput, 500));

function handleOnFormInput(event) {
    feedBack[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(feedBack));
    return;
};

function handleOnFormSubmit(event) {
    event.preventDefault();
    event.target.reset();
    console.log(STORAGE_KEY, JSON.parse(localStorage.getItem(STORAGE_KEY)));
    localStorage.removeItem(STORAGE_KEY);
};

function currentMsg(p1, p2) {
    const savedMsg = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (savedMsg && savedMsg.email) {
        p1.value = savedMsg.email;
    };
    if (savedMsg && savedMsg.message) {
        p2.value = savedMsg.message;
    };
}
currentMsg(refs.email, refs.message);








