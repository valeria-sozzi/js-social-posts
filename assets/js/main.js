// Milestone 1
// Creiamo il nostro array di oggetti che rappresentano ciascun post.
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:

// id del post, numero progressivo da 1 a n
// nome autore,
// foto autore,
// data in formato americano (mm-gg-yyyy),
// testo del post,
// immagine (non tutti i post devono avere una immagine),
// numero di likes.
// Non è necessario creare date casuali
// Per le immagini va bene utilizzare qualsiasi servizio di placeholder
// ad es. Unsplash (https://unsplash.it/300/300?image=<id>)

const posts = [
  {
    id: 1,
    author: "Ugo Rossi",
    photo:
      "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
    date: new Date("05-28-2024"),
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image:
      "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRGAdBNCaVYPUTroZgzhywlIb0ToasLXsJMGzM_x33ksvVM275KRdRCX9Qryx-JLQXuvMsFKIPRJ04utDhX5ao",
    likes: 30,
  },
  {
    id: 2,
    author: "Rosa Gildi",
    photo:
      "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
    date: new Date("03-23-2023"),
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque laboriosam doloribus aut aliquam suscipit laborum a blanditiis.",
    image:
      "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRGAdBNCaVYPUTroZgzhywlIb0ToasLXsJMGzM_x33ksvVM275KRdRCX9Qryx-JLQXuvMsFKIPRJ04utDhX5ao",
    likes: 25,
  },
  {
    id: 3,
    author: "Mario Brini",
    photo:
      "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
    date: new Date("06-23-2021"),
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "",
    likes: 63,
  },
  {
    id: 4,
    author: "Sara Sorrisi",
    photo:
      "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
    date: new Date("08-20-2020"),
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque laboriosam doloribus aut aliquam suscipit laborum a blanditiis.",
    image:
      "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRGAdBNCaVYPUTroZgzhywlIb0ToasLXsJMGzM_x33ksvVM275KRdRCX9Qryx-JLQXuvMsFKIPRJ04utDhX5ao",
    likes: 81,
  },
  {
    id: 5,
    author: "Rita Massimi",
    photo: "",
    date: new Date("12-24-2023"),
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image:
      "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRGAdBNCaVYPUTroZgzhywlIb0ToasLXsJMGzM_x33ksvVM275KRdRCX9Qryx-JLQXuvMsFKIPRJ04utDhX5ao",
    likes: 30,
  },
  {
    id: 6,
    author: "Roberto Latini",
    photo:
      "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
    date: new Date("07-30-2021"),
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque laboriosam doloribus aut aliquam suscipit laborum a blanditiis adipisci cumque dolor et facere optio perspiciatis reiciendis at, magni repudiandae dolorum illum.",
    image: "",
    likes: 26,
  },
  {
    id: 7,
    author: "Valeria Sozzi",
    photo:
      "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
    date: new Date("07-31-2020"),
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque laboriosam doloribus aut aliquam suscipit laborum a blanditiis.",
    image:
      "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRGAdBNCaVYPUTroZgzhywlIb0ToasLXsJMGzM_x33ksvVM275KRdRCX9Qryx-JLQXuvMsFKIPRJ04utDhX5ao",
    likes: 33,
  },
  {
    id: 8,
    author: "Gianni Marini",
    photo: "",
    date: new Date("01-09-2019"),
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque laboriosam doloribus aut aliquam suscipit laborum a blanditiis adipisci cumque dolor et facere optio perspiciatis reiciendis at, magni repudiandae dolorum illum.",
    image: "",
    likes: 13,
  },
  {
    id: 9,
    author: "Sandro Lupo",
    photo: "",
    date: new Date("10-03-2022"),
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image:
      "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRGAdBNCaVYPUTroZgzhywlIb0ToasLXsJMGzM_x33ksvVM275KRdRCX9Qryx-JLQXuvMsFKIPRJ04utDhX5ao",
    likes: 54,
  },
  {
    id: 10,
    author: "Marisa Rame",
    photo:
      "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
    date: new Date("12-28-2023"),
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image:
      "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRGAdBNCaVYPUTroZgzhywlIb0ToasLXsJMGzM_x33ksvVM275KRdRCX9Qryx-JLQXuvMsFKIPRJ04utDhX5ao",
    likes: 77,
  },
];

//console.log(posts);

// Milestone 2
// Prendendo come riferimento il layout di esempio presente nell'html,
// stampiamo i post del nostro feed.

posts.forEach((post) => {
  //creo una variabilr in cui mettere l'elemento ( o img o div)
  let imgElement;
  //creo una condizione per vedere se la foto profilo è una stringa vuota
  if (post.photo === "") {
    //se non ho la foto creo elemento di fallback
    imgElement = `<div class="bg_profile">${post.author[0]}${initialsName(
      post.author
    )}</div>`;
  } else {
    // oppure creo l img
    imgElement = `<img src="${post.photo}"></img>`;
  }
  document.querySelector("main").innerHTML += `
  <div class="card" id="${post.id}">
    <div class="profile">
      <div class="profile_image">
        ${imgElement}
      </div>
      <div class="profile_text">
        <div class="bold author">${post.author}</div>
        <div class="date">${post.date.toLocaleDateString()}</div>
      </div>
    </div>
    <div class="text">${post.text}</div>
    <div class="post_image">
      <img src="${post.image}">
    </div>
    <div class="like">
      <button class="btn_likes bold"><i class="fa-solid fa-thumbs-up"></i> Mi Piace</button>
      <div class="counter_like">Piace a <span class="bold">${
        post.likes
      }</span> persone</div>
    </div>
  </div>`;
});

// Milestone 3
// Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone
// e incrementiamo il counter dei likes relativo.
// Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.

const btn_likes = document.querySelectorAll(".btn_likes");
const likes = document.querySelectorAll(".counter_like>span");

btn_likes.forEach((btn_like, index) => {
  btn_like.addEventListener("click", () => {
    if (btn_like.classList.contains("btn_color")) {
      btn_like.classList.remove("btn_color");
      likes[index].innerHTML = posts[index].likes - 1;
      posts[index].likes -= 1;
    } else {
      btn_like.classList.add("btn_color");
      likes[index].innerHTML = posts[index].likes + 1;
      posts[index].likes += 1;
    }
  });
});

// BONUS
// Formattare le date in formato italiano (gg/mm/aaaa)
// Gestire l'assenza dell'immagine profilo con un elemento di fallback
// che contiene le iniziali dell'utente (es. Luca Formicola > LF).

// Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.

//creo una funzione per trovare l'iniziale del cognome di ogni autore
function initialsName(author) {
  //creo un ciclo dove attraverso l'indice posso trovare la prima lettera dopo lo spazio
  for (let i = 0; i < author.length; i++) {
    //uso il condizionale per bloccare il ciclo una volta arrivato nello spazio
    if (author[i] === " ") {
      return author[i + 1];
    }
  }
}
