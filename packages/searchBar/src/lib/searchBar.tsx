import { useState } from 'react';

export const SearchBar = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`
      relative flex items-center max-w-xl mx-auto
      bg-white rounded-lg shadow-sm
      transition-all duration-300 ease-in-out
      ${isFocused ? 'shadow-lg ring-2 ring-blue-100' : 'hover:shadow'}
    `}>
      <input
        type="search"
        placeholder="Search Something..."
        className="
          w-full px-6 py-4
          text-gray-700 text-base
          bg-transparent
          border-0 outline-none
          placeholder:text-gray-400
          focus:ring-0
        "
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <button
        type="button"
        className="
          px-6 py-4
          text-gray-500
          hover:text-blue-600
          transition-colors
          duration-200
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          className="fill-current"
        >
          <path d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.39zM11 18a7 7 0 1 1 7-7 7 7 0 0 1-7 7z" />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
