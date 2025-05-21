// src/layouts/Layout.jsx
import ListMenu from './ListMenu';

export default function Layout({ children }) {
  return (
    <div className="flex">
      <aside className="w-64 bg-white h-screen p-4 shadow-md">
        <ListMenu />
      </aside>
      <main className="flex-1 p-6 bg-gray-50 overflow-auto">
        {children}
      </main>
    </div>
  );
}
