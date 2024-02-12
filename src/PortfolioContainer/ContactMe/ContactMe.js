import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Typical from "react-typical";

import imgBack from "../../../src/images/mailz.jpeg";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animation";
import Footer from "../Footer/Footer";
import "./ContactMe.css";

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [banner, setBanner] = useState("");

  /*   const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  console.log(name);
  const submitForm = async (e) => {
    e.preventDefault();
    try {
      let data = {
        name,
        email,
        message,
      };
      setBool(true);
      const res = await Axios.post(`/contact`, data);
      if (name.length === 0 || email.length === 0 || message.length === 0) {
        setBanner(res.data.msg);
        toast.error(res.data.msg);
        setBool(false);
      } else if (res.status === 200) {
        setBanner(res.data.msg);
        toast.success(res.data.msg);
        setBool(false);

        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.log(error);
    }
  }; */

  const ref = useRef();
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tchuuzc",
        "template_3mh7p39",
        ref.current,
        "UEwjAOJ3F2rodIsr4"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <div className="main-container fade-in" id={props.id || ""}>
      <ScreenHeading subHeading={"Lets Keep In Touch"} title={"Contact Me"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            <Typical loop={Infinity} steps={["Get In Touch 📧", 1000]} />
          </h2>{" "}
          <a href="https://www.github.com/fexol">
            <i className="fa fa-github-square"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/felix-holewa"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-linkedin-square"></i>
          </a>
        </div>
        <div className="back-form">
          <div className="img-back">
            <h4>Send Your Email Here!</h4>
            <img src={imgBack} alt="img not found" />
          </div>
          <form ref={ref} onSubmit={handleSubmit}>
            <p>{banner}</p>
            <span htmlFor="name">Name</span>
            <input
              autoComplete="off"
              placeholder="Your name"
              type="text"
              name="name"
            />

            <span htmlFor="email">Email</span>
            <input
              autoComplete="off"
              placeholder="Your email address"
              type="email"
              name="email"
            />

            <span htmlFor="message">Message</span>
            <textarea
              placeholder="Write your message"
              type="text"
              name="message"
            />

            <div className="send-btn">
              <button type="submit">
                <span style={{ marginRight: "5px" }}>send</span>
                <i className="fa fa-paper-plane" />
              </button>
            </div>
            {success &&
              "\n Your message has been sent. I will get back to you soon."}
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
