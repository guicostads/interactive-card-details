const cardholder = document.getElementById("cardholder");
const nameDisplay = document.querySelector(".card_name_display");
const cardnumber = document.getElementById("cardnumber");
const numberDisplay = document.querySelector(".card_number_display");
const dateDisplay = document.querySelector(".card_date_display");
const date = document.querySelector(".date");
const month = document.getElementById("month");
const year = document.getElementById("year");
const cvc = document.getElementById("cvc");
const cvcDisplay = document.querySelector(".card_cvc_display");
const btn = document.querySelector(".btn");
const form = document.getElementById("form");
const thanks = document.querySelector(".thank-you");
const formElements = form.elements;
const btnContinue = document.querySelector(".btn-2");
const letters = /^[A-Z a-z]+$/;

// Displaying user data on card and validating input format

cardholder.addEventListener("input", getNameValue);

cardnumber.addEventListener("input", getNumberValue);

month.addEventListener("input", getDateValue);

year.addEventListener("input", getDateValue);

cvc.addEventListener("input", getCvcValue);

function getNameValue() {
  let name = cardholder.value;
  nameDisplay.innerHTML = name.toUpperCase();
  if (!name) {
    nameDisplay.innerHTML = "JOHN WICK";
  }
}

function getNumberValue(e) {
  e.preventDefault();
  // spaces every 4 numbers on card and input;
  let formattedCardNum = e.target.value.replace(/([0-9]{4})/g, "$1 ");
  numberDisplay.innerHTML = formattedCardNum;

  if (!cardnumber.value) {
    numberDisplay.innerHTML = "0000 0000 0000 0000";
  }
}

function getDateValue() {
  let m = month.value.substring(0, 2);
  let y = year.value.substring(0, 2);
  dateDisplay.innerHTML = `${m}/${y}`;
  if (!m && !y) dateDisplay.innerHTML = "00/00";
}

function getCvcValue() {
  cvcNum = cvc.value;
  cvcDisplay.innerHTML = cvcNum.substring(0, 3);
  if (!cvcNum) {
    cvcDisplay.innerHTML = "000";
  }
}

cardholder.onkeydown = function () {
  if (cardholder.value.match(numbers)) {
    cardholder.classList.add("error");
    cardholder.parentElement.classList.add("error_msg-2");
  }
};

cardnumber.onkeydown = function (e) {
  if (cardnumber.value.length === 16 && e.which !== 8) {
    cardnumber.value = cardnumber.value.substring(0, 15);
  }
};

month.onkeyup = function () {
  if (month.value.length > 2) {
    month.value = month.value.substring(0, 2);
  }
};

month.onkeydown = function () {
  month.classList.remove("error");
  date.parentElement.classList.remove("error_msg");
  date.parentElement.classList.remove("error_msg-2");
};

year.onkeyup = function () {
  if (year.value.length > 2) {
    year.value = year.value.substring(0, 2);
  }
};

year.onkeydown = function () {
  year.classList.remove("error");
  date.parentElement.classList.remove("error_msg");
  date.parentElement.classList.remove("error_msg-2");
};

cvc.onkeyup = function () {
  if (cvc.value.length > 3) {
    cvc.value = cvc.value.substring(0, 3);
  }
};

// validating while changing inputs/typing

cardholder.onchange = function () {
  if (!cardholder.value) {
    cardholder.classList.add("error");
    cardholder.parentElement.classList.add("error_msg");
  } else if (!cardholder.value.match(letters)) {
    cardholder.classList.add("error");
    cardholder.parentElement.classList.add("error_msg-2");
  }
};

cardnumber.onchange = function () {
  if (!cardnumber.value) {
    cardnumber.classList.add("error");
    cardnumber.parentElement.classList.add("error_msg");
  } else if (
    (cardnumber.value && cardnumber.value.length > 16) ||
    cardnumber.value.length < 16
  ) {
    cardnumber.classList.add("error");
    cardnumber.parentElement.classList.add("error_msg-2");
  }
};

month.onchange = function () {
  if (!month.value) {
    month.classList.add("error");
    date.parentElement.classList.add("error_msg");
  } else if (month.value.length < 2 || month.value > 12) {
    month.classList.add("error");
    date.parentElement.classList.add("error_msg-2");
  } else {
    month.classList.remove("error");
    date.parentElement.classList.remove("error_msg");
    date.parentElement.classList.remove("error_msg-2");
  }
};

year.onchange = function () {
  if (!year.value) {
    year.classList.add("error");
    date.parentElement.classList.add("error_msg");
  } else if (
    (year.value && year.value.length > 2) ||
    year.value.length < 2 ||
    year.value < 22
  ) {
    year.classList.add("error");
    date.parentElement.classList.add("error_msg-2");
  } else {
    year.classList.remove("error");
    date.parentElement.classList.remove("error_msg");
    date.parentElement.classList.remove("error_msg-2");
  }
};

cvc.onchange = function () {
  if (!cvc.value) {
    cvc.classList.add("error");
    cvc.parentElement.classList.add("error_msg");
  } else if ((cvc.value && cvc.value.length > 3) || cvc.value.length < 3) {
    cvc.classList.add("error");
    cvc.parentElement.classList.add("error_msg-2");
  }
};

// if confirm button is clicked

btn.addEventListener("click", () => {
  if (!cardholder.value) {
    cardholder.classList.add("error");
    cardholder.parentElement.classList.add("error_msg");
  }

  if (!cardnumber.value) {
    cardnumber.classList.add("error");
    cardnumber.parentElement.classList.add("error_msg");
  }

  if (!month.value) {
    month.classList.add("error");
    date.parentElement.classList.add("error_msg");
  } else if (month.value > 12) {
    month.classList.add("error");
    date.parentElement.classList.add("error_msg-2");
  }

  if (!year.value) {
    year.classList.add("error");
    date.parentElement.classList.add("error_msg");
  } else if (year.value < 22) {
    year.classList.add("error");
    date.parentElement.classList.add("error_msg-2");
  }

  if (!cvc.value) {
    cvc.classList.add("error");
    cvc.parentElement.classList.add("error_msg");
  }

  // final validation

  if (
    cardholder.value &&
    cardholder.value.match(letters) &&
    cardnumber.value.length === 16 &&
    month.value.length === 2 &&
    month.value <= 12 &&
    year.value.length === 2 &&
    year.value >= 22 &&
    cvc.value.length === 3
  ) {
    form.classList.add("hidden");
    thanks.classList.remove("hidden");
  }
});

// adding the button error animation

btn.addEventListener("mouseover", () => {
  for (const element of formElements) {
    if (element.classList.contains("error") || !element.value) {
      btn.classList.add("btn_error");
    }
  }
});

// Removing the errors

form.addEventListener("keydown", (e) => {
  e.target.classList.remove("error");
  e.target.parentElement.classList.remove("error_msg");
  e.target.parentElement.classList.remove("error_msg-2");
  btn.classList.remove("btn_error");
});

// reseting data to continue

btnContinue.addEventListener("click", () => {
  thanks.classList.add("hidden");
  form.classList.remove("hidden");
  btn.classList.remove("hidden");
  for (element of formElements) {
    element.classList.remove("error");
    element.parentElement.classList.remove("error_msg");
    element.parentElement.classList.remove("error_msg-2");
    date.parentElement.classList.remove("error_msg-2");
    element.value = "";
    btn.value = "Confirm";
    numberDisplay.innerHTML = "0000 0000 0000 0000";
    nameDisplay.innerHTML = "John Wick";
    cvcDisplay.innerHTML = "000";
    dateDisplay.innerHTML = "00/00";
  }
});
