import { useState } from 'react';

const AddUserModal = ({ onClose, onSave }) => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Add New User</h2>
        <form onSubmit={handleSubmit}>
          <input name="firstName" className="input" placeholder="First Name" onChange={handleChange} required />
          <input name="lastName" className="input" placeholder="Last Name" onChange={handleChange} required />
          <input name="email" className="input" placeholder="Email" onChange={handleChange} required />
          <input name="phone" className="input" placeholder="Phone" onChange={handleChange} required />
          <input name="company" className="input" placeholder="Company" onChange={handleChange} />

          <div className="flex justify-end mt-4">
            <button type="button" className="mr-2 px-4 py-2 text-gray-600" onClick={onClose}>Cancel</button>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUserModal;
