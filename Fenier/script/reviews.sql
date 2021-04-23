INSERT INTO reviews_reviews (id, user_name, movie_id, movie_name, rates, comments)
SELECT * FROM (SELECT 1 AS id, "James", 1 AS movie_id, "Avengers Trailor", 10, "After Avengers Infinity War, we waited for the Avengers Endgame. We wondered how the story would go on, how our heroes would turn back, what would be the end of Thanos. Many theories related to this have been put forward. Avengers Endgame was undoubtedly the most anticipated film of recent years. Normally, the higher the expectation, the higher the probability of disappointment. But this is not the case for Endgame. Whatever you're expecting, you find much more in the film. This means that the biggest concern about the film has disappeared.")
AS tmp
WHERE NOT EXISTS(
    SELECT id FROM reviews_reviews WHERE id = 1
) LIMIT 1;


INSERT INTO reviews_reviews (id, user_name, movie_id, movie_name, rates, comments)
SELECT * FROM (SELECT 2 AS id, "Katt", 1 AS movie_id, "Avengers Trailor", 9, "Avengers Endgame has some critical aspects. For example, is the three-hour period necessary in terms of the story? It can be discussed. The head of the story moves much slower than the rest. It also drags the heroes into an emotional predicament. Then the tempo is rising and the heavy scenes we are watching are getting more meaningful. The last 45 minutes of the movie is fully action packed. But the last 45 minutes goes so fast that you don't even realize it. Action and battle scenes are really successful. There is not even a slight distress about visual effects. There are also slight logic errors in the film, but in general the story is so successful that these details become meaningless and insignificant after a certain point.")
AS tmp
WHERE NOT EXISTS(
    SELECT id FROM reviews_reviews WHERE id = 2
) LIMIT 1;

INSERT INTO reviews_reviews (id, user_name, movie_id, movie_name, rates, comments)
SELECT * FROM (SELECT 3 AS id, "Hubert", 1 AS movie_id, "Avengers Trailor", 10, "If you're going to watch this movie, avoid any spoilers, even spoiler free reviews. Which is why I'm not going to say anything about the movie. Not even my opinion. All I'm going to say is: The crowd applauded 3 times during the movie, and stood up to clap their hands after. This I have never witnessed in a Dutch cinema. Dutch crowds aren't usually passionate about this. I checked the row where I was sitting, and people were crying. After the movie, I was seeing people with smudged mascara. That's all I have to say about the movie.")
AS tmp
WHERE NOT EXISTS(
    SELECT id FROM reviews_reviews WHERE id = 3
) LIMIT 1;

