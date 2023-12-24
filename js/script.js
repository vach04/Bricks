AddElem=function(select){
	let parent=document.querySelector('main');
	let div = document.createElement('div');
	switch (select.value) {
		case 'red':
			parent.appendChild(div).className='red';
			break;
		case 'blue':
			parent.appendChild(div).className='blue';
			break;
		case 'white':
			parent.appendChild(div).className='white';
			break;
		default:
			alert('ОШИБКА!');		
	}
}

RemoveElem=function(button){
	let arrElem=document.querySelectorAll('div');
	if (button.id==='brick' && arrElem.length!=0)
			arrElem[arrElem.length-1].remove();	
	else if (button.id==='wall')
		for (let elem of arrElem){
			elem.remove();
		}	
}


document.querySelector('body').addEventListener('click', function(event) {
  if (event.target.tagName.toLowerCase() === 'div') {
		if	(!event.target.style.borderRadius)
			event.target.style.borderRadius='50%';
		else event.target.style.borderRadius='';
  }
});




