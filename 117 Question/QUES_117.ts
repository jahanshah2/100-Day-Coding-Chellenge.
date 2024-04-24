function categorizeFruit(fruit: string): string{
    let category: string;
    switch (fruit.toLowerCase()) {
        case 'apple':
        case 'orange':
            category = 'Common Fruit'
            break;
        case 'banana':
        case 'grape':
            category = 'Tropical Fruit';
            break;
        case 'strawberry':
        case 'blueberry':
            category = 'Berry';
            break;
        default:
            category = 'Unknown Fruit';
            break;
        }
    return category;
}

const fruitCategory = categorizeFruit("Cherry");
console.log(`The fruit is categorized as: ${fruitCategory}`);
