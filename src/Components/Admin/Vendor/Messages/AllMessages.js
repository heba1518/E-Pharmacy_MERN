import React from "react";
const AllMessages = () => {
  const orders = [
    {
      id: "2",
      photo: "https://i.imgur.com/FHMKqK5.png",
      name: "Salma Ahmed",
      address: "masla square, Faiyum",
      email: "salmaAhmed@gmail.com",
      phone: "+201036985214",
      status: "Active",
      date: "Mar 23, 2024",
    },
    {
      id: "3",
      photo: "https://i.imgur.com/hz6bZkb.png",
      name: "Sayed Yasser",
      email: "sayedY@gmail.com",
      address: "Lutf Allah, Faiyum",
      phone: "+201236985264",
      status: "Active",
      date: "Mar 15, 2024",
    },
    {
      id: "1",
      photo: "https://i.imgur.com/UYCE7Rr.png",
      name: "Mohammed Sabry",
      address: "El Haram, Cairo",
      email: "mSabry@gmail.com",
      phone: "+201136985275",
      status: "Active",

      date: "Apr 1, 2024",
    },
    {
      id: "4",
      photo: "https://i.imgur.com/udG6SOt.png",
      name: "Heba Amr",
      address: "El Rashidy, Alex",
      email: "hebaamr@gmail.com",
      phone: "+201136984514",
      status: "Deactive",
      date: "Mar 5, 2024",
    },
    {
      id: "0",
      photo: "https://i.imgur.com/1As0akH.png1",
      name: "Ahmed Toba",
      email: "ahmedtoba@gmail.com",
      address: "El Hwatem, Faiyum",
      phone: "+201036985253",
      status: "Active",
      date: "Apr 17, 2024",
    },
  ];

  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return (
    <section>
      <div class="container">
        <div class="row">
          <nav class="menu">
            <ul class="items">
              <li class="item">
                <i class="fa fa-home" aria-hidden="true"></i>
              </li>
              <li class="item">
                <i class="fa fa-user" aria-hidden="true"></i>
              </li>
              <li class="item">
                <i class="fa fa-pencil" aria-hidden="true"></i>
              </li>
              <li class="item item-active">
                <i class="fa fa-commenting" aria-hidden="true"></i>
              </li>
              <li class="item">
                <i class="fa fa-file" aria-hidden="true"></i>
              </li>
              <li class="item">
                <i class="fa fa-cog" aria-hidden="true"></i>
              </li>
            </ul>
          </nav>

          <section class="discussions">
            <div class="discussion search">
              <div class="searchbar">
                <i class="fa fa-search" aria-hidden="true"></i>
                <input type="text" placeholder="Search..."></input>
              </div>
            </div>
            <div class="discussion message-active">
              <div
                class="photo"
                style="background-image: url(https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80);"
              >
                <div class="online"></div>
              </div>
              <div class="desc-contact">
                <p class="name">Megan Leib</p>
                <p class="message">9 pm at the bar if possible 😳</p>
              </div>
              <div class="timer">12 sec</div>
            </div>

            <div class="discussion">
              <div
                class="photo"
                style="background-image: url(https://i.pinimg.com/originals/a9/26/52/a926525d966c9479c18d3b4f8e64b434.jpg);"
              >
                <div class="online"></div>
              </div>
              <div class="desc-contact">
                <p class="name">Dave Corlew</p>
                <p class="message">
                  Let's meet for a coffee or something today ?
                </p>
              </div>
              <div class="timer">3 min</div>
            </div>

            <div class="discussion">
              <div
                class="photo"
                style="background-image: url(https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80);"
              ></div>
              <div class="desc-contact">
                <p class="name">Jerome Seiber</p>
                <p class="message">I've sent you the annual report</p>
              </div>
              <div class="timer">42 min</div>
            </div>

            <div class="discussion">
              <div
                class="photo"
                style="background-image: url(https://card.thomasdaubenton.com/img/photo.jpg);"
              >
                <div class="online"></div>
              </div>
              <div class="desc-contact">
                <p class="name">Thomas Dbtn</p>
                <p class="message">See you tomorrow ! 🙂</p>
              </div>
              <div class="timer">2 hour</div>
            </div>

            <div class="discussion">
              <div
                class="photo"
                style="background-image: url(https://images.unsplash.com/photo-1553514029-1318c9127859?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80);"
              ></div>
              <div class="desc-contact">
                <p class="name">Elsie Amador</p>
                <p class="message">What the f**k is going on ?</p>
              </div>
              <div class="timer">1 day</div>
            </div>

            <div class="discussion">
              <div
                class="photo"
                style="background-image: url(https://images.unsplash.com/photo-1541747157478-3222166cf342?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=967&q=80);"
              ></div>
              <div class="desc-contact">
                <p class="name">Billy Southard</p>
                <p class="message">Ahahah 😂</p>
              </div>
              <div class="timer">4 days</div>
            </div>

            <div class="discussion">
              <div
                class="photo"
                style="background-image: url(https://images.unsplash.com/photo-1435348773030-a1d74f568bc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80);"
              >
                <div class="online"></div>
              </div>
              <div class="desc-contact">
                <p class="name">Paul Walker</p>
                <p class="message">You can't see me</p>
              </div>
              <div class="timer">1 week</div>
            </div>
          </section>
          <section class="chat">
            <div class="header-chat">
              <i class="icon fa fa-user-o" aria-hidden="true"></i>
              <p class="name">Megan Leib</p>
              <i
                class="icon clickable fa fa-ellipsis-h right"
                aria-hidden="true"
              ></i>
            </div>
            <div class="messages-chat">
              <div class="message">
                <div
                  class="photo"
                  style="background-image: url(https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80);"
                >
                  <div class="online"></div>
                </div>
                <p class="text"> Hi, how are you ? </p>
              </div>
              <div class="message text-only">
                <p class="text">
                  {" "}
                  What are you doing tonight ? Want to go take a drink ?
                </p>
              </div>
              <p class="time"> 14h58</p>
              <div class="message text-only">
                <div class="response">
                  <p class="text"> Hey Megan ! It's been a while 😃</p>
                </div>
              </div>
              <div class="message text-only">
                <div class="response">
                  <p class="text"> When can we meet ?</p>
                </div>
              </div>
              <p class="response-time time"> 15h04</p>
              <div class="message">
                <div
                  class="photo"
                  style="background-image: url(https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80);"
                >
                  <div class="online"></div>
                </div>
                <p class="text"> 9 pm at the bar if possible 😳</p>
              </div>
              <p class="time"> 15h09</p>
            </div>
            <div class="footer-chat">
              <i
                class="icon fa fa-smile-o clickable"
                style="font-size:25pt;"
                aria-hidden="true"
              ></i>
              <input
                type="text"
                class="write-message"
                placeholder="Type your message here"
              ></input>
              <i
                class="icon send fa fa-paper-plane-o clickable"
                aria-hidden="true"
              ></i>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default AllMessages;
