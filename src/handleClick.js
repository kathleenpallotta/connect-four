import {countingSpots} from './connect4.js'

const handleClick = event => {
    const spot = event.target.id;
    const player = this.state.whoseTurn;
    let nextFreeSpot = this.getFreeSpot(spot)
    if (nextFreeSpot >= 1) {
        this.setState({
            whoseTurn: this.handlePlayer(player),
            gameBoard: Array[nextFreeSpot] = player
        })
        document.getElementById(nextFreeSpot).className = player
        nextFreeSpot = this.getFreeSpot(spot)
        if (nextFreeSpot >= 1) {
            document.getElementById(nextFreeSpot).className = this.handlePlayer(player)
        }

        if (this.verifyLines() !== undefined) {
            this.setState({
                gameWinner: this.verifyLines(),
            })
        }

        if (this.verifyColumns() !== undefined) {
            this.setState({
                gameWinner: this.verifyColumns(),
            })
        }

        if (this.verifyDiagonalUpleft() !== undefined) {
            this.setState({
                gameWinner: this.verifyDiagonalUpleft(),
            })
        }

        if (this.verifyDiagonalUpright() !== undefined) {
            this.setState({
                gameWinner: this.verifyDiagonalUpright(),
            })
        }

    } else if (this.verifyBoard() === true){

    } else {
        return;
    }
    countingSpots = 1;
}