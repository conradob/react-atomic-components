import {useParams} from 'react-router';
import {useIssuesList} from 'utils/issues-list';

export const Issues = () => {
  const {owner, repo} = useParams<{owner: string; repo: string}>();
  const {issues, error, isLoading, isError, isSuccess} = useIssuesList(owner, repo);

  return (
    <div>
      {isError ? <p>{error || 'Error processing your request'}</p> : null}
      {isLoading ? <p>Loading...</p> : null}
      {isSuccess ? (issues || []).map((el) => <p key={el.id}>{el.title}</p>) : null}
    </div>
  );
};
