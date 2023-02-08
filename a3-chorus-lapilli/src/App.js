import { useState, useEffect } from 'react';

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay,currentMove }) {
  const [selected, setSelected] = useState(null)

  /*useEffect(() => {
    for(let i = 0; i < 9; i++) {
      let element = document.getElementById('${i}')
      console.log(element)
      console.log(selected, element?.id)
      if(element?.id === selected){
        element?.style?.color = "red"
      }else{
        element?.style?.color = "black"
      }
    }
  }, [selected])*/

  // handle click function for the ith box
  function handleClick(i) {
    // if currentMove <= 6 then play normally
    // otherwise
    if(currentMove > 5 ){
      console.log("Enter special moves")
      const nextSquares = squares.slice()
      // if nothing has been selected
      if(!selected && selected !== 0){
        console.log("mp selected", selected)
        
        if (calculateWinner(squares)|| !squares[i]){
          return
        }
        else {
          console.log("set selected " + i)
          console.log(selected)
          if(xIsNext && squares[i] === 'X'){
            setSelected(i) 
          }
          else if(!xIsNext && squares[i] === 'O'){
            setSelected(i)
          }
          //console.log("set selected " + i)
        }
      }
      else {
        if (calculateWinner(squares)|| squares[i]){
          console.log('dont do anything')
          setSelected(null)
          return
        }
        else {
          console.log("change location")
          if (selected === 0 ){
            if(i==1 || i == 3 || i==4) {
              if(squares[i]){
                setSelected(null)
                return;
              }
              if (xIsNext) {
                nextSquares[i] = 'X';
              } else {
                nextSquares[i] = 'O';
              }
              nextSquares[selected] = null 
              onPlay (nextSquares)
            }
          } else if (selected === 1){
            if(i == 0 || i== 2 || i==4 || i==3 || i==5){
              if(squares[i]){
                setSelected(null)
                return;
              }
              if (xIsNext) {
                nextSquares[i] = 'X';
              } else {
                nextSquares[i] = 'O';
              }
              nextSquares[selected] = null 
              onPlay (nextSquares)
            }
          }
          else if (selected === 2){
            if(i == 1 || i== 5 || i==4){
              if(squares[i]){
                setSelected(null)
                return;
              }
              if (xIsNext) {
                nextSquares[i] = 'X';
              } else {
                nextSquares[i] = 'O';
              }
              nextSquares[selected] = null 
              onPlay (nextSquares)
            }
          }
          else if (selected === 3){
            if(i == 0 || i== 1 || i==4 || i==6 || i==7){
              if(squares[i]){
                setSelected(null)
                return;
              }
              if (xIsNext) {
                nextSquares[i] = 'X';
              } else {
                nextSquares[i] = 'O';
              }
              nextSquares[selected] = null 
              onPlay (nextSquares)
            }
          }
          else if (selected === 4){
            if(i == 0 || i== 1 || i==2 || i==3 || i==5 || i==6 || i==7 || i==8){
              if(squares[i]){
                setSelected(null)
                return;
              }
              if (xIsNext) {
                nextSquares[i] = 'X';
              } else {
                nextSquares[i] = 'O';
              }
              nextSquares[selected] = null 
              onPlay (nextSquares)
            }
          }
          else if (selected === 5){
            if(i == 1 || i== 2 || i==4 || i==7 || i==8){
              if(squares[i]){
                setSelected(null)
                return;
              }
              if (xIsNext) {
                nextSquares[i] = 'X';
              } else {
                nextSquares[i] = 'O';
              }
              nextSquares[selected] = null 
              onPlay (nextSquares)
            }
          }
          else if (selected === 6){
            if(i == 3 || i== 4 || i==7){
              if(squares[i]){
                setSelected(null)
                return;
              }
              if (xIsNext) {
                nextSquares[i] = 'X';
              } else {
                nextSquares[i] = 'O';
              }
              nextSquares[selected] = null 
              onPlay (nextSquares)
            }
          }
          else if (selected === 7){
            if(i == 3 || i== 4 || i==5 || i==6 ||i==8){
              if(squares[i]){
                setSelected(null)
                return;
              }
              if (xIsNext) {
                nextSquares[i] = 'X';
              } else {
                nextSquares[i] = 'O';
              }
              nextSquares[selected] = null 
              onPlay (nextSquares)
            }
          }
          else if (selected === 8){
            if(i == 4 || i== 5 || i==7){
              if(squares[i]){
                setSelected(null)
                return;
              }
              if (xIsNext) {
                nextSquares[i] = 'X';
              } else {
                nextSquares[i] = 'O';
              }
              nextSquares[selected] = null 
              onPlay (nextSquares)
            }
          }
          setSelected(null)
        }
        
      }
    }
 else { 
  console.log("Normal move")
  console.log(currentMove)
  if (calculateWinner(squares) || squares[i]) {
    return;
  }
  const nextSquares = squares.slice();
  if (xIsNext) {
    nextSquares[i] = 'X';
  } else {
    nextSquares[i] = 'O';
  }
  onPlay(nextSquares);
 }
    
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square id={0} value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square id={1} value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square id={2} value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square id={3} value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square id={4} value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square id={5} value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square id={6} value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square  id={7}value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square id={8} value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} currentMove={currentMove} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
