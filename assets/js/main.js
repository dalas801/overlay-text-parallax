
//scroll text overlay
let para=document.querySelectorAll('.text');
			let scrollt=false;
			var count=0;
			function progress(){
				scrollt=true;
				// count+=10;
			};
			function raf(){
				if(scroll){
					para.forEach((element,index)=>{
						element.style.transform='translateX('+window.scrollY/7+'px)';
						// console.log(window.scrollY/8);
						// if(count>300){
						// 	count=-700;
						// }
					});
					
					scrollt=false;
				}
				requestAnimationFrame(raf);
			};
			raf();
			window.addEventListener('scroll',progress);



			//circle move
				var current=0;
			var circle=document.getElementById("circle");
			function movecicrle(){
				
				circle.style.left=current+"px";
				current +=5;
				if(current>700)
				{
					current=-300;
				}
				requestAnimationFrame(movecicrle);
			}
      movecicrle();
      

      //scroll text overlay meeting
      