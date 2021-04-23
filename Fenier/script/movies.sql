INSERT INTO movies_movies (id, name, year, outline, cast, genre, rates, movie_url, img_url) 
SELECT * FROM (SELECT 2, "Two Distant Strangers",2020, "cartoonist Carter James repeated attempts to get home to his dog are thwarted by a recurring deadly encounter that forces him to re-live the same awful day over AND over again.", "Joey Bada, Andrew Howard, AND Zaria Simone", "Short, Drama, Sci-Fi", 6.9, "https://www.youtube.com/embed/VubvW5f6kro", "/imgs/movies/TwoStrangers.jpeg")
AS tmp
WHERE NOT EXISTS (
    SELECT id FROM movies_movies WHERE id = 2 
) LIMIT 1;

INSERT INTO movies_movies (id, name, year, outline, cast, genre, rates, movie_url, img_url) 
SELECT * FROM (SELECT 3 AS id, "Wonder Woman 1984",2020, "A botched store robbery places Wonder Woman in a global battle against a powerful and mysterious ancient force that puts her powers in jeopardy.", "Gal Gadot, Diana Prince
Chris Pine	...	Steve Trevor
Kristen Wiig	...	Barbara Minerva
Pedro Pascal	...	Maxwell Lord
Robin Wright	...	Antiope
Connie Nielsen	...	Hippolyta", "Fantasy, Action, Adventure", 3 AS rates, "https://www.youtube.com/embed/sfM7_JLk-84", "/imgs/movies/wonderWoman.jpg")
AS tmp
WHERE NOT EXISTS (
    SELECT id FROM movies_movies WHERE id = 3 
) LIMIT 1;

INSERT INTO movies_movies (id, name, year, outline, cast, genre, rates, movie_url, img_url)
SELECT * FROM (SELECT 4 AS id, "Inception", 2010, "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
"Leonardo DiCaprio ... Cobb
 Joseph Gordon-Levitt ... Arthur
 Elliot Page ... Ariadne
 Tom Hardy ... Eames
 Ken Watanabe ... Saito", "Action, Adventure, Thriller", 4 AS rates, "https://www.youtube.com/watch?v=lfe60JYk_Kc", "/imgs/movies/inception.jpg")
AS tmp
WHERE NOT EXISTS (
	SELECT id FROM movies_movies WHERE id =4
) LIMIT 1;



INSERT INTO movies_movies (id, name, year, outline, cast, genre, rates, movie_url, img_url)
SELECT * FROM (SELECT 5 AS id, "The Dark Knight", 2008, "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
"Christian Bale ... 	Bruce Wayne
 Heath Ledger ... Joker
 Aaron Eckhart ... Harvey Dent
 Michael Caine ... 	Alfred
 Maggie Gyllenhaal ... Rachel", "Action, Crime, Drama, Thriller", 4 AS rates, "https://www.youtube.com/watch?v=YYia_OS0tzc", "/imgs/movies/the_dark_knight.jpg")
AS tmp
WHERE NOT EXISTS (
	SELECT id FROM movies_movies WHERE id =5
) LIMIT 1;



INSERT INTO movies_movies (id, name, year, outline, cast, genre, rates, movie_url, img_url)
SELECT * FROM (SELECT 6 AS id, "Interstellar", 2014, "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
"Ellen Burstyn ... Murph (Older)
 Matthew McConaughey ... Cooper
 Mackenzie Foy ... Murph (10 Yrs.)
 John Lithgow ... Donald
 David Oyelowo ... School Principal", "Adventure, Drama, Sci-Fi", 4 AS rates, "https://www.youtube.com/watch?v=It9-pm9JOSk", "/imgs/movies/interstellar.jpg")
AS tmp
WHERE NOT EXISTS (
	SELECT id FROM movies_movies WHERE id = 6
) LIMIT 1;



INSERT INTO movies_movies (id, name, year, outline, cast, genre, rates, movie_url, img_url)
SELECT * FROM (SELECT 7 AS id, "The Revenant", 2015, "A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.",
"Leonardo DiCaprio ... Hugh Glass
 Tom Hardy ... 	John Fitzgerald
 Domhnall Gleeson ... Captain Andrew Henry
 Will Poulter ... Bridger
 Forrest Goodluck ... Hawk", "Action, Adventure, Drama, History", 4 AS rates, "https://www.youtube.com/watch?v=JLXH25QkOgM", "/imgs/movies/the_revenant.jpg")
AS tmp
WHERE NOT EXISTS (
	SELECT id FROM movies_movies WHERE id = 7
) LIMIT 1;
