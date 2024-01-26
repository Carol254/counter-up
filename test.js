(()=>{
    const counter = document.querySelectorAll('.counter');

    const array = Array.from(counter);

    array.map((item) =>{
        let counterInnerText = item.textContent;

        let count = 1;
        let speed = item.dataset.speed/counterInnerText;

        function counterUp(){
            item.textContent = count ++;
            if(counterInnerText < count){
                clearInterval(stop);
            }
        }
        const stop = setInterval(()=>{
            counterUp();
        },speed);
    })
})();