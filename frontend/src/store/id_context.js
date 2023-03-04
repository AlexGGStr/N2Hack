import { createContext, useState } from "react";

const UserContext = createContext({
  currentUser: {},
  userId: -1,
  selectCurrentUser: (newSelectedUser) => {},
  isCurrentUser: (userId) => {},
});

export function UserContextProvider(props) {
  const [selectedUser, setSelectedUser] = useState({});

  function selectCurrentUserHandler(newSelectedUser) {
    setSelectedUser(() => {
      return newSelectedUser;
    });
  }

  function isCurrentUserHandler(userId) {
    return selectedUser.id === userId;
  }

  const context = {
    userId: selectedUser.id,
    selectCurrentUser: selectCurrentUserHandler,
    isCurrentUser: isCurrentUserHandler,
  };

  return (
    <UserContext.Provider value={context}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContext;