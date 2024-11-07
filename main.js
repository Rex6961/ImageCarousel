// Массив с данными изображений
let image = [example1.jpg, example2.jpg,]; // Содержимое массива опущено для краткости, замените на настоящие данные.

// Класс для создания HTML тегов изображений
class ImageTag {
    constructor (tag) {
        this.tag = tag
    }

    // Метод для создания элемента с заданными атрибутами
    createElem = function (attributes={}) {
        const element = document.createElement(this.tag);
        Object.keys(attributes).forEach(attr => {
            element.setAttribute(attr, attributes[attr])
        });
        return element;
        
    }
};

// Добавляем div с таблицей для изображений в начало body
document.body.insertAdjacentHTML('afterbegin', 
    `<div id="customDiv">
        <table>
            <tr>
                <td id="img1"></td>
                <td id="img2"></td>
                <td id="img3"></td>
            </tr>
        </table>
    </div>`);

// Создаем элементы изображений с помощью класса ImageTag
const img1 = new ImageTag('img').createElem({'src': image[image.length - 1], 'alt': 'flowers'});
const img2 = new ImageTag('img').createElem({'src': image[0], 'alt': 'flowers'});
const img3 = new ImageTag('img').createElem({'src': image[1], 'alt': 'flowers'});

// Добавляем созданные изображения в соответствующие ячейки таблицы
document.querySelector('#img1').appendChild(img1);
document.querySelector('#img2').appendChild(img2);
document.querySelector('#img3').appendChild(img3);

// Добавляем кнопки "previous" и "next" в конец body
document.body.insertAdjacentHTML('beforeend',
    `<button type="button" id="previousBtn">previous</button><button type="button" id="nextBtn">next</button>`
);

