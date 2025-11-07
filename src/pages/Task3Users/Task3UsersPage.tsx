import React from "react";
import "./styles/App.scss";
import { useUsers } from "../../hooks/useUsers";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { UserList } from "./components/UserList/UserList";
import { BackToHome } from "../../components/BackToHome/BackToHome";
import { Loader } from "./components/Loader/Loader";

export const Task3UsersPage: React.FC = () => {
  const { users, isLoading, error, search, setSearch } = useUsers();

  if (isLoading) {
    return (
      <div className="app">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="app">
        <BackToHome />
        <h1>Task 3 — Users API</h1>
        <p className="error">Failed to load users. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="app">
      <BackToHome />
      <h1>Task 3 — Users API</h1>

      <SearchBar value={search} onChange={setSearch} />
      <UserList users={users} />
    </div>
  );
};
