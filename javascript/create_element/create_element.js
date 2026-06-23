//create

const card = document.createElement('div');

//configure
card.textContent = "Hello students";

card.className = "message";

//connect
document.body.append(card);
document.body.main.appendChild(card);

document.createElement('li');
li.textContent = "learn createelement"
ul.append('li');




form.addEventListener("submit", (event)=>{
    event.preventDefault();
    console.log("form submitted");
    //create
    const newCard = document.createElement('li');


    //configure
    newCard.classList.add('card');

    const cardText = textInput.value;

    // newCard.innerHTML = `
    // <h2 class="card_title"></h2>
    // <p>${cardText}</p>
    // `

    const cardTitle = document.createElement('h2');
    cardTitle.classList.add("card__title");
    cardTitle.textContent = "Card";

    const cardContent = document.createElement('p');
    cardContent.textContent = cardText;


    //append - connect
    newCard.append(cardTitle, cardContent);

    cardContainer.append(newCard);
}) 