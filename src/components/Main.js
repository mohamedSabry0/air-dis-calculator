import '../styles/Main.scss';
import getDistanceFromLatLonInKm from '../util';

const Main = () => {
  const handleClick = () => {
    const pointA = document.getElementById('point-a').value;
    const pointB = document.getElementById('point-b').value;
    const [lat1, lon1] = pointA.split(',').map((coord) => Number(coord));
    const [lat2, lon2] = pointB.split(',').map((coord) => Number(coord));
    const distance = getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2);
    document.querySelector('.result p').textContent = `Distance: ${distance} km`;
  };
  return (
    <section className="main">
      <label htmlFor="point-a">
        Point A:
        <input type="text" id="point-a" />
      </label>
      <label htmlFor="point-b">
        Point B:
        <input type="text" id="point-b" />
      </label>
      <button type="button" onClick={handleClick}>Calculate</button>
      <section className="result">
        <p>Distance:</p>
      </section>
    </section>
  );
};

export default Main;
