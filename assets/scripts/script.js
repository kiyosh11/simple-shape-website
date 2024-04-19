 
        var hamburger = document.querySelector('.hamburger');
        var closeIcon = document.querySelector('.close');
        var navLinks = document.querySelector('.nav-links');

        hamburger.addEventListener('click', function() {
            navLinks.style.right = '0';
            closeIcon.style.display = 'block';
            hamburger.style.display = 'none';
        });

        closeIcon.addEventListener('click', function() {
            navLinks.style.right = '-250px';
            closeIcon.style.display = 'none';
            hamburger.style.display = 'flex';
        });

        function addAnimationToElements() {
            var elements = document.querySelectorAll('.animated');
            elements.forEach(function(element) {
                var rect = element.getBoundingClientRect();
                var windowHeight = window.innerHeight || document.documentElement.clientHeight;
                if (rect.top <= windowHeight * 0.8) {
                    element.classList.add('animate');
                }
            });
        }

        window.addEventListener('scroll', function() {
            addAnimationToElements();
        });

        addAnimationToElements();
    
