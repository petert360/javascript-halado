fetch('https://raw.githubusercontent.com/jokecamp/FootballData/master/UEFA_European_Championship/Euro%202016/players_json/hungary-players.json')
    .then(response => response.json())
    .then(data => {
        console.log(data)
    });