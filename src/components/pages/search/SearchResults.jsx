import { useLocation } from 'react-router-dom';
import { getSearchResults } from '../../../common/hooks/api/search';

const results = {
  data: [],
  meta: [],
};

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q');
  const { articles } = getSearchResults(query);
  return <div>Body</div>;
};

export default SearchResults;
