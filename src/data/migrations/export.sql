--
-- PostgreSQL database dump
--

-- Dumped from database version 10.4 (Ubuntu 10.4-2.pgdg16.04+1)
-- Dumped by pg_dump version 10.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner:
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner:
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: cities; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cities (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    district_id integer NOT NULL
);


ALTER TABLE public.cities OWNER TO postgres;

--
-- Name: city; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.city (
    id integer NOT NULL,
    name character varying(255)
);


ALTER TABLE public.city OWNER TO postgres;

--
-- Name: city_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.city_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.city_id_seq OWNER TO postgres;

--
-- Name: city_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.city_id_seq OWNED BY public.city.id;


--
-- Name: country; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.country (
    id integer NOT NULL,
    name character varying(255)
);


ALTER TABLE public.country OWNER TO postgres;

--
-- Name: country_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.country_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.country_id_seq OWNER TO postgres;

--
-- Name: country_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.country_id_seq OWNED BY public.country.id;


--
-- Name: districts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.districts (
    id integer NOT NULL,
    name character varying(255),
    "regionId" integer
);


ALTER TABLE public.districts OWNER TO postgres;

--
-- Name: listings; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.listings (
    id integer NOT NULL,
    name character varying(255),
    "suburbId" integer,
    price integer,
    "bedroomCount" integer,
    "guestCount" integer,
    "bedCount" integer,
    image character varying(255),
    description text,
    link character varying(255),
    "propertyKindId" integer
);


ALTER TABLE public.listings OWNER TO postgres;

--
-- Name: propertyKinds; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."propertyKinds" (
    id integer NOT NULL,
    name character varying(255) NOT NULL
);


ALTER TABLE public."propertyKinds" OWNER TO postgres;

--
-- Name: regions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.regions (
    id integer NOT NULL,
    name character varying(255)
);


ALTER TABLE public.regions OWNER TO postgres;

--
-- Name: store; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.store (
    id integer NOT NULL,
    name character varying(50),
    phone_number character varying(20),
    address_first_line character varying(100),
    address_second_line character varying(100),
    address_street_number character varying(20),
    address_street_name character varying(50),
    "districtId" integer
);


ALTER TABLE public.store OWNER TO postgres;

--
-- Name: store_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.store_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.store_id_seq OWNER TO postgres;

--
-- Name: store_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.store_id_seq OWNED BY public.store.id;


--
-- Name: stores; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.stores (
    id integer NOT NULL,
    name character varying(50),
    phone_number character varying(20),
    address_first_line character varying(100),
    address_second_line character varying(100),
    address_street_number character varying(20),
    address_street_name character varying(50),
    "districtId" integer
);


ALTER TABLE public.stores OWNER TO postgres;

--
-- Name: stores_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.stores_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.stores_id_seq OWNER TO postgres;

--
-- Name: stores_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.stores_id_seq OWNED BY public.stores.id;


--
-- Name: suburbs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.suburbs (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    "districtId" integer
);


ALTER TABLE public.suburbs OWNER TO postgres;

--
-- Data for Name: cities; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cities (id, name, district_id) FROM stdin;
\.


--
-- Data for Name: city; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.city (id, name) FROM stdin;
\.


--
-- Data for Name: country; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.country (id, name) FROM stdin;
\.


--
-- Data for Name: districts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.districts (id, name, "regionId") FROM stdin;
2	Auckland City	1
3	Manukau City	1
5	Potatoville	4
1	Kaipara	2
4	Doggo Hills	3
6	Nekoton	3
\.


