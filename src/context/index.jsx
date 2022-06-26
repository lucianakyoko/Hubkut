import React, { useState, createContext} from "react";
export const context = createContext();

export const ContextProvider = props => {
  const [userData, setUserData] = useState({});
  const [followersList, setFollowersList] = useState([]);
  const [followingList, setFollowingList] = useState([]);

  return (
    <context.Provider value={{
      userData,
      setUserData,
      followersList,
      setFollowersList,
      followingList,
      setFollowingList
    }}>
      {props.children}
    </context.Provider>
  )
}