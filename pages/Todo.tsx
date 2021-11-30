import React from "react";
import { Card, Button } from "antd";

import { supabase } from "../lib/initSupabase";
import { Auth } from "@supabase/ui";

import { ITodo } from "@redux/store/todo/models/todo.model";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  removeTodo,
  toggleTodoStatus,
} from "@redux/store/todo/actions";
import { RootState } from "@redux/store/todo/reducers";
import { AddTodoForm } from "components/AddTodoForm";
import { TodoList } from "components/TodoList";
import { message } from "antd";

interface ITodosContainerProps {}

const Todo: React.FunctionComponent<ITodosContainerProps> = () => {
  const { user } = Auth.useUser();

  const todos: ITodo[] = useSelector((state: RootState) => state.todo.todos);

  const dispatch = useDispatch();

  const handleFormSubmit = (todo: ITodo): void => {
    dispatch(addTodo(todo));
    message.success("Todo added!");
  };

  const handleRemoveTodo = (todo: ITodo): void => {
    dispatch(removeTodo(todo));
    message.error("Todo removed!");
  };

  const handleToggleTodoStatus = (todo: ITodo): void => {
    dispatch(toggleTodoStatus(todo));
    message.info("Todo state updated!");
  };

  return (
    <>
      {user && (
        <div>
          <div className=" mt-4 p-4 flex justify-between w-full">
            <h1 className="w-full text-xl font-medium">Asva Todo test</h1>
            <Button
              onClick={async () => {
                const { error } = await supabase.auth.signOut();
                if (error) console.log("Error logging out:", error.message);
              }}
            >
              Log out
            </Button>
          </div>

          <div className="mt-8 px-4">
            <Card title="Create a new todo">
              <AddTodoForm onFormSubmit={handleFormSubmit} />
            </Card>

            <Card className="mt-4" title="Todo List">
              <TodoList
                todos={todos}
                onTodoRemoval={handleRemoveTodo}
                onTodoToggle={handleToggleTodoStatus}
              />
            </Card>
          </div>
        </div>
      )}
    </>
  );
};

export default Todo;
