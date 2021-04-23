INSERT INTO reviews_reviews (id, user_name, movie_id, movie_name, rates, comments)
SELECT * FROM (SELECT 1 AS id, "James", 1 AS movie_id, "Avengers Trailor", 10 AS rate, "After Avengers Infinity War, we waited for the Avengers Endgame. We wondered how the story would go on, how our heroes would turn back, what would be the end of Thanos. Many theories related to this have been put forward. Avengers Endgame was undoubtedly the most anticipated film of recent years. Normally, the higher the expectation, the higher the probability of disappointment. But this is not the case for Endgame. Whatever you're expecting, you find much more in the film. This means that the biggest concern about the film has disappeared.")
AS tmp
WHERE NOT EXISTS(
    SELECT id FROM reviews_reviews WHERE id = 1
) LIMIT 1;

INSERT INTO reviews_reviews (id, user_name, movie_id, movie_name, rates, comments)
SELECT * FROM (SELECT 2 AS id, "Katt", 1 AS movie_id, "Avengers Trailor", 9 AS rate, "Avengers Endgame has some critical aspects. For example, is the three-hour period necessary in terms of the story? It can be discussed. The head of the story moves much slower than the rest. It also drags the heroes into an emotional predicament. Then the tempo is rising and the heavy scenes we are watching are getting more meaningful. The last 45 minutes of the movie is fully action packed. But the last 45 minutes goes so fast that you don't even realize it. Action and battle scenes are really successful. There is not even a slight distress about visual effects. There are also slight logic errors in the film, but in general the story is so successful that these details become meaningless and insignificant after a certain point.")
AS tmp
WHERE NOT EXISTS(
    SELECT id FROM reviews_reviews WHERE id = 2
) LIMIT 1;

INSERT INTO reviews_reviews (id, user_name, movie_id, movie_name, rates, comments)
SELECT * FROM (SELECT 3 AS id, "Hubert", 1 AS movie_id, "Avengers Trailor", 10 AS rate, "If you're going to watch this movie, avoid any spoilers, even spoiler free reviews. Which is why I'm not going to say anything about the movie. Not even my opinion. All I'm going to say is: The crowd applauded 3 times during the movie, and stood up to clap their hands after. This I have never witnessed in a Dutch cinema. Dutch crowds aren't usually passionate about this. I checked the row where I was sitting, and people were crying. After the movie, I was seeing people with smudged mascara. That's all I have to say about the movie.")
AS tmp
WHERE NOT EXISTS(
    SELECT id FROM reviews_reviews WHERE id = 3
) LIMIT 1;

INSERT INTO reviews_reviews (id, user_name, movie_id, movie_name, rates, comments)
SELECT * FROM (SELECT 4 AS id, "Matt", 2 AS movie_id, "Two Distant Strangers", 6 AS rate, "The film has a solid point and to all those people giving it a 1/10 and arguing the racism is unrealistic I am just guessing you are not black and have not been reading the news in the last few years with enough attention, please try revisit your misinformed views, its not about hate towards white people its about a very real situation exageration with the fiction of the ground-hog-day time loop paradigm. If you are white and find yourself personally offended maybe try and swap shoes and think how black people feel day to day, the families of these victims, and the readers of your comments lacking empathy and support.")
AS tmp
WHERE NOT EXISTS(
    SELECT id FROM reviews_reviews WHERE id = 4
) LIMIT 1;

INSERT INTO reviews_reviews (id, user_name, movie_id, movie_name, rates, comments)
SELECT * FROM (SELECT 5 AS id, "Kitty", 2 AS movie_id, "Two Distant Strangers", 7 AS rate, "Two Distant Strangers got an Oscar nomination for best live action short film and I hope it will win because it's just amazing. It delivers powerful messages and tackles an important subject in a beautiful smart eye-opening way specially after what has happened recently in America. It is also very well made; the script is brilliant, performances are superb and cinematography is awesome. A must see.")
AS tmp
WHERE NOT EXISTS(
    SELECT id FROM reviews_reviews WHERE id = 5
) LIMIT 1;

