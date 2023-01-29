import React from "react";
import Book from "./components/book/Book";
import Navbar from "./navbar/Navbar";
import Header from "./Header/Header";

// List object with data
const books = [
  {
    id: 1,
    img: "https://m.media-amazon.com/images/I/51Zu0ZwT0jL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    title: "It Ends with Us: A Novel",
    author: "Colleen Hoover",
    price: 9.99,
  },
  {
    id: 2,
    img: "https://m.media-amazon.com/images/I/41CSAHVHk+L._SY344_BO1,204,203,200_.jpg",
    title: "Spare",
    author: "Prince Harry The Duke of Sussex",
    price: 22.45,
  },
  {
    id: 3,
    img: "https://m.media-amazon.com/images/I/51VC+Vru96L._SY344_BO1,204,203,200_.jpg",
    title: "It Starts with Us: A Novel",
    author: "Colleen Hover",
    price: 10.49,
  },
  {
    id: 4,
    img: "https://m.media-amazon.com/images/I/51-uspgqWIL._SX329_BO1,204,203,200_.jpg",
    title: "Atomic Habits",
    author: "James Clear",
    price: 14.11,
  },
  {
    id: 5,
    img: "https://m.media-amazon.com/images/I/41+j7f1fVKL._SY344_BO1,204,203,200_.jpg",
    title: "Saved: A War Reporter's Mission to Make It Home",
    author: "Benjamin Hall",
    price: 29.99,
  },
  {
    id: 6,
    img: "https://m.media-amazon.com/images/I/41OxPE1ZMbL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    title: "Never Give An Inch",
    author: "Mike Pompeo",
    price: 20.99,
  },
  {
    id: 7,
    img: "https://m.media-amazon.com/images/I/41KY-NORo9L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    title: "The 48 Laws of Power",
    author: "Robert Greene",
    price: 13.59,
  },
  {
    id: 8,
    img: "https://m.media-amazon.com/images/I/41sLW-ud2TL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    title: "8 Rules of Love: How to Find It, Keep It, and Let It Go",
    author: "Jay Shetty",
    price: 18.63,
  },
  {
    id: 9,
    img: "https://m.media-amazon.com/images/I/41Z8crd1lUL._SX327_BO1,204,203,200_.jpg",
    title: "Straight Shooter: A Memoir of Second Chances and First Takes",
    author: "Stephen A. Smith",
    price: 17.61,
  },
  {
    id: 10,
    img: "https://m.media-amazon.com/images/I/41MmEAD3d9L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    title: "If He Had Been with Me",
    author: "Laura Nowlin",
    price: 9.53,
  },
  {
    id: 11,
    img: "https://m.media-amazon.com/images/I/41j1-YNROeL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    title: "The Silent Patient",
    author: "Alex Michaelides",
    price: 10.99,
  },
  {
    id: 12,
    img: "https://m.media-amazon.com/images/I/41OksZQYt+L._SY344_BO1,204,203,200_.jpg",
    title: "How To Win Friends & Influence People",
    author: "Dale Carnegie",
    price: 10.4,
  },
  {
    id: 13,
    img: "https://m.media-amazon.com/images/I/41HcM1yzHcL._SX327_BO1,204,203,200_.jpg",
    title: "The Light We Carry: Overcoming in Uncertain Times",
    author: "Michelle Obama",
    price: 18.48,
  },
  {
    id: 14,
    img: "https://m.media-amazon.com/images/I/41F4Pg6SumL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    title: "Can't Hurt Me: Master Your Mind and Defy the Odds",
    author: "David Goggins",
    price: 17.99,
  },
  {
    id: 15,
    img: "https://m.media-amazon.com/images/I/51lNx6slK9L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: 12.31,
  },
  {
    id: 16,
    img: "https://m.media-amazon.com/images/I/41RV2JKx4eL._SX322_BO1,204,203,200_.jpg",
    title: "Great Circle",
    author: "Maggie Shipstead",
    price: 14.99,
  },
  {
    id: 17,
    img: "https://m.media-amazon.com/images/I/71Vq0uSlDWL._AC_UL320_.jpg",
    title: "Wish You Were Here",
    author: "Jodi Picoult",
    price: 10.99,
  },
  {
    id: 18,
    img: "https://m.media-amazon.com/images/I/61Qtam1Ut+L._AC_UL320_.jpg",
    title:
      "The League: How Five Rivals Created the NFL and Launched a Sports Empire",
    author: "",
    price: 10.99,
  },
  {
    id: 19,
    img: "https://m.media-amazon.com/images/I/71SJ+voyYjL._AC_UL320_.jpg",
    title: "Home Front: A Novel",
    author: "Kristin Hannah",
    price: 13.84,
  },
  {
    id: 20,
    img: "https://m.media-amazon.com/images/I/61zFh3eaL4L._AC_UL640_QL65_.jpg",
    title: "Surviving the Forest(World War II Brave Women Fiction",
    author: "Adiva Geffen",
    price: 16.19,
  },
  {
    id: 21,
    img: "https://m.media-amazon.com/images/I/81pGimcXS-L._AC_UL320_.jpg",
    title: "Audrey J. Cole",
    author: "The Pilot's Daughter",
    price: 11.99,
  },
  {
    id: 22,
    img: "https://m.media-amazon.com/images/I/41wosm-yWaL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    title: "Mythion: Human Transformation",
    author: "Jason Davis",
    price: 18.99,
  },
  {
    id: 23,
    img: "https://m.media-amazon.com/images/I/71fsIH17SGL._AC_UL320_.jpg",
    title: "And There Was Light: Abraham Licoln and the American Struggle",
    author: "Harris Faulkner",
    price: 20.01,
  },
  {
    id: 24,
    img: "https://m.media-amazon.com/images/I/61cuZCcpkpL._AC_UL640_QL65_.jpg",
    title:
      "The Empowered Empath: A Simple Guide on Setting Boundaries, Controlling Your Emotions, and Making Life Easier",
    author: "Harris Faulkner",
    price: 18.39,
  },
  {
    id: 25,
    img: "https://m.media-amazon.com/images/I/61YetrJNgmL._AC_UL320_.jpg",
    title: "Though I Walk Through The Valley",
    author: "David Abis",
    price: 9.93,
  },
];

function BookList() {
  return (
    <>
      <Header />
      <Navbar />
      <section className="bookList">
        {books.map((book) => {
          const { id } = book;
          return <Book key={id} book={book} />;
        })}
      </section>
    </>
  );
}
export default BookList;
