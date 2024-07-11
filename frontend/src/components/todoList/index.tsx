import React from "react";
import "./index.css";

type Props = {
  data: { id: number; title: string }[];
};

export default function TodoList({ data }: Props) {
  return (
    <ul className="todo-list">
      {data.map((item) => (
        <li key={item.id} className="todo-list__item">
          {item.title}
        </li>
      ))}
    </ul>
  );
}
