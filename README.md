# backend_node

<!-- steps to setup and run server
1. create .env file in root directory and add database creds as mentioned in .en.example file
2. go to the root directory run command npm install
3. after npm install run command npm start -->

<!-- setps to import csv data 
1. open the ConvertCSV.com
2. choose csv to sql option 
3. click on choose file select the csv file after data upload
4. untick the id column
5. write the name of table in schema.table or view name
6. click on csv to sql it will write a insert query copy the query and run in pgadmin or any other tool you are using for postgresql
 -->

 <!-- with this submission im also sharing the postman collection to test the apis -->





<!-- INSERT INTO users(fname,sname,profile_picture,bio,created_at) VALUES ('Alice','Smith','https://picsum.photos/200','Avid reader and film enthusiast.','2023-03-15 14:20:15.000');
INSERT INTO users(fname,sname,profile_picture,bio,created_at) VALUES ('Bob','Johnson','https://picsum.photos/200','Music lover and foodie.','2023-03-20 10:20:15.000');
INSERT INTO users(fname,sname,profile_picture,bio,created_at) VALUES ('Charlie','Brown','https://picsum.photos/200','Travel junkie and coffee lover.','2023-03-25 12:20:15.000');
INSERT INTO users(fname,sname,profile_picture,bio,created_at) VALUES ('David','Jones','https://picsum.photos/200','Tech geek and podcast fanatic.','2023-03-30 15:20:15.000');
INSERT INTO users(fname,sname,profile_picture,bio,created_at) VALUES ('Ella','Davis','https://picsum.photos/200','Outdoor adventurer and photographer.','2023-04-05 14:15:15.000');
INSERT INTO users(fname,sname,profile_picture,bio,created_at) VALUES ('Fiona','Miller','https://picsum.photos/200','Yoga instructor and health guru.','2023-04-10 13:20:15.000');
INSERT INTO users(fname,sname,profile_picture,bio,created_at) VALUES ('George','Garcia','https://picsum.photos/200','Culinary expert and chef.','2023-04-15 14:22:15.000');
INSERT INTO users(fname,sname,profile_picture,bio,created_at) VALUES ('Hannah','Rodriguez','https://picsum.photos/200','Artistic soul and painter.','2023-04-20 14:24:15.000');
INSERT INTO users(fname,sname,profile_picture,bio,created_at) VALUES ('Ivan','Martinez','https://picsum.photos/200','Sports enthusiast and coach.','2023-04-25 14:26:15.000');
INSERT INTO users(fname,sname,profile_picture,bio,created_at) VALUES ('Jane','Hernandez','https://picsum.photos/200','Writer and poet.','2023-04-30 14:28:15.000'); -->



