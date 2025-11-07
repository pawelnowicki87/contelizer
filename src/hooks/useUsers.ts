import { useState, useMemo } from "react";
import { useGetUsersQuery } from "../features/users/usersApi";
import { User } from "../types/users";

export function useUsers() {
  const { data: users = [], isLoading, error } = useGetUsersQuery();
  const [search, setSearch] = useState("");

  const filteredUsers = useMemo(() => {
    return users
      .filter(
        (user: User) =>
          user.name.toLowerCase().includes(search.toLowerCase()) ||
          user.email.toLowerCase().includes(search.toLowerCase())
      )
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [users, search]);

  return { users: filteredUsers, isLoading, error, search, setSearch };
}
