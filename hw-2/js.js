const bos = window.prompt('Виберіть дію (додавання, віднімання, множення, ділення)');

let result, firstNumber, secondNumber;

    switch (bos){

        case 'додавання':
            firstNumber = prompt('Введіть перше число', 0);
            secondNumber = prompt('Введіть друге число', 0);
            result = Number(firstNumber) + Number(secondNumber);
             alert(`${firstNumber} + ${secondNumber} = ${result}`)
        break;

        case 'віднімання':
            firstNumber = prompt('Введіть перше число', 0);
            secondNumber = prompt('Введіть друге число', 0);
            result = Number(firstNumber) - Number(secondNumber);
            alert(`${firstNumber} - ${secondNumber} = ${result}`)
        break;

        case 'множення':
            firstNumber = prompt('Введіть перше число', 0);
            secondNumber = prompt('Введіть друге число', 0);
            result = Number(firstNumber) * Number(secondNumber);
            alert(`${firstNumber} * ${secondNumber} = ${result}`)
        break;

        case 'ділення':
            firstNumber = prompt('Введіть перше число', 0);
            secondNumber = prompt('Введіть друге число', 0);
            result = Number(firstNumber) / Number(secondNumber);
            alert(`${firstNumber} / ${secondNumber} = ${result}`)
        break;

        default:
        window.location.reload();
        break;
    }