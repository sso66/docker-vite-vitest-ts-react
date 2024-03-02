import blogData from "../blob.json";
import React from "./assets/react.svg";
type Blog = {
  id: number;
  title: string;
  cover: string;
  author: string;
};

export default function Blog() {
  return (
    <div className="container">
      <div className="blog">
        {blogData.map((blog: Blog) => (
          <div className="card" key={blog.id}>
            <img src={React} alt="" width={48} height={48} />
            <div className="details">
              <h2>{blog.title}</h2>
              <h4>{blog.author}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
