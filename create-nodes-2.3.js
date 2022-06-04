

const arr = [
    {
    name: 'Google',
    url: 'https://google.com'
},
{
    name: 'Instagram',
    url: 'https://instagram.com'
},
{
    name: 'intocode',
    url: 'https://intocode.ru'
}, 

]

function render(arr) {
let ul = document.createElement('ul')
for (let i = 0; i < arr.length; i++) {
let li = document.createElement('li')
let link = document.createElement('a')
ul.append(li)
li.append(link)
link.textContent = arr[i].name
link.href = arr[i].url
document.body.prepend(ul)
}
}
console.log(render(arr));
