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
