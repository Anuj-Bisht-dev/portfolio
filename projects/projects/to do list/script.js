let input_box = document.getElementById('context');

let upper_tick_btn = document.getElementsByClassName('upper_btn1')[0];

let div_storage = document.getElementsByClassName('lower_output')[0];

let clear_btn = document.getElementsByClassName('clear_btn')[0];


upper_tick_btn.addEventListener("click", () => {
    if (input_box.value == '') {
        alert('Enter the text');
    }
    else {
        const upper_div = document.createElement('div');
        div_storage.appendChild(upper_div);
        const create_div = document.createElement("div");
        create_div.classList.add('create_div');
        create_div.innerHTML = input_box.value;
        upper_div.appendChild(create_div);
        input_box.value = '';

        const tick_image = document.createElement('img');
        tick_image.src = '/projects/projects/to do list/image/tick.png';
        tick_image.setAttribute('id', 'div_tick_btn');
        
        const remove_image = document.createElement('img');
        remove_image.src = '/projects/projects/to do list/image/remove.png';
        remove_image.setAttribute('id', 'div_remove_btn');
        
        const delete_image = document.createElement('img');
        delete_image.src = '/projects/projects/to do list/image/delete.png';
        delete_image.setAttribute('id', 'div_delete_btn');

        upper_div.appendChild(tick_image);
        upper_div.appendChild(remove_image);
        upper_div.appendChild(delete_image);

        tick_image.addEventListener('click', () => {
            create_div.style.background = 'rgba(0, 255, 0, 0.5)';
        })

        remove_image.addEventListener('click', () => {
            create_div.style.background = 'rgba(255, 0, 0, 0.3)';
        })

        delete_image.addEventListener('click', () => {
            upper_div.remove('div');
        })
    }
});

clear_btn.addEventListener('click', ()=>{
    div_storage.innerHTML = '';
});




// let upper_btn1_input = document.getElementById("context");

// let lower_output_class = document.getElementsByClassName("lower_output")[0];

// // here use .value to change the context inside a input box
// function onclick_upper_btn1() {
//     upper_btn1_input.value = "";
// }

// function onclick_upper_btn2() {
//     let content = upper_btn1_input.value;

//     // here use insertAdjecentHTML for inserting multiple divs 
//     lower_output_class.insertAdjacentHTML("afterbegin", `<div class = btn_class>${content}</div>`);
// }


// // for clearing all divs
// let clear_input = document.getElementsByClassName("clear_btn")[0];
// function onclick_clear_btn() {
//     lower_output_class.innerHTML = " ";
// }

// // btn inside the div which gives color to task
// function tick_right() {
//     let input_box = document.getElementsByClassName("btn_class")[0];

//     let tick_img = `<button class = "lower_tick_btn1" onclick = "onclick_tick_btn()" >
//         <img src = /image/tick.png width= "16px">
//     </button>`

//     let remove_img = `<button class = "lower_tick_btn2" onclick = "onclick_remove_btn()">
//         <img src = /image/remove.png width= "15px">
//     </button>`

//     input_box.insertAdjacentHTML("beforeend", `<span>${tick_img}</span>`);
//     input_box.insertAdjacentHTML("beforeend", `<span>${remove_img}</span>`);
// }

// function onclick_tick_btn() {
//     // queryselectorall selected all divs of class lower_output
//     let all_divs = document.querySelectorAll(".lower_output div");
//     // here forEach aplling function for each div 
//     all_divs.forEach(function (div) {
//         div.addEventListener("click", function () {
//             div.style.background = "rgba(0, 255, 0, 0.5)";
//         });
//     });
// }

// function onclick_remove_btn() {
//     let all_divs = document.querySelectorAll(".lower_output div");
//     all_divs.forEach(function (div) {
//         div.addEventListener("click", function () {
//             div.style.background = "rgba(240, 96, 24, 0.45)";
//         });
//     });
// }