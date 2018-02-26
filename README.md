# Tic-Tac-Toe2

#Day 1 (HTML and CSS)

The first day I started working on the project I told myself that I was going to stick to the suggested schedule. Therefore, the first day I focused mainly on the HTML and CSS. I first began by using the HTML to layout the structure of the site. I used h2 and h3 tags to create the header and sub-header. For the Tic Tac Toe board I used a table tag and nested inside were td and tr tags to make three rows and three columns. In those td and tr tags I created a number of ids and classes to edit the board, and also to have the interact with the board when I have to display the Xs and Os. With CSS I was able the trim the border on the gameboard so it looks more like an actually Tic Tac Toe board. For the different buttons that are associated with user autherization and the game api, I used form tags and input tags to create them.


#Day 2 (game-logic)

The second day I tried to tackle the game-logic and I didn't mak eany progress at all. I did a lot of research and asked a few of my classmates on how to get started, unfortnatley though none of it really helped. by the end of Day 2 I only had my HTML and my gameboard finished.

Day 3-4 (game-logic cont.)

Over the weekend I continued to work on the game logic, because I didn't want to move on from game-logic until I completed it. I still didn't make that much progress. After doing more research I realized that it was probably best to start making some variables. I made an array of 9 object, with each index representing a cell on the gameboard. I then made three variables, currentPlayerX, currentPlayerO, and currentPlayer. These three variables would help me eventually switch between the two players. To see if my function was working, I used jQuery to add an eventHandler to one of the classes connected to each cell of the gameboard. I module exported the file that had my switchPlayer function to the file that had the document.ready. Once I was able to set things up there, I started clicking on each cell on the gameboard. Based on what was happening in the console, I knew the function was working. By the end of the weekend I was still not sure what to do, but I was a little bit closer than the day before.

#Day 5-6 (User Authorization)

The game-logic had finally beat me, and I decided to move on to User Authorization. Most of the User Authorization for the Tic Tac Toe project was similar to the AJAX exercises we had to do in class. As a guide, I looked back to exercises any time that I got stuck on something. Once I was done with the User Authorization I went back to game logic to see if I could find a way to display the Xs and Os on the gameboard. By the end of the day I wasn't able to solve that problem, and I had to present an uncompleted project.
