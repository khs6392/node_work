import Condition from "../Comp02_Condition";
import Book from "../Comp05_Book";
import Event from "../Comp03_Event";
import Effect from "../Comp07_EffectComponent";
import Board from "../BoardComponent";
import Customer from "../CustomerComponent";
import BoardList from "../BoardList";
import BoardInfo from "../BoardInfo";
import BoardInsert from "../BoardInsert";
import BoardUpdate from "../BoardUpdate";
let route = [
  {
    path: "/",
    element: <Condition />,
  },
  {
    path: "/board",
    element: <Board />,
  },
  {
    path: "/boardList",
    element: <BoardList />,
  },
  {
    path: "/boardInfo/:seq",
    element: <BoardInfo />,
  },
  {
    path: "/boardUpdate/:seq",
    element: <BoardUpdate />,
  },
  {
    path: "/boardInsert",
    element: <BoardInsert />,
  },
  {
    path: "/customer",
    element: <Customer />,
  },
  {
    path: "/book",
    element: <Book />,
  },
  {
    path: "/event",
    element: <Event />,
  },
  {
    path: "/effect",
    element: <Effect />,
  },
];
export default route;
