import React from "react";
import "../App.css";

function Login() {
  return (
    <div className="container headBox">
      <h1 className="an-text-carousel">Rock Paper Scissor</h1>
      <form class="form-inline">
        <div class="form-group mx-sm-3 mb-2">
          <input
            type="text"
            class="form-control"
            id="inputPassword2"
            placeholder="@userName"
          />
        </div>
        <button type="submit" class="btn btn-success mb-2">
          START{" "}
        </button>
      </form>
    </div>
  );
}

export default Login;
