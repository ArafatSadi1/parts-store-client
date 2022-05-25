import React from "react";

const MyPortfolio = () => {
  return (
    <div className="p-8 bg-pink-50 h-screen">
      <div className="card shadow-xl bg-base-100 w-full lg:w-1/2 mx-auto p-4">
        <h2 className="text-2xl"><span className="font-semibold">Name: </span>Yasin Arafat</h2>
        <h4 className="text-lg"><span className="font-semibold">Email: </span> arafatsadi1@gmail.com</h4>
        <h4 className="text-lg"><span className="font-semibold">Institute:</span> Govt. BM College, Barishal. </h4>
        <h4 className="text-lg"><span className="font-semibold">Class:</span> Hon's 3rd year, Dept. of Zoology</h4>
      </div>
      <div className="card shadow-xl bg-base-100 w-full lg:w-1/2 mx-auto p-4 mt-8">
        <h4 className="text-2xl font-semibold mb-2">Project That I Have Done</h4>
        <p className="text-lg">
          1.
          <a className="text-blue-600" href="https://jerins-parlour-f168c.web.app/"> Jerin's Parlour</a>
        </p>
        <p className="text-lg">
          2. 
          <a className="text-blue-600" href="https://bicycle-warehouse-d6a15.web.app/"> ByCycle WareHouse
          </a>
        </p>
        <p className="text-lg">
          3.
          <a className="text-blue-600" href="https://travel-baba.web.app/"> Travel Baba</a>
        </p>
      </div>
    </div>
  );
};

export default MyPortfolio;
