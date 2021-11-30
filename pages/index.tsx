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

const TodosContainer: React.FunctionComponent<ITodosContainerProps> = () => {
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
      <div className="w-full h-screen flex justify-center mx-auto max-w-lg items-center p-4">
        <Auth
          supabaseClient={supabase}
          providers={["google", "github"]}
          socialLayout="vertical"
          socialButtonSize="xlarge"
        />
      </div>
    </>
  );
};

export default TodosContainer;
