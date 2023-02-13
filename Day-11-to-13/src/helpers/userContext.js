import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Ayush",
    email: "dummy@dummymail.com",
  },
});

// UserContext.displayName = "UserContext";

export default UserContext;