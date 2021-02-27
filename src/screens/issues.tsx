import {BoxContainer} from 'components/BoxContainer';
import {BoxHeader} from 'components/BoxHeader';
import {IssueListItem} from 'components/IssueListItem';
import {useParams} from 'react-router';
import {useIssuesList} from 'utils/issues-list';

export const Issues = () => {
  const {owner, repo} = useParams<{owner: string; repo: string}>();
  const {issues, error, isLoading, isError, isSuccess} = useIssuesList(owner, repo);

  return (
    <div>
      {isError ? <p>{error || 'Error processing your request'}</p> : null}
      {isLoading ? <p>Loading...</p> : null}
      {isSuccess ? (
        <BoxContainer>
          <BoxHeader>
            <details>
              <summary>Author</summary>
            </details>
          </BoxHeader>
          {(issues || []).map((issue) => (
            <IssueListItem key={issue.id} issue={issue} />
          ))}
        </BoxContainer>
      ) : null}
    </div>
  );
};
