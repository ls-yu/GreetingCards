

let index = 0;

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("next-button").style.display="none";
    document.getElementById("previous-button").style.display="none";
});


var cards = [
            {name: "ella", 
            cards: [
                {words:"my condolences on attending MIT.", 
                image: "cards/EllaMIT.png"}, 
                {words:"Congrats on getting into your first-choice dorm!", 
                image: "cards/EllaDorm.png"}
            ]},
            {name: "ryan", 
            cards: [
                {words:"oat.", 
                image: "cards/RyanOat.png"}, 
                {words:"congrats on not graduating from exeter!!", 
                image: "cards/RyanExeter.png"}
            ]},
            {name: "vedha", 
            cards: [
                {words:"Condolences on your white neighborhood.", 
                image: "cards/VedhaMayo.png"}
            ]},
            {name: "michelle", 
            cards: [
                {words:"Congrats on your coffee job!", 
                image: "cards/MichelleCoffee.png"}
            ]}
]

function showCard()
{
    document.getElementById("next-button").style.display="block";
    document.getElementById("previous-button").style.display="block";
    recipient = document.getElementById("recipient").value.toLowerCase();
    recipientCards = cards.find(obj => obj.name == recipient).cards;

    index = 0;
    document.getElementById("small-rec").style.display = "none";
    document.getElementById("rec").style.display = "block";

    document.getElementById("image").src = recipientCards[index].image;
    document.getElementById("words").innerHTML = recipientCards[index].words;
    enableDisableButtons();
}

function nextCard()
{
    if (index < recipientCards.length-1){      
        index++;
    }

    document.getElementById("small-rec").style.display = "none";
    document.getElementById("rec").style.display = "block";

    document.getElementById("image").src = recipientCards[index].image;
    document.getElementById("words").innerHTML = recipientCards[index].words;
    
    enableDisableButtons();
}

function previousCard()
{
    if (index > -1){      
        index--;
    }

    document.getElementById("small-rec").style.display = "none";
    document.getElementById("rec").style.display = "block";

    document.getElementById("image").src = recipientCards[index].image;
    document.getElementById("words").innerHTML = recipientCards[index].words;

    enableDisableButtons();
}

function enableDisableButtons(){
    if (index == 0){
        document.getElementById("previous-button").disabled = true;
        console.log("prev disable");
    }
    else{
        document.getElementById("previous-button").disabled = false;
        console.log("prev un-disable");

    }
    if (index == recipientCards.length-1){
        document.getElementById("next-button").disabled = true;
        console.log("next disable");
    }
    else{
        document.getElementById("next-button").disabled = false;
        console.log("next un-disable");

    }
    
}