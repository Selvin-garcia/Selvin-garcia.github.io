
//SPACER  - FORMATTING
var spacer = {
  blank: function () {
    return "";
  },

  newLine: function () {
    return "\n";
  },

  line: function (length, character) {
    var characterIndex;
    
    var longString = "****************************************";
    longString += "----------------------------------------";
    longString += "========================================";
    longString += "++++++++++++++++++++++++++++++++++++++++";
    longString += "                                        ";

    length = Math.max(0, length);
    length = Math.min(40, length);
    
    characterIndex = longString.indexOf(character);
    
    if (characterIndex === -1) {
      characterIndex = 0;
    }
    
    return longString.substr(characterIndex, length);
  },
  
  wrap : function (text, length, character) {
    var padLength = length - text.length - 3;
    var wrapText = character + " " + text;      
    wrapText += spacer.line(padLength, " ");
    wrapText += character;
    return wrapText;
  },

  box: function (text, length, character) {
    var boxText = spacer.newLine();
    boxText += spacer.line(length, character) + spacer.newLine();
    boxText += spacer.wrap(text, length, character) + spacer.newLine(); 
    boxText += spacer.line(length, character) + spacer.newLine();
    return boxText;
  }
};


//Market constructor
(function (){
  var Market = function () {
    var players = [];
    
        this.addPlayer = function(player) {
    players.push(player);
var newPlayer = player;
return newPlayer;
}
         this.getOnePlayer = function(playerI) {
    var getPlayer = players[playerI];
return getPlayer;
}
    

   this.getAllPlayers = function () {
      var data = {
          
"Allplayers": players.slice()

      
      };
    return data
   };
  Market.prototype.toString = function() {
    return "Market created start adding players"; // Replace with your desired custom name
};
  };
  
  if (window.League === undefined) {
    window.League = {};
  }
  
  League.Market = Market;
  
  

   

  // *Metods***********************************
  
 /* p = new  League.Market()
  console.log(p.toString());
  */
  
// p.addPlayer(League.playersData[0])
//p.getAllPlayers().Allplayers[0]
//p.getAllPlayers().Allplayers[1]
//p.getOnePlayer(0)
  
 //***********************************

}) ();



(function () {
  var Team = function(name) {
    var teamName = name;
    var teamPlayers = [];
    var formations = [];
    
    this.addFormation = function (formation) {
      formations.push(formation)
      return formation
    }
    
    this.buyPlayer = function (player) {
      teamPlayers.push(player)
      return player
    };
   

  
  
   this.getTeam = function () {
      var data = {
        "name" : teamName,
        "formations" : formations.slice(),
"players": teamPlayers.slice()

      
      };
    return data
   };
    
  };
  if (window.League === undefined) {
    window.League = {};
  }
  
  League.Team = Team;
  
  
/* COMMANDS


//var c = new League.Team("test")
//c.buyPlayer(p.getAllPlayers().Allplayers[0])
 // c.addFormation("433")


 //c.getTeam()
 */
  
  
}) ();




//PLAYER CONSTRUCTOR
(function () {
  var Player = function (name,currentTeam,initScore) {
   var score = initScore; 
var team = currentTeam.getTeam().name;


    
    this.getData = function () {
      var data = {
        "name" : name,
        "team": team,
        "score": score
        

        
        
      };
    
      return data;
  };
  };
  if (window.League === undefined) {
    window.League = {};
  }
  
  League.Player = Player;
  
  /*


var d = new League.Player ("Antony",c)
d.getData()


*/

  
})();





//player view
(function () {
  var getTitleInfo = function (playerData) {
    return playerData.name + " " + playerData.team ;
  };
  
  var getTeamInfo =  function (playerData) {
     return playerData.team;
  }
 
  var getPlayerInfo = function (playerData) {
    return getTitleInfo(playerData) + " " + getTeamInfo(playerData);
  };
  
  
var getInfo = function (playerData) {
    var info = spacer.box(getTitleInfo(playerData), 40, "*");
    info += spacer.line(40, "*");
    info += spacer.newLine();

    return info;
  }; 
  
  var render = function (player) {
    var playerDiv = document.getElementById("player");
    playerDiv.innerHTML = getInfo(player.getData());
  };  
  
  if (window.League === undefined) {
    window.League = {};
  }
  
  League.playerView = {
    render: render
  };
  
// League.playerView.render(d);
})();







