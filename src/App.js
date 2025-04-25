import React from 'react';
import Button from './Button';
import Container from './Container';

function App() {
    const handleClick = () => {
        alert('Кнопка нажата!');
    };

    return (
        <div>
            <nav>
                <ul>
                    <li><a href="#home">Главная</a></li>
                    <li><a href="#about">О странице</a></li>
                    <li><a href="#contact">Контакты</a></li>
                </ul>
            </nav>
            <header>
                <Container>
                    <h1>Hello World</h1>
                    <Button label="Нажми на меня" onClick={handleClick} />
                </Container>
            </header>
        </div>
    );
}

export default App;
