

    var random=Math.random();
    console.log(random);
    var numb=Math.floor(random*100)
    console.log(numb);
    let attempts=0

function myFunction() {
    let guess = parseInt(document.getElementById('number').value)
    var count=1;
//     this.img = document.createElement("img");
// this.img.src = "img/eqp/"+this.apparel+"/"+this.facing+"_idle.png";
// src = getElementById("gamediv");
// src.appendChild(this.img)
    
    // var number=Math.floor(random*100)
    console.log(count);
    if (isNaN(guess) || guess < 1 || guess > 100) {
        result.textContent = "Please enter a valid number between 1 and 100.";
    } else {
        attempts++;
        if (guess < numb) {
            result.textContent = "Too low! Try again.";
        } else if (guess > numb) {
            result.textContent = "Too high! Try again.";
        } else {
            this.img = document.createElement("img");
            this.img.classList.add("img1")
            this.img.src = "img1.jpg";
            src = document.getElementById("inp");
            src.appendChild(this.img)
            result.innerHTML = `<span style="color: red;">Congratulations! You've guessed the number ${numb} correctly!</span><br>It took you ${attempts} attempts to guess.`;
            document.getElementById('number').setAttribute('disabled', 'disabled');
        }
    }
}
    
  
