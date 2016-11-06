define([], function () {
    // private members
    let playerName = '';

    function logPlayer() {
        console.log(`The current player is ${playerName}.`);
    }

    function setName(newName) {
        playerName = newName;
    }

    function getName() {
        return playerName;
    }

    return {
        logPlayer,
        setName,
        getName
    }
});