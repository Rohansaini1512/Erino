import  { useState } from "react";

function HomePage() {
  const [contacts, setContacts] = useState([]);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    company: '',
    jobTitle: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setContacts([...contacts, form]);
    setForm({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      company: '',
      jobTitle: ''
    });
  };

  const handleDelete = (index) => {
    const newContacts = contacts.filter((_, i) => i !== index);
    setContacts(newContacts);
  };

  const handleEdit = (index) => {
    const contactToEdit = contacts[index];
    setForm(contactToEdit);
    handleDelete(index);
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
          placeholder="First Name"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="phoneNumber"
          value={form.phoneNumber}
          onChange={handleChange}
          placeholder="Phone Number"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="company"
          value={form.company}
          onChange={handleChange}
          placeholder="Company"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="jobTitle"
          value={form.jobTitle}
          onChange={handleChange}
          placeholder="Job Title"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded"
        >
          Add Contact
        </button>
      </form>

      <div className="mt-8">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">First Name</th>
              <th className="py-2 px-4 border-b">Last Name</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Phone Number</th>
              <th className="py-2 px-4 border-b">Company</th>
              <th className="py-2 px-4 border-b">Job Title</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b">{contact.firstName}</td>
                <td className="py-2 px-4 border-b">{contact.lastName}</td>
                <td className="py-2 px-4 border-b">{contact.email}</td>
                <td className="py-2 px-4 border-b">{contact.phoneNumber}</td>
                <td className="py-2 px-4 border-b">{contact.company}</td>
                <td className="py-2 px-4 border-b">{contact.jobTitle}</td>
                <td className="py-2 px-4 border-b">
                  <button
                    onClick={() => handleEdit(index)}
                    className="text-blue-500 hover:text-blue-700 mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HomePage;