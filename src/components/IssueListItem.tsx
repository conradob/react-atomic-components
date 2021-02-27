import {Comment, IssueOpened} from '@styled-icons/octicons';
import {formatDistanceToNow} from 'date-fns';
import styled from 'styled-components';
import {Issue} from 'utils/issues-list';

interface Props {
  issue: Issue;
}

const IssueContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 10px;
  border-bottom: 1px solid ${(props) => props.theme.colors.borderMain};
  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.colors.boxBackground};
  }
  & > div {
    padding: 0 5px;
  }
  & > svg {
    max-height: 18px;
  }
`;

const IssueOpenedIcon = styled(IssueOpened)`
  color: ${(props) => props.theme.colors.main};
  width: 16px;
  height: 16px;
`;

const IssueDetails = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
`;

const IssueTitle = styled.div`
  font-weight: 700;
  display: flex;
  flex-wrap: wrap;
  & .text {
    margin-right: 10px;
    margin-bottom: 5px;
  }
`;

const IssueMeta = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.secondary};
  padding-right: 5px;
  & > div {
    display: inline-block;
    margin-right: 5px;
  }
`;

const IssueAssignees = styled.div`
  position: relative;
  & > img {
    position: absolute;
    left: -24px;
    border-radius: 50%;
    width: 20px;
  }
`;

const IssueComments = styled.div`
  min-width: 50px;
  color: ${(props) => props.theme.colors.secondary};
  display: flex;
  font-size: 12px;
  font-weight: 500;
  & > svg {
    width: 16px;
    height: 16px;
  }
  & > .counter {
    padding-left: 5px;
  }
`;

const IssueLabel = styled.div<{backgroundColor: string}>`
  padding: 0 7px;
  line-height: 18px;
  font-size: 12px;
  font-weight: 500;
  border-radius: 2px;
  margin: 5px 5px 0 0;
  white-space: nowrap;
  border-radius: 2em;
  background-color: #${(props) => props.backgroundColor};
`;

export const IssueListItem = ({issue}: Props) => (
  <IssueContainer id={`issue_${issue.id}`} key={issue.id}>
    <div>
      <IssueOpenedIcon />
    </div>
    <IssueDetails>
      <IssueTitle>
        <div className="text">{issue.title}</div>
        {issue.labels.map((label) => (
          <IssueLabel id={`label_${label.id}`} key={label.id} backgroundColor={label.color}>
            {label.name}
          </IssueLabel>
        ))}
      </IssueTitle>
      <IssueMeta>
        <div>#{issue.number}</div>
        <div>opened {formatDistanceToNow(new Date(issue.createdAt), {addSuffix: false})} ago</div>
        <div>by {issue.user.login}</div>
      </IssueMeta>
    </IssueDetails>
    <IssueAssignees>
      <img alt={issue.assignee?.login} src={issue.assignee?.avatarUrl} />
    </IssueAssignees>
    {Boolean(issue.comments) && (
      <IssueComments aria-label={`${issue.comments} comment${issue.comments > 1 ? 's' : ''}`}>
        <Comment />
        <div className="counter">{issue.comments}</div>
      </IssueComments>
    )}
  </IssueContainer>
);
