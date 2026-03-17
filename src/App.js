import TodoForm from "../components/TodoForm.js";
import TodoHeader from "../components/TodoHeader.js";
import TodoList from "../components/TodoList.js";

function App({ $target }) {

    const initialState = [
        { id: 1, text: '할 일 1', checked: false },
        { id: 2, text: '할 일 2', checked: false },
        { id: 3, text: '할 일 3', checked: false }
    ];

    const $page = document.createElement('div');
    $target.appendChild($page);

    const header = new TodoHeader({ $target: $page });
    header.setstate("!!오늘의 할 일!!");


    const onSubmit = (todo) => {
        const lastId = list.state.length > 0 ? list.state[list.state.length - 1].id : 0;
        list.setState([
          ...list.state,
          { id: lastId + 1, text: todo, checked: false },
        ]);
        
    }

    const onDelete = (id) => {
        list.setState(list.state.filter(item => item.id !== id));
    }

    const onToggle = (id) => {
        list.setState(list.state.map(item => item.id === id ? { ...item, checked: !item.checked } : item));
    }

    new TodoForm({ $target: $page, onsubmit: onSubmit });
    const list = new TodoList({ $target: $page, initialState, ondelete: onDelete, ontoggle: onToggle });
    list.setState([...initialState]);
}

export default App;