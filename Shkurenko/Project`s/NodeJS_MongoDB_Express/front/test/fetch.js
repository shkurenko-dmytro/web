//import { response } from "express";

let a = document.getElementsByTagName('html')

const btn = document.querySelector('button')
const reqURL = "";

btn.addEventListener('click', (event) => {
  async function reque(){
    const response = await fetch('/api/testIndex')
  //await console.log(response.headers)
 //window.location.href = response.url  
 //await response.formData()
 console.log(a)
  a.innerHTML = 'deffw4'
}
 reque()

})

