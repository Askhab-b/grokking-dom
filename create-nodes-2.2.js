const ul = document.createElement('ul')

const arr = ['html', 'css', 'js']

function render(arr) {
for (let i = 0; i < arr.length; i++) {
let li = document.createElement('li')  
ul.append(li)
li.append(arr[i])
document.body.prepend(li)
}
}
console.log(render(arr));

