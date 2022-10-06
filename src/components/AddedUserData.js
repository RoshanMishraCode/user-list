import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUserEmail, removeUser } from "../redux/userSlice";
import Button from "./UI/Button";

const AddedUserData = ({ onShowModal }) => {
  const dispatch = useDispatch();
  const { addUsers } = useSelector((state) => state.userSlice);
  return (
    <div className="table-responsive">
      {addUsers.length === 0 ? (
        <p className="text-center pt-5">User Data Empy!</p>
      ) : (
        <table className="table border">
          <thead>
            <tr>
              <th scope="col" className="border-end">
                Name
              </th>
              <th scope="col" className="border-end">
                Email
              </th>
              <th scope="col" className="border-end">
                Mobile
              </th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {addUsers.map((curElem, i) => {
              return (
                <tr key={i}>
                  <th className="border-end">{curElem.name}</th>
                  <td className="border-end">{curElem.email}</td>
                  <td className="border-end">{curElem.mobile}</td>
                  <td className="d-flex">
                    <Button
                      onClick={() => {
                        onShowModal();
                        dispatch(editUserEmail(curElem));
                      }}
                      className="btn me-1 btn-primary"
                    >
                      edit
                    </Button>
                    <Button
                      onClick={() => dispatch(removeUser(curElem))}
                      className="btn btn-secondary"
                    >
                      delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AddedUserData;
