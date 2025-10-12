import { Logo, SearchInput } from '@/components/common';
import { ThemeToggle } from '@/components/common';
import { Link } from 'react-router-dom';
import { LuCircleUserRound } from 'react-icons/lu';
import { SearchButton, SearchModal } from '@/features/search';

export default function NavBar() {
  return (
    <header className='header fixed z-50 flex h-14 w-full items-center justify-between px-5 py-2 whitespace-nowrap'>
      <Logo />
      <div className='flex flex-1 items-center justify-end gap-4'>
        <SearchButton />
        <SearchModal />
        <SearchInput />
        <ThemeToggle />
        <Link to="/mypage">
          <LuCircleUserRound size={19} />
        </Link>
      </div>
    </header>
  );
}
