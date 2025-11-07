import { useState, useRef, useCallback } from "react";
import { useDispatch } from "react-redux";
import { User } from "../../../../types/users";
import { setEditingUser } from "../../../../features/users/usersSlice";
import { useClickOutside } from "../../../../hooks/useClickOutside";
import { useEnterSubmit } from "../../../../hooks/useEnterSubmit";
import { useUpdateUserMutation } from "../../../../features/users/usersApi";
import styles from "./UserCard.module.scss";

interface UserCardProps {
  user: User;
  isEditing: boolean;
  editingUser: User | null;
}

export const UserCard = ({ user, isEditing, editingUser }: UserCardProps) => {
  const dispatch = useDispatch();
  const [updateUser, { isLoading: isUpdating }] = useUpdateUserMutation();
  const [saving, setSaving] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null!);

  const handleSave = useCallback(async () => {
    if (!editingUser) return;
    setSaving(true);
    try {
      await updateUser(editingUser).unwrap();
      dispatch(setEditingUser(null));
    } catch {
      alert("Failed to update user. Check your token or permissions.");
    } finally {
      setSaving(false);
    }
  }, [editingUser, updateUser, dispatch]);

  useClickOutside(cardRef, () => {
    if (isEditing && !isUpdating && !saving) dispatch(setEditingUser(null));
  });

  const handleKeyDown = useEnterSubmit(handleSave);

  const cardClass = `${styles["user-card"]} ${
    saving || isUpdating ? styles["user-card--saving"] : ""
  }`;

  if (isEditing && editingUser) {
    return (
      <div className={cardClass} ref={cardRef}>
        <input
          className={styles["user-card__input"]}
          value={editingUser.name}
          onChange={(e) =>
            dispatch(setEditingUser({ ...editingUser, name: e.target.value }))
          }
          onKeyDown={handleKeyDown}
          autoFocus
        />
        <input
          className={styles["user-card__input"]}
          value={editingUser.email}
          onChange={(e) =>
            dispatch(setEditingUser({ ...editingUser, email: e.target.value }))
          }
          onKeyDown={handleKeyDown}
        />
        <button
          className={styles["user-card__button"]}
          onClick={handleSave}
          disabled={isUpdating}
        >
          Save
        </button>
      </div>
    );
  }

  return (
    <div className={cardClass} ref={cardRef}>
      <h3 className={styles["user-card__name"]}>{user.name}</h3>
      <p className={styles["user-card__email"]}>{user.email}</p>
      <p className={styles["user-card__meta"]}>
        <b>{user.gender}</b> · {user.status}
      </p>
      <button
        className={styles["user-card__button"]}
        onClick={(e) => {
          e.stopPropagation();
          dispatch(setEditingUser(user));
        }}
      >
        Edit
      </button>
    </div>
  );
};
