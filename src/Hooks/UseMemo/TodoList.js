import { useMemo } from 'react';

export default function TodoList() {
  const visibleTodos = useMemo(
    () => <div>hi</div>,
    []
  );
  return (
    <div >
      <p>{visibleTodos}</p>
     
    </div>
  );
}