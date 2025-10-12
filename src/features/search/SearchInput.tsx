import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useSearchStore } from './store';
import { useDebounce } from './hooks';

export function SearchButton() {
  const {openSearchModal} = useSearchStore();

  return (
    <button onClick={openSearchModal} className='sm:hidden p-2'>
      <FaSearch size={16} />
    </button>
  )
}

export function SearchModal() {
  const { searchTerm, setSearchTerm, isOpenSearchModal, closeSearchModal, resetSearch } = useSearchStore();
  const navigate = useNavigate();
  const location = useLocation();

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm && location.search !== `?${debouncedSearchTerm}`) {
      navigate(`/search?q=${debouncedSearchTerm}`);
    }
  }, [debouncedSearchTerm, navigate, location.search]);

  if (!isOpenSearchModal) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-start justify-center bg-black/50'>
      <div className='mt-14 bg-white w-full p-3 rounded-md'>
      <div className='relative flex'>
      <FaSearch className='absolute top-2 left-2' size={16} />
      <input
        type='text'
        className='input flex h-8 flex-1 pl-7 focus:border-b'
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
        autoFocus
      />
      <button onClick={() => { closeSearchModal(); resetSearch(); }} className='ml-2'>
      ✕
      </button>
    </div>
      </div>
    </div>
  );
}


export function SearchInput() {
  const {searchTerm, setSearchTerm} = useSearchStore();
  const navigate = useNavigate();
  const location = useLocation();

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm && location.search !== `?${debouncedSearchTerm}`) {
      navigate(`/search?q=${debouncedSearchTerm}`);
    }
  }, [debouncedSearchTerm, navigate, location.search]);

  return (
    <div className='hidden relative mx-4 sm:flex sm:flex-1'>
      <FaSearch className='absolute top-2 left-2' size={16} />
      <input
        type='text'
        className='input flex h-8 flex-1 pl-7 focus:border-b'
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
    </div>
  );
}
