# Prj-TicTacToe
a Tic Tac Toe game you can play in your browser!

GAME RULE:
	•	3×3 grid → 9 cells
	•	Two players: X and O
	•	Players take turns marking empty cells
	•	The goal: 3 marks in a row (horizontal, vertical, diagonal)
	•	Game ends if:
	•	Someone wins
	•	All cells filled → draw

Function to write:

- To Decide winning/draw
- To create players

1. store the gameboard as an array inside of a Gameboard object

2. store players in objects, let objects control the game flow themselves

3. Your main goal here is to have as little global code as possible. 

Try tucking as much as you can inside factories. 

If you only need a single instance of something (e.g. the gameboard, the displayController etc.) then wrap the factory inside an IIFE (module pattern) so it cannot be reused to create additional instances.

4.