INSERT INTO reviews_reviews (id, user_name, movie_id, movie_name, rates, comments)
SELECT * FROM (SELECT 6 AS id, "Biden", 3 AS movie_id, "Wonder Woman 1984", 5 AS rate, "A significant improvement over the 2017 movie, and a bright spot in the dismal DCU, Wonder Woman 1984 is a technicolor, lighthearted romp through the era of Jazzercise, big hair, and even bigger shoulder pads—and it’s perfect for the holiday season. Gal Gadot is eminently watchable as she reprises her titular character in stunning outfits by costume designer Lindy Hemming that made me want to burn everything in my wardrobe. Please note that thigh-high boots are back with a vengeance.")
AS tmp
WHERE NOT EXISTS(
    SELECT id FROM reviews_reviews WHERE id = 6
) LIMIT 1;

INSERT INTO reviews_reviews (id, user_name, movie_id, movie_name, rates, comments)
SELECT * FROM (SELECT 7 AS id, "Katheline", 4 AS movie_id, "Inception", 5 AS rate, "Christopher Nolan keeps improving himself, with even more complex and multilayer script like this.And i thought Memento was hard to reach by most of the viewers, but no.Inception will keep you mesmerized and captivated by the genius, that's hidden behind it.And not just directors and screenwriters (or with other words-Nolan), but with acting and sound-and effects and editing as well.")
AS tmp
WHERE NOT EXISTS(
    SELECT id FROM reviews_reviews WHERE id = 7
) LIMIT 1;

INSERT INTO reviews_reviews (id, user_name, movie_id, movie_name, rates, comments)
SELECT * FROM (SELECT 8 AS id, "Boyjoe", 5 AS movie_id, "The Dark Knight", 10 AS rate, "The actors, the script, the scenery make it one of the best movies I have ever seen. The best-played character of the joker is amazing. That's how I imagined him. In the film, he is portrayed as an ultra-intelligent person with a psychopathic 'brain'. Honestly, I was very surprised that someone known for their niche productions would play such a good role as one of the most important characters in the Batman series. Unfortunately, we will probably never see the joker so well again, because Heath Ledger, from unknown circumstances, died. This is sad news. However, back to the movie. The main character, Batman, played by Christian Bale, also shows the character very well. Therefore, my rating for this movie is 10/10.")
AS tmp
WHERE NOT EXISTS(
    SELECT id FROM reviews_reviews WHERE id = 8
) LIMIT 1;

INSERT INTO reviews_reviews (id, user_name, movie_id, movie_name, rates, comments)
SELECT * FROM (SELECT 8 AS id, "Ken", 5 AS movie_id, "The Dark Knight", 10 AS rate, "Dark, yes, complex, ambitious. Christopher Nolan and his co-writer Jonathan Nolan deserve a standing ovation. I don't usually go for loud movies filled with mindless gore and violence. 'The Dark Knight' is certainly loud and violent but it's not mindless. It has depth and soul. Even the Joker, in an extraordinary creation by Heath Ledger, is deeply human. The natural petulance of Christian Bale makes his ego and alter ego the most fascinating and complex of all film superheroes. Part of the genius of this movie is that Batman himself, in screen time, is not really the lead. My attention was captivated by Heath Ledger and he determines and inspires the breathtaking atmosphere that envelopes Gotham as well as us. The aplomb of Christopher Nolan as a director is mind blowing and his secret, I believe, is his obvious respect for his audience. What he's done is to elevate a popular genre into Shakesperean proportions. Bravo!")
AS tmp
WHERE NOT EXISTS(
    SELECT id FROM reviews_reviews WHERE id = 8
) LIMIT 1;

INSERT INTO reviews_reviews (id, user_name, movie_id, movie_name, rates, comments)
SELECT * FROM (SELECT 9 AS id, "Yuki", 6 AS movie_id, "Interstellar", 7 AS rate, "This movie was the best written, acted, visual effected, etc. movie. This movie was the best movie I have ever seen. I am a huge Christopher Nolan fan and this movie was his finest. Matthew McConaughey turned in his best performance of his lifetime. Anne Hathaway was an amazing supporting actress and compared to her performance in Les Miserables, I have no idea how she didn't get an Oscar for this. The visual effects were more than just Oscar worthy. They were pioneering. I have never seen anything like it. One thing I would recommend is having a little previous knowledge about space. Not like Einstein stuff though. I would recommend you see this movie as fast as you can if you are a Nolan fan or not. I give this movie a rating of 97 out of 100.")
AS tmp
WHERE NOT EXISTS(
    SELECT id FROM reviews_reviews WHERE id = 9
) LIMIT 1;