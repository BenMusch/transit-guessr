# NYC Guessr

<center><img width="400px" src="public/screenshot.png"/></center>

NYC Guessr is a GeoGuessr-style game for the subway.

There are essentially two apps running in this repo:

1. The NYC Guessr game
2. The analysis UI at `/data`: a visualization of 1 week of collected guess
   data. The data is no longer collected since it costs money to store and
   query, so it's just a one-time thing

## Data

All station data is just manually created as a JSON file loaded from [NYC Open
Data](https://data.cityofnewyork.us/Transportation/Subway-Stations/arq3-7z49).

That data was then copied into the `src/data/stations.tsx` file and manually
merged with the [list of station
complexes](https://en.wikipedia.org/wiki/New_York_City_Subway_stations#Station_complexes)
in wikipedia so that things like Times Sq + PABT were treated as one station.

This is not an ideal data pipeline, but any sort of automated system felt like
overkill.

For the analysis data, guess + final score info was pushed to firebase. That
data was then aggregated with a bigquery query to generate
`src/data/guesses.tsx`. An additional script was used to generate `.geojson`
files from the firebase data for each individual station.

Again, this was not ideal and would require an annoying amount of manual effort
to do again, but I don't really intend to do this specific analysis in an
ongoing manner.

## Development

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You should be able to run it with `npm run start`

To run, you will need to create a Mapbox API token following [these
instructions](https://docs.mapbox.com/help/tutorials/get-started-tokens-api/).
After creating, copy `.env.local.example` to `.env.local` and then have `REACT_APP_MAPBOX_TOKEN` map
to your new token.

There are no tests, just manual testing.

## Contributing

Feel free to contibute any change! If you feel like making a contribution, some
things I want to add are:

1. Different "levels" (hard = no parks, easy = shows streets)
2. More transit lines (Staten Island, LIRR, etc.)
3. Perhaps different transit agencies!
4. Any sorts of CSS or react improvments. These aren't my area of expertise so
   lots of the code here is pretty bad
