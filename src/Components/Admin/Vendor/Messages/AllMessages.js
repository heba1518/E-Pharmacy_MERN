
import React, {useState} from "react";

const AllMessages = () => {
  const [editModal, setEditModal] = useState(false);
  const [viewOrder, setViewOrder] = useState();
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
      <div className="container mx-auto px-4 sm:px-8 max-w-full sm:max-w-5xl">
        <div className="flex flex-row mb-1 sm:mb-0 justify-between w-full">
          <h2 className="font-display text-teal-700 text-2xl leading-tight">
            Messages
          </h2>
        </div>
      </div>
    </section>
  );
};

export default AllMessages;
