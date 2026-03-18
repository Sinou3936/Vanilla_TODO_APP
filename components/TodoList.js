
import todoItem from "./TodoItem.js";
function TodoList({$target, initialState, ondelete, ontoggle}) {
    const $list = document.createElement('div');
    $target.appendChild($list);

    this.state = initialState;

    this.setState = (nextState) => {
        this.state = nextState;
        this.render();
    }

    this.render = () => {
        this.state = initialState;
        this.setState = (nextState) => {
            this.state = nextState;
            this.render();
        };

        this.render = () => {
            $list.innerHTML = '';
            const $ul = document.createElement('ul');
            this.state.forEach(item => {
                new todoItem({
                     $target: $ul, 
                     initialState: item, 
                     ondelete, 
                     ontoggle 
                });
            });
            $list.appendChild($ul);
        };
        this.render();
    }
    this.render();
}

export default TodoList;