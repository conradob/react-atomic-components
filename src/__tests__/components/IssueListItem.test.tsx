import {IssueListItem} from 'components/IssueListItem';
import {render, screen} from 'test-utils';
import {issuesFactory, labelFactory} from '../../test-factory';

test('should display properly', () => {
  const [issue] = issuesFactory({length: 1});

  render(<IssueListItem issue={issue} />);

  expect(screen.getByText(issue.title)).toBeInTheDocument();
  expect(screen.getByText(`#${issue.number}`)).toBeInTheDocument();
  expect(screen.getByText(`by ${issue.user.login}`)).toBeInTheDocument();
});

test('should display 1 day ago', () => {
  const oneDayAgoDate = new Date();
  oneDayAgoDate.setDate(oneDayAgoDate.getDate() - 1);
  const [issue] = issuesFactory({length: 1, createdAt: oneDayAgoDate.toISOString()});

  render(<IssueListItem issue={issue} />);

  expect(screen.getByText('opened 1 day ago')).toBeInTheDocument();
});

test('should display labels with proper colors', () => {
  const labels = labelFactory(3);
  const [issue] = issuesFactory({length: 1, labels});
  render(<IssueListItem issue={issue} />);
  const labelItems = screen.queryAllByText(/label/i);
  expect(labelItems).toHaveLength(labels.length);
  labelItems.forEach((item, index) => {
    expect(item).toHaveStyleRule('background-color', `#${labels[index].color}`);
  });
});
