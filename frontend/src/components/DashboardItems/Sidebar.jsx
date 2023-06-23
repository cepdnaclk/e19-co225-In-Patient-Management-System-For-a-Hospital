import React from 'react';

function Sidebar(props) {
  const { navigationItems } = props;

  return (
    <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-gray-700 border-r border-gray-200 sm:translate-x-0 dark:border-gray-700" aria-label="Sidebar">
      <div className="h-full px-3 pb-4 overflow-y-auto bg-gray-700">
        {/* Side Navigation Items */}
        <ul className="space-y-2 font-medium">
          {navigationItems.map((e) => (
            <li key={e[0]}>
              <a className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85]" style={{ cursor: 'pointer' }} >
                <span className="ml-3">{e[1]}</span>
                  {e[2]}
              </a>
            </li>
          ))}
        </ul>
        {/* Side Navigation items end */}
      </div>
    </aside>
  );
}

export default Sidebar;