///PLAYER DATA



(function() {
  var playersData = [
    {
      "name" : "Modric",
      "grls" : "90",
       "price" : "100"
       },
                 {
      "name" : "Nauer",
      "grl" : "84",
       "price" : "101"
       }
         
    ]
 
                 
         if (window.League === undefined) {
    window.League = {};
  }
  
  League.playersData = playersData;
  /*
League.playersData[0]
League.playersData[0]
League.playersData.players[0].grl



*/

})();
     








///MESSAGE VIEW

(function () {

  var getMessageInfo = function (messageData) {
    return "*** " + messageData + " ***";
  };
  
  var render = function (message) {
        var messageDiv = document.getElementById("message");
    messageDiv.innerHTML = getMessageInfo(message);
  };
  
  
  function clear () {
 var messageDiv = document.getElementById("messages");
 messageDiv.innerHTML = "";
 }
  
  
  
  if (window.League === undefined) {
    window.League = {};
  }
    
  League.messageView = {
    render: render,
    clear: clear
  };
  
// var e = League.messageView
// e.render("Hello")


})();



  



//CHALLENGES DATA 

  
(function () {
  
  var gameData = {

    "challenges" : [
      {
        "type" : "Defense",
        "description" : "the rival is attacking with 2 players, one player is trying to dribble you center back",
        "options" : [ "brutal tackle", "get goalkeeper out"],
   
              "success" : "goalkeeper made the clearence",
              "failure" : "your  defender commited a penalty and goal.",
              "requires" : "get goalkeeper out",
              "goal" : false,
              "concede":true,
               "players":["0","1","18","19","22"],
               "position":[[15,200],[75,170],[68,200],[90,250],[60,205]],
               "positionCorrect":[[55,200],[75,170],[68,200],[90,250],[10,300]],
           "positionIncorrect":[[15,160],[80,1150],[85,200],[90,300],[10,250]],
    
      
       
            },
       {
        "type" : "Attack",
        "description" : "Your midfilder has the ball and 1 more player is running in the sides, 2 defending in the middle.",
        "options" : [ "pass the ball to the other player", "dribble tbe defense","power shoot" ],
   
              "success" : "marvelous change of direction and goal.",
              "failure" : "the midfilder lost the ball.",
              "requires" : "pass the ball to the other player",
              "goal" : true,
              "concede":false,
          "players":["3","12","15","9","10"],
               "position":[[500,180],[400,180],[300,150],[350,50],[480,50]],
             "positionCorrect":[[80,350],[30,300],[30,250],[30,200],[30,150]],
           "positionIncorrect":[[500,180],[400,180],[300,150],[350,50],[480,50]],
    
       
            },
       {
        "type" : "Attack",
        "description" : "going left the rival goalkeeper is out.",
        "options" : [ "soft touch to a side", "throw it above keeper head","power shot" ],
   
              "success" : "great goal!",
              "failure" : "the midfilder lost the ball.",
              "requires" : "soft touch to a side",
              "goal" : true,
              "concede":false,
          "players":["0","20","9","8","7"],
               "position":[[580,180],[470,180],[480,150],[500,50],[350,50]],
             "positionCorrect":[[80,350],[30,300],[30,250],[30,200],[30,150]],
           "positionIncorrect":[[80,350],[30,300],[30,250],[30,200],[30,150]],
    
       
            }
             ]
  }
         if (window.League === undefined) {
    window.League = {};
  }
  
  League.gameData = gameData;
       
/* League.gameData.challenges[0] */

 
 /* League.gameData.challenges[0].type */
})();







//TIMEBOARD CONTROLLER

