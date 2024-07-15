window.addEventListener('load', function () {
    document.querySelector('.preloader').classList.add('opacity-0');

    setTimeout(() => {
        document.querySelector('.preloader').style.display = 'none';
    }, 1000);
});

// Portfolio Item Filter
const filterContainer = document.querySelector('.portfolio-filter'),
    filterBtns = filterContainer.children,
    totalFilterBtn = filterBtns.length,
    portfolioItems = document.querySelectorAll('.portfolio-item'),
    totalPortfolioItem = portfolioItems.length;

// Aside Navbar
const nav = document.querySelector('.nav'),
    navList = nav.querySelectorAll('li'),
    totalNavList = navList.length,
    allSection = document.querySelectorAll('.section'),
    totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector('a');
    a.addEventListener('click', function () {
        // Remove active class from all navigation items
        for (let j = 0; j < totalNavList; j++) {
            navList[j].querySelector('a').classList.remove('active');
        }
        // Add active class to the clicked navigation item
        this.classList.add('active');

        // Remove active class from all sections
        for (let k = 0; k < totalSection; k++) {
            allSection[k].classList.remove('active');
        }
        // Add active class to the corresponding section
        const target = this.getAttribute('href').split('#')[1];
        document.querySelector(`#${target}`).classList.add('active');
    });
}
