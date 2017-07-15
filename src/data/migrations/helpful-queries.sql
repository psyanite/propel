-- Clean schema
drop schema public cascade;
create schema public;

-- Create Listing table
CREATE TABLE public.listings (
  id integer NOT NULL,
  name character varying(255),
  area character varying(255),
  price integer,
  "bedroomCount" integer,
  "guestCount" integer,
  "bedCount" integer,
  image character varying(255),
  description text,
  link character varying(255),
  "createdAt" timestamp with time zone,
  "updatedAt" timestamp with time zone,
  CONSTRAINT listings_pkey PRIMARY KEY (id)
);


-- Populate Listing table
INSERT INTO listings
(name, area, price, "bedroomCount", "guestCount", "bedCount", image, description)
VALUES
('Js Apartment', 'Katsushika', 80, 1, 1, 1, 'https://a0.muscache.com/im/pictures/97555979/877f8f00_original.jpg?aki_policy=large', 'Tateishi Tokyo,Quaint Neighborhood around the Station.<br />Many Bars still exist since right after the World War near the station.<br />You can feel what Tokyo was like back in 1940s.<br />Good access to Major spot (15mins-50mins )'),
('KYODO HOUSE for Art of Living', 'Setagaya-ku', 185, 2, 3, 2, 'https://a0.muscache.com/im/pictures/95528629/e856da9f_original.jpg?aki_policy=xx_large', 'Hi, this is Hide. Welcome to our new home & share house for Art of Living. Designed and built by leading artist and enviroment designer in June, 2015. Located in west Tokyo leafy area, Kyodo station(15-20 min train to Shinjuku & Harajuku).'),
('Urban Tokyo House', 'Toshima-ku', 124, 1, 2, 2, 'https://a0.muscache.com/im/pictures/24565969/182070f0_original.jpg?aki_policy=xx_large', 'A very well-located, modern, spacious house with very easy access to the best places in Tokyo. Experience our version of the Japanese concept of hospitality (omotenashi) as you use our well-designed house as your home base for your Tokyo adventure!'),
('Lovely APT in Shibuya', 'Shibuya-ku', 134, 3, 3, 2, 'https://a0.muscache.com/im/pictures/9edf31d4-d587-4302-a807-a769845bc386.jpg?aki_policy=xx_large', 'shibuya is know as one of the mostfamous town of japan, particularly for young people, and as a major night life area. if you wanna explore tokyo till night, this is the place. you can enjoy most center area by walking distance.');