<!-- INSERT INTO recommendations(user_id,title,caption,category,created_at) VALUES (1,'The Social Dilemma','A thought-provoking documentary.','movie','2023-05-01 12:10:15');
INSERT INTO recommendations(user_id,title,caption,category,created_at) VALUES (1,'Breaking Bad','Gripping and intense.','tvshow','2023-05-02 14:15:15');
INSERT INTO recommendations(user_id,title,caption,category,created_at) VALUES (2,'Thinking, Fast and Slow','A dive into human psychology.','read','2023-05-03 15:10:15');
INSERT INTO recommendations(user_id,title,caption,category,created_at) VALUES (2,'Joe Rogan Experience','Diverse and engaging.','podcast','2023-05-04 12:10:15');
INSERT INTO recommendations(user_id,title,caption,category,created_at) VALUES (3,'Inception','A cinematic masterpiece.','movie','2023-05-05 11:10:15');
INSERT INTO recommendations(user_id,title,caption,category,created_at) VALUES (3,'The Louvre, Paris','An art haven.','go','2023-05-06 14:10:15');
INSERT INTO recommendations(user_id,title,caption,category,created_at) VALUES (4,'Shape of You by Ed Sheeran','Timeless tune.','song','2023-05-07 13:10:15');
INSERT INTO recommendations(user_id,title,caption,category,created_at) VALUES (4,'Reputation by Taylor Swift','Dark and catchy.','album','2023-05-08 14:10:15');
INSERT INTO recommendations(user_id,title,caption,category,created_at) VALUES (5,'Latte at Coffee House','Perfect morning brew.','drink','2023-05-09 11:10:15');
INSERT INTO recommendations(user_id,title,caption,category,created_at) VALUES (5,'Science Vs','Debunking popular myths.','podcast','2023-05-10 14:10:15');
INSERT INTO recommendations(user_id,title,caption,category,created_at) VALUES (6,'Central Park, NYC','Nature amidst urban sprawl.','go','2023-05-11 12:10:15');
INSERT INTO recommendations(user_id,title,caption,category,created_at) VALUES (6,'The Crown','Historical and dramatic.','tvshow','2023-05-12 15:10:15');
INSERT INTO recommendations(user_id,title,caption,category,created_at) VALUES (7,'Blinding Lights by The Weeknd','Electrifying.','song','2023-05-13 11:10:15');
INSERT INTO recommendations(user_id,title,caption,category,created_at) VALUES (7,'25 by Adele','Soulful journey.','album','2023-05-14 14:10:15');
INSERT INTO recommendations(user_id,title,caption,category,created_at) VALUES (8,'Mojito at The Bar','Refreshing.','drink','2023-05-15 16:10:15');
INSERT INTO recommendations(user_id,title,caption,category,created_at) VALUES (8,'Dune by Frank Herbert','Sci-fi at its best.','read','2023-05-16 14:10:15');
INSERT INTO recommendations(user_id,title,caption,category,created_at) VALUES (9,'Game of Thrones','Epic and thrilling.','tvshow','2023-05-17 15:10:15');
INSERT INTO recommendations(user_id,title,caption,category,created_at) VALUES (9,'The Beatles','Legends of music.','artist','2023-05-18 16:10:15');
INSERT INTO recommendations(user_id,title,caption,category,created_at) VALUES (10,'Pizza at Mario’s','Cheesy goodness.','eat','2023-05-19 12:10:15');
INSERT INTO recommendations(user_id,title,caption,category,created_at) VALUES (10,'Chateau Wine','Rich and smooth.','drink','2023-05-20 11:10:15');
INSERT INTO recommendations(user_id,title,caption,category,created_at) VALUES (1,'TED Radio Hour','Ideas worth spreading.','podcast','2023-05-21 14:10:15');
INSERT INTO recommendations(user_id,title,caption,category,created_at) VALUES (2,'Mount Everest','A challenging ascent.','go','2023-05-22 15:10:15');
INSERT INTO recommendations(user_id,title,caption,category,created_at) VALUES (3,'Rolling Stones','Rock n Roll legends.','artist','2023-05-23 13:10:15');
INSERT INTO recommendations(user_id,title,caption,category,created_at) VALUES (4,'End Game by Taylor Swift','Pop perfection.','song','2023-05-24 14:10:15');
INSERT INTO recommendations(user_id,title,caption,category,created_at) VALUES (5,'Tacos at El Amigo','Taste of Mexico.','eat','2023-05-25 12:10:15');
INSERT INTO recommendations(user_id,title,caption,category,created_at) VALUES (6,'Brief History of Time','Dive into the universe.','read','2023-05-26 13:10:15');
INSERT INTO recommendations(user_id,title,caption,category,created_at) VALUES (7,'Grand Canyon','Nature’s wonder.','go','2023-05-27 11:10:15');
INSERT INTO recommendations(user_id,title,caption,category,created_at) VALUES (8,'A Star is Born','Musical masterpiece.','movie','2023-05-28 10:10:15');
INSERT INTO recommendations(user_id,title,caption,category,created_at) VALUES (9,'Black Coffee','Kickstart your day.','drink','2023-05-29 15:10:15');
INSERT INTO recommendations(user_id,title,caption,category,created_at) VALUES (10,'Arctic Monkeys','Modern rock at its best.','artist','2023-05-30 14:10:15'); -->
