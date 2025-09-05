import React from "react";
import { courses, courseDetails } from "@/data";

const CourseList = () => {
  console.log("Printing the Courses list are :-", courses);
  console.log("Printing the CourseDetails list are :-", courseDetails);
  return (
    <>
      <center>
        <h3>Available courses on our platform are listed below.</h3>
      </center>
    </>
  );
};

export default CourseList;
