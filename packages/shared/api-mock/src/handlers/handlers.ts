// @ts-nocheck

import { postAuthLoginHandler } from "./authController/postAuthLoginHandler";
import { postAuthRefreshHandler } from "./authController/postAuthRefreshHandler";
import { getCategoriesHandler } from "./categoriesController/getCategoriesHandler";
import { postCategoriesHandler } from "./categoriesController/postCategoriesHandler";
import { deleteTodosTodoidHandler } from "./todosController/deleteTodosTodoidHandler";
import { getTodosHandler } from "./todosController/getTodosHandler";
import { getTodosTodoidHandler } from "./todosController/getTodosTodoidHandler";
import { patchTodosTodoidToggleHandler } from "./todosController/patchTodosTodoidToggleHandler";
import { postTodosHandler } from "./todosController/postTodosHandler";
import { putTodosTodoidHandler } from "./todosController/putTodosTodoidHandler";

export const handlers = [
  getTodosHandler(),
  postTodosHandler(),
  getTodosTodoidHandler(),
  putTodosTodoidHandler(),
  deleteTodosTodoidHandler(),
  patchTodosTodoidToggleHandler(),
  getCategoriesHandler(),
  postCategoriesHandler(),
  postAuthLoginHandler(),
  postAuthRefreshHandler(),
] as const;
