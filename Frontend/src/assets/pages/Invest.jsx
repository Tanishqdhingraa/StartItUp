import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

const Invest = () => {
  const [investors, setInvestors] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data when page loads
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/investors");
        setInvestors(res.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-black text-lime-300 p-10 mt-9" >
        <h1 className="text-4xl font-bold text-center mb-10">
          Investor Submissions 📊
        </h1>

        {loading ? (
          <p className="text-center text-xl">Loading...</p>
        ) : investors.length === 0 ? (
          <p className="text-center text-xl">No submissions yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {investors.map((item) => (
              <div
                key={item._id}
                className="border border-lime-300 bg-black bg-opacity-40 p-6 rounded-xl shadow-xl"
              >
                <h2 className="text-2xl font-bold text-lime-400">
                  {item.brandName}
                </h2>

                <p className="mt-2 text-lg">
                  <span className="font-bold">Budget:</span> ₹{" "}
                  {item.budget.toLocaleString()}
                </p>

                <p className="mt-1 text-lg">
                  <span className="font-bold">Company Type:</span>{" "}
                  {item.companyType}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Invest;
