import React from "react";

// components
import HeaderStats from "components/Headers/HeaderStats.js";
import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";
import CardProfile from "components/Cards/CardProfile.js";

export default function Dashboard() {
  return (
    <>

      <div className="flex flex-wrap col-12">

        <div className="flex flex-wrap w-8/12 lg:w-8/12 px-4">
          <div className="w-full xl:w-full mb-12 xl:mb-0 px-4">
            <CardLineChart />
          </div>
          <div className="w-full xl:w-full px-4">
            <CardBarChart />
          </div>
        </div>
        <div className="flex flex-wrap mt-4">
          <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
            <CardPageVisits />
          </div>
          <div className="w-full xl:w-4/12 px-4">
            <CardSocialTraffic />
          </div>
        </div>

        <div className="w-4/12 lg:w-4/12 px-4">
          <CardProfile />
        </div>
      </div>


    </>
  );
}
