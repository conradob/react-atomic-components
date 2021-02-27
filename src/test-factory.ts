import {Issue, Label, User} from './utils/issues-list';

export type IssueFactory = {
  length?: number;
  comments?: number;
  createdAt?: string;
  state?: string;
  user?: User;
  assignee?: User;
  labels?: Label[];
};

export const labelFactory = (length = 3): Label[] =>
  [...new Array(length)].map((_, index) => ({
    id: index,
    name: `Label ${index}`,
    color: `${`${index}`.repeat(6).substr(0, 6)}`,
  }));

export const userFactory = (login: string, avatarUrl: string): User => ({login, avatarUrl});

export const issuesFactory = ({
  length = 10,
  comments = 0,
  state = 'open',
  user = userFactory('User Test', 'http://avatarurl'),
  assignee,
  createdAt = '2021-02-27T12:21:57Z',
  labels = [],
}: IssueFactory): Issue[] =>
  [...new Array(length)].map((_, index) => ({
    id: index,
    number: index,
    comments,
    state,
    title: `Issue ${index}`,
    createdAt,
    user,
    assignee,
    labels,
  }));
