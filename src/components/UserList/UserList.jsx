import { useSelector } from 'react-redux';
import { selectFilteredTweets } from 'store/tweets/tweetsSelectors';
import UserCard from 'components/UserCard/UserCard';
import { SimpleGrid, Center } from '@chakra-ui/react';

const UserList = () => {
  const users = useSelector(selectFilteredTweets);

  return (
    <SimpleGrid minChildWidth="380px" spacing="24px">
      {users.map(user => (
        <Center key={user.id}>
          <UserCard userData={user} />
        </Center>
      ))}
    </SimpleGrid>
  );
};

export default UserList;
