const item_1 = document.createElement('div')
const item_2 = document.createElement('div')
const item_3 = document.createElement('div')
const item_4 = document.createElement('p')


item_1.style.color = "red"
item_2.style.color = "green"
item_3.style.color = "blue"

item_4.textContent = 'Я вложен'

item_1.append(item_2)
item_2.append(item_3)
item_3.append(item_4)


document.body.append(item_1)

