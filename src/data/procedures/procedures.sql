alter table listings drop constraint fk_propertytype;


ALTER TABLE "listings"
   ADD CONSTRAINT "fk_propertyType"
   FOREIGN KEY ("propertyType")
   REFERENCES "propertyTypes"(id);

alter table listings rename column "propertyType" to "propertyTypeId";


create or replace function search_listings(area_id int[]) returns setof listings as $$
  select * from listings
  where
    "areaId" = any (area_id)
$$ language sql immutable;


select * from search_listings();
create or replace function search_listings(
  area_id int[] default null,
  property_type_id int[] default null
) returns setof listings as $$
declare
  select_query text := 'select * from listings';
  where_query text := 'where true ';
begin
  if (area_id is not null) then
    where_query := where_query || 'and "areaId" = any (area_id) ';
  elseif (property_type_id is not null) then
    where_query := where_query || 'and "propertyTypeId" = any (area_id) ';
  end if;

  select_query := select_query || where_query;

  return query
  table listings;
--     select * from listings
--     select_query
end;
$$ language plpgsql strict;

select * from hemeow('{1}');
create or replace function hemeow(
  area_id int[] default null,
  property_type_id int[] default null
) returns setof listings as $$
declare
  select_query text := 'select * from listings ';
  where_query text := 'where "areaId" = 1 ';
begin
  if (area_id is not null) then
    where_query := where_query || 'and "areaId" = any (area_id) ';
  elseif (property_type_id is not null) then
    where_query := where_query || 'and "propertyTypeId" = any (area_id) ';
  end if;
  select_query := select_query || where_query;
  RAISE NOTICE '%', select_query;
  return query execute select_query;
end;
$$ language plpgsql VOLATILE;


select * from meow_listings();

create or replace function hello() returns setof listings as $$
begin
  return query
  select * from listings;
end;
$$ language plpgsql STRICT;
select * from hello();

select * from get_str5();
CREATE OR REPLACE FUNCTION get_str5()
  RETURNS SETOF listings AS
$func$
   TABLE listings;
$func$ LANGUAGE sql;

create function insert_meow(
  id int,
  name text
) returns areas as $$
declare
  row areas;
begin
  insert into areas (id, name) values (id, name) returning * into row;
  return row;
end;
$$ language plpgsql
strict
set search_path from current;



create or replace function meow_listings() returns setof listings as $$
  select * from listings
$$ language sql stable;


create or replace function search_listings(
  area_id int[] default null,
  property_type_id int[] default null
) returns setof listings as $$
declare
  message  varchar2(20):= 'Hello, World!';
begin
  select_query := 'select * from listings';
  where_query := 'where true ';

  if (area_id is not null) then
    where_query := where_query || 'and "areaId" = any (area_id) ';
  elseif (property_type_id is not null) then
    where_query := where_query || 'and "propertyTypeId" = any (area_id) ';
  end if;

  select_query := select_query || where_query;
  execute select_query;
end;
$$ language plpgsql;



create or replace function search_listings(area_id int, property_type_id int) returns setof listings as $$
    select *
    from listings
    where
      "areaId" = area_id or
      "propertyTypeId" = property_type_id;
$$ language sql;

drop function search_listings(int, int);
select proname,prosrc from pg_proc
where proname = 'search_listings';

select id, "propertyType" from listings;

insert into "propertyTypes" (id, name)
    values (1, 'Apartment'),
      (2, 'House'),
      (3, 'Townhouse'),
      (4, 'Unit');

insert into area (id, name)
    values
      (1, 'Neko-ku'),
      (2, 'Toshima-ku'),
      (3, 'Katsuhika'),
      (4, 'Setagayu-ku'),
      (5,'Shibuya-ku'),
      (6,'Shinjuku-ku');
