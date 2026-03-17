function TodoHeader({ $target }) {
    const $header = document.createElement('h1');
    $target.appendChild($header);

    this.state = "오늘 할 일";

    this.setstate = (nextState) => {
        this.state = nextState;
        this.render();
    }

    this.render = () => {
        $header.textContent = this.state;
    }
    this.render();
}

export default TodoHeader;