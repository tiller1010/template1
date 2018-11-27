function evaporate(element){
	i=1;
	let fader=setInterval(function(){
		element.style.opacity=i-0.1;
		i=i-0.1;
		if(i<0){
			i=0;
			clearInterval(fader);
			element.style.display='none';
		}
	},20);
}

function materialize(element){
	i=0;
	let fader=setInterval(function(){
		element.style.display='block';
		element.style.opacity=i+0.1;
		i=i+0.1;
		if(i>1){
			i=1;
			clearInterval(fader);
			currentPage=element;
		}
	},20);
}

const changePage=(target)=>{
	if(target!=currentPage){
		evaporate(currentPage);
		currentPage=target
		setTimeout(function(){
			materialize(currentPage);
		},400);
	}
}

const autoScroll=(scrolling)=>{
	if(scrolling==true){
		let scroller=setInterval(function(){
			i=pages.indexOf(currentPage);
			if(i==pages.length-1){
				changePage(home);
			}
			else{
				changePage(pages[i+1]);
			}
		},5000);
	}
}

window.onload=function(){

	setInterval(function(){
		if($(window).width()>770){
			$('#linkList').show();
		}
	},10);

	$(function(){
		$('#jq-menu').click(function(){
			$('#linkList').slideToggle(500);
		});
	});

	const home=document.getElementById('home');
	const next=document.getElementById('second');
	const third=document.getElementById('third');
	const fourth=document.getElementById('fourth');

	currentPage=home;
	pages=[home,next,third,fourth];
	
	const page1=document.getElementById('pg1');
	const page2=document.getElementById('pg2');
	const page3=document.getElementById('pg3');
	const page4=document.getElementById('pg4');
	
	page1.addEventListener('click',function(){
		changePage(home);
	});
	page2.addEventListener('click',function(){
		changePage(next);
	});
	page3.addEventListener('click',function(){
		changePage(third);
	});
	page4.addEventListener('click',function(){
		changePage(fourth);
	});
	
	autoScroll(true);
}