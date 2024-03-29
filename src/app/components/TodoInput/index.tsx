import React from 'react';

import styled from 'styled-components';
const Box = styled.div`
  display: flex;
  padding: 15px 25px;
  width: 100% auto;
  font-size: 1.1em;
  border-bottom: 1px solid #eee;
`;
const Input = styled.input`
  width: 100%;
  border: none;
  outline: 0;
`;
export default function TodoInput({
  setTodoList,
}: {
  setTodoList: (todo: ITodoItem) => void;
}) {
  const [content, setContent] = React.useState<string>('');
  return (
    <Box>
      <Input
        placeholder="할일을 입력해 주세요"
        value={content}
        onChange={e => setContent(e.target.value)}
        onKeyPress={e => {
          if (content === '') return;
          if (e.key !== 'Enter' && e.key !== 'NumpadEneter') return;
          setTodoList({
            id: '0',
            content: content,
            complated: false,
            editing: false,
          });
          setContent('');
        }}
      />
    </Box>
  );
}
