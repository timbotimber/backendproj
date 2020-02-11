mapboxgl.accessToken =
  "pk.eyJ1IjoidGltYm90aW1iZXIiLCJhIjoiY2s2Z2s1aTU0MHltMzNrcXB3bjlnYWNyYiJ9.14z3LvxL-5ovU8Ur6CuJtw";
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/timbotimber/ck6gkirhv0tc41imrp5a44z9d",
  center: [13.405, 52.52],
  zoom: 4.5
});
const nav = new mapboxgl.NavigationControl();
map.addControl(nav, "top-right");

document.getElementById("add-marker").onclick = () => {
  const marker = new mapboxgl.Marker({ draggable: true });
  const centerCoords = map.getCenter();
  marker.setLngLat(centerCoords);
  marker.addTo(map);
  marker.on("dragend", data => {
    const coord = data.target.getLngLat();
    console.log(coord);
  });
};

const popup = new mapboxgl.Popup();
popup.setLngLat(map.getCenter());
popup.setHTML("<div><h1> Hello Wes </h1></div>");
popup.addTo(map);
