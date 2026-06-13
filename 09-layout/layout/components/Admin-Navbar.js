export default function AdminNavbar() {
  return (
    <nav className="bg-slate-1000 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-xl font-bold">
          Admin Panel
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-6">
          <li>
            <a href="/admin/dashboard" className="hover:text-slate-300">
              Dashboard
            </a>
          </li>
          <li>
            <a href="/admin/users" className="hover:text-slate-300">
              Users
            </a>
          </li>
          <li>
            <a href="/admin/projects" className="hover:text-slate-300">
              Projects
            </a>
          </li>
          <li>
            <a href="/admin/settings" className="hover:text-slate-300">
              Settings
            </a>
          </li>
        </ul>

        {/* Admin Profile */}
        <div className="flex items-center gap-3">
          <img
            src="https://via.placeholder.com/40"
            alt="Admin"
            className="w-10 h-10 rounded-full"
          />
          <span className="hidden sm:block">Admin</span>
        </div>

      </div>
    </nav>
  );
}