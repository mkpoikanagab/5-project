const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bgs_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData(){
    header.innerHTML = '<img src="/ecommerce/image/download.jfif" alt="T-shirt"/>'
    title.innerHTML ='Lorem ipsum dolor sit amet'
    excerpt.innerHTML ='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, aperiam?'
    profile_img.innerHTML = '<img src="./image/IMG-20201204-WA0000.jpg" alt="">'
    name.innerHTML = 'Mkpoikana Gabriel'
    date.innerHTML = 'March 16 2022'

    animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
    animated_bgs_texts.forEach((bg ) => bg.classList.remove('animated-bg-text'))
}