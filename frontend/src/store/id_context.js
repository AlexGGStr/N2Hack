import { createContext, useState } from "react";

const UserContext = createContext({
  currentKind: null,
  userId: -1,
  selectCurrentUser: (newSelectedUser, newKind) => {},
  isCurrentUser: (userId) => {},
});

export function UserContextProvider(props) {
  const [selectedUser, setSelectedUser] = useState({});
  const [selectedKind, setSelectedKind] = useState({});

  function selectCurrentUserHandler(id, kind) {
    setSelectedUser(() => {
      return id;
    });
    setSelectedKind(() => {
      return kind;
    });
  }

  function isCurrentUserHandler(userId) {
    return selectedUser.id === userId;
  }

  const context = {
    currentKind: selectedKind,
    userId: selectedUser,
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
