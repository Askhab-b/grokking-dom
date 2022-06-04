const header = document.createElement('div')
const item_2 = document.createElement('ul')
const item_3 = document.createElement('li')
const item_4 = document.createElement('a')

const item_5 = document.createElement('li')
const item_6 = document.createElement('a')

item_4.textContent = 'Наш инстаграм'
item_4.href = 'https://instagram.com/intocode'

item_6.textContent = 'наш сайт'
item_6.href = 'https://intocode.ru'


header.append(item_2)
item_2.append(item_3) 
item_3.append(item_4)


item_2.append(item_5)
item_5.append(item_6)






document.body.append(header)