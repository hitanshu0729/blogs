import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  ArcElement,
  Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  ArcElement,
  Legend
);

const Chart = () => {
  const [myBlogs, setMyBlogs] = useState([]);
  useEffect(() => {
    const fetchMyBlogs = async () => {
      const { data } = await axios.get(
        "http://localhost:4000/api/v1/blog/myblogs",
        { withCredentials: true }
      );
      setMyBlogs(data.blogs);
    };
    fetchMyBlogs();
  }, []);

  const publishedBlogs =
    myBlogs && myBlogs.filter((blog) => blog.published === true);
  const notPublishedBlogs =
    myBlogs && myBlogs.filter((blog) => blog.published === false);
  const Sports = myBlogs.filter((blog) => blog.category === "Sports");
  const Technology = myBlogs.filter((blog) => blog.category === "Technology");
  const Lifestyle = myBlogs.filter((blog) => blog.category === "Lifestyle");
  const Travel = myBlogs.filter((blog) => blog.category === "Travel");
  const Business = myBlogs.filter((blog) => blog.category === "Business");
  const Economy = myBlogs.filter((blog) => blog.category === "Economy");
  console.log(Travel.length);
  console.log(Economy.length);
  console.log(publishedBlogs);

  const data2 = {
    labels: [
      "Sports",
      "Technology",
      "Lifestyle",
      "Travel",
      "Business",
      "Economy",
    ],
    datasets: [
      {
        label: "Blog Categories",
        data: [
          Sports.length > 0 ? Sports.length : 0,
          Technology.length > 0 ? Technology.length : 0,
          Lifestyle.length > 0 ? Lifestyle.length : 0,
          Travel.length > 0 ? Travel.length : 0,
          Business.length > 0 ? Business.length : 0,
          Economy.length > 0 ? Economy.length : 0,
        ],
        borderColor: [
          "#0e7490",
          "#facc15",
          "#8B0000",
          "#FF4500",
          "#32CD32",
          "#4B0082",
        ],
        backgroundColor: [
          "#0e7490",
          "#facc15",
          "#8B0000",
          "#FF4500",
          "#32CD32",
          "#4B0082",
        ],
        borderWidth: 1,
      },
    ],
  };
  const data = {
    labels: ["Published", "Not Published"],
    datasets: [
      {
        label: "Blogs",
        data: [
          publishedBlogs.length > 0 ? publishedBlogs.length : 0,
          notPublishedBlogs.length > 0 ? notPublishedBlogs.length : 0,
        ],
        borderColor: ["#0e7490", "#facc15"],
        backgroundColor: ["#0e7490", "#facc15"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          font: {
            size: 32,
          },
        },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <section className="chart-container" style={{ height: "110vh" }}>
      <Doughnut
        data={data2}
        options={options}
        style={{ height: "350px", width: "350px" }}
      />
      <Doughnut
        data={data}
        options={options}
        style={{ height: "350px", width: "350px" }}
        className="mb-[5vh]"
      />
    </section>
  );
};

export default Chart;
