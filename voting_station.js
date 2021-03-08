const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

const chooseStations = function (stations) {
  const goodStations = [];
  for(const station of stations){
    const full = station[1];
    const type = station[2];
    if (full >= 20 && (type === 'school' || type === 'community centre')){
      goodStations.push(station[0]);
    }
  }
  return goodStations;
};
chooseStations(stations);
console.log(chooseStations(stations));
