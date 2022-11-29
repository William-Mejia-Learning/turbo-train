import React from "react";
import Sidenav from "./Sidenav";

function Feed() {
  return (
    <div className="container mt-5">
      <div className="d-flex">
        <div className="col-1">
          <Sidenav />
        </div>
        <div className="col-5 mt-5 mx-5">
          <div className="card">
            <div className="card-body" style={{ width: "30rem" }}>
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feed;
