import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMoreUsers } from 'store/tweets/tweetsOperations';
import {
  selectFollowings,
  selectPage,
  selectIsLoading,
} from 'store/tweets/tweetsSelectors';
import { selectFilter } from 'store/filter/filterSelector';
import { create } from 'common/toastCreator';
import { FILTER } from 'common/constants';
import { Button, useToast } from '@chakra-ui/react';
import { btnStyles } from 'common/styles';

const LoadMore = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const isLoading = useSelector(selectIsLoading);
  const filter = useSelector(selectFilter);
  const followings = useSelector(selectFollowings);
  const toast = useToast();
  const [limitReached, setLimitReached] = useState(false);

  const handleClick = async () => {
    const res = await dispatch(fetchMoreUsers(page)).unwrap();

    if (res.length < 3) {
      toast(create("You've reached the limit."));
      setLimitReached(true);
    }

    if (filter === FILTER.FOLLOWINGS) {
      if (res.some(el => followings.includes(el.id))) return;

      toast(
        create(
          'No followings found in this batch.',
          'Please try again or change the filter.'
        )
      );
    }

    if (filter === FILTER.FOLLOW) {
      if (!res.every(el => followings.includes(el.id))) return;

      toast(
        create(
          'No tweets to follow found in this batch.',
          'Please try again or change the filter.'
        )
      );
    }
  };

  if (limitReached) return null;

  return (
    <Button
      onClick={handleClick}
      isLoading={isLoading}
      mt="24px"
      className="load-more"
      sx={btnStyles}
    >
      Load More
    </Button>
  );
};

export default LoadMore;
