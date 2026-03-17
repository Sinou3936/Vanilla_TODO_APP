function TodoForm({ $target, onsubmit }) {
    const $form = document.createElement('form');

    $target.appendChild($form);

    $target.addEventListener('submit', (e) => {
        e.preventDefault();
        const $input = $form.querySelector('input').value;
        
        if(!$input) return alert('할 일을 입력해주세요!');


        onsubmit($input);
        $form.querySelector('input').value = '';
    });

    this.render = () => {
        $form.innerHTML = `<input type="text" placeholder="할 일을 입력하세요"/><button>추가</button>`;
    };

    this.render();
    
}

export default TodoForm;