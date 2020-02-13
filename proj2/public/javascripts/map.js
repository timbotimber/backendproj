mapboxgl.accessToken =
  "pk.eyJ1IjoidGltYm90aW1iZXIiLCJhIjoiY2s2Z2s1aTU0MHltMzNrcXB3bjlnYWNyYiJ9.14z3LvxL-5ovU8Ur6CuJtw";
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/timbotimber/ck6gkirhv0tc41imrp5a44z9d",
  center: [13.405, 52.52],
  zoom: 4.5,
  options: {
    anchor: "top-right"
  }
});
const nav = new mapboxgl.NavigationControl();
map.addControl(nav, "top-right");

if (document.getElementById("add-marker")) {
  document.getElementById("add-marker").onclick = e => {
    e.preventDefault();
    const marker = new mapboxgl.Marker({ draggable: true });
    const centerCoords = map.getCenter();
    marker.setLngLat(centerCoords);
    marker.addTo(map);
    marker.on("dragend", data => {
      const coord = data.target.getLngLat();
      console.log("cood", coord);
      const popup = new mapboxgl.Popup();

      popup.setLngLat(coord);
      popup.setMaxWidth("400px");
      popup.setHTML(`<h2>Use the form below to add your own location</h2> 
    
    <form action="/locations/add" method="POST" id="form" enctype="multipart/form-data">

    <label for="placeName">Name</label>
  <input name="placeName" type="text" id="placeName">

  <label for="start">When was it built?</label>
  <input type="date" id="builtData" name="builtData" value="2020-01-01">

  <label for="description">Description</label>
  <input name="description" type="text" id="description">

  <label for="image">add an image </label>
  <input type="file" name="image" id="image">

  <label for="WesAnQuote">Add a Wes Anderson quote</label>
  <input type="text" name="quote" id="quote">
  
    <input style="display: none" type="text" name="coordinates" value="${coord.toArray()}">

    <button type="submit">Add</button>
  </form>`);
      popup.addTo(map);
    });
  };
}

axios
  .get(`http://localhost:3000/rawdata/`)
  .then(response => {
    console.log("response", response);
    let locations = response.data; // the array of coordinates that we are sending from our backend route

    locations.forEach(location => {
      console.log(location);
      console.log("test", location.coordinates);
      let marker = new mapboxgl.Marker({ color: "#d53f50" });
      marker.setLngLat(location.coordinates);
      marker.addTo(map);
      const popup = new mapboxgl.Popup({ className: "locationpopup" });
      // popup.setLngLat(map.getCenter());

      //

      marker.getElement().addEventListener("click", event => {
        window.location.href = `/locations/${location._id}`;
      });

      //
      popup.setHTML(
        `<div> <a href="/locations/${location._id}">${location.placeName}</a></div>`
      );

      marker.setPopup(popup);
      marker.on("dragend", data => {
        const coord = data.target.coordinates;

        axios
          .patch(`http://localhost:3000/locations`, { coordinates: coord })
          .then(() => {
            console.log("locations updated!");
          })
          .catch(err => {
            console.log(err);
          });
      });
    });
  })
  .catch(err => {
    console.log(err);
  });
