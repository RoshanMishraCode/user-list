import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, editUser } from "../redux/userSlice";
import Button from "./UI/Button";
import Input from "./UI/Input";
import Modal from "./UI/Modal";

const AddUserData = ({ onShowModal, onCloseModal, showModal }) => {
  const dispatch = useDispatch();
  const { addUsers, editUserData } = useSelector((state) => state.userSlice);
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    mobile: "",
  });
  useEffect(() => {
    if (editUserData) {
      setInputData({
        name: editUserData.name,
        email: editUserData.email,
        mobile: editUserData.mobile,
      });
    } else {
      setInputData({
        name: "",
        email: "",
        mobile: "",
      });
    }
  }, [editUserData]);

  const onChangeHandler = (e) => {
    const Name = e.target.name;
    const Value = e.target.value;
    setInputData((prevState) => {
      return {
        ...prevState,
        [Name]: Value,
      };
    });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const validateUserEmail = addUsers.find(
      (user) => user.email === inputData.email
    );
    if (!validateUserEmail && !editUserData) {
      dispatch(addUser({ ...inputData, id: Math.random() }));
      setInputData({ name: "", email: "", mobile: "" });
      onCloseModal();
    }
    if (editUserData) {
      dispatch(editUser({ ...inputData, id: editUserData.id }));
      setInputData({ name: "", email: "", mobile: "" });
      onCloseModal();
    }
  };
  return (
    <div>
      <Button onClick={onShowModal} className="btn btn-primary my-2">
        Add New User
      </Button>
      {showModal && (
        <Modal onCloseModal={onCloseModal}>
          <div className="p-4">
            <form
              onSubmit={onSubmitHandler}
              className="row g-3 needs-validation"
            >
              <Input
                htmlFor="nameValidate"
                label="Name"
                type="text"
                id="nameInput"
                name="name"
                onChange={onChangeHandler}
                value={inputData.name}
              />
              <Input
                htmlFor="emailValidate"
                label="Email"
                type="email"
                id="emailInput"
                name="email"
                onChange={onChangeHandler}
                value={inputData.email}
              />
              <Input
                htmlFor="mobileValidate"
                label="mobile"
                type="number"
                id="mobileInput"
                name="mobile"
                onChange={onChangeHandler}
                value={inputData.mobile}
              />
              <div className="col-12 d-flex justify-content-between pt-3">
                <Button className="btn btn-primary" type="submit">
                  Submit
                </Button>
                <Button onClick={onCloseModal} className="btn btn-danger">
                  Close
                </Button>
              </div>
            </form>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default AddUserData;
