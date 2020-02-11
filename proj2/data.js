console.log("Hez");

const locations = [
  {
    owner: "User1",
    image: "/image/1.Viewfinders.jpg",
    placeName: "Viewfinder Makapu‘u Point",
    located: "Oʻahu, Hawaii",
    builtData: 1909,
    description:
      "The viewfinders found on Makapu’u Point in O’ahu, Hawaii offer unparalleled views into the Pacific Ocean, yet their location on Makapu’u - the easternmost point of the island - can also provide a look into the island’s past.",
    coordinates: [11.83721, 48.27761]
  },
  {
    owner: "User1",
    image: "/image/2.Hotel Nemzeti.jpg",
    placeName: "Hotel Nemzeti",
    located: "Budapest, Hungary",
    builtData: 1896,
    description:
      "As a central place in Budapest’s arts and cultural scene, the Hotel Nemzeti itself can be considered a work of art. Built in 1896 and located near the city’s famed National Theater, the Nemzeti has hosted both travelers and influential cultural figures throughout the last 100 years.",
    coordinates: [0.75458, 43.01551]
  },
  {
    owner: "User1",
    image: "/image/3.Bedford Springs Resort.jpg",
    placeName: "Bedford Springs Resort",
    located: "Bedford, Pennsylvania",
    builtData: 1806,
    description:
      "Imagine immersing yourself in an indoor pool infused with mineral spring-fed water. At the Bedford Springs Resort, one of the last and best-preserved 19th-century resort hotels in the United States, guests can do just that and share in a relaxing tradition shared by many notable U.S. politicians and presidents.",
    coordinates: [-79.2671, 37.30402]
  },
  {
    owner: "User1",
    image: "/image/4.Hillsborough Castle.jpg",
    placeName: "Hillsborough Castle",
    located: "Northern Ireland",
    builtData: 1780,
    description:
      "Hillsborough Castle is in fact, not a castle at all. The estate, which is an Anglo-Irish Big House, was built in the late 18th century and owned by the Hill family until 1922 when it was sold to the British government. Since its sale, Hillsborough Castle has served many purposes including the official Northern Ireland residence of Queen Elizabeth II.",
    coordinates: [-71.466431, 43.03315]
  },
  {
    owner: "Andy Miller",
    image: "/image/5.Banff Springs Hotel.jpg",
    placeName: "Banff Springs Hotel",
    located: "Alberta, Canada",
    builtDate: 1888,
    description:
      "As rail travel exploded across Canada during the late 19th century, the Canadian Pacific Railway sought to provide their passengers places to stay during their scenic tours.Soon, grand, stately Chatauesque hotels started popping up throughout the country, including the Banff Springs Hotel in Alberta.",
    coordinates: [-80.367348, 33.828011]
  },
  {
    owner: "Andy Miller",
    image: "/image/6.Volontaires Station.jpg",
    placeName: "Volontaires Station",
    builtDate: 1910,
    located: "Paris, France",
    description:
      "At the junction of rue de Volontaires and rue de Vaugirard, the Volontaires Station offers transport to those traveling along Line 12 on the Paris Metro in Paris.Named after the rue de Volontaires which translates to “Volunteers Street” in English, the Station has been in service for over 100 years.",
    coordinates: [4.49628, 50.71977]
  },
  {
    owner: "Someowner",
    image: "/images/7.Wendy Thompson Hut.jpg",
    placeName: "Wendy Thompson Hut",
    builtData: 2000,
    located: "British Columbia, Canada",
    description:
      "Just north of Whistler, British Columbia, within the Marriott Basin, a two - story wooden hut with a pronounced Gothic arch sits among the mountains and Alpine meadows.Maintained by the Alpine Club of Canada, the Wendy Thompson Hut was created to preserve the memory of a beloved Whistler resident.",
    coordinates: [-122.81626, 53.85158]
  },
  {
    owner: "Someowner",
    image: "/images/8.Old Point Loma Lighthouse.jpg",
    placeName: "Senate of Canada",
    builtData: 2013,
    located: "Ottawa, Canada",
    description:
      "Since the 19th century, the railways of Canada have been entwined in the country’s development - and not just through infrastructure.Not only were the railways integral in establishing the country’s signature Chateauesque architecture through its Canadian Railway hotels, but Ottawa’s former railway station has been the temporary seat of the Senate of Canada since 1966.",
    coordinates: [-75.697189, 45.421532]
  },
  {
    owner: "Someowner",
    image: "/images/9.Lake Bled.jpg",
    placeName: "Lake Bled",
    builtData: 1655,
    located: "Julian Alps, Slovenia",

    description:
      "Dedicated travelers have been making pilgrimages to Lake Bled - specifically the tiny church located on the tiny island at the center of the Lake - for hundreds of years.Now a popular tourist destination, Lake Bled is a haven for the rich history and local heritage of the region in northwest Slovenia.The Church of the Assumption, built during the 17th century, connects to the surrounding lake via a stairway containing exactly 99 steps.",
    coordinates: [138.699356, -34.685791]
  },
  {
    owner: "Someowner",
    image: "/images/10.Southern Fuegian Railway.jpg",
    placeName: "Southern Fuegian Railway",
    builtData: 1909,
    located: "Ushuaia, Argentina",

    description:
      "The Southern Fuegian Railway, also referred to as El Tren del Fin del Mundo - or The Train of the End of the World - in its native Argentina, is more enduring in origin than it is apocalyptic.Its name actually refers to its locale as the southernmost railway in the world.",
    coordinates: [-68.302948, -54.80191]
  },
  {
    owner: "Someowner",
    image: "/images/11.Melk Abbey.jpg",
    placeName: "Melk Abbey",
    builtData: 1702,
    located: "Melk, Austria",

    description:
      "Some structures are truly gifts in and of themselves.Founded in 1089, the Melk Abbey was gifted to a group of Benedictine monks by Leopold II, the Margrave of Austria.Originally one of Leopold’s castles, the Abbey was turned into a monastic school where it became renowned for its extensive collection of manuscripts, quality of education, and for withstanding years of political turmoil.",
    coordinates: [15.32962, 48.2271]
  },
  {
    owner: "Someowner",
    image: "/images/12.University of Leeds.jpg",
    placeName: "University of Leeds",
    builtData: 1894,
    located: "West Yorkshire, England",
    description:
      "The interior of the Great Hall of the University of Leeds has been used for many types of formal gatherings - from meetings and exams to graduation ceremonies - since its opening in 1894. Yet it’s a distinct facet of the meeting space’s exterior that has solidified Leeds among a leading group of science and engineering universities in England.",
    coordinates: [-1.55749, 53.807678]
  },
  {
    owner: "Someowner",
    image: "/images/13.Hospital De Sant Pau.jpg",
    placeName: "Hospital De Sant Pau",
    builtData: 1401,
    located: "Barcelona, Spain",

    description:
      "Just like the ever - changing field of medicine, the Hospital De Sant Pau has evolved over the centuries.The institution's beginnings are rooted in the medieval tradition and date back to 1401 when six Barcelona hospitals merged into one, creating the ​Hospital de la Santa Creu.",
    coordinates: [2.173404, 41.385063]
  },
  {
    owner: "Someowner",
    image: "/images/14.Riffelhaus.jpg",
    placeName: "Riffelhaus",
    builtData: 1853,
    located: "Zermatt, Switzerland",
    description:
      "During the mid 19th century, when mountaineering was at its peak popularity in Europe, a small remote village emerged as the pinnacle of the pioneering mountain movement.At the center of it all was a small hotel situated opposite the Matterhorn on the Riffelberg, the Hotel Riffelhaus.Originally an 18 - room guest house, the Riffelhaus was built in 1853.",
    coordinates: [7.749117, 46.020714]
  },
  {
    owner: "Someowner",
    image: "/images/15.Khalifa International Stadium.jpg",
    placeName: "Khalifa International Stadium",
    builtData: 1976,
    located: "Doha, Qatar",
    description:
      "With dual arches that seem to dip and swirl above its football field, the Khalifa International Stadium invites sports fans to enjoy the art of competition in its state - of - the - art arena.Located on the outskirts of Qatar’s capital city of Doha, the Stadium was recently revamped in order to host the 2022 FIFA World Cup.",
    coordinates: [25.26026, 51.58756]
  },
  {
    owner: "Someowner",
    image: "/images/16.Great Market Hall.jpg",
    placeName: "Great Market Hall",
    builtData: 1897,
    located: "Budapest, Hungary",
    description:
      "Beneath a roof of colorful iridescent tiles, the Great Market Hall in Budapest - also called the Central Market Hall - welcomes patrons looking for fresh produce, dairy, meats, and a wealth of local Hungarian goods and souvenirs.Comprised of three floors, the Market is lauded for both its size and architectural significance within the city.The Market came into fruition by way of Budapest’s first mayor, Károly Kamermayer, who made its construction his greatest investment during his tenure.Talks of a market hall in the city had been going on for decades, but elected officials struggled to make progress.",
    coordinates: [19.040236, 47.497913]
  },
  {
    owner: "Someowner",
    image: "/images/17.Chicheley Hall.jpg",
    placeName: "Chicheley Hall",
    builtData: 1725,
    located: "Buckinghamshire, England",
    description:
      "With its regal facade and lush grounds, Chicheley Hall imparts an air of classic English high society.While the Baroque - style estate certainly has been passed down through generations of nobility, its history reveals a much more telling tale - rich with wayward heirs and war torn land.Originally the site of a 16th - century estate, the Hall began as a manor house and was inherited by Sir William Chester, a leading merchant during his time.Sir William left the Hall to his son Anthony, the High Sheriff of Buckinghamshire and the family’s first baronet.It went on to be passed down through the Chesters for the next 400 years.",
    coordinates: [-0.76056, 52.041439]
  },
  {
    owner: "Someowner",
    image: "/images/18.Senate of Canada.jpg",
    placeName: "Old Point Loma Lighthouse",
    builtData: 1855,
    located: "San Diego, California",
    description:
      "Along the land that encloses North San Diego Bay in California, an unassuming structure sits watch over the Pacific, the Old Point Loma Lighthouse.According to local lore, the lighthouse and the land are named after a young Russian girl who survived a shipwreck and wandered ashore.",
    coordinates: [-117.240547, 32.672298]
  },
  {
    owner: "Someowner",
    image: "/images/19.Kau Ban Mosque.jpg",
    placeName: "Kau Ban Mosque",
    builtData: 1643,
    located: "Agra, India",
    description:
      "As one of the Seven Wonders of the World, the Taj Mahal is renowned for its stunning beauty, pristine symmetrical design, and overall grandeur.At first look however, what many see is the Taj Mahal’s mausoleum - the tomb of Mughal emperor Shah Jahan and his favorite wife, Mumtaz Mahal.The tomb is the centerpiece of a 42 - acre complex that includes gardens, a reflecting pool, guesthouse, and the Kau Ban Mosque.At the far end of the complex, two red sandstone structures face each other, flanking either side of the mausoleum.A guesthouse sits Parallel to the eastern wall, while the Mosque faces westwards toward Mecca.Completed in 1643, the structures were intended to be identical, but have slight variations in their design.",
    coordinates: [78.035873, 27.167641]
  },
  {
    owner: "Someowner",
    image: "/images/20.Jantar Mantar.jpg",
    placeName: "Jantar Mantar",
    builtData: 1724,
    located: "Delhi, India",
    description:
      "With foreign invasions and internal unrest, India in the 18th century had to endure one of the most chaotic periods in its entire history.Still, one man remained focused on the stars.Maharaja Sawaii Jai Singh II was a kingdom ruler with great interest in astronomy.Along with his political contributions, his legacy endures through the Jantar Mantar.",
    coordinates: [77.102493, 28.70406]
  }
];

const Location = require("./models/Location"); //

Location.create(locations)

  .then(locations => {
    console.log(locations.placeName);
  })
  .catch(err => {
    console.log(err);
  });

module.exports = locations;
