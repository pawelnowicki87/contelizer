import React from "react";
import "./styles/App.scss";
import { PeselForm } from "./components/PeselForm/PeselForm";
import { BackToHome } from "../../components/BackToHome/BackToHome";

export const Task2PeselPage: React.FC = () => (
  <div className="app">
    <BackToHome />
    <h1 className="app__title">Task 2 — PESEL Validator</h1>
    <PeselForm />
  </div>
);
