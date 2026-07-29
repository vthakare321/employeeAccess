import type { User } from "../models/user.model";

const STORAGE_KEY = "local-users";

export const getLocalUsers = (): User[] => {
  const users = localStorage.getItem(STORAGE_KEY);

  if (!users) {
    return [];
  }

  return JSON.parse(users) as User[];
};

export const saveLocalUsers = (
  users: User[],
): void => {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(users),
  );
};

export const addLocalUser = (
  user: User,
): void => {
  const users = getLocalUsers();

  saveLocalUsers([user, ...users]);
};

export const updateLocalUser = (
  updatedUser: User,
): void => {
  const users = getLocalUsers();

  const updatedUsers = users.map((user) =>
    user.id === updatedUser.id
      ? updatedUser
      : user,
  );

  saveLocalUsers(updatedUsers);
};

export const deleteLocalUser = (
  id: number,
): void => {
  const users = getLocalUsers();

  const filteredUsers = users.filter(
    (user) => user.id !== id,
  );

  saveLocalUsers(filteredUsers);
};

export const generateLocalUserId = (): number => {
  const users = getLocalUsers();

  if (users.length === 0) {
    return 10000;
  }

  return (
    Math.max(...users.map((user) => user.id)) + 1
  );
};

export const isLocalUser = (
  id: number,
): boolean => {
  return id >= 10000;
};

export const getLocalUserById = (
  id: number,
): User | undefined => {
  const users = getLocalUsers();

  return users.find((user) => user.id === id);
};