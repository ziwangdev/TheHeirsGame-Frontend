export function getUserPlayer(gameValue, userValue){
    // Get user's player data
    let userPlayer = null;
    let players = gameValue.players;
    let playersKeys = Object.keys(players);
    for(var i = 0; i < playersKeys.length; i++){
        let key = playersKeys[i];
        console.log(players[key]);
        if(players[key].name === userValue.name && players[key].character === userValue.character){
            userPlayer = players[key];
            return userPlayer;
        }
    }

}
