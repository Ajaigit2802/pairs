const section=document.querySelector("section");
const playerLivesCount=document.querySelector("span");
let playerlives=6;


playerLivesCount.textContent = playerlives;


const getdata = [
{imgSrc: "./img1.webp", name:"img11"},
{imgSrc: "./img2.webp", name:"img21"},
{imgSrc: "./img3.jpeg", name:"img31"},
{imgSrc: "./img4.jpeg", name:"img41"},
{imgSrc: "./img5.jpeg", name:"img51"},
{imgSrc: "./img6.jpeg", name:"img61"},
{imgSrc: "./img7.png", name:"img71"},
{imgSrc: "./img8.webp", name:"img81"},
{imgSrc: "./img1.webp", name:"img11"},
{imgSrc: "./img2.webp", name:"img21"},
{imgSrc: "./img3.jpeg", name:"img31"},
{imgSrc: "./img4.jpeg", name:"img41"},
{imgSrc: "./img5.jpeg", name:"img51"},
{imgSrc: "./img6.jpeg", name:"img61"},
{imgSrc: "./img7.png", name:"img71"},
{imgSrc: "./img8.webp", name:"img81"}
];

const randomize = () => {
    const cardData=getdata;
    cardData.sort(() => Math.random()-0.5);
    return cardData;
   // console.log(cardData);
}


const cardGenerator = () =>{
    const cardData=randomize();
    cardData.forEach((item )=>{
        const card=document.createElement("div");
        const face=document.createElement("img");
        const back=document.createElement("div");
        card.classList="card";
        face.classList="face";
        back.classList="back";


        face.src=item.imgSrc;
        card.setAttribute("name", item.name);


        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);


        card.addEventListener('click',(e)=>{
            card.classList.add('toggleCard');
            checkCards(e);
        });
    });
    
};

const checkCards = (e) => {
    //console.log(e);
    const clickedCard=e.target;
    clickedCard.classList.add("flipped");
     const flippedCards=document.querySelectorAll(".flipped");
     const toggleCard=document.querySelectorAll('.toggleCard');
      
    //  console.log(flippedCards);
    

    if(flippedCards.length == 2){
        if(flippedCards[0].getAttribute("name") === flippedCards[1].getAttribute("name")){
            console.log("match");
            flippedCards.forEach((card)=>{
                card.classList.remove("flipped");
                card.getElementsByClassName.pointerEvents="none";
            });
        }
        else{
            flippedCards.forEach((card)=>{
                card.classList.remove("flipped");
                setTimeout(()=>card.classList.remove('toggleCard'), 1000);
            });
            playerlives--;
            playerLivesCount.textContent = playerlives;
            if(playerlives===0){
                setTimeout(() => restart("Better luck next time"),1000 ) ;
            }
        }
    }

    if(toggleCard.length === 16){
       setTimeout(() => restart("You won congrats"),1000 ) ;
    }
};



const restart = (text) => {
    let cardData=randomize();
    let cards=document.querySelectorAll('.card');
    let faces=document.querySelectorAll('.face');
    section.style.pointerEvents="none";
    cardData.forEach((item,index )=>{
        cards[index].classList.remove('toggleCard');
        setTimeout(()=>{
            cards[index].getElementsByClassName.pointerEvents="all";
            faces[index].src=item.imgSrc;
            cards[index].setAttribute('name',item.name);
            section.style.pointerEvents="all";
        },1000);
        
    });
    playerlives=6;
    playerLivesCount.textContent = playerlives;
    setTimeout(()=> window.alert(text),100);
}


cardGenerator();
