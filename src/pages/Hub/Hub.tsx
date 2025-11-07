import React from "react";
import { Link } from "react-router-dom";
import "../Hub/Hub.scss";

export const Hub: React.FC = () => {
  const tasks = [
    {
      title: "Task 1 — Scrambler",
      link: "/task1-scrambler",
      color: "#00bcd4",
    },
    {
      title: "Task 2 — PESEL Validator",
      link: "/task2-pesel-validator",
      color: "#4caf50",
    },
    {
      title: "Task 3 — Users API",
      link: "/task3-users-api",
      color: "#ff9800",
    },
  ];

  return (
    <div className="hub">
      <h1>Contelizer — Tasks Overview</h1>
      <div className="hub__grid">
        {tasks.map((task) => (
          <Link
            key={task.title}
            to={task.link}
            className="hub__card"
            style={{ borderColor: task.color }}
          >
            <h2>{task.title}</h2>
            <p>View Project →</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
