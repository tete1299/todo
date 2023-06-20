import Block from 'app/components/Block';
import React from 'react';

import styled from 'styled-components';
import Checkbox from '../CheckBox';

const Box = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 25px;
  width: 100%;
  font-size: 1.2em;
  border-bottom: 1px solid #eee;
`;
const TodoContent = styled.span<{ checked: boolean }>`
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamep: 3;
  -webkit-box-orient: vertical;
  cursor: text;
  text-decoration: ${props => (props.checked ? 'line-through' : 'initial')};
  color: ${props => (props.checked ? '#aaa' : '#212121')};
`;
export default function TodoItem({ todo }: { todo: ITodoItem }) {
  return (
    <Box>
      <Checkbox checked={todo.complated} />
      <Block marginLeft="10px" />
      <TodoContent checked={todo.complated}>{todo.content}</TodoContent>
    </Box>
  );
}

//15:19 수강
