import { useState, useEffect } from 'react';
import TableUser from '../components/TableUser';
import AddUserModal from '../components/AddUserModal';

const UserPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://dummyjson.com/users');
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
        setUsers(data.users || []);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const handleAddUser = (newUser) => {
    const fakeId = users.length + 1;
    const userWithId = { ...newUser, id: fakeId };
    setUsers([userWithId, ...users]);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">User Management</h1>

      {loading && (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          <strong className="font-bold">Error:</strong> <span>{error}</span>
        </div>
      )}

      {!loading && !error && (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-lg font-semibold">User List</h2>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
              onClick={() => setShowModal(true)}
            >
              Add New User
            </button>
          </div>

          <TableUser users={users} />

          {users.length === 0 && (
            <div className="py-8 text-center text-gray-500">No users found</div>
          )}
        </div>
      )}

      {showModal && (
        <AddUserModal onClose={() => setShowModal(false)} onSave={handleAddUser} />
      )}
    </div>
  );
};

export default UserPage;
