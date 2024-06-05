import React from "react";

const RecentCustomers = () => {
  const customers = [
    {
      id: "0",
      photo: "https://i.imgur.com/1As0akH.png1",
      name: "Ahmed Maher",
      email: "ahmedMaher@gmail.com",
      spent: "2,890£",
    },
    {
      id: "1",
      photo: "https://i.imgur.com/UYCE7Rr.png",
      name: "Mohammed Sabry",
      address: "El Haram, Cairo",
      email: "mSabry@gmail.com",
      spent: "2,767£",
    },
    {
      id: "2",
      photo: "https://i.imgur.com/FHMKqK5.png",
      name: "Salma Ahmed",
      address: "masla square, Faiyum",
      email: "salmaAhmed@gmail.com",
      spent: "2,996£",
    },
    {
      id: "3",
      photo: "https://i.imgur.com/hz6bZkb.png",
      name: "Sayed Yasser",
      email: "sayedY@gmail.com",
      spent: "1,220£",
    },
    {
      id: "4",
      photo: "https://i.imgur.com/udG6SOt.png",
      name: "Heba Amr",
      address: "El Rashidy, Alex",
      email: "hebaamr@gmail.com",
      spent: "1,890£",
    },
  ];

  return (
    <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-gray-200">
      <header className="px-5 py-4 border-b border-gray-100">
        <h2 className="font-semibold text-gray-800">Recent Customers</h2>
      </header>
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs font-semibold uppercase text-gray-500 bg-gray-50">
              <tr>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Name</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Email</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Spent</div>
                </th>
                {/* <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">ِAddress</div>
                </th> */}
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-gray-100">
              {customers.map((customer) => {
                return (
                  <tr key={customer.id}>
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                          <img
                            className="rounded-full"
                            src={customer.photo}
                            width="40"
                            height="40"
                            alt={customer.name}
                          />
                        </div>
                        <div className="font-medium text-gray-800">
                          {customer.name}
                        </div>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left">{customer.email}</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left font-medium text-green-500">
                        {customer.spent}
                      </div>
                    </td>
                    {/* <td className="p-2 whitespace-nowrap">
                      <div className="flex-shrink-0 self-end ml-2">
                        <a
                          className="font-medium text-teal-500 hover:text-teal-700 font-sans"
                          href="#0"
                        >
                          View<span className="hidden sm:inline"> -&gt;</span>
                        </a>
                      </div>
                    </td> */}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RecentCustomers;