(function () {
  var timeBoard  = function (){
  var hours = 0;
  var minutes = 0;
  var seconds = 0;
  var milliseconds = 0;
  var intervalId;

  this.updateTime = function (Length) {
    milliseconds += 10;
    if (milliseconds >= 1000) {
      seconds++;
      milliseconds = 0;
    }

    if (seconds >= 60) {
      minutes++;
      seconds = 0;
    }

    if (minutes >= 60) {
      hours++;
      minutes = 0;
    }
    
   if(milliseconds >= Length) { hours = 0;
   minutes = 0;
   seconds = 0;
   milliseconds = 0; }

     var formattedTime = `${hours}:${minutes}:${seconds}.${milliseconds}`;
   
  // Log the formatted time

   
      
    // Return the interval ID to allow stopping the timer if needed
    return intervalId;
    

 
  
 
  };
    return intervalId;
 
  
  }
   if (window.League === undefined) {
    window.League = {};
  }

  League.timeBoard = timeBoard;
  
  // Return the interval ID to allow stopping the timer if needed
    //return intervalId;
 
  // To pause the timer:
  // clearInterval(intervalId);

  // To reset the timer:
  // hours = 0;
  // minutes = 0;
  // seconds = 0;
  // milliseconds = 0;
  // console.log(`${hours}:${minutes}:${seconds}.${milliseconds}`);
  // League.updateTime(20);
  
  
  
  
  // Create an instance of the timeBoard
//  var myTimeBoard = new League.timeBoard();

  // Example usage:
// var d = setInterval(()=> {myTimeBoard.updateTime(20); },1000)

//1.1
})();


