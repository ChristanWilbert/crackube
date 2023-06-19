import React from "react";
import "../styles/filterMenu.css";
import ReactTimeAgo from "react-time-ago";
const cardData = [
  {
    id: "12v65",
    category: "LIFESTYLE",
    time: new Date("2023-06-19T03:24:00"),
    name: "Changing People's lifestyles for the better",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus",
    image: "/image1.jpg",
  },
  {
    id: "12v48",
    category: "TECHNOLOGY",
    time: new Date("2023-06-01T08:29:00"),
    name: "Simple Solutions for Complex Connections",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus",
    image: "/image2.jpg",
  },
  {
    id: "11v45",
    category: "SPORT",
    time: new Date("2023-05-29T13:24:00"),
    name: "All things are difficult before they are easy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus",
    image: "/image3.jpg",
  },
  {
    id: "02v45",
    category: "EDUCATION",
    time: new Date("2023-06-19T03:24:00"),
    name: "How to Memorize everything you read?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus",
    image: "/image4.jpg",
  },
  {
    id: "12v99",
    category: "LIFESTYLE",
    time: new Date("2023-06-19T03:24:00"),
    name: "Changing People's lifestyles for the better",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus",
    image: "/image1.jpg",
  },
  {
    id: "12v00",
    category: "TECHNOLOGY",
    time: new Date("2023-06-01T08:29:00"),
    name: "Simple Solutions for Complex Connections",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus",
    image: "/image2.jpg",
  },
  {
    id: "12v15",
    category: "SPORT",
    time: new Date("2023-05-29T13:24:00"),
    name: "All things are difficult before they are easy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus",
    image: "/image3.jpg",
  },
  {
    id: "12v65",
    category: "EDUCATION",
    time: new Date("2023-06-19T03:24:00"),
    name: "How to Memorize everything you read?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus",
    image: "/image4.jpg",
  },
];

function CustomCard({ item }) {
  return (
    <div className="card" id={item.id} style={{ width: "320px" }}>
      <img src={item.image} class="card-img-top" alt="..." />
      <div class="card-body ">
        <p className="d-flex align-items-baseline">
          <div className="category">{item.category}</div>
          <div className="ms-auto">
            <ReactTimeAgo
              date={item.time}
              locale="en-US"
              timeStyle="round"
              className="card-text"
            />
          </div>
        </p>
        <h5 class="card-title">{item.name}</h5>
        <p class="card-text">{item.description}</p>
        <a href="#" class="custButton">
          Read More &rarr;
        </a>
      </div>
    </div>
  );
}

const Cards = () => {
  const items = cardData.map((x) => {
    return (
      <div className="flex-item px-3 py-2 min-vh-0">
        <CustomCard item={x} />
      </div>
    );
  });
  return (
    <div className=" filters d-flex flex-wrap justify-content-evenly p-2 ">
      {items}
    </div>
  );
};

export default Cards;
