import React from "react";
import {
  faSearch,
  faThLarge,
  faThList,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/banner.css";
const Banner = () => {
  return (
    <div className="banner">
      <div className="d-flex align-items-start p-4 heading">
        We tackle interesting topics every day
      </div>
      <div className="d-flex px-5 align-items-baseline">
        <div className="search p-2">
          <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">
              <FontAwesomeIcon icon={faSearch} />
            </span>
            <input
              type="text"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              placeholder="Find Courses"
            />
          </div>
        </div>

        <div className="views ms-auto">
          <FontAwesomeIcon icon={faThList} />
        </div>
        <div className="views active">
          <div>
            <FontAwesomeIcon icon={faThLarge} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
