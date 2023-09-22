import { useContext } from "react";
import "./stories.scss";
import Img from "../../assets/social.jpg";

import { AuthContext } from "../../context/AuthContext";

const Stories = () => {
  const { currentUser } = useContext(AuthContext);

  //TEMPORARY
  const stories = [
    {
      id: 1,
      name: "John Doe",
      img: Img,
    },
    {
      id: 2,
      name: "David Official",
      img: Img,
    },
    {
      id: 3,
      name: "John Doe",
      img: Img,
    },
    {
      id: 4,
      name: "John Doe",
      img: Img,
    },
  ];

  return (
    <div className="stories">
        <div className="story" >
          <img src={Img} alt="" />
          <span>{currentUser?.name}</span>
          <button>+</button>
        </div>
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
