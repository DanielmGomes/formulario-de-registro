/*  --- Mask Function --- */
function mask(o,f){
	v_obj=o
	v_fun=f
	setTimeout("exMask()",1)
}
function exMask(){
	v_obj.value=v_fun(v_obj.value)
}
function mtel(v){
	v=v.replace(/\D/g,""); //remove everything I don't type
	v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //put parentheses around the first two digits
	v=v.replace(/(\d)(\d{4})$/,"$1-$2"); //hyphen between the fourth and fifth digits
	return v;
}
function id( el ){
	return document.getElementById( el );
}
window.onload = function(){
	id('phone').onkeyup = function(){
		mask( this, mtel );
	}
}

/* --- State & City Function --- */
/* --- search states and cities --- */
const state = document.querySelector('#state')
const city = document.querySelector('#city')
const wrapperCities = document.querySelector('#wrapper-cities')

const removeChild = (el) => {
	while (el.firstChild) {
		el.removeChild(el.firstChild);
	}
}

const hideElement = el => el.style.display = 'none'

const showElement = el => el.style.display = ''

city.disabled=true

state.addEventListener('change', e => {
    
	city.disabled = false
	removeChild(city)
	if(e.target.value === state.value){
		statesAndCities.map( data => {          
			data[e.target.value].map( cities => {
				const option = document.createElement("option")
				const value = option.value = cities;
				const text = option.text = cities;
				city.add(option);
			})
		})
	}
    
})


const statesAndCities = [{
	/* --- cities of state sao paulo */
	'sp': [
		'São Paulo',
		'Taubaté',
		'São José dos Campos'
	],
	
	/* --- cities of state rio de janeiro --- */
	'rj': [
		'Rio de Janeiro',
		'Arraial do Cabo',
		'Barra Mansa'
	],

	/* --- cities of state minas gerais --- */
	'mg': [
		'Belo Horizonte',
		'Baependi',
		'Caxambu'
	]
}]