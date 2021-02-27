import {useQuery, UseQueryResult} from 'react-query';
import {client} from 'utils/client';

export type Label = {
  id: number;
  name: string;
  color: string;
};

export type User = {
  login: string;
  avatarUrl: string;
};

export type Issue = {
  id: number;
  number: number;
  comments: number;
  state: string;
  title: string;
  createdAt: string;
  user: User;
  assignee?: User;
  labels: Label[];
};

export type IssuesList = UseQueryResult<Issue[], Error> & {
  issues?: Issue[];
};

export function useIssuesList(owner: string, repo: string, page: number = 1): IssuesList {
  const result = useQuery<Issue[], Error>({
    queryKey: ['issueSearch', {owner, repo}],
    queryFn: () =>
      client<null, Issue[]>(`repos/${owner}/${repo}/issues?page=${page}`).then((issues) => issues),
  });
  return {...result, issues: result.data};
}
