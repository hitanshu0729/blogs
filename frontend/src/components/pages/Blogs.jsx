import React, { useContext, useState } from "react";
import LatestBlogs from "../miniComponents/LatestBlogs";
import { Context } from "../../main";

const Blogs = () => {
  const { mode, blogs } = useContext(Context);
  const [category, setCategory] = useState("");
  const [search, setSeacrh] = useState("");
  let filteredBlogs = blogs;
  if (search) {
    filteredBlogs = blogs.filter((blog) => {
      const regex = new RegExp(search, "i"); // 'i' makes the search case-insensitive
      return regex.test(blog.title);
    });
  }
  if (category) {
    filteredBlogs = filteredBlogs.filter((blog) => blog.category === category);
  }
  return (
    <article className={mode === "dark" ? "dark-bg" : "light-bg"}>
      <LatestBlogs blogs={blogs} title={"Blogs"} />
      <input
        className="blog-input"
        type="text"
        placeholder="Search blogs"
        value={search}
        onChange={(e) => setSeacrh(e.target.value)}
      />

      <div className="create-blog">
        <div className="category-box ml-[5vw]">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Filter blog by category</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="Technology">Technology</option>
            <option value="Sports">Sports</option>
            <option value="Travel">Travel</option>
            <option value="Business">Business</option>
            <option value="Economy">Economy</option>
          </select>
        </div>
        {search || category ? (
          filteredBlogs.length ? (
            <LatestBlogs blogs={filteredBlogs} title={"Blogs"} />
          ) : (
            <h1 className="ml-[5vw]">No blogs to show</h1>
          )
        ) : (
          ""
        )}
      </div>
    </article>
  );
};

export default Blogs;
