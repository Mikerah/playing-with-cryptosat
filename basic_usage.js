require("@cryptosat/cryptosim");

const clock = new SimulatedClock(new Date());
clock.play();
const universe = new Universe(clock);
const ISS_TLE = [
  '1 25544U 98067A   21027.77992426  .00003336  00000-0  68893-4 0  9991',
  '2 25544  51.6465 317.1909 0002399 302.6503 164.1536 15.48908950266831',
];
const sat = new Satellite(universe, /* functional= */ 1, 'crypto1', ISS_TLE[0], ISS_TLE[1]);
const gsnetwork = GroundStationNetwork.load(
    universe, require('@cryptosat/cryptosim/data/rbcNetwork'));
const service = new MainService(universe);
sat.bindService('main', service);
cryptosat = new MainClient(universe, sat, gsnetwork, 'main');