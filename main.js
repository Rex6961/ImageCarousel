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

// Создаем элементы изображений с помощью класса ImageTag
const img1 = new ImageTag('img').createElem({'src': image[image.length - 1], 'alt': 'flowers'});
const img2 = new ImageTag('img').createElem({'src': image[0], 'alt': 'flowers'});
const img3 = new ImageTag('img').createElem({'src': image[1], 'alt': 'flowers'});
