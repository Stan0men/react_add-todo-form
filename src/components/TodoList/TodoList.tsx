import { TodoInfo } from '../TodoInfo';
import { Todo, User } from '../../types';

interface Props {
  todos: Todo[];
  users: User[];
}

export const TodoList = ({ todos, users }: Props) => {
  return (
    <section className="TodoList">
      {todos.map(todo => {
        const user = todo.user ?? users.find(u => u.id === todo.userId);

        return <TodoInfo key={todo.id} todo={todo} user={user} />;
      })}
    </section>
  );
};