--
-- Data for Name: listings; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.listings (id, name, "suburbId", price, "bedroomCount", "guestCount", "bedCount", image, description, link, "propertyKindId") FROM stdin;
3	Urban Cape Reinga	1	124000	1	2	2	https://a0.muscache.com/im/pictures/24565969/182070f0_original.jpg?aki_policy=xx_large	A very well-located, modern, spacious house with very easy access to the best places in Tokyo. Experience our version of the Japanese concept of hospitality (omotenashi) as you use our well-designed house as your home base for your Tokyo adventure!	https://www.airbnb.com.au/rooms/1298200	2
24	Rocky BalWoofa	12	210000	1	1	1	https://a0.muscache.com/im/pictures/97555979/877f8f00_original.jpg?aki_policy=large	Tateishi Tokyo,Quaint Neighborhood around the Station.<br />Many Bars still exist since right after the World War near the station.<br />You can feel what Tokyo was like back in 1940s.<br />Good access to Major spot (15mins-50mins )	https://www.airbnb.com.au/rooms/1298200	4
18	Meowzees	9	344000	3	3	2	https://a0.muscache.com/im/pictures/57587161/587b1ae7_original.jpg?aki_policy=large	shibuya is know as one of the mostfamous town of japan, particularly for young people, and as a major night life area. if you wanna explore tokyo till night, this is the place. you can enjoy most center area by walking distance.	https://www.airbnb.com.au/rooms/1298200	1
19	Kitty Bronx	10	444000	3	3	2	https://a0.muscache.com/im/pictures/57587161/587b1ae7_original.jpg?aki_policy=large	shibuya is know as one of the mostfamous town of japan, particularly for young people, and as a major night life area. if you wanna explore tokyo till night, this is the place. you can enjoy most center area by walking distance.	https://www.airbnb.com.au/rooms/1298200	1
26	Pupper Sweet Home	12	124000	1	2	2	https://a0.muscache.com/im/pictures/57587161/587b1ae7_original.jpg?aki_policy=large	A very well-located, modern, spacious house with very easy access to the best places in Tokyo. Experience our version of the Japanese concept of hospitality (omotenashi) as you use our well-designed house as your home base for your Tokyo adventure!	https://www.airbnb.com.au/rooms/1298200	4
28	Squirrel Not Squirrel	13	344000	1	1	1	https://a0.muscache.com/im/pictures/97555979/877f8f00_original.jpg?aki_policy=large	Tateishi Tokyo,Quaint Neighborhood around the Station.<br />Many Bars still exist since right after the World War near the station.<br />You can feel what Tokyo was like back in 1940s.<br />Good access to Major spot (15mins-50mins )	https://www.airbnb.com.au/rooms/1298200	3
11	Purple Potato Sweet Home	6	444000	1	1	1	https://a0.muscache.com/im/pictures/97555979/877f8f00_original.jpg?aki_policy=large	Tateishi Tokyo,Quaint Neighborhood around the Station.<br />Many Bars still exist since right after the World War near the station.<br />You can feel what Tokyo was like back in 1940s.<br />Good access to Major spot (15mins-50mins )	https://www.airbnb.com.au/rooms/1298200	4
12	Mary Jane Is Not My Lover	3	29000	2	3	2	https://a0.muscache.com/im/pictures/a67d6a4b-169f-49b3-9387-00010494ef12.jpg?aki_policy=large	Hi, this is Hide. Welcome to our new home & share house for Art of Living. Designed and built by leading artist and enviroment designer in June, 2015. Located in west Tokyo leafy area, Kyodo station(15-20 min train to Shinjuku & Harajuku).	https://www.airbnb.com.au/rooms/1298200	4
9	Hot Box 303	3	444000	3	3	2	https://a0.muscache.com/im/pictures/57587161/587b1ae7_original.jpg?aki_policy=large	shibuya is know as one of the mostfamous town of japan, particularly for young people, and as a major night life area. if you wanna explore tokyo till night, this is the place. you can enjoy most center area by walking distance.	https://www.airbnb.com.au/rooms/1298200	1
13	Urban Tokyo House	2	124000	1	2	2	https://a0.muscache.com/im/pictures/57587161/587b1ae7_original.jpg?aki_policy=large	A very well-located, modern, spacious house with very easy access to the best places in Tokyo. Experience our version of the Japanese concept of hospitality (omotenashi) as you use our well-designed house as your home base for your Tokyo adventure!	https://www.airbnb.com.au/rooms/1298200	4
16	Pawtato Points	8	520000	1	1	1	https://a0.muscache.com/im/pictures/97555979/877f8f00_original.jpg?aki_policy=large	Tateishi Tokyo,Quaint Neighborhood around the Station.<br />Many Bars still exist since right after the World War near the station.<br />You can feel what Tokyo was like back in 1940s.<br />Good access to Major spot (15mins-50mins )	https://www.airbnb.com.au/rooms/1298200	4
17	Fluff-a-luff	9	444000	3	3	2	https://a0.muscache.com/im/pictures/57587161/587b1ae7_original.jpg?aki_policy=large	shibuya is know as one of the mostfamous town of japan, particularly for young people, and as a major night life area. if you wanna explore tokyo till night, this is the place. you can enjoy most center area by walking distance.	https://www.airbnb.com.au/rooms/1298200	1
29	Tennis Ball Home	13	520000	3	3	2	https://a0.muscache.com/im/pictures/57587161/587b1ae7_original.jpg?aki_policy=large	shibuya is know as one of the mostfamous town of japan, particularly for young people, and as a major night life area. if you wanna explore tokyo till night, this is the place. you can enjoy most center area by walking distance.	https://www.airbnb.com.au/rooms/1298200	1
23	Borkity Apartment	11	520000	2	3	2	https://a0.muscache.com/im/pictures/a67d6a4b-169f-49b3-9387-00010494ef12.jpg?aki_policy=large	Hi, this is Hide. Welcome to our new home & share house for Art of Living. Designed and built by leading artist and enviroment designer in June, 2015. Located in west Tokyo leafy area, Kyodo station(15-20 min train to Shinjuku & Harajuku).	https://www.airbnb.com.au/rooms/1298200	4
1	Doggo Dream House	5	29000	1	1	1	https://a0.muscache.com/im/pictures/97555979/877f8f00_original.jpg?aki_policy=large	Auction: at 34 Shortland Street, City on Wednesday 26 July 2017 at 1:30PM  (unless sold prior) <br> <br>This exquisite townhouse provides a life of luxury, with a sensational sea view. Infused with light and a superbly spacious feel, this 4 bedroom home is the epitome of entertaining. The upstairs open plan lounge and kitchen where youÂ´ll enjoy a vibrant vista of sparkling water and passing yachts. Whether you have a book or a glass of champers in your hands, this is a magical spot to relax and revive. Downstairs features an additional leisure area with a lounge leading out to a private courtyard perfectly positioned for summer BBQs and laughter. The piece de resistance is the master bedroom, with its chic ensuite and designer bath. Recently refurbished to an impeccable standard, this isnÂ´t just a home, itÂ´s a haven. <br> <br>PROPERTY FILES AVAILABLE <br>To access and download property files, please use the following link: <br>http://www.propertyfiles.co.nz/property/599771<br><br>Agency reference #: 599771	https://www.airbnb.com.au/rooms/1298200	1
8	Not A Weed House	2	50000	1	2	2	https://a0.muscache.com/im/pictures/24565969/182070f0_original.jpg?aki_policy=xx_large	A very well-located, modern, spacious house with very easy access to the best places in Tokyo. Experience our version of the Japanese concept of hospitality (omotenashi) as you use our well-designed house as your home base for your Tokyo adventure!	https://www.airbnb.com.au/rooms/1298200	2
27	Ball Views	13	230000	1	2	2	https://a0.muscache.com/im/pictures/24565969/182070f0_original.jpg?aki_policy=xx_large	A very well-located, modern, spacious house with very easy access to the best places in Tokyo. Experience our version of the Japanese concept of hospitality (omotenashi) as you use our well-designed house as your home base for your Tokyo adventure!	https://www.airbnb.com.au/rooms/1298200	2
22	Borkensville Home	11	124000	3	3	2	https://a0.muscache.com/im/pictures/57587161/587b1ae7_original.jpg?aki_policy=large	shibuya is know as one of the mostfamous town of japan, particularly for young people, and as a major night life area. if you wanna explore tokyo till night, this is the place. you can enjoy most center area by walking distance.	https://www.airbnb.com.au/rooms/1298200	1
2	420 247 The Bronx	4	29000	2	3	2	https://a0.muscache.com/im/pictures/61519212/b4c15ded_original.jpg?aki_policy=xx_large	Our caravan is the first 100% Japanese-made of its kind, custom-built by local craftspeople. Inside is a double bed, dining nook, storage shelves, wi-fi, air conditioning and ensuite bathroom with modern toilet, shower and plenty of hot water.<br />Outside the caravan is a secluded deck with handcrafted wooden lounge, perfect for drinks on warm nights. This is a space where you can escape the hustle and bustle after a day of exploring Tokyo.<br />Our caravan is parked inside a secure mixed-use complex that includes a shared office (which you will have access to), a gallery, cafes and food vendors selling from vegetarian to classic Japanese foods and some of the best coffee in Tokyo.<br />If you are looking for another location to experience a different part of the city check on our other location, an apartment in the vibrant Nakameguro.	https://www.airbnb.com.au/rooms/4905030	2
6	The Projexx 2	6	80000	1	1	1	https://a0.muscache.com/im/pictures/61519212/b4c15ded_original.jpg?aki_policy=xx_large	Our caravan is the first 100% Japanese-made of its kind, custom-built by local craftspeople. Inside is a double bed, dining nook, storage shelves, wi-fi, air conditioning and ensuite bathroom with modern toilet, shower and plenty of hot water.<br />Outside the caravan is a secluded deck with handcrafted wooden lounge, perfect for drinks on warm nights. This is a space where you can escape the hustle and bustle after a day of exploring Tokyo.<br />Our caravan is parked inside a secure mixed-use complex that includes a shared office (which you will have access to), a gallery, cafes and food vendors selling from vegetarian to classic Japanese foods and some of the best coffee in Tokyo.<br />If you are looking for another location to experience a different part of the city check on our other location, an apartment in the vibrant Nakameguro.	https://www.airbnb.com.au/rooms/4905030	4
7	Beauty and a Beeach	1	444000	2	3	2	https://a0.muscache.com/im/pictures/b8d2c410-84f9-439c-9eba-6d4bb337bedb.jpg?aki_policy=large	Hi, this is Hide. Welcome to our new home & share house for Art of Living. Designed and built by leading artist and enviroment designer in June, 2015. Located in west Tokyo leafy area, Kyodo station(15-20 min train to Shinjuku & Harajuku).	https://www.airbnb.com.au/rooms/1298200	4
14	Fluffles Dream House	7	520000	1	2	2	https://a0.muscache.com/im/pictures/57587161/587b1ae7_original.jpg?aki_policy=large	A very well-located, modern, spacious house with very easy access to the best places in Tokyo. Experience our version of the Japanese concept of hospitality (omotenashi) as you use our well-designed house as your home base for your Tokyo adventure!	https://www.airbnb.com.au/rooms/1298200	4
4	Lovely Doggo Apartment	5	344000	3	3	2	https://a0.muscache.com/im/pictures/61519212/b4c15ded_original.jpg?aki_policy=xx_large	Our caravan is the first 100% Japanese-made of its kind, custom-built by local craftspeople. Inside is a double bed, dining nook, storage shelves, wi-fi, air conditioning and ensuite bathroom with modern toilet, shower and plenty of hot water.<br />Outside the caravan is a secluded deck with handcrafted wooden lounge, perfect for drinks on warm nights. This is a space where you can escape the hustle and bustle after a day of exploring Tokyo.<br />Our caravan is parked inside a secure mixed-use complex that includes a shared office (which you will have access to), a gallery, cafes and food vendors selling from vegetarian to classic Japanese foods and some of the best coffee in Tokyo.<br />If you are looking for another location to experience a different part of the city check on our other location, an apartment in the vibrant Nakameguro.	https://www.airbnb.com.au/rooms/4905030	2
21	Not so sweet home for a paw or two	10	132000	3	3	2	https://a0.muscache.com/im/pictures/57587161/587b1ae7_original.jpg?aki_policy=large	shibuya is know as one of the mostfamous town of japan, particularly for young people, and as a major night life area. if you wanna explore tokyo till night, this is the place. you can enjoy most center area by walking distance.	https://www.airbnb.com.au/rooms/1298200	1
10	Reinga is wea itz at	1	80000	1	1	1	https://a0.muscache.com/im/pictures/b8d2c410-84f9-439c-9eba-6d4bb337bedb.jpg?aki_policy=large	Tateishi Tokyo,Quaint Neighborhood around the Station.<br />Many Bars still exist since right after the World War near the station.<br />You can feel what Tokyo was like back in 1940s.<br />Good access to Major spot (15mins-50mins )	https://www.airbnb.com.au/rooms/1298200	1
25	Small Doggo Home	12	344000	1	1	1	https://a0.muscache.com/im/pictures/97555979/877f8f00_original.jpg?aki_policy=large	Tateishi Tokyo,Quaint Neighborhood around the Station.<br />Many Bars still exist since right after the World War near the station.<br />You can feel what Tokyo was like back in 1940s.<br />Good access to Major spot (15mins-50mins )	https://www.airbnb.com.au/rooms/1298200	3
20	Sweet Little Home for a Paw or Two	10	210000	3	3	2	https://a0.muscache.com/im/pictures/57587161/587b1ae7_original.jpg?aki_policy=large	shibuya is know as one of the mostfamous town of japan, particularly for young people, and as a major night life area. if you wanna explore tokyo till night, this is the place. you can enjoy most center area by walking distance.	https://www.airbnb.com.au/rooms/1298200	1
15	Apartment of Wool Balls	7	344000	2	3	2	https://a0.muscache.com/im/pictures/a67d6a4b-169f-49b3-9387-00010494ef12.jpg?aki_policy=large	Hi, this is Hide. Welcome to our new home & share house for Art of Living. Designed and built by leading artist and enviroment designer in June, 2015. Located in west Tokyo leafy area, Kyodo station(15-20 min train to Shinjuku & Harajuku).	https://www.airbnb.com.au/rooms/1298200	4
5	The Projexx 1	2	444000	1	1	1	https://a0.muscache.com/im/pictures/97555979/877f8f00_original.jpg?aki_policy=large	Tateishi Tokyo,Quaint Neighborhood around the Station.<br />Many Bars still exist since right after the World War near the station.<br />You can feel what Tokyo was like back in 1940s.<br />Good access to Major spot (15mins-50mins )	https://www.airbnb.com.au/rooms/1298200	3
\.


