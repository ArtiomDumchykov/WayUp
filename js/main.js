// const btn = document.getElementById("btn");
// console.log(btn);

// // btn.addEventListener("click", () => {
// //     let text = document.querySelector(".intro");
// //     // text.style.color = "red";
// //     text.classList.add("red");

// // })
// btn.onclick = (e) => {
//     e.preventDefault();
//     // let text = document.querySelector("p.intro");
//     // text.classList.add("red");
//     let img = document.querySelector(".desktop");
//     img.style.display = "none";

//     document.querySelector(".skill-free").style.marginLeft = "-50px";
// }

// --------------------------JQUERY-------------------------------
// $(function () {
//     $(window).scroll(function () {
//         $("#learn .section-title").each(function() {
//             let imgPos = $(this).offset().top;
    
//             let topOfWindow = $(window).scrollTop();
//             if(imgPos < topOfWindow+650) {
//                 $(this).addclass("fadeInLeft");
//             }
//         });
//     });
// });

$(function () {
	$(window).scroll(function() {
	    $('#learn .section-title').each(function(){
	        let imagePos = $(this).offset().top;

	        let topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInLeft");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.skill-free').each(function(){
	        let imagePos = $(this).offset().top;

	        let topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass('fadeInUp');
	        }
	    });
	});
})