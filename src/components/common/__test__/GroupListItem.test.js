
import React from 'react';
import { render } from '@testing-library/react';
import GroupListItem from '../GroupListItem';
import { BrowserRouter } from 'react-router-dom';

describe('GroupListItem', () => {
  const props = {
    name: 'Test Group',
    email: 'testgroup@example.com',
    imagePath: "https://cdn.tuk.dev/assets/templates/olympus/projects.png",
    joinDate: '01/01/2022',
    isCreated: true,
    isSelected: false,
    handleRowSelect: jest.fn(),
    key: 'test-group-1',
  };

  test('renders without crashing', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <GroupListItem {...props} />
      </BrowserRouter>
    );
    const groupListItem = getByTestId('groupListItemTest');
    expect(groupListItem).toBeInTheDocument();
  });
});
