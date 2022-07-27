create function calculate_distance(lat_r double precision, lon_r double precision, lat_x double precision, lon_x double precision) returns double precision
    language plpgsql
as
$$
declare
    earth_radius float = 6371;
    d_lat float;
    d_lon float;
    a float;
    c float;
    begin
    d_lat = radians(lat_r-lat_x);
    d_lon = radians(lon_r-lon_x);
    a = sin(d_lat / 2 ) * sin(d_lat / 2) + cos(radians(lat_x)) * cos(radians(lat_r)) * sin(d_lon / 2) * sin(d_lon / 2);
    c = 2 * asin(sqrt(a));
    return c * earth_radius;
end;
$$;

alter function calculate_distance(double precision, double precision, double precision, double precision) owner to "user";

