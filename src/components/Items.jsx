import React from "react";
import Header from "./Header";
import Productos from "./Products";

const Home = () => {
    return (
        <div>
            <Header />
            <Productos className="p" />
        </div>
    );
};
export default Home;


