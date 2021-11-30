import React from "react";
import { Tooltip, Tag, List, Button, Popconfirm, Switch } from "antd";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";

import { ITodo } from "@redux/store/todo/models/todo.model";

interface ITodoItemProps {
  todo: ITodo;
  onTodoRemoval: (todo: ITodo) => void;
  onTodoToggle: (todo: ITodo) => void;
}

export const TodoItem: React.FC<ITodoItemProps> = ({
  todo,
  onTodoRemoval,
  onTodoToggle,
}) => {
  return (
    <List.Item key={todo.id}>
      <div className="flex items-center justify-between w-full py-2">
        <Tag color={todo.completed ? "green" : "red"} className="font-semibold">
          {todo.name}
        </Tag>

        <div className="flex items-center gap-x-4 justify-center">
          <Tooltip
            title={todo.completed ? "Mark as uncompleted" : "Mark as completed"}
          >
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
              onChange={() => onTodoToggle(todo)}
              defaultChecked={todo.completed}
            />
          </Tooltip>

          <Popconfirm
            placement="topRight"
            title="Are you sure you want to delete?"
            onConfirm={() => {
              onTodoRemoval(todo);
            }}
          >
            <Tooltip placement="bottom" title="Remove Todo">
              <Button
                className="remove-todo-button"
                shape="circle"
                type="primary"
                danger
              >
                X
              </Button>
            </Tooltip>
          </Popconfirm>
        </div>
      </div>
    </List.Item>
  );
};
