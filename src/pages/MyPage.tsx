import { useAuthStore } from "@/features/auth";
import { LuCircleUserRound } from "react-icons/lu";
import { BookmarkedMovies, LikedMovies, HiddenMovies } from "@/features/movie";
import { supabase } from "@/api";

export default function MyPage() {
    const session = useAuthStore();
    const userEmail = session.user?.email
    const userId = session.user?.id
    
  const { user, openModal } = useAuthStore();

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

    return (
        <div>
            <section className=" flex flex-col gap-4 p-4">
                <div className="flex flex-col items-center gap-4">
                    <LuCircleUserRound size={40} />
                    <div className='centralize gap-2 text-xs'>
          {user ? (
            <button onClick={handleLogout} className='button main-button h-8 w-20'>
              Sign Out
            </button>
          ) : (
            <>
              <button onClick={() => openModal('signin')} className='button main-button h-8 w-20'>
                Sign In
              </button>
              <button onClick={() => openModal('signup')} className='button main-button h-8 w-20'>
                Sign Up
              </button>
            </>
          )}
        </div>
                    <h1>{userId}</h1>
                    <p>{userEmail}</p>
                </div>
                <div>
                    <BookmarkedMovies />
                    <LikedMovies />
                    <HiddenMovies />
                </div>
            </section>
        </div>
    )
}