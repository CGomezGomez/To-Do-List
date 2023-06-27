import { useState } from 'react';
import { StyledBox, StyledCircle, StyledContainerAll, StyledContainerFilter, StyledContainerList, StyledFilter, StyledFilterBox, StyledInput, StyledList, StyledListText, StyledP, StyledTitle } from "./styles";

const initialTodoList = [
  {
    id: 1,
    text: 'Complete online JavaScript course',
    completed: false
  },
  {
    id: 2,
    text: 'Jog around the park 3x',
    completed: false
  },
  {
    id: 3,
    text: '10 minutes meditation',
    completed: false
  },
  {
    id: 4,
    text: 'Read for 1 hour',
    completed: false
  },
  {
    id: 5,
    text: 'Pick up groceries',
    completed: false
  },
  {
    id: 6,
    text: 'Complete Todo APP on Frontend Mentor',
    completed: false
  }
];

export const ContainerMain = ({ dark, setDark }) => {
  const [todoList, setTodoList] = useState(initialTodoList);
  const [filter, setFilter] = useState('All');

  const handleToggleComplete = (id) => {
    setTodoList(prevList =>
      prevList.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDark = () => {
    setDark(!dark);
  };

  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
  };

    const filteredTodoList = () => {
    if (filter === 'All') {
        return todoList;
    } else if (filter === 'Active') {
        return todoList.filter(todo => !todo.completed);
    } else if (filter === 'Complete') {
        return todoList.filter(todo => todo.completed);
    } else {
        return todoList;
    }
    };

  const getItemsLeftCount = () => {
    return todoList.filter(todo => !todo.completed).length;
  };

  return (
    <>
      <StyledContainerAll>
        <StyledTitle>
          <h1>T O D O</h1>
          <img
            onClick={handleDark}
            src={dark ? '../../images/icon-moon.svg' : '../../images/icon-sun.svg'}
            alt=""
          />
        </StyledTitle>

        <StyledBox dark={dark}>
          <StyledCircle type="checkbox" />
          <StyledInput dark={dark} type="text" placeholder="Create a new todo…" />
        </StyledBox>

        <StyledContainerList>
          {filteredTodoList().map(todo => (
            <StyledList key={todo.id} dark={dark}>
              <StyledCircle
                type="checkbox"
                onClick={() => handleToggleComplete(todo.id)}
              />
              <StyledListText dark={dark} completed={todo.completed}>
                {todo.text}
              </StyledListText>
            </StyledList>
          ))}
        </StyledContainerList>

        <StyledContainerFilter dark={dark}>
          <StyledP dark={dark}>{getItemsLeftCount()} items left</StyledP>
          <StyledFilter dark={dark}>
            <StyledFilterBox
              onClick={() => handleFilterChange('All')}
              active={filter === 'All'}
            >
              All
            </StyledFilterBox>
            <StyledFilterBox
              onClick={() => handleFilterChange('Active')}
              active={filter === 'Active'}
            >
              Active
            </StyledFilterBox>
            <StyledFilterBox
              onClick={() => handleFilterChange('Complete')}
              active={filter === 'Complete'}
            >
              Complete
            </StyledFilterBox>
            <StyledFilterBox>
              Clear Completed
            </StyledFilterBox>
          </StyledFilter>
        </StyledContainerFilter>
      </StyledContainerAll>
    </>
  );
};

export default ContainerMain;