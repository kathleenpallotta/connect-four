import React, {Component} from 'react';
import styled, {keyframes} from 'styled-components';
import {bounce, bounceIn } from 'react-animations';
import './App.css';

// const mobile = false;

// if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
//     mobile = true;
// }

let countingSpots = 1;

export class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            whoseTurn: 'player1',
            gameBoard: Array(42),
            gameWinner: '',
            // countingSpots: 1
        }
    }
    
    // handleCountingSpots = value => {
    //     this.setState({
    //         countingSpots: value
    //     })
    // }

    verifyBoard = () => {
        //What happens when there's no room left to play and there is no winner?
        // for (let i = 1; i < 43; i++) {
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

    handleClick = event => {
        const spot = event.target.id;
        const player = this.state.whoseTurn;
        let nextFreeSpot = this.getFreeSpot(spot)
        if (nextFreeSpot >= 1) {
            this.setState({
                whoseTurn: this.handlePlayer(player),
                gameBoard: Array[nextFreeSpot] = player
            })
            document.getElementById(nextFreeSpot).className = player
            if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {    
                nextFreeSpot = this.getFreeSpot(spot)
                if (nextFreeSpot >= 1) {
                    document.getElementById(nextFreeSpot).className = this.handlePlayer(player)
                }
            } else {
                return;
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

        } else {
            return;
        }
        countingSpots = 1;
        // this.setState({countingSpots: 1})
    }

    verifyDiagonalUpright = () => {
        for (let i = 4, score = 0; i > 22; i = i - 6) {
            if (Array[i] !== undefined
                && (Array[i] === Array[i-6])) {
                score++
            } else {
                score = 0;
            }

            if (score === 3) {
                return Array[i]
            }
        }

        for (let i = 29, score = 0; i > 5; i = i - 6) {
            if (Array[i] !== undefined
                && (Array[i] === Array[i-6])) {
                score++
            } else {
                score = 0;
            }

            if (score === 3) {
                return Array[i]
            }
        }

        for (let i = 36, score = 0; i > 6; i = i - 6) {
            if (Array[i] !== undefined
                && (Array[i] === Array[i-6])) {
                score++
            } else {
                score = 0;
            }
            if (score === 3) {
                return Array[i]
            }
        }

        for (let i = 37, score = 0; i > 7; i = i - 6) {
            if (Array[i] !== undefined
                && (Array[i] === Array[i-6])) {
                score++
            } else {
                score = 0;
            }

            if (score === 3) {
                return Array[i]
            }
        }

        for (let i = 38, score = 0; i > 14; i = i - 6) {
            if (Array[i] !== undefined
                && (Array[i] === Array[i-6])) {
                score++
            } else {
                score = 0;
            }

            if (score === 3) {
                return Array[i]
            }
        }

        for (let i = 38, score = 0; i > 14; i = i - 6) {
            if (Array[i] !== undefined
                && (Array[i] === Array[i-6])) {
                score++
            } else {
                score = 0;
            }

            if (score === 3) {
                return Array[i]
            }
        }
        
        for (let i = 39, score = 0; i > 21; i = i - 6) {
            if (Array[i] !== undefined
                && (Array[i] === Array[i-6])) {
                score++
            } else {
                score = 0;
            }

            if (score === 3) {
                return Array[i]
            }
        }

    }

    verifyDiagonalUpleft = () => {
        for (let i = 15, score = 0; i < 39; i = i + 8) {
            if (Array[i] !== undefined
                && (Array[i] === Array[i+8])) {
                score++
            } else {
                score = 0;
            }

            if (score === 3) {
                return Array[i]
            }
        }

        for (let i = 8, score = 0; i < 40; i = i + 8) {
            if (Array[i] !== undefined
                && (Array[i] === Array[i+8])) {
                score++
            } else {
                score = 0;
            }

            if (score === 3) {
                return Array[i]
            }
        }

        for (let i = 1, score = 0; i < 41; i = i + 8) {
            if (Array[i] !== undefined
                && (Array[i] === Array[i+8])) {
                score++
            } else {
                score = 0;
            }

            if (score === 3) {
                return Array[i]
            }
        }

        for (let i = 2, score = 0; i < 42; i = i + 8) {
            if (Array[i] !== undefined
                && (Array[i] === Array[i+8])) {
                score++
            } else {
                score = 0;
            }

            if (score === 3) {
                return Array[i]
            }
        }

        for (let i = 3, score = 0; i < 35; i = i + 8) {
            if (Array[i] !== undefined
                && (Array[i] === Array[i+8])) {
                score++
            } else {
                score = 0;
            }

            if (score === 3) {
                return Array[i]
            }
        }

        for (let i = 4, score = 0; i < 28; i = i + 8) {
            if (Array[i] !== undefined
                && (Array[i] === Array[i+8])) {
                score++
            } else {
                score = 0;
            }

            if (score === 3) {
                return Array[i]
            }
        }
    }

    verifyColumns = () => {
        for (let y = 0; y < 7; y++){
            for (let i = y; i <= (y+35); i = i + 7) {
                if (Array[i] && (Array[i] === Array[i+7]) && (Array[i] === Array[i+14]) 
                && (Array[i] === Array[i+21])) {
                    return Array[i]
                }
            }
        }
    }

    verifyLines = () => {
        let countingSpaces = -1;
        for (let i = 0; i < 6; i++) {
            for (let y = 0; y < 7; y++) {
                countingSpaces++
                if (
                    (Array[countingSpaces] !== undefined)
                    && (Array[countingSpaces] === Array[countingSpaces+1])
                    && (Array[countingSpaces] === Array[countingSpaces+2])
                    && (Array[countingSpaces] === Array[countingSpaces+3])
                ) {

                    if ((countingSpaces > 3 && countingSpaces <= 6) ||
                        (countingSpaces > 10 && countingSpaces <= 13) ||   
                        (countingSpaces > 17 && countingSpaces <= 20) ||
                        (countingSpaces > 24 && countingSpaces <= 27) ||
                        (countingSpaces > 31 && countingSpaces <= 34) || 
                        (countingSpaces > 39 && countingSpaces <= 41)) {
                            return;
                        } else {
                            return Array[countingSpaces]
                        }
                }

            }
        }

    }

    handleMouseOver = event => {
        const spot = event.target.id;
        const player = this.state.whoseTurn;
        const nextFreeSpot = this.getFreeSpot(spot)
        if (nextFreeSpot >= 1) {
            document.getElementById(nextFreeSpot).className = player
        }
    }    

    handleMouseOut = event => {
        const spot = event.target.id;
        const player = this.state.whoseTurn;
        const nextFreeSpot = this.getFreeSpot(spot)
        if (nextFreeSpot >= 1 && Array[nextFreeSpot] === undefined) {
            document.getElementById(nextFreeSpot).className = 'spots'
        }
    }

    getFreeSpot = spot => {
        if ((spot == 36) || (spot == 29) || (spot == 22) || (spot == 15) 
        || (spot == 8) || (spot == 1)) {
            for (let i = 36; i >= 1; i = i-7) {
                if (Array[i] === undefined) {
                    return i;
                }
            }
        } else if ((spot == 37) || (spot == 30) || (spot == 23) || (spot == 16) 
        || (spot == 9) || (spot == 2)) {
            for (let i = 37; i > 1; i = i-7) {
                if (Array[i] === undefined) {
                    return i;
                }
            }
        } else if ((spot == 38) || (spot == 31) || (spot == 24) || (spot == 17) 
        || (spot == 10) || (spot == 3)) {
            for (let i = 38; i > 1; i = i-7) {
                if (Array[i] === undefined) {
                    return i;
                }
            }
        } else if ((spot == 39) || (spot == 32) || (spot == 25) || (spot == 18) 
        || (spot == 11) || (spot == 4)) {
            for (let i = 39; i >= 1; i = i-7) {
                if (Array[i] === undefined) {
                    return i;
                }
            }
        } else if ((spot == 40) || (spot == 33) || (spot == 26) || (spot == 19) 
        || (spot == 12) || (spot == 5)) {
            for (let i = 40; i >= 1; i = i-7) {
                if (Array[i] === undefined) {
                    return i;
                }
            }
        } else if ((spot == 41) || (spot == 34) || (spot == 27) || (spot == 20) 
        || (spot == 13) || (spot == 6)) {
            for (let i = 41; i >= 1; i = i-7) {
                if (Array[i] === undefined) {
                    return i;
                }
            }
        } else if ((spot == 42) || (spot == 35) || (spot == 28) || (spot == 21) 
        || (spot == 14) || (spot == 7)) {
            for (let i = 42; i >= 1; i = i-7) {
                if (Array[i] === undefined) {
                    return i;
                }
            }
        } else {
            return;
        }
    }
    
    handlePlayer = player => {
        if (player === 'player1') {
            return 'player2'
        } else {
            return 'player1'
        }
    }

    renderWhoseTurn(player) {
        if (player === 'player1') {
            return (
                <span className='player1-text-decoration'>1</span>
            )
        } else {
            return (
                <span className='player2-text-decoration'>2</span>
            )
        }
    }

    render() {
        return (
            <>
            <div className = 'board'>
                <div className = 'game-title'>
                    <Logo />
                    <span className='tutorial'>
                        Click anywhere over your chosen column to fill the lowest available space.
                        Whoever forms a horizontal, vertical, or diagonal line of four balls wins.
                    </span>
                    <DisplayWhoseTurn whoseTurn={this.state.whoseTurn} renderWhoseTurn={this.renderWhoseTurn}
                     gameWinner={this.state.gameWinner}/>
                </div>
                <Lines whoseTurn={this.state.whoseTurn} gameWinner={this.state.gameWinner}
                handleClick={this.handleClick} handleMouseOver={this.handleMouseOver}
                // handleCountingSpots={this.handleCountingSpots} 
                handleMouseOut={this.handleMouseOut} verifyBoard={this.verifyBoard} />
            </div>
            </>
        )
    }
}

const DisplayWhoseTurn = props => {
    if (props.gameWinner !== '') {
        return null
    } else {
        return (
            <>
            <p>
                Now's player {props.renderWhoseTurn(props.whoseTurn)} turn!
            </p>
            </>
        )
    }
}

const Logo = () => {
    return (
        <div className='div-image'></div>
    )
}

const GameOver = props => {
    let gameWinner = props.gameWinner
    let s
    if (gameWinner === 'player1') {
        s = 1
    } else if (gameWinner === 'player2') {
        s = 2
    }
    return s
}
  
const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} 1`;
const BounceIn = styled.div`animation: 2s ${keyframes`${bounceIn}`} 1`;

const restartGame = () => {
    window.location.reload()
}

const Lines = props => {
    if (props.verifyBoard() === true) {
        return (
            <>
            <div className='game-over'><Bounce>GAME<br/>OVER</Bounce>

                <BounceIn><div className='button' onClick={restartGame} ><p>Play again</p></div></BounceIn>
            </div>
            </>
        )
    } else 

    if (props.gameWinner !== '') {
        let switchTextColor
        if (props.gameWinner === 'player1') {
            switchTextColor = 1
        } else {
            switchTextColor = 2
        }
        return (
            <>
            <div className='game-over'><Bounce><span className={`player${switchTextColor}-text-decoration`}>
                PLAYER <GameOver gameWinner={props.gameWinner}/></span><br/> WINS</Bounce>

                <BounceIn><div className='button' onClick={restartGame} ><p>Play again</p></div></BounceIn>
            </div>
            </>)
    } 
    else {
        const rows = [];
        for (let i = 1; i < 7; i++) {
            rows.push(<div className = 'lines'>
                <Spots whoseTurn={props.whoseTurn}
                // handleCountingSpots={props.handleCountingSpots}
                handleClick={props.handleClick} handleMouseOver={props.handleMouseOver}
                handleMouseOut={props.handleMouseOut} row={i} />
            </div>);
        }
        return rows;
    } 
}

const Spots = props => {
    // let value = props.CountingSpots
    // value++
    const spots = [];
    for (let i = 1; i < 8; i++) {
            spots.push(<div className = 'spots'
                onClick={props.handleClick} id={countingSpots}
                onMouseOver={props.handleMouseOver}
                onMouseOut={props.handleMouseOut}>
                </div>);
            // props.handleCountingSpots(value);
            countingSpots++
    }
    return spots;
}