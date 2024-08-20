import React from 'react';

const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Pagination: React.FC = () => {
  return (
    <nav className="flex flex-wrap items-center justify-end gap-10 px-5 mt-4 w-full md:px-20" aria-label="Pagination">
      <div className="flex items-center gap-4 w-[368px] min-w-[240px]">
        <button className="w-6 p-0.5" aria-label="Previous page">
          <img
            loading="lazy"
            src="/icons/caret-left.svg"
            alt="Previous page"
          />
        </button>
        <div className="flex justify-between gap-1.5 flex-1 text-sm text-blue-800">
          {pages.map((page) => (
            <button
              key={page}
              className={`px-1 py-0.5 w-6 ${page === 1 ? 'text-blue-600 border-b border-blue-600' : ''}`}
              aria-current={page === 1 ? 'page' : undefined}
            >
              {page}
            </button>
          ))}
        </div>
        <button className="w-6 p-0.5" aria-label="Next page">
          <img
            loading="lazy"
            src="/icons/caret-right.svg"
            alt="Next page"
          />
        </button>
      </div>
      <div className="flex items-center gap-2 text-sm text-zinc-800">
        <label htmlFor="gotoPage">Go to page</label>
        <input
          type="text"
          id="gotoPage"
          className="w-9 h-9 px-3 bg-white border border-zinc-300 rounded"
          min="1"
          max="15"
          defaultValue="1"
        />
        <span>/ 15</span>
      </div>
    </nav>
  );
};

export default Pagination;
