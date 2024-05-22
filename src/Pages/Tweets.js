// import { useRef } from 'react'
import React, { useRef, useEffect, useState } from "react";
import Sidebar from "../Components/Sidebar";
import {
  FaCalendarWeek,
  FaMapMarker,
  FaPoll,
  FaRegImage,
  FaSmile,
} from "react-icons/fa";
import {
  doc,
  setDoc,
  collection,
  getFirestore,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../Firebase";
import { useNavigate } from "react-router";
// import{name} from '../Pages/Registration'
function Tweets() {
  const TweetRef = useRef();
  const auth = getAuth();
  const db = getFirestore(app);
  const navigate = useNavigate();
  const [refresh, setRefresh] = useState(false)
  // const nameRef = useRef()

  // const name= nameRef.current.value

  onAuthStateChanged(auth, (user) => {
    if (!user) {
      navigate("/");
    }
  });

  function setTweet() {
    const Tweet = TweetRef.current.value;

    onAuthStateChanged(auth, (user) => {
      const UserId = user.uid;
      const TweetUserId = UserId;
      if (user) {
        const newTweet = doc(collection(db, "Tweets"));
        setDoc(newTweet, {
          UserId: UserId,
          TweetId: newTweet.id,
          TweetUserId: TweetUserId,
          Tweet: Tweet,
        }).then(() => {
          setRefresh((prev)=> !prev)
        });
      }
    });
  }

  const [TweetList, setTweetList] = useState([]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // const UserId = user.uid;

        const FetchTweet = async () => {
          let TweetItem = [];
          const queryDocument = query(
            collection(db, "Tweets")
            // where("UserId", "==", UserId)
          );
          const querySnapShot = await getDocs(queryDocument);
          querySnapShot.forEach((TweetDoc) => {
            TweetItem.push({ Id: TweetDoc.id, ...TweetDoc.data() });
            setTweetList([...TweetItem]);
          });
        };
        FetchTweet();
      }
    });
  });
  return (
    <div className="Tweets">
      <Sidebar />
        <div className="home">
          <h1>Home</h1>
        </div>
      <div className="tweet">
        <div className="post">
          <textarea
            ref={TweetRef}
            placeholder="What's happening?!"
            name=""
            id="post"
            cols="30"
            rows="10"
          ></textarea>
          <div className="any">
            <div className="imogi">
              <FaRegImage className="imo" />
              <FaPoll className="imo" />
              <FaSmile className="imo" />
              <FaCalendarWeek className="imo" />
              <FaMapMarker className="imo" />
            </div>
            <button onClick={setTweet} id="send">
              Tweet
            </button>
          </div>
        </div>
        <div className="tweetContainer">

        {TweetList.map((TweetItem) => (
          <div key={Math.random()} className="mine">
            <div className="prof">
              <p id="pimg"></p>
              <p id="nme"></p>
            </div>
            <p>{TweetItem.Tweet}</p>
          </div>
        ))}
        </div>
      </div>
      <div className="tweet2">
        <div className="home2">
          <h1>Search</h1>
        </div>
      </div>
    </div>
  );
}

export default Tweets;
