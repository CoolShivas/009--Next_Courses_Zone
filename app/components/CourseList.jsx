"use client";

import React from "react";
import { courses, courseDetails } from "@/data";

const CourseList = () => {
  //   console.log("Printing the Courses list are :-", courses);
  //   console.log("Printing the CourseDetails list are :-", courseDetails);
  return (
    <>
      <center className="m-5">
        <h3>Available courses on our platform are listed below.</h3>
      </center>
      <div>
        <div className="container my-5 d-flex flex-column justify-center">
          <div className="row w-100 justify-content-center">
            {courses.map((curElem) => {
              return (
                <div key={curElem.id} className="col-md-4 mb-4">
                  <div
                    className="card p-4 text-center"
                    style={{
                      backgroundColor: "#2F2F3F",
                      borderRadius: "12px",
                      maxWidth: "300px",
                      width: "100%",
                      border: "1px solid rgba(255, 255, 255, 0.1",
                      boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "translateY(-5px)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "translateY(0)")
                    }
                  >
                    <div className="display-4 mb-3 text-light">
                      {curElem.icon}
                    </div>
                    <div className="card-title text-light">{curElem.title}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseList;
