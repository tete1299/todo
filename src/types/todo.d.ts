interface ITodoItemContent {
  content: string;
}
interface ITodoItem extends ITodoItemContent {
  id: string;
  complated: boolean;
  editing: boolean;
}
