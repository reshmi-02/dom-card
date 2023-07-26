let details=
[{
    id:1,
    image:"images/img-5.jpg",
    title:"Marriage",
    content:"we created beautiful marriage photography"
},
{
    id:2,
    image:"images/img-6.jpg",
    title:"Mehandi",
    content:"we created beautiful mehandi photography"
},
{
    id:3,
    image:"images/img-7.jpeg",
    title:"Engagement",
    content:"we created beautiful engagement photography"
},
{
    id:1,
    image:"images/img-8.jpg",
    title:"lifestyle",
    content:"we created beautiful lifestyle photoshoot"
}
]

var cardbody=document.getElementById("card");

var cardsection=document.createElement("div");
cardsection.classList.add("card-section");
cardbody.appendChild(cardsection);

var container=document.createElement("div");
container.classList.add("card-container");
cardsection.appendChild(container);


var row=document.createElement("div");
row.classList.add("card-row");
container.appendChild(row); 

details.forEach(function(e){
    var col=document.createElement("div");
    col.classList.add("card-col");
    row.appendChild(col); 


    var card=document.createElement("div");
    card.classList.add("card-card");
    col.appendChild(card);
    
    var cardimage=document.createElement("div");
    cardimage.classList.add("card-image");
    card.appendChild(cardimage);


    var picture=document.createElement("img");
    picture.setAttribute("src",e.image);
    cardimage.appendChild(picture);
    
    
    var heading=document.createElement("h1");
    heading.innerHTML=e.title;
    card.appendChild(heading);


    var para=document.createElement("p");
    para.innerHTML=e.content;
    card.appendChild(para);
});