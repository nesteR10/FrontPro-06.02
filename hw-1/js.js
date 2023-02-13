const bos = window.prompt('Виберіть дію (Додавання, Віднімання, Множення, Ділення)');

let result, firstNumber, secondNumber;

    switch (bos){

        case 'Додавання':
            firstNumber = prompt('Введіть перше число', 0);
            secondNumber = prompt('Введіть друге число', 0);
            result = Number(firstNumber) + Number(secondNumber);
             alert(`${firstNumber} + ${secondNumber} = ${result}`)
        break;

        case 'Віднімання':
            firstNumber = prompt('Введіть перше число', 0);
            secondNumber = prompt('Введіть друге число', 0);
            result = Number(firstNumber) - Number(secondNumber);
            alert(`${firstNumber} - ${secondNumber} = ${result}`)
        break;

        case 'Множення':
            firstNumber = prompt('Введіть перше число', 0);
            secondNumber = prompt('Введіть друге число', 0);
            result = Number(firstNumber) * Number(secondNumber);
            alert(`${firstNumber} * ${secondNumber} = ${result}`)
        break;

        case 'Ділення':
            firstNumber = prompt('Введіть перше число', 0);
            secondNumber = prompt('Введіть друге число', 0);
            result = Number(firstNumber) / Number(secondNumber);
            alert(`${firstNumber} / ${secondNumber} = ${result}`)
        break;

        default:
        window.location.reload();
        break;
    }