--
-- Data for Name: propertyKinds; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."propertyKinds" (id, name) FROM stdin;
1	Apartment
2	House
3	Townhouse
4	Unit
\.


--
-- Data for Name: regions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.regions (id, name) FROM stdin;
1	Auckland
2	Wellington
4	Potatoland
3	Pawsiton
\.


--
-- Data for Name: store; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.store (id, name, phone_number, address_first_line, address_second_line, address_street_number, address_street_name, "districtId") FROM stdin;
\.


--
-- Data for Name: stores; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.stores (id, name, phone_number, address_first_line, address_second_line, address_street_number, address_street_name, "districtId") FROM stdin;
\.


--
-- Data for Name: suburbs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.suburbs (id, name, "districtId") FROM stdin;
5	Doggo-ku	4
4	GI	2
6	Potatotown	5
3	Otatwohu	3
1	Cape Reinga	1
2	Papatwotoe	3
7	Neko-ku	6
8	Pawtato	6
9	Fluffville	6
10	Deadmaus	6
11	Borkville	4
12	Pupper's Rock	4
13	Ballballball	4
\.


--
-- Name: city_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.city_id_seq', 1, false);


--
-- Name: country_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.country_id_seq', 1, false);


--
-- Name: store_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.store_id_seq', 1, false);


