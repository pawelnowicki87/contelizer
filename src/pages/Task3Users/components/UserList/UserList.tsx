import { User } from "../../../../types/users";
import { UserCard } from "../UserCard/UserCard";
import { RootState } from "../../../../app/store";
import { useSelector } from "react-redux";
import styles from "./UserList.module.scss";

interface UserListProps {
  users: User[];
}

export const UserList = ({ users }: UserListProps) => {
  const { editingUser } = useSelector((state: RootState) => state.users);

  if (users.length === 0) {
    return <p>No users found.</p>;
  }

  return (
    <div className={styles["user-list"]}>
      {users.map((user) => (
        <div key={user.id} className={styles["user-list__item"]}>
          <UserCard
            user={user}
            isEditing={editingUser?.id === user.id}
            editingUser={editingUser}
          />
        </div>
      ))}
    </div>
  );
};
