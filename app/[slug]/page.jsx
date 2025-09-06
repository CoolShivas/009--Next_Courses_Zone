"use client";

import React from "react";
import { courseDetails } from "@/data";
import { FaClock, FaLayerGroup, FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";

const page = ({ params }) => {
  // console.log("Printing the CourseDetails list are :-", courseDetails);

  const { slug } = React.use(params);

  // // // Finding the courses on the slug or id basis;

  const detailsOfCourse = courseDetails.find((curElem) => {
    return curElem.title.toLocaleLowerCase().includes(slug.toLocaleLowerCase());
  });

  //console.log(detailsOfCourse); // Getting the data of particular items;

  const router = useRouter();

  return (
    <>
      {/* <div
        className="container-fluid d-flex justify-content-center align-items-center text-center"
        style={{
          background: "linear-gradient(135deg, #0f172a, #1e293b)",
          color: "#f8fafc",
          padding: "50px",
        }}
      >
        <div
          className="card"
          style={{
            background: "rgba(255, 255, 255, 0.1",
            backdropFilter: "blur(10px",
            borderRadius: "10px",
            maxWidth: "630px",
            width: "100%",
          }}
        >
          <div className="card-body text-center">
            <h1 className="text-warning">{detailsOfCourse.title}</h1>
            <span className="badge bg-gradient bg-primary px-3 py-2">
              <FaClock />
              {detailsOfCourse.duration}
            </span>
            <span className="badge mx-3 bg-gradient bg-success px-3 py-2">
              <FaLayerGroup />
              {detailsOfCourse.level}
            </span>
          </div>
          <h3 className="mt-4 text-light">Projects you cab build :- </h3>
          <ul className="list-group mt-3">
            {detailsOfCourse.projects.map((curElement) => {
              return (
                <li
                  key={curElement.id}
                  className="list-group-item border-0 text-light"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    transition: "all 0.3 ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      "rgba(255, 255, 255, 0.2")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      "rgba(255, 255, 255, 0.1")
                  }
                >
                  {curElement.title}
                </li>
              );
            })}
          </ul>
        </div>
      </div> */}
      <div>
        <div
          className="container-fluid min-vh-100 d-flex justify-content-center align-items-center text-center"
          style={{
            background: "linear-gradient(135deg,#0f172a,#1e293b)",
            color: "#f8fafc",
            padding: "50px",
          }}
        >
          <div
            className="card p-4"
            style={{
              background: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(10px)",
              borderRadius: "10px",
              maxWidth: "630px",
              width: "100%",
            }}
          >
            <div className="card-body text-center">
              <h1 className="text-warning">{detailsOfCourse.title}</h1>
              <span className="badge bg-gradient bg-primary px-3 py-2">
                <FaClock /> {detailsOfCourse.duration}
              </span>
              <span className="badge mx-3 bg-gradient bg-success px-3 py-2">
                <FaLayerGroup /> {detailsOfCourse.level}
              </span>
            </div>

            <h3 className="mt-4 text-light">Projects You Can Build:</h3>
            <ul className="list-group mt-3">
              {detailsOfCourse.projects.map((curElement) => (
                <li
                  key={curElement.id}
                  className="list-group-item border-0 text-light"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.1)",
                    transition: "all 0.3 ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      "rgba(255,255,255,0.2)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      "rgba(255,255,255,0.1)")
                  }
                >
                  {curElement.title}
                </li>
              ))}
            </ul>
            <div className="d-grid col-sm-6 mx-auto">
              <button
                className="btn btn-outline-warning mt-4 shadow-sm"
                onClick={() => router.push("/")}
              >
                <FaArrowLeft /> Back To Courses
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
