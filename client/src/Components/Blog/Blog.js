import React, { useHistory, useEffect } from "react";
import img from "./cf.jpg"
function Article() {
  window.scrollTo(0, 0);
  return (
    <div className="flex flex-col items-center mt-10">
      <div className="w-2/3 container shadow-sm single-layout-1 items-center">
        <div className="p-6 items-center">
          <header>
            <div className="w-full mb-6">
              <img
                src={img}
                className="w-full h-72 rounded-lg object-cover object-center"
                alt=""
              />
            </div>
            <h1 className="text-3xl font-semibold mb-4">
            How to save a knocked out tooth?
            </h1>
            <div className="text-sm text-gray-400 px-2">
              <ul>
                <li className="inline px-2">
                  <i className="fas fa-pencil-alt px-2"></i>
                  Dr. Emma Hammett
                </li>
                
                <li className="inline px-2">
                  <i className="fas fa-calendar-alt px-2"></i>
                  28 JAN 2024
                </li>
              </ul>
            </div>
            <i className="mb-6 text-gray-600">
              {/* Medically Reviewed and Written By: Kathleen O’Shea Northrup, MD */}
            </i>
          </header>
          <div className="w-full mb-6">
            <div className="my-7">
              <p>
              An injury to the tooth is very scary but can happen very easily whilst running or playing. However, a whole tooth that has been knocked out can be kept alive and re-implanted!
              </p>
              <h2 className="text-2xl font-semibold my-3">
              What to do?
              </h2>
              <p>
              If someone is hit in the face and their tooth is knocked out, complete with its root, you should advise the person to bite on some clean cloth in order to stem the bleeding.<br/>
              Apply a wrapped ice pack to reduce the swelling to their face.<br/>
              Adults can try to put the tooth back into place and head straight to the dentist. If it is not possible to reinsert the tooth, pick it up. The tooth can then be kept alive in milk or saliva.<br/>
              Transport the casualty and their tooth to a good dentist or a dental hospital and the tooth may be able to be re-implanted.<br/>
              </p>

              <h2 className="text-2xl font-semibold my-3">
              For children?
              </h2>
              <p>
              Reinserting a tooth should never be tried with children as there is an increased risk that they may swallow it. Children should always be taken straight to the dentist along with their tooth, which is being kept alive in milk or saliva.
              </p>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Article;
