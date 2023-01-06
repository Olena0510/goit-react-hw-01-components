import { Profile } from "./Profile/Profile";
// import { Section } from "./Section/Section";
import { Statistics } from "./Statistics/Statistics";
import { user, data, friends, transactions } from '../data/dataAll';

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
    

     </>
  );
};
