create table books
(
    id     serial not null
            constraint books_pk
            primary key,
    title  varchar,
    author varchar,
    year   integer,
    cover  varchar
);

create index books_author_index
    on books (author);

create index books_title_index
    on books (title);

create unique index books_title_author_uindex
    on books (title, author);

INSERT INTO public.books (id, title, author, year, cover) VALUES (1, 'Harry Potter and the Philosopher''s Stone', 'J.K. Rowling, Mary GrandPré', 1997, 'https://images.gr-assets.com/books/1474154022m/3.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (2, 'The Hunger Games', 'Suzanne Collins', 2008, 'https://images.gr-assets.com/books/1447303603m/2767052.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (3, 'To Kill a Mockingbird', 'Harper Lee', 1960, 'https://images.gr-assets.com/books/1361975680m/2657.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (4, 'Harry Potter and the Deathly Hallows', 'J.K. Rowling, Mary GrandPré', 2007, 'https://images.gr-assets.com/books/1474171184m/136251.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (5, 'The Fault in Our Stars', 'John Green', 2012, 'https://images.gr-assets.com/books/1360206420m/11870085.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (6, 'Harry Potter and the Prisoner of Azkaban', 'J.K. Rowling, Mary GrandPré, Rufus Beck', 1999, 'https://images.gr-assets.com/books/1499277281m/5.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (7, 'Harry Potter and the Goblet of Fire', 'J.K. Rowling, Mary GrandPré', 2000, 'https://images.gr-assets.com/books/1361482611m/6.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (8, 'Harry Potter and the Half-Blood Prince', 'J.K. Rowling, Mary GrandPré', 2005, 'https://images.gr-assets.com/books/1361039191m/1.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (9, 'Harry Potter and the Order of the Phoenix', 'J.K. Rowling, Mary GrandPré', 2003, 'https://images.gr-assets.com/books/1387141547m/2.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (10, 'The Hobbit or There and Back Again', 'J.R.R. Tolkien', 1937, 'https://images.gr-assets.com/books/1372847500m/5907.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (11, 'Harry Potter and the Chamber of Secrets', 'J.K. Rowling, Mary GrandPré', 1998, 'https://images.gr-assets.com/books/1474169725m/15881.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (12, ' The Fellowship of the Ring', 'J.R.R. Tolkien', 1954, 'https://images.gr-assets.com/books/1298411339m/34.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (13, 'Catching Fire', 'Suzanne Collins', 2009, 'https://images.gr-assets.com/books/1358273780m/6148028.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (14, 'The Help', 'Kathryn Stockett', 2009, 'https://images.gr-assets.com/books/1346100365m/4667024.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (15, 'The Kite Runner ', 'Khaled Hosseini', 2003, 'https://images.gr-assets.com/books/1484565687m/77203.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (16, 'A Game of Thrones', 'George R.R. Martin', 1996, 'https://images.gr-assets.com/books/1436732693m/13496.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (17, 'The Book Thief', 'Markus Zusak', 2005, 'https://images.gr-assets.com/books/1390053681m/19063.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (18, 'Where the Sidewalk Ends: The Poems and Drawings of Shel Silverstein', 'Shel Silverstein', 1974, 'https://images.gr-assets.com/books/1168052448m/30119.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (19, 'Gone with the Wind', 'Margaret Mitchell', 1936, 'https://images.gr-assets.com/books/1328025229m/18405.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (20, 'Le Petit Prince', 'Antoine de Saint-Exupéry, Richard Howard, Dom Marcos Barbosa, Melina Karakosta', 1946, 'https://images.gr-assets.com/books/1367545443m/157993.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (21, 'Ender''s Game', 'Orson Scott Card', 1985, 'https://images.gr-assets.com/books/1408303130m/375802.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (22, 'A Thousand Splendid Suns', 'Khaled Hosseini', 2007, 'https://images.gr-assets.com/books/1345958969m/128029.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (23, 'The Giving Tree', 'Shel Silverstein', 1964, 'https://images.gr-assets.com/books/1174210942m/370493.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (24, 'Me Before You', 'Jojo Moyes', 2012, 'https://images.gr-assets.com/books/1357108762m/15507958.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (25, 'Un di Velt Hot Geshvign', 'Elie Wiesel, Marion Wiesel', 1958, 'https://images.gr-assets.com/books/1473495285m/1617.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (26, 'City of Glass', 'Cassandra Clare', 2009, 'https://images.gr-assets.com/books/1369452339m/3777732.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (27, 'The Princess Bride', 'William Goldman', 1973, 'https://images.gr-assets.com/books/1327903636m/21787.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (28, 'A Storm of Swords', 'George R.R. Martin', 2000, 'https://images.gr-assets.com/books/1497931121m/62291.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (29, 'The Return of the King', 'J.R.R. Tolkien', 1955, 'https://images.gr-assets.com/books/1389977161m/18512.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (30, 'A Clash of Kings', 'George R.R. Martin', 1998, 'https://images.gr-assets.com/books/1358254974m/10572.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (31, 'Unbroken: A World War II Story of Survival, Resilience, and Redemption', 'Laura Hillenbrand', 2010, 'https://images.gr-assets.com/books/1327861115m/8664353.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (32, 'The Last Olympian', 'Rick Riordan', 2009, 'https://images.gr-assets.com/books/1327924597m/4502507.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (33, 'The Name of the Wind', 'Patrick Rothfuss', 2007, 'https://images.gr-assets.com/books/1472068073m/186074.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (34, 'The Two Towers', 'J.R.R. Tolkien', 1954, 'https://images.gr-assets.com/books/1298415523m/15241.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (35, 'The Battle of the Labyrinth', 'Rick Riordan', 2008, 'https://images.gr-assets.com/books/1443142158m/2120932.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (36, 'The Martian', 'Andy Weir', 2012, 'https://images.gr-assets.com/books/1413706054m/18007564.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (37, 'Clockwork Angel', 'Cassandra Clare', 2010, 'https://images.gr-assets.com/books/1454962884m/7171637.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (38, 'The Lord of the Rings', 'J.R.R. Tolkien', 1955, 'https://images.gr-assets.com/books/1411114164m/33.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (39, 'The Lost Hero', 'Rick Riordan', 2010, 'https://images.gr-assets.com/books/1464201003m/7736182.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (40, 'The Pillars of the Earth', 'Ken Follett', 1989, 'https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png');
INSERT INTO public.books (id, title, author, year, cover) VALUES (41, 'The Stand', 'Stephen King, Bernie Wrightson', 1978, 'https://images.gr-assets.com/books/1213131305m/149267.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (42, 'Green Eggs and Ham', 'Dr. Seuss, לאה נאור', 1960, 'https://images.gr-assets.com/books/1468680100m/23772.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (43, 'The Titan''s Curse', 'Rick Riordan', 2007, 'https://images.gr-assets.com/books/1361038385m/561456.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (44, 'Matilda', 'Roald Dahl, Quentin Blake', 1988, 'https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png');
INSERT INTO public.books (id, title, author, year, cover) VALUES (45, 'Watchmen', 'Alan Moore, Dave Gibbons, John Higgins', 1987, 'https://images.gr-assets.com/books/1442239711m/472331.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (46, 'Wonder', 'R.J. Palacio', 2012, 'https://images.gr-assets.com/books/1309285027m/11387515.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (47, 'The Nightingale', 'Kristin Hannah', 2015, 'https://images.gr-assets.com/books/1451446316m/21853621.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (48, 'A Dance with Dragons', 'George R.R. Martin', 2011, 'https://images.gr-assets.com/books/1327885335m/10664113.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (49, 'Clockwork Prince', 'Cassandra Clare', 2011, 'https://images.gr-assets.com/books/1460477747m/10025305.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (50, 'The Wise Man''s Fear', 'Patrick Rothfuss', 2011, 'https://images.gr-assets.com/books/1452624392m/1215032.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (51, 'East of Eden  ', 'John Steinbeck', 1952, 'https://images.gr-assets.com/books/1441547516m/4406.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (52, 'The Son of Neptune ', 'Rick Riordan', 2011, 'https://images.gr-assets.com/books/1464201114m/9520360.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (53, 'The Mark of Athena', 'Rick Riordan', 2012, 'https://images.gr-assets.com/books/1464201354m/12127750.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (54, 'Clockwork Princess', 'Cassandra Clare', 2013, 'https://images.gr-assets.com/books/1436788488m/18335634.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (55, 'City of Lost Souls', 'Cassandra Clare', 2012, 'https://images.gr-assets.com/books/1460477703m/8755776.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (56, 'The Very Hungry Caterpillar', 'Eric Carle', 1969, 'https://images.gr-assets.com/books/1327878225m/4948.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (57, 'A Light in the Attic', 'Shel Silverstein', 1981, 'https://images.gr-assets.com/books/1427169918m/30118.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (58, 'Good Omens: The Nice and Accurate Prophecies of Agnes Nutter, Witch', 'Terry Pratchett, Neil Gaiman', 1990, 'https://images.gr-assets.com/books/1392528568m/12067.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (59, 'Complete Harry Potter Boxed Set', 'J.K. Rowling', 1998, 'https://images.gr-assets.com/books/1392579059m/862041.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (60, 'Shadow Kiss', 'Richelle Mead', 2008, 'https://images.gr-assets.com/books/1361099049m/2802316.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (61, 'Oh, the Places You''ll Go!', 'Dr. Seuss', 1990, 'https://images.gr-assets.com/books/1421708635m/191139.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (62, 'How the Grinch Stole Christmas!', 'Dr. Seuss', 1957, 'https://images.gr-assets.com/books/1327958149m/113946.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (63, 'The Godfather', 'Mario Puzo, Robert Thompson, Peter Bart', 1969, 'https://images.gr-assets.com/books/1394988109m/22034.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (64, '11/22/63', 'Stephen King', 2011, 'https://images.gr-assets.com/books/1327876792m/10644930.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (65, 'Reflected in You', 'Sylvia Day', 2012, 'https://images.gr-assets.com/books/1477802540m/13596809.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (66, 'Cutting for Stone', 'Abraham Verghese', 2009, 'https://images.gr-assets.com/books/1327931601m/3591262.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (67, 'Frostbite', 'Richelle Mead', 2008, 'https://images.gr-assets.com/books/1361098960m/2282133.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (68, 'The Ultimate Hitchhiker''s Guide: Five Complete Novels and One Story', 'Douglas Adams', 1996, 'https://images.gr-assets.com/books/1404613595m/13.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (69, 'Mistborn : The Final Empire', 'Brandon Sanderson', 2006, 'https://images.gr-assets.com/books/1480717416m/68428.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (70, 'Blood Promise', 'Richelle Mead', 2009, 'https://images.gr-assets.com/books/1442530605m/5996153.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (71, 'Spirit Bound', 'Richelle Mead', 2010, 'https://images.gr-assets.com/books/1291168967m/6479259.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (72, 'The Lorax', 'Dr. Seuss', 1971, 'https://images.gr-assets.com/books/1327879938m/7784.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (73, 'Last Sacrifice ', 'Richelle Mead', 2010, 'https://images.gr-assets.com/books/1319850978m/6527740.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (74, 'City of Heavenly Fire', 'Cassandra Clare', 2014, 'https://images.gr-assets.com/books/1460477794m/8755785.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (75, 'En man som heter Ove', 'Fredrik Backman, Henning Koch', 2012, 'https://images.gr-assets.com/books/1405259930m/18774964.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (76, 'The Last Lecture', 'Randy Pausch, Jeffrey Zaslow', 2008, 'https://images.gr-assets.com/books/1388075896m/2318271.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (77, 'The Way of Kings', 'Brandon Sanderson', 2010, 'https://images.gr-assets.com/books/1388184640m/7235533.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (78, 'Winnie-the-Pooh', 'A.A. Milne, Ernest H. Shepard', 1926, 'https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png');
INSERT INTO public.books (id, title, author, year, cover) VALUES (79, 'Hopeless', 'Colleen Hoover', 2012, 'https://images.gr-assets.com/books/1353489892m/15717943.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (80, 'Still Alice', 'Lisa Genova', 2007, 'https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png');
INSERT INTO public.books (id, title, author, year, cover) VALUES (81, 'The House of Hades', 'Rick Riordan', 2013, 'https://images.gr-assets.com/books/1464201430m/12127810.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (82, 'Crown of Midnight', 'Sarah J. Maas', 2013, 'https://images.gr-assets.com/books/1391580481m/17167166.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (83, 'Mere Christianity', 'C.S. Lewis', 1952, 'https://images.gr-assets.com/books/1468102872m/11138.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (84, 'The Hiding Place', 'Corrie ten Boom, John Sherrill, Elizabeth Sherrill', 1971, 'https://images.gr-assets.com/books/1320418824m/561909.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (85, 'V for Vendetta', 'Alan Moore, David   Lloyd', 1990, 'https://images.gr-assets.com/books/1343668985m/5805.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (86, 'The Green Mile', 'Stephen King', 1996, 'https://images.gr-assets.com/books/1373903563m/11566.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (87, 'Dragonfly in Amber', 'Diana Gabaldon', 1992, 'https://images.gr-assets.com/books/1456114344m/5364.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (88, 'Maus: A Survivor''s Tale : My Father Bleeds History', 'Art Spiegelman', 1985, 'https://images.gr-assets.com/books/1327884972m/15196.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (89, '…trotzdem Ja zum Leben sagen: Ein Psychologe erlebt das Konzentrationslager', 'Viktor E. Frankl', 1946, 'https://images.gr-assets.com/books/1467136625m/4069.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (90, 'Cress', 'Marissa Meyer', 2014, 'https://images.gr-assets.com/books/1470057005m/13206828.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (91, 'Love You Forever', 'Robert Munsch, Sheila McGraw', 1986, 'https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png');
INSERT INTO public.books (id, title, author, year, cover) VALUES (92, 'A Court of Mist and Fury', 'Sarah J. Maas', 2016, 'https://images.gr-assets.com/books/1485259138m/17927395.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (93, 'Scarlet', 'Marissa Meyer', 2013, 'https://images.gr-assets.com/books/1470056982m/13206760.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (94, 'A Court of Thorns and Roses', 'Sarah J. Maas', 2015, 'https://images.gr-assets.com/books/1491595796m/16096824.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (95, 'The Hunger Games Box Set', 'Suzanne Collins', 2010, 'https://images.gr-assets.com/books/1360094673m/7938275.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (96, 'Voyager', 'Diana Gabaldon', 1993, 'https://images.gr-assets.com/books/1483278195m/10987.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (97, 'Fried Green Tomatoes at the Whistle Stop Cafe', 'Fannie Flagg', 1987, 'https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png');
INSERT INTO public.books (id, title, author, year, cover) VALUES (98, 'The Velveteen Rabbit', 'Margery Williams Bianco, William   Nicholson', 1922, 'https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png');
INSERT INTO public.books (id, title, author, year, cover) VALUES (99, 'The Hobbit', 'Chuck Dixon, J.R.R. Tolkien, David Wenzel, Sean Deming', 1989, 'https://images.gr-assets.com/books/1374681632m/659469.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (100, 'Братья Карамазовы', 'Fyodor Dostoyevsky, Richard Pevear, Larissa Volokhonsky', 1880, 'https://images.gr-assets.com/books/1427728126m/4934.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (101, 'The Hero of Ages', 'Brandon Sanderson', 2008, 'https://images.gr-assets.com/books/1480717763m/2767793.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (102, 'The Polar Express', 'Chris Van Allsburg', 1985, 'https://images.gr-assets.com/books/1356707942m/420282.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (103, 'Slammed', 'Colleen Hoover', 2012, 'https://images.gr-assets.com/books/1328530463m/13372690.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (104, 'Heir of Fire', 'Sarah J. Maas', 2014, 'https://images.gr-assets.com/books/1460846511m/20613470.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (105, 'The Walking Dead, Vol. 1: Days Gone Bye', 'Robert Kirkman, Tony Moore', 2004, 'https://images.gr-assets.com/books/1389233242m/138398.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (106, 'Fall of Giants', 'Ken Follett', 2010, 'https://images.gr-assets.com/books/1470384630m/7315573.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (107, 'When Breath Becomes Air', 'Paul Kalanithi, Abraham Verghese', 2016, 'https://images.gr-assets.com/books/1492677644m/25899336.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (108, 'The Adventures of Sherlock Holmes', 'Arthur Conan Doyle', 1892, 'https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png');
INSERT INTO public.books (id, title, author, year, cover) VALUES (109, 'Lover Awakened (Black Dagger Brotherhood, #3)', 'J.R. Ward', 2006, 'https://images.gr-assets.com/books/1388773547m/42900.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (110, 'Мастер и Маргарита', 'Mikhail Bulgakov, Katherine Tiernan O''Connor, Diana Burgin, Ellendea Proffer', 1967, 'https://images.gr-assets.com/books/1327867963m/117833.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (111, 'The Complete Tales of Edgar Allan Poe', 'Edgar Allan Poe', 1849, 'https://images.gr-assets.com/books/1327942676m/23919.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (112, 'Corduroy', 'Don Freeman', 1948, 'https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png');
INSERT INTO public.books (id, title, author, year, cover) VALUES (113, 'Words of Radiance', 'Brandon Sanderson', 2014, 'https://images.gr-assets.com/books/1391535251m/17332218.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (114, 'デスノート #1 (Desu Nōto) Taikutsu (退屈)', 'Tsugumi Ohba, Takeshi Obata', 2004, 'https://images.gr-assets.com/books/1419952134m/13615.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (115, 'The Storyteller', 'Jodi Picoult', 2013, 'https://images.gr-assets.com/books/1356328634m/15753740.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (116, 'Calvin and Hobbes', 'Bill Watterson, G.B. Trudeau', 1987, 'https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png');
INSERT INTO public.books (id, title, author, year, cover) VALUES (117, 'Queen of Shadows', 'Sarah J. Maas', 2015, 'https://images.gr-assets.com/books/1441230104m/18006496.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (118, 'Lover Eternal (Black Dagger Brotherhood, #2)', 'J.R. Ward', 2006, 'https://images.gr-assets.com/books/1300845974m/35729.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (119, 'Prodigy', 'Marie Lu', 2013, 'https://images.gr-assets.com/books/1336254717m/13414446.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (120, 'The Complete Sherlock Holmes', 'Arthur Conan Doyle', 1894, 'https://images.gr-assets.com/books/1465539139m/188572.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (121, 'On Writing: A Memoir of the Craft', 'Stephen King', 1999, 'https://images.gr-assets.com/books/1436735207m/10569.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (122, 'The True Story of the Three Little Pigs', 'Jon Scieszka, Lane Smith', 1989, 'https://images.gr-assets.com/books/1327884731m/125507.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (123, 'Drums of Autumn (Outlander, #4)', 'Diana Gabaldon', 1996, 'https://images.gr-assets.com/books/1500688941m/10988.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (124, 'Batman: The Dark Knight Returns', 'Frank Miller, Klaus Janson, Lynn Varley', 1986, 'https://images.gr-assets.com/books/1327892039m/59960.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (125, 'The Boys in the Boat: Nine Americans and Their Epic Quest for Gold at the 1936 Berlin Olympics', 'Daniel James Brown', 2013, 'https://images.gr-assets.com/books/1354683116m/16158542.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (126, 'Preludes & Nocturnes', 'Neil Gaiman, Sam Kieth, Mike Dringenberg, Malcolm Jones III, Todd Klein, Karen  Berger', 1989, 'https://images.gr-assets.com/books/1411609637m/23754.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (127, ' A Monster Calls ', 'Patrick Ness, Jim Kay, Siobhan Dowd', 2011, 'https://images.gr-assets.com/books/1485991317m/8621462.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (128, 'Saga, Volume One', 'Brian K. Vaughan, Fiona Staples', 2012, 'https://images.gr-assets.com/books/1486028947m/15704307.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (129, 'Lonesome Dove', 'Larry McMurtry', 1985, 'https://images.gr-assets.com/books/1378573063m/256008.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (130, 'The Blood of Olympus', 'Rick Riordan', 2014, 'https://images.gr-assets.com/books/1464201441m/18705209.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (131, 'Howl''s Moving Castle', 'Diana Wynne Jones', 1986, 'https://images.gr-assets.com/books/1407450489m/6294.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (132, 'The Lies of Locke Lamora', 'Scott Lynch', 2006, 'https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png');
INSERT INTO public.books (id, title, author, year, cover) VALUES (133, 'The Little House Collection', 'Laura Ingalls Wilder, Garth Williams', 1953, 'https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png');
INSERT INTO public.books (id, title, author, year, cover) VALUES (134, 'The Essential Calvin and Hobbes: A Calvin and Hobbes Treasury', 'Bill Watterson', 1988, 'https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png');
INSERT INTO public.books (id, title, author, year, cover) VALUES (135, 'Roots', 'Alex Haley', 1976, 'https://images.gr-assets.com/books/1329398936m/546018.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (136, 'Aristotle and Dante Discover the Secrets of the Universe', 'Benjamin Alire Sáenz', 2012, 'https://images.gr-assets.com/books/1328320260m/12000020.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (137, 'Different Seasons', 'Stephen King', 1982, 'https://images.gr-assets.com/books/1329662611m/39662.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (138, 'The Autobiography of Malcolm X', 'Malcolm X, Alex Haley', 1965, 'https://images.gr-assets.com/books/1434682864m/92057.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (139, 'The Monster at the End of This Book', 'Jon Stone, Michael J. Smollin', 1971, 'https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png');
INSERT INTO public.books (id, title, author, year, cover) VALUES (140, '桜蘭高校ホスト部 1', 'Bisco Hatori', 2003, 'https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png');
INSERT INTO public.books (id, title, author, year, cover) VALUES (141, 'Champion', 'Marie Lu', 2013, 'https://images.gr-assets.com/books/1382652310m/14290364.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (142, 'The Edge of Never', 'J.A. Redmerski', 2012, 'https://images.gr-assets.com/books/1358810128m/16081272.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (143, 'Batman: The Killing Joke ', 'Alan Moore, Brian Bolland, Tim Sale', 1988, 'https://images.gr-assets.com/books/1346331835m/96358.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (144, 'Winter', 'Marissa Meyer', 2015, 'https://images.gr-assets.com/books/1470057036m/13206900.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (145, 'Maybe Someday', 'Colleen Hoover', 2014, 'https://images.gr-assets.com/books/1421002815m/24445517.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (146, 'The Hobbit and The Lord of the Rings', 'J.R.R. Tolkien', 1973, 'https://images.gr-assets.com/books/1346072396m/30.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (147, 'Lamb: The Gospel According to Biff, Christ''s Childhood Pal', 'Christopher Moore', 2002, 'https://images.gr-assets.com/books/1331419009m/28881.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (148, 'Brüder Grimm: Kinder- und Hausmärchen', 'Jacob Grimm, Wilhelm Grimm, Josef Scharl, Padraic Colum, Joseph Campbell, Margaret Raine Hunt, James Stern', 1812, 'https://images.gr-assets.com/books/1369540060m/22917.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (149, 'Point of Retreat', 'Colleen Hoover', 2012, 'https://images.gr-assets.com/books/1330543249m/13496084.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (150, 'Red Rising', 'Pierce Brown', 2014, 'https://images.gr-assets.com/books/1461354651m/15839976.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (151, 'Onyx', 'Jennifer L. Armentrout', 2012, 'https://images.gr-assets.com/books/1329408511m/13047090.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (152, 'Americanah', 'Chimamanda Ngozi Adichie', 2013, 'https://images.gr-assets.com/books/1356654499m/15796700.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (153, 'Guess How Much I Love You', 'Sam McBratney, Anita Jeram', 1988, 'https://images.gr-assets.com/books/1320457007m/301736.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (154, 'Falling Up', 'Shel Silverstein', 1996, 'https://images.gr-assets.com/books/1327871908m/30120.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (155, 'NARUTO -ナルト- 巻ノ一 ', 'Masashi Kishimoto, Katy Bridges', 1999, 'https://images.gr-assets.com/books/1435524806m/204042.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (156, 'Shōgun', 'James Clavell', 1975, 'https://images.gr-assets.com/books/1397228842m/402093.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (157, 'Ugly Love', 'Colleen Hoover', 2014, 'https://images.gr-assets.com/books/1399179135m/17788401.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (158, 'Ender''s Shadow', 'Orson Scott Card', 1998, 'https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png');
INSERT INTO public.books (id, title, author, year, cover) VALUES (159, 'Effortless', 'S.C. Stephens', 2011, 'https://images.gr-assets.com/books/1364805648m/15842441.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (160, '鋼の錬金術師 1', 'Hiromu Arakawa, Akira Watanabe', 2002, 'https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png');
INSERT INTO public.books (id, title, author, year, cover) VALUES (161, 'Six of Crows', 'Leigh Bardugo', 2015, 'https://images.gr-assets.com/books/1500689111m/23437156.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (162, 'Unravel Me (Shatter Me, #2)', 'Tahereh Mafi', 2013, 'https://images.gr-assets.com/books/1340287622m/13104080.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (163, 'The Fiery Cross', 'Diana Gabaldon', 2001, 'https://images.gr-assets.com/books/1407366842m/10967.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (164, 'Schindler''s Ark', 'Thomas Keneally', 1982, 'https://images.gr-assets.com/books/1348163457m/375013.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (165, 'Lady Midnight', 'Cassandra Clare', 2016, 'https://images.gr-assets.com/books/1460477682m/25494343.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (166, 'Between the World and Me', 'Ta-Nehisi Coates', 2015, 'https://images.gr-assets.com/books/1451435027m/25489625.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (167, 'Team of Rivals: The Political Genius of Abraham Lincoln', 'Doris Kearns Goodwin, Suzanne Toren', 2005, 'https://images.gr-assets.com/books/1347278868m/2199.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (168, 'A Breath of Snow and Ashes', 'Diana Gabaldon', 2005, 'https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png');
INSERT INTO public.books (id, title, author, year, cover) VALUES (169, 'Born to Run: A Hidden Tribe, Superathletes, and the Greatest Race the World Has Never Seen', 'Christopher McDougall', 2009, 'https://images.gr-assets.com/books/1320531983m/6289283.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (170, 'Guards! Guards!', 'Terry Pratchett', 1989, 'https://images.gr-assets.com/books/1431127356m/64216.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (171, 'It Ends with Us', 'Colleen Hoover', 2016, 'https://images.gr-assets.com/books/1470427482m/27362503.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (172, 'Shantaram', 'Gregory David Roberts', 2003, 'https://images.gr-assets.com/books/1333482282m/33600.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (173, 'A Fine Balance', 'Rohinton Mistry', 1996, 'https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png');
INSERT INTO public.books (id, title, author, year, cover) VALUES (174, ' Animal Farm & 1984', 'George Orwell, Christopher Hitchens', 1950, 'https://images.gr-assets.com/books/1327959366m/5472.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (175, 'The Complete Anne of Green Gables Boxed Set', 'L.M. Montgomery', 1908, 'https://images.gr-assets.com/books/1267721500m/3579.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (176, 'Ignite Me (Shatter Me, #3)', 'Tahereh Mafi', 2014, 'https://images.gr-assets.com/books/1375972497m/13188676.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (177, 'Lover Unbound', 'J.R. Ward', 2007, 'https://images.gr-assets.com/books/1351276662m/304027.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (178, 'Towers of Midnight', 'Robert Jordan, Brandon Sanderson', 2010, 'https://images.gr-assets.com/books/1358109459m/8253920.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (179, 'Lover Revealed', 'J.R. Ward', 2007, 'https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png');
INSERT INTO public.books (id, title, author, year, cover) VALUES (180, 'The Dark Tower', 'Stephen King', 2004, 'https://images.gr-assets.com/books/1372296329m/5091.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (181, 'Opal', 'Jennifer L. Armentrout', 2012, 'https://images.gr-assets.com/books/1348200300m/13362536.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (182, 'The Complete Maus', 'Art Spiegelman', 1986, 'https://images.gr-assets.com/books/1327354180m/15195.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (183, 'Maus II : And Here My Troubles Began ', 'Art Spiegelman', 1991, 'https://images.gr-assets.com/books/1327887479m/15197.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (184, 'The Gathering Storm', 'Robert Jordan, Brandon Sanderson', 2009, 'https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png');
INSERT INTO public.books (id, title, author, year, cover) VALUES (185, 'Between Shades of Gray', 'Ruta Sepetys', 2011, 'https://images.gr-assets.com/books/1327873479m/7824322.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (186, '進撃の巨人 1', 'Hajime Isayama, Sheldon Drzka', 2010, 'https://images.gr-assets.com/books/1432712438m/13154150.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (187, 'The Book of Mormon', 'Anonymous, Joseph Smith Jr.', 1830, 'https://images.gr-assets.com/books/1327389004m/323355.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (188, 'Empire of Storms', 'Sarah J. Maas', 2016, 'https://images.gr-assets.com/books/1463107108m/28260587.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (189, 'Lover Avenged, part one', 'J.R. Ward', 2010, 'https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png');
INSERT INTO public.books (id, title, author, year, cover) VALUES (190, 'His Dark Materials', 'Philip Pullman', 2000, 'https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png');
INSERT INTO public.books (id, title, author, year, cover) VALUES (191, 'Surely You''re Joking, Mr. Feynman! Adventures of a Curious Character', 'Richard Feynman', 1984, 'https://images.gr-assets.com/books/1348445281m/5544.jpg');
INSERT INTO public.books (id, title, author, year, cover) VALUES (192, 'Lover Enshrined, part two', 'J.R. Ward', 2009, 'https://images.gr-assets.com/books/1321039998m/5098079.jpg');