--
-- Name: stores_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.stores_id_seq', 1, false);


--
-- Name: city city_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.city
    ADD CONSTRAINT city_pkey PRIMARY KEY (id);


--
-- Name: country country_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.country
    ADD CONSTRAINT country_pkey PRIMARY KEY (id);


--
-- Name: districts districts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.districts
    ADD CONSTRAINT districts_pkey PRIMARY KEY (id);


--
-- Name: listings listings_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.listings
    ADD CONSTRAINT listings_pkey PRIMARY KEY (id);


--
-- Name: propertyKinds propertyTypes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."propertyKinds"
    ADD CONSTRAINT "propertyTypes_pkey" PRIMARY KEY (id);


--
-- Name: regions regions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.regions
    ADD CONSTRAINT regions_pkey PRIMARY KEY (id);


--
-- Name: store store_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.store
    ADD CONSTRAINT store_pkey PRIMARY KEY (id);


--
-- Name: stores stores_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.stores
    ADD CONSTRAINT stores_pkey PRIMARY KEY (id);


--
-- Name: suburbs suburbs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.suburbs
    ADD CONSTRAINT suburbs_pkey PRIMARY KEY (id);


--
-- Name: city_name; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX city_name ON public.city USING btree (name);


--
-- Name: country_name; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX country_name ON public.country USING btree (name);


