import React, { Fragment } from "react";
import NavBar from "../../Components/Home/NavBar/NavBar";
import Footer from "../../Components/Home/Footer/Footer";

const Career = () => {
  window.scrollTo(0, 0);
  return (
    <Fragment>
      <NavBar />
      <div className="container px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative bg-white">
          <div className="lg:absolute lg:inset-0">
            <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
              <img
                className="h-56 rounded-lg w-full object-cover lg:absolute lg:h-full"
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
                alt=""
              />
            </div>
          </div>
          <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
            <div className="lg:col-start-2 lg:pl-8">
              <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
                <h2 className="leading-6 text-teal-400 font-semibold tracking-wide uppercase">
                  Work with us
                </h2>
                <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-teal-800 sm:text-4xl">
                  Our Process
                </h3>
               
<div class="section">
   
    <p><strong>How We Provide 24/7 First Aid Support</strong></p>
    <p>Our process is designed to deliver quick, reliable, and professional first aid assistance to patients at any time of the day or night. Here’s how we ensure seamless support:</p>
    <ol>
        <li><strong>Easy Access to Help:</strong> Patients can reach us through a simple message or phone call at any time. Our platform is designed to be user-friendly, ensuring that help is just a click or a call away.</li>
        <li><strong>Immediate Response:</strong> Once a patient contacts us, our team of expert pharmacists is ready to respond immediately. We prioritize prompt and accurate advice to address the patient’s needs effectively.</li>
        <li><strong>Expert Guidance:</strong> Our pharmacists provide professional advice on first aid measures tailored to the patient’s condition. Whether it’s managing a minor burn, treating a cut, or addressing other non-life-threatening issues, our team ensures that patients receive the best possible care.</li>
        <li><strong>Medication Recommendations:</strong> We suggest appropriate medications to help manage the patient’s condition. Our recommendations are based on the latest medical guidelines and the pharmacist’s professional expertise, ensuring safe and effective treatment.</li>
        <li><strong>Continuous Support:</strong> Our commitment to patient care doesn’t end with the initial response. We offer continuous support, checking in with patients to monitor their progress and providing additional advice as needed.</li>
        <li><strong>Follow-Up and Feedback:</strong> After providing support, we follow up with patients to ensure their condition is improving and to gather feedback on our service. This helps us continually enhance our support process and ensures that patients are satisfied with the care they receive.</li>
    </ol>

    <p>If you’re a pharmacist passionate about making a difference and want to be part of a team dedicated to providing exceptional first aid support, we invite you to join us. Together, we can ensure that patients have access to the help they need, whenever they need it.</p>

<br/>
    <a href="#" class="apply-button" className="bold text-teal-400">Join Us Today</a>
</div>

               </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};

export default Career;
