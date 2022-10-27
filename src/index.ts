
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById("payButton")?.addEventListener("click", ()=>{
        let ellenorzo1 = /^[a-z]{1,}$/;
        let name : string = (document.getElementById("name") as HTMLInputElement).value;
        let country : string = (document.getElementById("country") as HTMLInputElement).value;
        let city : string = (document.getElementById("city") as HTMLInputElement).value;
        let streetellenorzo = /^[a-zA-Z" "]+[0-9]$/
        let street : string = (document.getElementById("street") as HTMLInputElement).value;
        let zipcodeellenorzo = /^[0-9]{1,}$/
        let zipcode : string = (document.getElementById("zipcode") as HTMLInputElement).value;
        let cardNumbersellenorzo = /^[0-9]{4}-$[0-9]{4}-[0-9]{4}-[0-9]{4}/
        let cardNumbers : string = (document.getElementById("cardNumbers") as HTMLInputElement).value;
        let cvcellenorzo = /^[0-9]{3}/$
        let verificationCode : string = (document.getElementById("verificationCode") as HTMLInputElement).value;
        let nameOnCardellenorzo = /^[a-zA-Z" $"]/
        let nameOnCard : string = (document.getElementById("nameOnCard") as HTMLInputElement).value;
       
        let namebool,countrybool,citybool,streetbool,zipcodebool,cardNumbersbool,verificationCodebool, nameOnCardbool;

        let nameDiv = (document.getElementById("nameDiv") as HTMLDivElement);
        let countryDiv = (document.getElementById("countryDiv") as HTMLDivElement);
        let cityDiv = (document.getElementById("cityDiv") as HTMLDivElement);
        let streetDiv = (document.getElementById("streetDiv") as HTMLDivElement);
        let zipcodeDiv = (document.getElementById("zipcodeDiv") as HTMLDivElement);
        let cardNumbersDiv = (document.getElementById("cardNumbersDiv") as HTMLDivElement);
        let verificationCodeDiv = (document.getElementById("verificationCodeDiv") as HTMLDivElement);
        let nameOnCardDiv = (document.getElementById("nameOnCardDiv") as HTMLDivElement);

        if(ellenorzo1.test(name)){
            namebool = true;
            nameDiv.classList.add("lathatatlan");
        }else{
            namebool = false;
            nameDiv.classList.remove("lathatatlan");
        }
        if(ellenorzo1.test(country)){
            countrybool = true;
            countryDiv.classList.add("lathatatlan")
        }else{
            countrybool = false;
            countryDiv.classList.remove("lathatatlan")
        }
        if(ellenorzo1.test(city)){
            citybool = true;
            cityDiv.classList.add("lathatatlan")
        }else{
            citybool = false;
            cityDiv.classList.remove("lathatatlan")
        }
        if(streetellenorzo.test(street)){
            streetbool = true;
            streetDiv.classList.add("lathatatlan")
        }else{
            streetbool = false;
            streetDiv.classList.remove("lathatatlan")
        }
        if(zipcodeellenorzo.test(zipcode)){
            zipcodebool = true;
            zipcodeDiv.classList.add("lathatatlan")
        }else{
            zipcodebool = false;
            zipcodeDiv.classList.remove("lathatatlan")
        }
        if(cardNumbersellenorzo.test(cardNumbers)){
            cardNumbersbool = true;
            cardNumbersDiv.classList.add("lathatatlan")
        }else{
            cardNumbersbool = false;
            cardNumbersDiv.classList.remove("lathatatlan")
        }
        if(cvcellenorzo.test(verificationCode)){
            verificationCodebool = true;
            verificationCodeDiv.classList.add("lathatatlan")
        }else{
            verificationCodebool = false;
            verificationCodeDiv.classList.remove("lathatatlan")
        }
        if(nameOnCardellenorzo.test(nameOnCard)){
            nameOnCardbool = true;
            nameOnCardDiv.classList.add("lathatatlan")
        }else{
            nameOnCardbool = false;
            nameOnCardDiv.classList.remove("lathatatlan")
        }

        if(namebool && countrybool && citybool && streetbool && zipcodebool && cardNumbersbool  && verificationCodebool &&  nameOnCardbool){
            window.open("index2.html", "_self");
        }
    })
})