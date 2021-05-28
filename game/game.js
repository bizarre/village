class Game {

    constructor(name, gameContainer, gridSize) {
        this.name = name
        this.gameContainer = gameContainer
        this.canvas = gameContainer.canvas
        this.ctx = canvas.getContext('2d')
    }

  
    
    tick () {
    
    }

    render () {
       
     }

    processInput(key) {
      if (this.locked || this.grid.flat().filter(tile => tile && tile.isMoving() && !tile.isFinishedMoving()).length > 0) {
        return
      }

      switch (key) {
        case "arrowdown":

          break
        case "arrowup":

          break
        case "arrowleft":
        
          break;
        case "arrowright":
         
        default:
          return
      }
    }

   
}