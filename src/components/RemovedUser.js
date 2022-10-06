import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { reStoreUser } from "../redux/userSlice";
import Button from "./UI/Button";

const RemovedUser = () => {
  const dispatch = useDispatch();
  const { removeUsers } = useSelector((state) => state.userSlice);

  return (
    <div className="table-responsive">
      {removeUsers.length === 0 ? (
        <p className="text-center pt-5">Removed User is Data Empy!</p>
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
            {removeUsers.map((curElem, i) => {
              return (
                <tr key={i}>
                  <th className="border-end">{curElem.name}</th>
                  <td className="border-end">{curElem.email}</td>
                  <td className="border-end">{curElem.mobile}</td>
                  <td className="d-flex">
                    <Button
                      onClick={() => dispatch(reStoreUser(curElem))}
                      className="btn me-1 btn-primary"
                    >
                      restore
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

export default RemovedUser;
