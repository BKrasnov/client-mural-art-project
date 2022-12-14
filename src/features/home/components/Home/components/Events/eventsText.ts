export const eventsInfo = {
  title: "Мероприятия",
  type: {
    0: "Выставки",
    1: "Мастер-классы",
  },
};

const link = {
  0: "https://firebasestorage.googleapis.com/v0/b/mural-757c6.appspot.com/o/murals%2FIvan-Yarigin.jpg?alt=media&token=b0871515-7934-4966-96ce-6f5862e34579",
  1: "https://firebasestorage.googleapis.com/v0/b/mural-757c6.appspot.com/o/murals%2Fv-syrikov.jpg?alt=media&token=cc275ef5-9299-4c3e-9a37-317473ce6827",
  2: "https://firebasestorage.googleapis.com/v0/b/mural-757c6.appspot.com/o/murals%2Fmayakovskiy.png?alt=media&token=79e084bb-ace9-44d5-b1b6-3f90f081a254",
};

export const events = [
  {
    id: 0,
    title: "Иван Ярыгин",
    location: "Красноярск",
    date: "12 ноября",
    description:
      "Это выставка поддержки и развития современного уличного искусства под открытым небом, в режиме реального времени. На кубах высотой почти 2,5 метр граффитисты будут создавать картины баллончиками с краской.",
    link: link[0],
  },
  {
    id: 1,
    title: "Владимир Суриков",
    location: "Красноярск",
    date: "1 января",
    description:
      "Это выстбах высотой почти 2,5 метр граффитисты будут создавать картины баллончиками с краской.",
    link: link[1],
  },
  {
    id: 2,
    title: "Владимир Маяковский",
    location: "Красноярск",
    date: "15 сентября",
    description:
      "Lorem ipsum dolor sit amet, consectetur aLorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem beatae laudantium quos inciduLorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem beatae laudantium quos incidudipisicing elit. Voluptatem beatae laudantium quos incidunt vitae id praesentium, ullam nisi magni natus iusto amet nemo error dignissimos ea blanditiis quaerat libero delectus!",
    link: link[2],
  },
];
