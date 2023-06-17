var bloodChart = document.getElementById("bloodChart").getContext('2d');
var myLineChart = new Chart(bloodChart, {
    type: 'line',
    data: {   //Add datasets necessary
        labels: ["Jun 10", "Jun 11", "Jun 12", "Jun 13", "Jun 14", "Jun 15", "Jun 16"],    //Change using database data
        datasets: [
            {
                label: "Blood Pressure",
                data: [28, 48, 40, 19, 86, 27, 90],
                borderColor: [
                    'rgba(0, 10, 130, .7)',
                ],
                borderWidth: 2              }
        ]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'Date'     }
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'Blood Pressure'     }
            }
        }
    }
});