--
-- Name: districts_name; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX districts_name ON public.districts USING btree (name);


--
-- Name: listings_name; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX listings_name ON public.listings USING btree (name);


--
-- Name: property_kinds_name; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX property_kinds_name ON public."propertyKinds" USING btree (name);


--
-- Name: property_types_name; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX property_types_name ON public."propertyKinds" USING btree (name);


--
-- Name: propetyTypes_name; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "propetyTypes_name" ON public."propertyKinds" USING btree (name);


--
-- Name: regions_name; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX regions_name ON public.regions USING btree (name);


--
-- Name: store_name; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX store_name ON public.store USING btree (name);


--
-- Name: stores_name; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX stores_name ON public.stores USING btree (name);


--
-- Name: suburbs_name; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX suburbs_name ON public.suburbs USING btree (name);


--
-- Name: districts districts_regionId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.districts
    ADD CONSTRAINT "districts_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES public.regions(id);


--
-- Name: listings fk_area; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.listings
    ADD CONSTRAINT fk_area FOREIGN KEY ("suburbId") REFERENCES public.suburbs(id);


--
-- Name: listings fk_propertyType; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.listings
    ADD CONSTRAINT "fk_propertyType" FOREIGN KEY ("propertyKindId") REFERENCES public."propertyKinds"(id);


--
-- Name: store store_districtId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.store
    ADD CONSTRAINT "store_districtId_fkey" FOREIGN KEY ("districtId") REFERENCES public.districts(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: stores stores_districtId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.stores
    ADD CONSTRAINT "stores_districtId_fkey" FOREIGN KEY ("districtId") REFERENCES public.districts(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: suburbs suburbs_districtId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.suburbs
    ADD CONSTRAINT "suburbs_districtId_fkey" FOREIGN KEY ("districtId") REFERENCES public.districts(id);


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- Name: LANGUAGE plpgsql; Type: ACL; Schema: -; Owner: postgres
--

GRANT ALL ON LANGUAGE plpgsql TO postgres;


--
-- PostgreSQL database dump complete
--

