import React from "react";

const MyPortfolio = () => {
  return (
    <div className="p-8 bg-pink-50 h-screen">
      <div className="card shadow-xl bg-base-100 w-full lg:w-1/2 mx-auto p-4 text-lg">
        <h2 className="text-2xl">Yasin Arafat</h2>
        <h4>
          <span className="font-semibold">Email: </span> arafatsadi1@gmail.com
        </h4>
        <h4>
          <span className="font-semibold">Institute:</span> Govt. BM College,
          Barishal.
        </h4>
        <h4>
          <span className="font-semibold">Class:</span> Hon's 3rd year, Dept. of
          Zoology
        </h4>
      </div>
      <div className="card shadow-xl bg-base-100 w-full lg:w-1/2 mx-auto p-4 my-8 text-lg">
        <h2 className="text-2xl">List of technology that i have skill</h2>
        <p>
          <span className="font-semibold">1.</span> Bootstrap
        </p>
        <p>
          <span className="font-semibold">2.</span> TailwindCSS
        </p>
        <p>
          <span className="font-semibold">3.</span> ReactJs
        </p>
        <p>
          <span className="font-semibold">4.</span> ExpressJs
        </p>
        <p>
          <span className="font-semibold">5.</span> Mongodb
        </p>
      </div>
      <div className="card shadow-xl bg-base-100 w-full lg:w-1/2 mx-auto p-4">
        <h4 className="text-2xl mb-2">Project That I Have Done</h4>
        <p className="text-lg">
          <span className="font-semibold">1.</span>{" "}
          <a
            className="text-blue-600"
            href="https://jerins-parlour-f168c.web.app/"
          >
            Jerin's Parlour
          </a>
        </p>
        <p className="text-lg">
          <span className="font-semibold">2.</span>{" "}
          <a
            className="text-blue-600"
            href="https://bicycle-warehouse-d6a15.web.app/"
          >
            ByCycle WareHouse
          </a>
        </p>
        <p className="text-lg">
          <span className="font-semibold">3.</span>{" "}
          <a className="text-blue-600" href="https://travel-baba.web.app/">
            Travel Baba
          </a>
        </p>
      </div>
    </div>
  );
};

export default MyPortfolio;
