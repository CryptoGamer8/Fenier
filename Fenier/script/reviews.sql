INSERT INTO reviews_reviews (id, user_name, movie_id, movie_name, rates, comments)
SELECT * FROM (SELECT 1 AS id, "James", 1 AS movie_id, "Avengers Trailor", 10, "Good Movie")
AS tmp
WHERE NOT EXISTS(
    SELECT id FROM reviews_reviews WHERE id = 1
) LIMIT 1;