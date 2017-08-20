--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.2
-- Dumped by pg_dump version 9.6.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: listings; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE listings (
    id integer NOT NULL,
    name character varying(255),
    "areaId" integer,
    price integer,
    "bedroomCount" integer,
    "guestCount" integer,
    "bedCount" integer,
    image character varying(255),
    description text,
    link character varying(255),
    "propertyKindId" integer
);


ALTER TABLE listings OWNER TO postgres;

--
-- Name: search_listings(integer[]); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION search_listings(area_id integer[]) RETURNS SETOF listings
    LANGUAGE sql IMMUTABLE
    AS $$
  select * from listings
  where
    "areaId" = any (area_id)
$$;


ALTER FUNCTION public.search_listings(area_id integer[]) OWNER TO postgres;

--
-- Name: User; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE "User" (
    id uuid NOT NULL,
    email character varying(255),
    "emailConfirmed" boolean DEFAULT false,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE "User" OWNER TO postgres;

--
-- Name: UserClaim; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE "UserClaim" (
    id integer NOT NULL,
    type character varying(255),
    value character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "userId" uuid
);


ALTER TABLE "UserClaim" OWNER TO postgres;

--
-- Name: UserClaim_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE "UserClaim_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "UserClaim_id_seq" OWNER TO postgres;

--
-- Name: UserClaim_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE "UserClaim_id_seq" OWNED BY "UserClaim".id;


--
-- Name: UserLogin; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE "UserLogin" (
    name character varying(50) NOT NULL,
    key character varying(100) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "userId" uuid
);


ALTER TABLE "UserLogin" OWNER TO postgres;

--
-- Name: UserProfile; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE "UserProfile" (
    "userId" uuid NOT NULL,
    "displayName" character varying(100),
    picture character varying(255),
    gender character varying(50),
    location character varying(100),
    website character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE "UserProfile" OWNER TO postgres;

--
-- Name: districts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE districts (
    id integer NOT NULL,
    name character varying(255),
    "regionId" integer
);


ALTER TABLE districts OWNER TO postgres;

--
-- Name: propertyKinds; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE "propertyKinds" (
    id integer NOT NULL,
    name character varying(255) NOT NULL
);


ALTER TABLE "propertyKinds" OWNER TO postgres;

--
-- Name: regions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE regions (
    id integer NOT NULL,
    name character varying(255)
);


ALTER TABLE regions OWNER TO postgres;

--
-- Name: suburbs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE suburbs (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    "districtId" integer
);


ALTER TABLE suburbs OWNER TO postgres;

--
-- Name: UserClaim id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "UserClaim" ALTER COLUMN id SET DEFAULT nextval('"UserClaim_id_seq"'::regclass);


--
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY "User" (id, email, "emailConfirmed", "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: UserClaim; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY "UserClaim" (id, type, value, "createdAt", "updatedAt", "userId") FROM stdin;
\.


--
-- Name: UserClaim_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"UserClaim_id_seq"', 1, false);


--
-- Data for Name: UserLogin; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY "UserLogin" (name, key, "createdAt", "updatedAt", "userId") FROM stdin;
\.


--
-- Data for Name: UserProfile; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY "UserProfile" ("userId", "displayName", picture, gender, location, website, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: districts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY districts (id, name, "regionId") FROM stdin;
1	Kaipara	\N
2	Auckland City	\N
3	Manukau City	\N
4	Doggo Hills	\N
5	Potatoville	\N
\.


--
-- Data for Name: listings; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY listings (id, name, "areaId", price, "bedroomCount", "guestCount", "bedCount", image, description, link, "propertyKindId") FROM stdin;
3	Urban Tokyo House	1	124	1	2	2	https://a0.muscache.com/im/pictures/24565969/182070f0_original.jpg?aki_policy=xx_large	A very well-located, modern, spacious house with very easy access to the best places in Tokyo. Experience our version of the Japanese concept of hospitality (omotenashi) as you use our well-designed house as your home base for your Tokyo adventure!	https://www.airbnb.com.au/rooms/1298200	2
4	Lovely APT in Shibuya	5	134	3	3	2	https://a0.muscache.com/im/pictures/61519212/b4c15ded_original.jpg?aki_policy=xx_large	Our caravan is the first 100% Japanese-made of its kind, custom-built by local craftspeople. Inside is a double bed, dining nook, storage shelves, wi-fi, air conditioning and ensuite bathroom with modern toilet, shower and plenty of hot water.<br />Outside the caravan is a secluded deck with handcrafted wooden lounge, perfect for drinks on warm nights. This is a space where you can escape the hustle and bustle after a day of exploring Tokyo.<br />Our caravan is parked inside a secure mixed-use complex that includes a shared office (which you will have access to), a gallery, cafes and food vendors selling from vegetarian to classic Japanese foods and some of the best coffee in Tokyo.<br />If you are looking for another location to experience a different part of the city check on our other location, an apartment in the vibrant Nakameguro.	https://www.airbnb.com.au/rooms/4905030	2
11	Js Apartment	6	80	1	1	1	https://a0.muscache.com/im/pictures/97555979/877f8f00_original.jpg?aki_policy=large	Tateishi Tokyo,Quaint Neighborhood around the Station.<br />Many Bars still exist since right after the World War near the station.<br />You can feel what Tokyo was like back in 1940s.<br />Good access to Major spot (15mins-50mins )	https://www.airbnb.com.au/rooms/1298200	4
7	KYODO HOUSE for Art of Living	1	185	2	3	2	https://a0.muscache.com/im/pictures/b8d2c410-84f9-439c-9eba-6d4bb337bedb.jpg?aki_policy=large	Hi, this is Hide. Welcome to our new home & share house for Art of Living. Designed and built by leading artist and enviroment designer in June, 2015. Located in west Tokyo leafy area, Kyodo station(15-20 min train to Shinjuku & Harajuku).	https://www.airbnb.com.au/rooms/1298200	4
8	Urban Tokyo House	2	124	1	2	2	https://a0.muscache.com/im/pictures/24565969/182070f0_original.jpg?aki_policy=xx_large	A very well-located, modern, spacious house with very easy access to the best places in Tokyo. Experience our version of the Japanese concept of hospitality (omotenashi) as you use our well-designed house as your home base for your Tokyo adventure!	https://www.airbnb.com.au/rooms/1298200	2
1	Js Apartment	5	80	1	1	1	https://a0.muscache.com/im/pictures/97555979/877f8f00_original.jpg?aki_policy=large	Auction: at 34 Shortland Street, City on Wednesday 26 July 2017 at 1:30PM  (unless sold prior) <br> <br>This exquisite townhouse provides a life of luxury, with a sensational sea view. Infused with light and a superbly spacious feel, this 4 bedroom home is the epitome of entertaining. The upstairs open plan lounge and kitchen where you´ll enjoy a vibrant vista of sparkling water and passing yachts. Whether you have a book or a glass of champers in your hands, this is a magical spot to relax and revive. Downstairs features an additional leisure area with a lounge leading out to a private courtyard perfectly positioned for summer BBQs and laughter. The piece de resistance is the master bedroom, with its chic ensuite and designer bath. Recently refurbished to an impeccable standard, this isn´t just a home, it´s a haven. <br> <br>PROPERTY FILES AVAILABLE <br>To access and download property files, please use the following link: <br>http://www.propertyfiles.co.nz/property/599771<br><br>Agency reference #: 599771	https://www.airbnb.com.au/rooms/1298200	1
12	KYODO HOUSE for Art of Living	3	185	2	3	2	https://a0.muscache.com/im/pictures/a67d6a4b-169f-49b3-9387-00010494ef12.jpg?aki_policy=large	Hi, this is Hide. Welcome to our new home & share house for Art of Living. Designed and built by leading artist and enviroment designer in June, 2015. Located in west Tokyo leafy area, Kyodo station(15-20 min train to Shinjuku & Harajuku).	https://www.airbnb.com.au/rooms/1298200	4
13	Urban Tokyo House	2	124	1	2	2	https://a0.muscache.com/im/pictures/57587161/587b1ae7_original.jpg?aki_policy=large	A very well-located, modern, spacious house with very easy access to the best places in Tokyo. Experience our version of the Japanese concept of hospitality (omotenashi) as you use our well-designed house as your home base for your Tokyo adventure!	https://www.airbnb.com.au/rooms/1298200	4
10	Js Apartment	1	80	1	1	1	https://a0.muscache.com/im/pictures/b8d2c410-84f9-439c-9eba-6d4bb337bedb.jpg?aki_policy=large	Tateishi Tokyo,Quaint Neighborhood around the Station.<br />Many Bars still exist since right after the World War near the station.<br />You can feel what Tokyo was like back in 1940s.<br />Good access to Major spot (15mins-50mins )	https://www.airbnb.com.au/rooms/1298200	1
2	KYODO HOUSE for Art of Living	4	185	2	3	2	https://a0.muscache.com/im/pictures/61519212/b4c15ded_original.jpg?aki_policy=xx_large	Our caravan is the first 100% Japanese-made of its kind, custom-built by local craftspeople. Inside is a double bed, dining nook, storage shelves, wi-fi, air conditioning and ensuite bathroom with modern toilet, shower and plenty of hot water.<br />Outside the caravan is a secluded deck with handcrafted wooden lounge, perfect for drinks on warm nights. This is a space where you can escape the hustle and bustle after a day of exploring Tokyo.<br />Our caravan is parked inside a secure mixed-use complex that includes a shared office (which you will have access to), a gallery, cafes and food vendors selling from vegetarian to classic Japanese foods and some of the best coffee in Tokyo.<br />If you are looking for another location to experience a different part of the city check on our other location, an apartment in the vibrant Nakameguro.	https://www.airbnb.com.au/rooms/4905030	2
9	Lovely APT in Shibuya	3	134	3	3	2	https://a0.muscache.com/im/pictures/57587161/587b1ae7_original.jpg?aki_policy=large	shibuya is know as one of the mostfamous town of japan, particularly for young people, and as a major night life area. if you wanna explore tokyo till night, this is the place. you can enjoy most center area by walking distance.	https://www.airbnb.com.au/rooms/1298200	1
6	Js Apartment	6	80	1	1	1	https://a0.muscache.com/im/pictures/61519212/b4c15ded_original.jpg?aki_policy=xx_large	Our caravan is the first 100% Japanese-made of its kind, custom-built by local craftspeople. Inside is a double bed, dining nook, storage shelves, wi-fi, air conditioning and ensuite bathroom with modern toilet, shower and plenty of hot water.<br />Outside the caravan is a secluded deck with handcrafted wooden lounge, perfect for drinks on warm nights. This is a space where you can escape the hustle and bustle after a day of exploring Tokyo.<br />Our caravan is parked inside a secure mixed-use complex that includes a shared office (which you will have access to), a gallery, cafes and food vendors selling from vegetarian to classic Japanese foods and some of the best coffee in Tokyo.<br />If you are looking for another location to experience a different part of the city check on our other location, an apartment in the vibrant Nakameguro.	https://www.airbnb.com.au/rooms/4905030	4
5	Js Apartment	2	80	1	1	1	https://a0.muscache.com/im/pictures/97555979/877f8f00_original.jpg?aki_policy=large	Tateishi Tokyo,Quaint Neighborhood around the Station.<br />Many Bars still exist since right after the World War near the station.<br />You can feel what Tokyo was like back in 1940s.<br />Good access to Major spot (15mins-50mins )	https://www.airbnb.com.au/rooms/1298200	3
\.


--
-- Data for Name: propertyKinds; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY "propertyKinds" (id, name) FROM stdin;
1	Apartment
2	House
3	Townhouse
4	Unit
\.


--
-- Data for Name: regions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY regions (id, name) FROM stdin;
1	Auckland
2	Wellington
3	Northland
4	Waikato
\.


--
-- Data for Name: suburbs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY suburbs (id, name, "districtId") FROM stdin;
1	Neko-ku	\N
2	Toshima-ku	\N
3	Katsuhika	\N
4	Setagayu-ku	\N
5	Shibuya-ku	\N
6	Shinjuku-ku	\N
\.


--
-- Name: UserClaim UserClaim_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "UserClaim"
    ADD CONSTRAINT "UserClaim_pkey" PRIMARY KEY (id);


--
-- Name: UserLogin UserLogin_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "UserLogin"
    ADD CONSTRAINT "UserLogin_pkey" PRIMARY KEY (name, key);


--
-- Name: UserProfile UserProfile_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "UserProfile"
    ADD CONSTRAINT "UserProfile_pkey" PRIMARY KEY ("userId");


--
-- Name: User User_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);


--
-- Name: districts districts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY districts
    ADD CONSTRAINT districts_pkey PRIMARY KEY (id);


--
-- Name: listings listings_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY listings
    ADD CONSTRAINT listings_pkey PRIMARY KEY (id);


--
-- Name: propertyKinds propertyTypes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "propertyKinds"
    ADD CONSTRAINT "propertyTypes_pkey" PRIMARY KEY (id);


--
-- Name: regions regions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY regions
    ADD CONSTRAINT regions_pkey PRIMARY KEY (id);


--
-- Name: suburbs suburbs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY suburbs
    ADD CONSTRAINT suburbs_pkey PRIMARY KEY (id);


--
-- Name: districts_name; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX districts_name ON districts USING btree (name);


--
-- Name: listings_name; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX listings_name ON listings USING btree (name);


--
-- Name: property_kinds_name; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX property_kinds_name ON "propertyKinds" USING btree (name);


--
-- Name: property_types_name; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX property_types_name ON "propertyKinds" USING btree (name);


--
-- Name: propetyTypes_name; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "propetyTypes_name" ON "propertyKinds" USING btree (name);


--
-- Name: regions_name; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX regions_name ON regions USING btree (name);


--
-- Name: suburbs_name; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX suburbs_name ON suburbs USING btree (name);


--
-- Name: user_email; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX user_email ON "User" USING btree (email);


--
-- Name: UserClaim UserClaim_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "UserClaim"
    ADD CONSTRAINT "UserClaim_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: UserLogin UserLogin_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "UserLogin"
    ADD CONSTRAINT "UserLogin_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: UserProfile UserProfile_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "UserProfile"
    ADD CONSTRAINT "UserProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: districts districts_regionId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY districts
    ADD CONSTRAINT "districts_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES regions(id);


--
-- Name: listings fk_area; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY listings
    ADD CONSTRAINT fk_area FOREIGN KEY ("areaId") REFERENCES suburbs(id);


--
-- Name: listings fk_propertyType; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY listings
    ADD CONSTRAINT "fk_propertyType" FOREIGN KEY ("propertyKindId") REFERENCES "propertyKinds"(id);


--
-- Name: suburbs suburbs_districtId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY suburbs
    ADD CONSTRAINT "suburbs_districtId_fkey" FOREIGN KEY ("districtId") REFERENCES districts(id);


--
-- PostgreSQL database dump complete
--

