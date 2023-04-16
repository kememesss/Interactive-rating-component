// const btn1 = document.querySelector('.btn1');
// const btn2 = document.querySelector('.btn2');
// const btn3 = document.querySelector('.btn3');
// const btn4 = document.querySelector('.btn4');
// const btn5 = document.querySelector('.btn5');
// const submit = document.querySelector('submit');

// btn1.addEventListener('click', () => {
//     btn1.style.backgroundColor = '#808080';
//     btn2.style.backgroundColor = '';
//     btn3.style.backgroundColor = '';
//     btn4.style.backgroundColor = '';
//     btn5.style.backgroundColor = '';
// });

// btn2.addEventListener('click', () => {
//     btn1.style.backgroundColor = '';
//     btn2.style.backgroundColor = '#808080';
//     btn3.style.backgroundColor = '';
//     btn4.style.backgroundColor = '';
//     btn5.style.backgroundColor = '';
// });

// btn3.addEventListener('click', () => {
//     btn1.style.backgroundColor = '';
//     btn2.style.backgroundColor = '';
//     btn3.style.backgroundColor = '#808080'
//     btn4.style.backgroundColor = '';
//     btn5.style.backgroundColor = '';
// })

// btn4.addEventListener('click', () => {
//     btn1.style.backgroundColor = '';
//     btn2.style.backgroundColor = '';
//     btn3.style.backgroundColor = '';
//     btn4.style.backgroundColor = '#808080';
//     btn5.style.backgroundColor = '';
// })

// btn5.addEventListener('click', () =>{
//     btn1.style.backgroundColor = '';
//     btn2.style.backgroundColor = '';
//     btn3.style.backgroundColor = '';
//     btn4.style.backgroundColor = '';
//     btn5.style.backgroundColor = '#808080';
// })


const buttons = document.querySelectorAll('.btn')

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => {
            btn.classList.remove('selected')
        })
        button.classList.add('selected')
        document.getElementById("outof").innerText = `You selected ${button.innerText} out of 5`
    })
})


// $(document).ready(function(){
//     $("#submit").click(function (){
//         $("#container2").css("z-index","2");
//     });
// });

window.addEventListener("load", () => {
    document.getElementById('submit').addEventListener("click", () =>{
        document.getElementById('container2').style.zIndex=2
    })
})

