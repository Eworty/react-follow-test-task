import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  increaseFollowers,
  decreaseFollowers,
} from 'store/tweets/tweetsOperations';
import {
  selectFollowings,
  selectIsUpdating,
} from 'store/tweets/tweetsSelectors';
import { numberWithCommas } from 'common/utils';
import {
  Card,
  CardBody,
  CardFooter,
  Button,
  Image,
  Text,
  Center,
  Avatar,
} from '@chakra-ui/react';
import {
  cardStyles,
  btnStyles,
  txtStyles,
  logoStyles,
  lineStyles,
  circleStyles,
  avatarStyles,
} from 'common/styles';
import logo from 'images/goit-logo.png';
import bg from 'images/card-bg.png';
import line from 'images/avatar-line.png';
import circle from 'images/avatar-circle.png';

const UserCard = ({ userData }) => {
  const dispatch = useDispatch();
  const followings = useSelector(selectFollowings);
  const { status, id: updatingId } = useSelector(selectIsUpdating);
  const { id, user, avatar, tweets, followers } = userData;
  const isFollowing = followings.includes(id);
  const isUpdating = status && updatingId === id;

  const handleClick = () => {
    if (isFollowing) dispatch(decreaseFollowers({ id, followers }));
    else dispatch(increaseFollowers({ id, followers }));
  };

  return (
    <Card sx={cardStyles}>
      <Image src={logo} alt="GoIT logo" sx={logoStyles} />
      <Image src={line} alt="Card divider" sx={lineStyles} />
      <Image src={circle} alt="Avatar circle" sx={circleStyles} />
      <Avatar name={user} src={avatar} size="lg" sx={avatarStyles} />
      <CardBody p="0" mb="26px" textAlign="center">
        <Image src={bg} alt="Nice background" mb="88px" />
        <Text sx={txtStyles} mb="16px">
          {numberWithCommas(tweets)} tweets
        </Text>
        <Text sx={txtStyles}>{numberWithCommas(followers)} followers</Text>
      </CardBody>
      <CardFooter as={Center} p="0" textAlign="center">
        <Button
          onClick={handleClick}
          isLoading={isUpdating}
          className={isFollowing ? 'following' : ''}
          sx={btnStyles}
        >
          {isFollowing ? 'Following' : 'Follow'}
        </Button>
      </CardFooter>
    </Card>
  );
};

UserCard.propTypes = {
  userData: PropTypes.shape({
    id: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    tweets: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
  }).isRequired,
};

export default UserCard;
