const myChart = document.getElementById("myChart");

const pintarGrafica = (datoArray) => {
    const idJugador = datoArray.map((jugador) => {
        return jugador.first_name;
    });

    const calificaciones = datoArray.map((jugador) => {
        return jugador.id;
        ;
        ;
    });

new Chart(myChart, {
    type: "line", // line, pie, bar, radar, doughnut
    data: {
      labels: idJugador, // eje x
      datasets: [
        {
          label: "Rango de ID asigando por conferencia 2018",
          data: calificaciones, // eje y
          borderWidth: 2,
          backgroundColor: ["red","blue","white"],
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
};

export {pintarGrafica}; 