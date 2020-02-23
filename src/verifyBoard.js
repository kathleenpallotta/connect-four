const verifyBoard = () => {
    //What happens when there's no room left to play and there is no winner?
    // for (let i = 0; i < 42; i++) {
    //     Array[i] = 'teste'
    // }
    let winner = this.state.gameWinner
    let counter = 0;
    for (let i = 1; i < 43; i++) {
        if (Array[i] !== undefined) {
            counter++
        }
    }
    if (counter === 42 && winner === '') {
        return true
    }
}