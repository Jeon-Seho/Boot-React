import { lazy } from "react";

const TodoIndex = lazy(() => import("../pages/todo/indexPage"))

export default function todoRouter() {
    return {
        path: "todo",
        Component: TodoIndex,
    }
}
