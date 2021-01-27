import { observer } from "mobx-react";
import React from "react";
import { useStore } from "../../hooks/useRootStore";
import { useUserList } from "../../hooks/useTodos";
import { StyledLabel, StyledSelect } from "./styles";

const UserSelect = observer(() => {
  // client state
  const { currentUser, setCurrentUser } = useStore();

  // server state
  const userList = useUserList();

  return (
    <div>
      <StyledLabel>Current User</StyledLabel>
      <StyledSelect
        value={currentUser.id}
        onChange={(e) => setCurrentUser({ id: parseInt(e.target.value) })}
      >
        {userList?.map((user) => {
          return <option key={user.id}>{user.id}</option>;
        })}
      </StyledSelect>
    </div>
  );
});

export default UserSelect;
