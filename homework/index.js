let players = [
    {name: "Alex", height: 190, weight: 85, sport: "rugby"},
    {name: "Boris", height: 180, weight: 75, sport: "football"},
    {name: "Vladimir", height: 175, weight: 70, sport: "hockey"},
    {name: "George", height: 185, weight: 80, sport: "rugby"},
    {name: "Dmitry", height: 170, weight: 65, sport: "hockey"},
    {name: "Eugene", height: 195, weight: 90, sport: "football"},
    {name: "Zachary", height: 188, weight: 82, sport: "rugby"},
    {name: "Ivan", height: 182, weight: 77, sport: "football"},
    {name: "Kirill", height: 178, weight: 73, sport: "hockey"},
    {name: "Leonid", height: 192, weight: 87, sport: "rugby"},
    {name: "Michael", height: 176, weight: 71, sport: "hockey"},
    {name: "Nicholas", height: 198, weight: 93, sport: "football"},
    {name: "Oleg", height: 186, weight: 79, sport: "rugby"},
    {name: "Paul", height: 174, weight: 69, sport: "hockey"},
    {name: "Roman", height: 184, weight: 78, sport: "football"}
    ];

//              Задание 1

// let random = Math.round(Math.random() * 21);

let playersWithGoals = players.map((obj) => {
    let newPlayersWithGoals
    newPlayersWithGoals = {...obj};
    newPlayersWithGoals.goals = Math.round(Math.random() * 21);;
    return newPlayersWithGoals;
});

console.log(playersWithGoals);

//              Задание 2


const filterOfHeight = players.filter((obj) => {return obj.height >= 180 && obj.weight <80});

console.log(filterOfHeight);


//              Задание 3


const filterOfGoals = playersWithGoals.sort(
    (a, b) => {
        if(a.goals < b.goals){
             return -1;
        }
        if (a.goals > b.goals) {
            return 1;
        } else {
            return 0;
        }
});

console.log(filterOfGoals);
