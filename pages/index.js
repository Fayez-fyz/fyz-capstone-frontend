import React, { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../context";
import Link from "next/link";
import { useRouter } from "next/router";

const index = () => {
  const [state, setState] = useContext(UserContext);
  const router = useRouter();
  if (state && state.token) router.push("/user/dashboard");
  return (
    <div>
      <div className="container-fluid text-sm-center p-5 mb-5 bg-dark text-light">
        {" "}
        {/* bg-light is background color & p-5 is padding */}
        <h1 className="display-1">
          <b>FYZBOOK</b>{" "}
        </h1>
        <p className="lead">
          Fyzbook helps you connect and share with the people in your life.
        </p>
      </div>
      <div className="d-flex justify-content-center py-5">
        <Link href="/login">
          <a className="btn btn-outline-primary btn-lg mx-3">Login</a>
        </Link>
        <Link href="/register">
          <a className="btn btn-outline-warning btn-lg mx-3">Register</a>
        </Link>
      </div>
    </div>
  );
};

export default index;
