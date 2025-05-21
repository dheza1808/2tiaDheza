import React, { useState } from 'react';
import membersData from '../data/members.json';
import { CrownIcon, User, AlertCircle, Medal, Crown } from 'lucide-react';

const MembershipCheck = () => {
  const [email, setEmail] = useState('');
  const [member, setMember] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setError('');
    setMember(null);

    // Validasi email
    if (!email) {
      setError('Email tidak boleh kosong');
      return;
    }

    if (!validateEmail(email)) {
      setError('Format email tidak valid');
      return;
    }

    // Cek email di data member
    const foundMember = membersData.find(m => m.email.toLowerCase() === email.toLowerCase());
    setMember(foundMember);
  };

  // Render icon berdasarkan tipe member
  const renderMemberIcon = (tipe) => {
    switch (tipe) {
      case 'silver':
        return <Medal className="h-8 w-8 text-gray-400" />;
      case 'gold':
        return <Medal className="h-8 w-8 text-yellow-500" />;
      case 'platinum':
        return <Crown className="h-8 w-8 text-purple-600" />;
      default:
        return <User className="h-8 w-8" />;
    }
  };

  // Mendapatkan warna badge berdasarkan tipe member
  const getMemberBadgeColor = (tipe) => {
    switch (tipe) {
      case 'silver':
        return 'bg-gray-200 text-gray-700';
      case 'gold':
        return 'bg-yellow-100 text-yellow-800';
      case 'platinum':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center text-green-800 mb-6">Cek Keanggotaan</h2>
      
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
          <input
            type="text"
            id="email"
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 
              ${error ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-green-200'}`}
            placeholder="Masukkan email Anda"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error && isSubmitted && (
            <p className="text-red-500 text-sm mt-1">{error}</p>
          )}
        </div>
        <button 
          type="submit" 
          className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
        >
          Cek Status
        </button>
      </form>

      {isSubmitted && !error && (
        <div className={`p-4 rounded-lg ${member ? 'bg-green-50' : 'bg-red-50'}`}>
          {member ? (
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                {renderMemberIcon(member.tipe_member)}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold">Selamat datang, {member.nama}!</h3>
                <p className="mb-2">Anda adalah member dengan ID: {member.member_id}</p>
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getMemberBadgeColor(member.tipe_member)}`}>
                  Member {member.tipe_member.charAt(0).toUpperCase() + member.tipe_member.slice(1)}
                </span>
              </div>
            </div>
          ) : (
            <div className="flex items-center space-x-3">
              <AlertCircle className="h-6 w-6 text-red-500" />
              <p className="text-red-700">Email tidak terdaftar sebagai member.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MembershipCheck;