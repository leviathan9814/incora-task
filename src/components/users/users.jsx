import React,  { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/usersReducer";
import User from "../user/user";

import './users.scss';

const Users = () => {

  const {users} = useSelector(state => state.users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);


  return (
    <div className="users">
      {
        users.map(user => <User key={user.id} name={user.name} email={user.email} id={user.id} />)
      }
    </div>
  );
}

export default React.memo(Users);
