"use client";

import React from "react";
import { courseDetails } from "@/data";

const page = ({ params }) => {
  // console.log("Printing the CourseDetails list are :-", courseDetails);

  const { slug } = React.use(params);

  // // // Finding the courses on the slug or id basis;

  const detailsOfCourse = courseDetails.find((curElem) => {
    return curElem.title.toLocaleLowerCase().includes(slug.toLocaleLowerCase());
  });

  console.log(detailsOfCourse); // Getting the data of particular items;

  return (
    <>
      <div className="container-fluid d-flex justify-content-center align-items-center">
        <div className="card">
          <div className="card-body text-center">
            <h1 className="text-warning">{detailsOfCourse.title}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
