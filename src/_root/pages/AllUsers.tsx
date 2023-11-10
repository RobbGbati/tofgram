import UserCard from '@/components/shared/UserCard';
import { useToast } from '@/components/ui/use-toast';
import { useGetAllUsers } from '@/lib/react-query/queriesAndMutations'
import { Models } from 'appwrite';
import { Loader } from 'lucide-react';

const AllUsers = () => {
  const { toast } = useToast();

  const { data: users, isLoading: isUserLoading, isError} = useGetAllUsers();

  if (isError) {
    toast({title: "Something went wrong."});
    return;
  }

  return (
    <div className="common-container">
        <div className="user-container">
          <h2 className="h3-bold md:h2-bold text-left w-full">All users</h2>
          {isUserLoading && !users ? (
            <Loader />
            ) : (
              <ul className='flex flex-col flex-1 gap-9 w-full'>
                {users?.documents.map((user: Models.Document) => (
                  <li  key={user.$id} className='flex-1 min-w-[200px] w-full'>
                    <UserCard user={user}/>
                  </li>
                ))}
              </ul>
            )}
        </div>
      </div>
  )
}

export default AllUsers