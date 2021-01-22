import { types, getSnapshot } from "mobx-state-tree";

const User = types.model("User", {
  id: types.number,
});

const UserStore = types
  .model("UserStore", {
    currentUser: User,
  })
  .actions((self) => {
    return {
      setCurrentUser(id) {
        self.user = id;
      },
    };
  });

export const Store = UserStore.create({
  currentUser: { id: 1 },
});

window.getSnapshot = getSnapshot;
window.Store = Store;
