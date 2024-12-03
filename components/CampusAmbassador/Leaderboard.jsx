import React, { forwardRef } from "react";
import cn from "classnames";

const Leaderboard = forwardRef(({ className = "" }, ref) => {
  const leaderboard = [
    { name: "Alice", points: 1900 ,college: "IIT-BHU" },
    { name: "Bob", points: 1400 ,college: "IIT-BHU" },
    { name: "John Doe", points: 1200 ,college: "IIT-BHU" },
    { name: "John Doe", points: 1200 ,college: "IIT-B" },
    { name: "John Doe", points: 1200 ,college: "IIT-B" },
    { name: "John Doe", points: 1200 ,college: "IIT-D" },
    { name: "John Doe", points: 1200 ,college: "IIT-D" },
    { name: "John Doe", points: 1900 ,college: "IIT-D" },
    { name: "John Doe", points: 1100 ,college: "IIT-K" },
    { name: "John Doe", points: 1100 ,college: "MIT(Manipal not Massachusetts)" },
    { name: "John Doe", points: 1100 ,college: "IIT-BHU" },
    { name: "John Doe", points: 1100 ,college: "IIT-BHU" },
    { name: "John Doe", points: 1100 ,college: "IIT-BHU" },
    { name: "John Doe", points: 1100 ,college: "IIT-BHU" },
  ];

  return (
    <div ref={ref} className={cn("leaderboard-container", className)}>
      <div className="bg-gradient-to-b from-white to-black shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4">Leaderboard</h2>
        <div className="hidden sm:grid sm:grid-cols-4 font-bold bg-white p-3 rounded-md mb-3.5 text-center">
          <div>Rank</div>
          <div>Name</div>
          <div>Points</div>
          <div>College</div>
        </div>
        <div className="divide-y divide-white">
          {leaderboard
            .sort((a, b) => b.points - a.points)
            .slice(0, 10)
            .map((leader, index) => (
              <div
                key={index}
                className="sm:grid sm:grid-cols-4 bg-white p-3 m-1 rounded-md text-center flex flex-col sm:flex-row sm:items-center"
              >
                <div className="sm:col-span-1">
                  <span className="font-bold sm:hidden">Rank: </span>
                  {index + 1}
                </div>
                <div className="sm:col-span-1">
                  <span className="font-bold sm:hidden">Name: </span>
                  {leader.name}
                </div>
                <div className="sm:col-span-1">
                  <span className="font-bold sm:hidden">Points: </span>
                  {leader.points}
                </div>
                <div className="sm:col-span-1">
                  <span className="font-bold sm:hidden">College: </span>
                  {leader.college}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
});

export default Leaderboard;