//INIT MAIN
(function () {
   var player;
var inPlay = false;
  var currentChallenge = 0;
var scorePlayerOne = 0;
  var scorePlayerTwo = 0;
   var commands = document.getElementById("commands");
 
  
  var init  = function ( ) {
    
var p = new  League.Market()
    
    var c = new League.Team("FC Barcelona")
c.buyPlayer(p.getAllPlayers().Allplayers[0])
  c.addFormation("433")
    player = new League.Player ("Selvin",c,0)
        scorePlayerTwo =  scorePlayerTwo + player.getData().score;
    
// var e =  League.gameData.challenges[0]
    while (commands.firstChild) {
                commands.removeChild(commands.firstChild);}
    game.gameChallenges();
   inPlay = true;
    render();
    return "";     

    
  };
  
  
    var renderMessage = function (message) {
    League.messageView.render(message);
  };
  

  
 
 var gameChallenges = function () {
   
   
   field.drawField();
        field.drawPlayers();
   
   
   
   while (commands.firstChild) {
                commands.removeChild(commands.firstChild);
            }
 var challenges =  League.gameData.challenges;
   
if(challenges[currentChallenge] === undefined) {
renderMessage("game finished");
  //var restartGames = document.getElementById("restartGame");
   restartGames.style.display = "block";
   soccerField.style.display = "none";
   

}
   else {
   var challenge =  challenges[currentChallenge];
 
     renderMessage(challenge.type + " "+ " *** " + challenge.description);
   
  
     
 challenge.options.forEach(function (option) {
 
   var commands = document.getElementById("commands");
  
   
   
   
   
     var  newButton = document.createElement("button");
   newButton.innerText =  option;
    commands.appendChild(newButton);
   
   newButton.addEventListener("click", function(e) {
     game.gameResponse(e.target.innerText);

   
   });
 }); 
     
     
    
     

      // Example of updating a player's position
        setTimeout(() => {
           var positionindex = -1 ;
          challenge.players.forEach(function(e){
           
          var indexPlayer =  e
          
var index =   challenge.players.indexOf(indexPlayer);
              positionindex += 1;
       
         

            field.updatePlayerPosition(challenge.players[index], challenge.position[positionindex][0], challenge.position[positionindex][1]);
        }, 5000);
   
             });   
     
     
      
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
  
   }
     
 return challenges;
 
 }
 

 var gameResponse = function (answer) {
   var  challenge =  League.gameData.challenges[currentChallenge];
     
   if (answer === challenge.requires ) { 
     
 
     
     
     

      // Example of updating a player's position
        setTimeout(() => {
           var positionindex = -1 ;
          challenge.players.forEach(function(e){
           
          var indexPlayer =  e
          
var index =   challenge.players.indexOf(indexPlayer);
              positionindex += 1;
       
         

            field.updatePlayerPosition(challenge.players[index], challenge.positionCorrect[positionindex][0], challenge.positionCorrect[positionindex][1]);
        }, 5000);
   
             });   
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
    if (challenge.goal === true && challenge.concede === false) {
     scorePlayerTwo+= 1;
    
    
     
      renderMessage(League.gameData.challenges[currentChallenge].success);
      currentChallenge+=1;
      
       while (commands.firstChild) {
                commands.removeChild(commands.firstChild);
            }
        setTimeout(()=> { render(); },5000);
    } else if ( challenge.goal === false && challenge.concede === true) {
     

     renderMessage(League.gameData.challenges[currentChallenge].success);
       currentChallenge+=1;
      console.log(currentChallenge);
       while (commands.firstChild) {
                commands.removeChild(commands.firstChild);
            }
            setTimeout(()=> { render(); },5000);
     }}
    if (answer != challenge.requires ) {
      
      
      
      

      // Example of updating a player's position
        setTimeout(() => {
           var positionindex = -1 ;
          challenge.players.forEach(function(e){
           
          var indexPlayer =  e
          
var index =   challenge.players.indexOf(indexPlayer);
              positionindex += 1;
       
         

            field.updatePlayerPosition(challenge.players[index], challenge.positionIncorrect[positionindex][0], challenge.positionIncorrect[positionindex][1]);
        }, 5000);
   
             });   
     
     
     
     
      
      
      
      
  
      
      
      
      
      
      
      
   if (challenge.goal === true && challenge.concede === false )  {

   
      renderMessage(League.gameData.challenges[currentChallenge].failure)
       currentChallenge+=1;
     
      while (commands.firstChild) {
                commands.removeChild(commands.firstChild);
            }
            setTimeout(()=> { render(); },5000);
   } else if ( challenge.goal === false && challenge.concede === true) {
     
     
     renderMessage(League.gameData.challenges[currentChallenge].failure);
      scorePlayerOne+= 1;
    currentChallenge+=1;
    
      
            setTimeout(()=> { render(); },5000);
   }}
   return "";
 }
 
 var gameScore = function () {
    var timeBoardDiv = document.getElementById("timeBoard");
     
  timeBoardDiv.innerHTML =`PlayerOne ${scorePlayerOne}  -  PlayerTwo ${scorePlayerTwo}`;
   
  
 };
 

var checkGameStatus = function () {
  var message;
    if ( (currentChallenge + 1) == game.gameChallenges().length) {
        
        message="game is over";
    
  
    } else if( (currentChallenge + 1) < game.gameChallenges().length ) {  
    
    message="game continues...";
  }
       return console.log(message);  
  
  };
  

  
  // 1.2
  var render = function () {
   console.clear();
    if (inPlay) {
    
       League.playerView.render(player);
      game.gameChallenges();
     gameScore();
      
     
      
    
      
    }
  };
  
  
  var restartGame = function () {
        currentChallenge = 0;
        scorePlayerOne = 0;
        scorePlayerTwo = 0;
        init();
    };
  
  
  
  //1.0
   window.game = {
   /* get: get,
    go: go,
    use: use, */
    init: init,
     gameChallenges: gameChallenges,
     gameResponse: gameResponse,
     restartGame: restartGame,
     //gameScore: gameScore
  };
  // game.init()
  //game.gameChallenges()
  //game.gameResponse("Pass the ball to either side")
  
  
  })();
  




(function(){
   
  p = new  League.Market()
  console.log(p.toString());
  
  
p.addPlayer(League.playersData[0])
p.getAllPlayers().Allplayers[0]
p.getAllPlayers().Allplayers[1]
p.getOnePlayer(0)
  
var c = new League.Team("test")
c.buyPlayer(p.getAllPlayers().Allplayers[0])
  c.addFormation("433")


 c.getTeam()
 




})();


