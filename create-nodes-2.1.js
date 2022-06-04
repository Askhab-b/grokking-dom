const arr = ["html", "css", "js"]

let ul = document.createElement('ul')

for (let i = 0; i < arr.length; i++) {
let li = document.createElement('li')
li.append(arr[i]) 
ul.append(li)
}



document.body.append(ul)