import Post from "../post/Post";
import "./posts.scss";
import Img from "../../assets/social.jpg";


const Posts = () => {
  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: "John Doe",
      userId: 1,
      profilePic:{Img},
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      img: {Img},
    },
    {
      id: 22,
      name: "John Doe",
      userId: 1,
      profilePic:{Img},
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      img: {Img},
    },
    {
      id: 12,
      name: "John Doe",
      userId: 1,
      profilePic:{Img},
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      img: {Img},
    },
    {
      id: 13,
      name: "John Doe",
      userId: 1,
      profilePic:{Img},
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      img: {Img},
    },
    {
      id: 61,
      name: "John Doe",
      userId: 1,
      profilePic:{Img},
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      img: {Img},
    },
    {
      id: 14,
      name: "John Doe",
      userId: 1,
      profilePic:{Img},
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      img: {Img},
    },
    {
      id: 15,
      name: "John Doe",
      userId: 1,
      profilePic:{Img},
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      img: {Img},
    },
    {
      id: 17,
      name: "John Doe",
      userId: 1,
      profilePic:{Img},
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      img: {Img},
    },
    {
      id: 26,
      name: "Jane Doe",
      userId: 2,
      profilePic:{Img},
      desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
    },
    {
      id: 35,
      name: "Jane Doe",
      userId: 3,
      profilePic:{Img},
      desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
    },
  ];

  return <div className="posts">
    {posts.map(post=>(
      <Post post={post} key={post.id}/>
    ))}
  </div>;
};

export default Posts;
