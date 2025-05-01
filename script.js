let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};
var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    document.querySelectorAll(".toggleSwitch").forEach(toggle => {
        toggle.addEventListener("change", function () {
            const extraContent = this.closest(".card").querySelector(".extraContent");
            if (this.checked) {
                extraContent.style.display = "block"; // Show content
            } else {
                extraContent.style.display = "none"; // Hide content
            }
        });
    });
    
    const texts = [
        "Welcome to my website!",
        "I create awesome web designs.",
        "Check out my latest project.",
         "I hope you had a wonderful day.", 
         "Love what you do.",
          "Hard work pays off.",
          "Failure is an opportunity.",
          "And be good to yourself."
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    const speed = 100;
    const eraseSpeed = 50;
    const delayBetweenTexts = 1500;
    const target = document.getElementById("auto-type");
    
    function typeEffect() {
        if (charIndex < texts[textIndex].length) {
            target.textContent += texts[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeEffect, speed);
        } else {
            setTimeout(eraseEffect, delayBetweenTexts);
        }
    }
    
    function eraseEffect() {
        if (charIndex > 0) {
            target.textContent = texts[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(eraseEffect, eraseSpeed);
        } else {
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(typeEffect, speed);
        }
    }
    
    window.onload = () => {
        typeEffect();
    };
    
    
    