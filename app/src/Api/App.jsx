import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function App()
{
    const dispatch =useDispatch();
    //const {user,loading,error} = useSelector((state)=>state); //get state from redux
    const user = useSelector((state) => state.user);
    const loading = useSelector((state) => state.loading);
    const error = useSelector((state) => state.error);
    
    return(
        <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h2>Fetch User Data with Redux-Saga</h2>
        <button onClick={() => dispatch( { type: "FETCH_USER_REQUEST"})} disabled={loading}>
          {loading ? "Loading..." : "Fetch User"}
        </button>
        {error && <p style={{ color: "red" }}>Error: {error}</p>}
        {user && (
          <div>
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
          </div>
        )}
      </div>
    );
  };