var restartGames = document.getElementById("restartGame");
var startGame = document.getElementById("startGame");
var playerStart = document.getElementById("player");

var messageStart = document.getElementById("message");
var timeBoardStart = document.getElementById("timeBoard");
var commandsStart = document.getElementById("commands");
var soccerField = document.getElementById("soccerField");

startGame.addEventListener("click", function() {

  game.init();
     playerStart.style.display = "block";
   messageStart.style.display = "block";
  timeBoardStart.style.display = "block";
  commandsStart.style.display = "block";
  restartGame.style.display = "none";
  startGame.style.display = "none";
    soccerField.style.display = "block";
  

  
 
 
  
});





restartGame.addEventListener("click", function() {
game.restartGame();

     playerStart.style.display = "block";
   messageStart.style.display = "block";
  timeBoardStart.style.display = "block";
  commandsStart.style.display = "block";
  restartGame.style.display = "none";
  startGame.style.display = "none";
   soccerField.style.display = "block";
  

  
 
 
  
});








 (function () {
        const canvas = document.getElementById('soccerField');
        const ctx = canvas.getContext('2d');

        var drawField = function () {
            ctx.fillStyle = 'green';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.strokeStyle = 'white';
            ctx.lineWidth = 2;

            // Draw the outer lines
            ctx.strokeRect(10, 10, canvas.width - 20, canvas.height - 20);

            // Draw the center line
            ctx.beginPath();
            ctx.moveTo(canvas.width / 2, 10);
            ctx.lineTo(canvas.width / 2, canvas.height - 10);
            ctx.stroke();

            // Draw the center circle
            ctx.beginPath();
            ctx.arc(canvas.width / 2, canvas.height / 2, 50, 0, 2 * Math.PI);
            ctx.stroke();

            // Draw the penalty areas
            ctx.strokeRect(10, (canvas.height / 2) - 60, 60, 120);
            ctx.strokeRect(canvas.width - 70, (canvas.height / 2) - 60, 60, 120);
        }

        const players = [
            { x: 10, y: 200, team: 'black' },
            { x: 80, y: 140, team: 'red' },
            { x: 80, y: 250, team: 'red' },
            { x: 90, y: 50, team: 'red' },
            { x: 90, y: 350, team: 'red' },
            { x: 160, y: 140, team: 'red' },
            { x: 160, y: 260, team: 'red' },
            { x: 165, y: 50, team: 'red' },
            { x: 165, y: 260, team: 'red' },
            { x: 165, y: 350, team: 'red' },
            { x: 250, y: 100, team: 'red' },
            { x: 250, y: 200, team: 'orange' },
            { x: 530, y: 140, team: 'orange' },
            { x: 530, y: 250, team: 'orange' },
            { x: 540, y: 50, team: 'otange'},
            { x: 540, y: 350, team: 'orange' },
            { x: 440, y: 140, team: 'orange' },
            { x: 440, y: 260, team: 'orange' },
            { x: 420, y: 50, team: 'orange' },
            { x: 420, y: 350, team: 'orange' },
            { x: 350, y: 280, team: 'orange' },
          { x: 580, y: 250, team: 'blue'},
            { x: 350, y: 100, team: 'white'},
           
         
          
    
        ];
   
  

        var drawPlayers = function () {
            players.forEach(player => {
                ctx.fillStyle = player.team;
                ctx.beginPath();
                ctx.arc(player.x, player.y, 10, 0, 2 * Math.PI);
                ctx.fill();
            });
        }

    var updatePlayerPosition = function (indexs,xu,yu) {
            if (indexs >= 0 && indexs < players.length) {
                players[indexs].x = xu;
                players[indexs].y = yu;
                drawField();
                drawPlayers();
            }
        }

        drawField();
        drawPlayers();

     
   
   
   
    window.field = {
drawField: drawField,
      drawPlayers: drawPlayers,
      updatePlayerPosition: updatePlayerPosition,
   
   
  };
   
   
   
    })();




































