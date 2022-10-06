import React, { useState } from "react";
import { useDispatch } from "react-redux";
import AddedUserData from "./components/AddedUserData";
import AddUserData from "./components/AddUserData";
import NavButton from "./components/NavButton";
import RemovedUser from "./components/RemovedUser";
import { clearUserEmai } from "./redux/userSlice";

const App = () => {
  const dispatch = useDispatch();
  const [showData, setShowData] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const onShowModalHandler = () => {
    setShowModal(true);
  };
  const onCloseModalHandler = () => {
    setShowModal(false);
    dispatch(clearUserEmai());
  };
  const showUserDataHandler = () => {
    setShowData(true);
  };
  const removedUserDataHandler = () => {
    setShowData(false);
  };
  return (
    <div className="container py-4 p-md-4">
      <h1 className="py-2">React Task</h1>
      <NavButton
        showUser={showUserDataHandler}
        removedUser={removedUserDataHandler}
      />
      <AddUserData
        onShowModal={onShowModalHandler}
        onCloseModal={onCloseModalHandler}
        showModal={showModal}
      />
      {showData ? (
        <AddedUserData onShowModal={onShowModalHandler} />
      ) : (
        <RemovedUser />
      )}
    </div>
  );
};

export default App;
