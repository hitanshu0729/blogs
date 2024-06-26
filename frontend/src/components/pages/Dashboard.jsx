import React, { useContext, useState } from "react";
import SideBar from "../layout/Sidebar";
import MyBlogs from "../miniComponents/MyBlogs";
import MyProfile from "../miniComponents/MyProfile";
import CreateBlog from "../miniComponents/CreateBlog";
import Chart from "../miniComponents/Chart";
import { Context } from "../../main";
import { Navigate } from "react-router-dom";
const Dashboard = () => {
  const [component, setComponent] = useState("MyBlogs");
  const { mode, isAuthenticated, user } = useContext(Context);
  if (!isAuthenticated || !user || user.role == "Reader") {
    return <Navigate to={"/"} />;
  }
  return (
    <section
      className={mode === "dark" ? "dark-bg dashboard" : "light-bg dashboard"}
    >
      <SideBar component={component} setComponent={setComponent} />
      {component === "My Profile" ? (
        <MyProfile />
      ) : component === "Create Blog" ? (
        <CreateBlog />
      ) : component === "Analytics" ? (
        <>
          <h1 className="mb-2 text-center  underline">BLOG ANALYTICS</h1>
          <Chart />
        </>
      ) : (
        <MyBlogs />
      )}
    </section>
  );
};

export default Dashboard;
