"use strict";
document.addEventListener('DOMContentLoaded', () => {
    var _a;
    (_a = document.getElementById("payButton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        let ellenorzo1 = /^[a-z]{1,}$/;
        let name = document.getElementById("name").value;
        let country = document.getElementById("country").value;
        let city = document.getElementById("city").value;
        let streetellenorzo = /^[a-zA-Z" "]+[0-9]$/;
        let street = document.getElementById("street").value;
        let zipcodeellenorzo = /^[0-9]{1,}$/;
        let zipcode = document.getElementById("zipcode").value;
        let cardNumbersellenorzo = /^[0-9]{4}-$[0-9]{4}-[0-9]{4}-[0-9]{4}/;
        let cardNumbers = document.getElementById("cardNumbers").value;
        let cvcellenorzo = /^[0-9]{3}/$;
        let verificationCode = document.getElementById("verificationCode").value;
        let nameOnCardellenorzo = /^[a-zA-Z" $"]/;
        let nameOnCard = document.getElementById("nameOnCard").value;
        let namebool, countrybool, citybool, streetbool, zipcodebool, cardNumbersbool, verificationCodebool, nameOnCardbool;
        let nameDiv = document.getElementById("nameDiv");
        let countryDiv = document.getElementById("countryDiv");
        let cityDiv = document.getElementById("cityDiv");
        let streetDiv = document.getElementById("streetDiv");
        let zipcodeDiv = document.getElementById("zipcodeDiv");
        let cardNumbersDiv = document.getElementById("cardNumbersDiv");
        let verificationCodeDiv = document.getElementById("verificationCodeDiv");
        let nameOnCardDiv = document.getElementById("nameOnCardDiv");
        if (ellenorzo1.test(name)) {
            namebool = true;
            nameDiv.classList.add("lathatatlan");
        }
        else {
            namebool = false;
            nameDiv.classList.remove("lathatatlan");
        }
        if (ellenorzo1.test(country)) {
            countrybool = true;
            countryDiv.classList.add("lathatatlan");
        }
        else {
            countrybool = false;
            countryDiv.classList.remove("lathatatlan");
        }
        if (ellenorzo1.test(city)) {
            citybool = true;
            cityDiv.classList.add("lathatatlan");
        }
        else {
            citybool = false;
            cityDiv.classList.remove("lathatatlan");
        }
        if (streetellenorzo.test(street)) {
            streetbool = true;
            streetDiv.classList.add("lathatatlan");
        }
        else {
            streetbool = false;
            streetDiv.classList.remove("lathatatlan");
        }
        if (zipcodeellenorzo.test(zipcode)) {
            zipcodebool = true;
            zipcodeDiv.classList.add("lathatatlan");
        }
        else {
            zipcodebool = false;
            zipcodeDiv.classList.remove("lathatatlan");
        }
        if (cardNumbersellenorzo.test(cardNumbers)) {
            cardNumbersbool = true;
            cardNumbersDiv.classList.add("lathatatlan");
        }
        else {
            cardNumbersbool = false;
            cardNumbersDiv.classList.remove("lathatatlan");
        }
        if (cvcellenorzo.test(verificationCode)) {
            verificationCodebool = true;
            verificationCodeDiv.classList.add("lathatatlan");
        }
        else {
            verificationCodebool = false;
            verificationCodeDiv.classList.remove("lathatatlan");
        }
        if (nameOnCardellenorzo.test(nameOnCard)) {
            nameOnCardbool = true;
            nameOnCardDiv.classList.add("lathatatlan");
        }
        else {
            nameOnCardbool = false;
            nameOnCardDiv.classList.remove("lathatatlan");
        }
        if (namebool && countrybool && citybool && streetbool && zipcodebool && cardNumbersbool && verificationCodebool && nameOnCardbool) {
            window.open("index2.html", "_self");
        }
    });
});
