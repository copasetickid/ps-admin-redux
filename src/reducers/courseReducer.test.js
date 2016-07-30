import expect from 'expect';
import courseReducer from './courseReducer';
import * as actions from '../actions/courseActions';


describe('Course Reducer', () => {
  it('should add couse when passed CREATE_COURSE_SUCCESS', () => {
    //arrange
    const initalState = [
      {title: 'A'},
      {title: 'B'}
    ];

    const newCourse = { title: 'C' };

    const action = actions.createCourseSuccess(newCourse);

    //act
    const newState = courseReducer(initalState, action);

    //assert
    expect(newState.length).toEqual(3);
    expect(newState[0].title).toEqual('A');
    expect(newState[1].title).toEqual('B');
    expect(newState[2].title).toEqual('C');
  });

  it('should update when passed UPDATE_COURSE_SUCCESS', () => {
    //arrange
    const initalState = [
      {id: 'A', title: 'A'},
      {id: 'B', title: 'B'},
      {id: 'C', title: 'C'}
    ];

    const course = { id: 'B', title: 'New Title'};
    const action = actions.updateCourseSuccess(course);

    //act
    const newState = courseReducer(initalState, action);
    const updatedCourse = newState.find(a => a.id == course.id);
    const untouchedCourse = newState.find(a => a.id == 'A');

    //asset
    expect(updatedCourse.title).toEqual('New Title');
    expect(untouchedCourse.title).toEqual('A');
    expect(newState.length).toEqual(3);
  });
});
