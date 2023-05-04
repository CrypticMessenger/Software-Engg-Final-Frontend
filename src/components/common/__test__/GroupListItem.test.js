
import React from 'react';
import { shallow, configure, mount, render } from 'enzyme';
import GroupListItem from '../GroupListItem';
import { BrowserRouter } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })
describe('GroupListItem', () => {
  const mockHandleRowSelect = jest.fn();
  const mockNavigate = jest.fn();
  const props = {
    name: 'Test Group',
    email: 'testgroup@example.com',
    imagePath: "https://cdn.tuk.dev/assets/templates/olympus/projects.png",
    joinDate: '01/01/2022',
    isCreated: true,
    isSelected: false,
    handleRowSelect: mockHandleRowSelect,
    key: 'test-group-1',
  };

  it('handles add member click', () => {
    const wrapper = mount(<GroupListItem {...props} />);
    // console.log(wrapper)
    // wrapper.find({'data-testid': "addMemberIcon"}).simulate('click');
    // expect(wrapper.state('isAddPeopleVisible')).toEqual(true);
  });

//   it('handles exit click', () => {
//     const wrapper = shallow(<BrowserRouter><GroupListItem {...props} /></BrowserRouter>);
//     const exitButton = wrapper.find('[title="Exit"]');
//     exitButton.simulate('click');
//     expect(wrapper.state('isExitVisible')).toEqual(true);
//   });

//   it('handles favorite click', () => {
//     const wrapper = shallow(<BrowserRouter><GroupListItem {...props} /></BrowserRouter>);
//     const favoriteButton = wrapper.find('[title="Add to Favorites"]');
//     favoriteButton.simulate('click');
//     expect(wrapper.state('isFavourite')).toEqual(true);
//   });

//   it('handles row select', () => {
//     const wrapper = shallow(<BrowserRouter><GroupListItem {...props} /></BrowserRouter>);
//     const checkbox = wrapper.find('#checkbox-table-search-2');
//     checkbox.simulate('change');
//     expect(mockHandleRowSelect).toHaveBeenCalled();
//   });

//   it('navigates to group info page', () => {
//     const wrapper = shallow(<BrowserRouter><GroupListItem {...props} /></BrowserRouter>);
//     const groupName = wrapper.find('[data-testid="groupName"]');
//     groupName.simulate('click');
//     expect(mockNavigate).toHaveBeenCalledWith('/group-info');
//   });
});
