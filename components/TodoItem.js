function TodoItem({ $target, initialState, ondelete, ontoggle }) {
    const $item = document.createElement('div');
    $target.appendChild($item);

    $item.addEventListener("click", (e) => {
      if (e.target.classList.contains("delete-btn")) {
        const id = parseInt(e.target.dataset.id);
        ondelete(id);
      }
    });

    $item.addEventListener("change", (e) => {
      if (e.target.type === "checkbox") {
        const id = parseInt(e.target.dataset.id);
        ontoggle(id);
      }
    });


    this.state = initialState;

    this.setState = (nextState) => {
        this.state = nextState;
        this.render();
    } 

    this.render = () => {
        const $item = document.createElement('li');
        $item.innerHTML = `
            <input type="checkbox" ${this.state.checked ? 'checked' : ''} data-id="${this.state.id}"/> 
            ${this.state.id} - ${this.state.text} 
            <button class="delete-btn" data-id="${this.state.id}">X</button>
        `;
        $target.appendChild($item);
    };

    this.render();
}

export default TodoItem;