import { useState } from "react";
import AddContact from "./AddContact";
import ContactCard from "./ContactCard";

const initialState = [
  {
    id: 1,
    first_name: "ketan",
    last_name: "mangidkar",
    phone: "1234509876"
  },
  {
    id: 2,
    first_name: "sai",
    last_name: "shatstri",
    phone: "9876532789"
  },
  {
    id: 3,
    first_name: "akshay",
    last_name: "tirmal",
    phone: "2346523453"
  }
];

export default function ContactList() {
  const [contactlist, setContactlist] = useState(initialState);

  const handleClick = (name, phone) => {
    setContactlist([
      ...contactlist,
      {
        id: contactlist[contactlist.length - 1].id + 1,
        first_name: name,
        last_name: "",
        phone: phone
      }
    ]);
  };
  const deleteById = (id) => {
    setContactlist(contactlist.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <h1>Contact List</h1>
      <AddContact handleClick={handleClick} />
      <br />
      {contactlist.map((item) => (
        <div key={item.id}>
          <ContactCard
            id={item.id}
            name={item.first_name}
            phone={item.phone}
            onDelete={deleteById}
          />
        </div>
      ))}
    </div>
  );
}
