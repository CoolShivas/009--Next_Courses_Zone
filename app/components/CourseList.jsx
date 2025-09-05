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
                  <div className="display-4 mb-3 text-light">
                    {curElem.icon}
                  </div>
                  <div className="card-title text-light">{curElem.title}</div>
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
