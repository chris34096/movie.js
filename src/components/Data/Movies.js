const movies = [
  {
    id: "1",
    poster_src:
      "http://fr.web.img3.acsta.net/pictures/18/05/14/12/19/5676009.jpg",
    title: "Oceans 8",
    category: "Comedy",
    likes: 4,
    dislikes: 1
  },
  {
    id: "2",
    poster_src:
      "http://fr.web.img5.acsta.net/r_1280_720/newsv7/17/11/28/17/22/42075810.jpg",
    title: "Midnight Sun",
    category: "Comedy",
    likes: 2,
    dislikes: 0
  },
  {
    id: "3",
    poster_src:
      "http://fr.web.img6.acsta.net/r_1280_720/pictures/18/04/13/15/09/0323902.jpg",
    title: "Les indestructibles 2",
    category: "Animation",
    likes: 3,
    dislikes: 1
  },
  {
    id: "4",
    poster_src:
      "http://fr.web.img3.acsta.net/pictures/18/03/22/16/48/2454348.jpg",
    title: "Sans un bruit",
    category: "Thriller",
    likes: 6,
    dislikes: 6
  },
  {
    id: "5",
    poster_src:
      "http://fr.web.img3.acsta.net/pictures/18/03/22/16/48/2454348.jpg",
    title: "Creed II",
    category: "Drame",
    likes: 16,
    dislikes: 2
  },
  {
    id: "6",
    poster_src:
      "http://fr.web.img4.acsta.net/medias/nmedia/18/36/02/52/18846059.jpg",
    title: "Pulp Fiction",
    category: "Thriller",
    likes: 11,
    dislikes: 3
  },
  {
    id: "7",
    poster_src:
      "http://fr.web.img4.acsta.net/medias/nmedia/18/36/02/52/18846059.jpg",
    title: "Pulp Fiction",
    category: "Thriller",
    likes: 12333,
    dislikes: 32
  },
  {
    id: "8",
    poster_src:
      "http://fr.web.img2.acsta.net/medias/nmedia/18/35/91/33/19255605.jpg",
    title: "Seven",
    category: "Thriller",
    likes: 2,
    dislikes: 1
  },
  {
    id: "9",
    poster_src:
      "http://fr.web.img2.acsta.net/medias/nmedia/18/72/34/14/19476654.jpg",
    title: "Inception",
    category: "Thriller",
    likes: 2,
    dislikes: 1
  },
  {
    id: "10",
    poster_src:
      "http://fr.web.img5.acsta.net/pictures/14/09/11/17/05/508784.jpg",
    title: "Gone Girl",
    category: "Thriller",
    likes: 22,
    dislikes: 12
  }
];

export const movies$ = new Promise((resolve, reject) =>
  setTimeout(resolve, 1000, movies)
);
