function TodoItem({ $target, initialState, ondelete, ontoggle }) {
    const $item = document.createElement('div');
    $target.appendChild($item);

    this.state = initialState;

    this.setState = (nextState) => {
        this.state = nextState;
        this.render();
    } 

    this.render = () => {
        const $li = document.createElement('li');
        $li.style.textDecoration = this.state.checked ? 'line-through' : 'none';
        $li.addEventListener("click", (e) => {
          if (e.target.classList.contains("delete-btn")) {
            const id = parseInt(e.target.dataset.id);
            ondelete(id);
          }
          if (e.target.classList.contains("toggle-btn")) {
            const id = parseInt(e.target.dataset.id);
            ontoggle(id);
          }
        });        

        $li.innerHTML = `
            <input class="toggle-btn" 
                    type="checkbox" ${this.state.checked ? "checked" : ""} 
                    data-id="${this.state.id}"
                    /> 
            <span>${this.state.id} - ${this.state.text}</span>
            <button class="delete-btn" data-id="${this.state.id}">X</button>
        `;
        $target.appendChild($li);
    };

    this.render();
}

export default TodoItem;