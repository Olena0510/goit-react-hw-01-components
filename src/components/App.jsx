import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { user, data, friends, transactions } from '../data/dataAll';
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";


export const App = () => {
  return (
    <>
      
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
      />
      

     
      <Statistics title="Upload stats" stats={data}
      />

      <FriendList friends={friends} />
    
      <TransactionHistory items={transactions} />
     </>
  );
};
