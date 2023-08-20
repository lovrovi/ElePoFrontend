import { useQuery } from '@tanstack/react-query';
import axios from 'lib/api/axiosConfig';
import { isUserLoggedIn } from 'lib/helpers/isUserLoggedIn';

const getUserInfo = () => {
  return axios.get('/user/info');
};

function useGetUserInfo() {
  return useQuery({
    queryFn: getUserInfo,
    queryKey: ['getUserInfo'],
    select: (data) => data?.data,
    enabled: isUserLoggedIn(),
    // onError: () => window.location.reload(),
  });
}

export { useGetUserInfo };
