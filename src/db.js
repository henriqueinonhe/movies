export const fetchMovies = async () => movies;

export const fetchMovieBySlug = async (slug) =>
  movies.find((movie) => movie.slug === slug);

export const fetchMovieDates = async (movieId) => {
  const movieDates = moviesDates.find((movie) => movie.movieId === movieId);

  return movieDates.dates;
};

const movies = [
  {
    id: "1",
    title: "Som da Liberdade",
    slug: "som-da-liberdade",
    duration: "131 min",
    originalTitle: "Sounds of Freedom",
    sinopsis:
      "A incrível história real de um ex-agente governamental que se transforma em um vigilante e que embarca em uma missão perigosa para resgatar centenas de crianças das mãos de traficantes sexuais.",
    director: "Alejandro Monteverde",
    distribution: "Paris Filmes",
    imageUrl: "/images/som-da-liberdade.webp",
  },
  {
    id: "2",
    title: "A Noite das Bruxas",
    slug: "a-noite-das-bruxas",
    duration: "103 min",
    originalTitle: "A Haunting in Venice",
    sinopsis:
      " Em “A Noite das Bruxas”, na Veneza pós Segunda Guerra Mundial, Poirot, agora aposentado e vivendo em seu próprio exílio, relutantemente vai a uma sessão espírita. Mas quando um dos convidados é assassinado, cabe ao ex- detetive descobrir mais uma vez o assassino.",
    director: "Kenneth Branagh",
    distribution: "Fox Film",
    imageUrl: "/images/a-noite-das-bruxas.webp",
  },
  {
    id: "3",
    title: "After Para Sempre",
    slug: "after-para-sempre",
    duration: "93 min",
    originalTitle: "After - Everything",
    sinopsis:
      "After - Para Sempre segue a versão de Hardin (Hero Fiennes Tiffin) pouco antes de conhecer Tessa (Josephine Langford) e depois que ele a conheceu e começaram seu conturbado relacionamento. After - Para Sempre contará ainda como Hardin melhorou com o tempo e alguns eventos depois de After - Depois da Promessa (2022). Esse é o capítulo final de Hessa. Será que os dois terão um final feliz depois de Hardin publicar After para o mundo?",
    director: "Castille Landon",
    distribution: "Diamond",
    imageUrl: "/images/after-para-sempre.webp",
  },
  {
    id: "4",
    title: "Nosso Sonho: A História de Claudinho e Buchecha",
    slug: "nosso-sonho-a-historia-de-claudinho-e-buchecha",
    duration: "120 min",
    originalTitle: "Nosso Sonho: A História de Claudinho e Buchecha",
    sinopsis:
      "“Nosso Sonho” é uma cinebiografia de “Claudinho e Buchecha”, dupla de maior sucesso do funk melody nacional de todos os tempos e ícone máximo do gênero na música brasileira. A história de uma amizade que se transforma em força de superação e conquista. Um filme que mostra como o ritmo e a poesia da periferia conquistaram o Brasil. Uma história real repleta de fantasia. Um musical, emocionante e divertido, feito de drama e tragédias, mas também de humor, surpresas e redenção.",
    director: "Eduardo Albergaria",
    distribution: "Manequim Filmes",
    imageUrl: "/images/nosso-sonho.webp",
  },
];

const moviesDates = [
  {
    movieId: "1",
    dates: [
      {
        date: "2021-10-15",
        times: ["10:00", "13:00", "16:00", "19:00", "22:00"],
      },
      {
        date: "2021-10-16",
        times: ["10:00", "13:00", "16:00", "19:00", "22:00"],
      },
      {
        date: "2021-10-17",
        times: ["10:00", "13:00", "16:00", "19:00", "22:00"],
      },
      {
        date: "2021-10-18",
        times: ["10:00", "13:00", "16:00", "19:00", "22:00"],
      },
      {
        date: "2021-10-19",
        times: ["10:00", "13:00", "16:00", "19:00", "22:00"],
      },
    ],
  },
  {
    movieId: "2",
    dates: [
      {
        date: "2021-10-15",
        times: ["10:00", "13:00", "16:00", "19:00", "22:00"],
      },
      {
        date: "2021-10-16",
        times: ["10:00", "13:00", "16:00", "19:00", "22:00"],
      },
      {
        date: "2021-10-17",
        times: ["10:00", "13:00", "16:00", "19:00", "22:00"],
      },
      {
        date: "2021-10-18",
        times: ["10:00", "13:00", "16:00", "19:00", "22:00"],
      },
      {
        date: "2021-10-19",
        times: ["10:00", "13:00", "16:00", "19:00", "22:00"],
      },
    ],
  },
  {
    movieId: "3",
    dates: [
      {
        date: "2021-10-15",
        times: ["10:00", "13:00", "16:00", "19:00", "22:00"],
      },
      {
        date: "2021-10-16",
        times: ["10:00", "13:00", "16:00", "19:00", "22:00"],
      },
      {
        date: "2021-10-17",
        times: ["10:00", "13:00", "16:00", "19:00", "22:00"],
      },
      {
        date: "2021-10-18",
        times: ["10:00", "13:00", "16:00", "19:00", "22:00"],
      },
      {
        date: "2021-10-19",
        times: ["10:00", "13:00", "16:00", "19:00", "22:00"],
      },
    ],
  },
  {
    movieId: "4",
    dates: [
      {
        date: "2021-10-15",
        times: ["10:00", "13:00", "16:00", "19:00", "22:00"],
      },
      {
        date: "2021-10-16",
        times: ["10:00", "13:00", "16:00", "19:00", "22:00"],
      },
      {
        date: "2021-10-17",
        times: ["10:00", "13:00", "16:00", "19:00", "22:00"],
      },
      {
        date: "2021-10-18",
        times: ["10:00", "13:00", "16:00", "19:00", "22:00"],
      },
      {
        date: "2021-10-19",
        times: ["10:00", "13:00", "16:00", "19:00", "22:00"],
      },
    ],
  },
];
