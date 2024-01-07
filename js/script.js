window.addEventListener('load', function () {
    document.querySelector('.preloader').classList.add('opacity-0');

    setTimeout(() => {
        document.querySelector('.preloader').style.display = 'none';
    }, 1000)
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

for (let i = 0; i < totalFilterBtn; i++) {
    filterBtns[i].addEventListener('click', function () {
        filterContainer.querySelector('.active').classList.remove('active');
        portfolioItems[i].classList.add('active');
        for (let j = 0; j < totalSection; j++) {
            allSection[j].classList.remove('active');
        }
        if(i === 0){
            document.querySelector('#home').classList.add('active');
        }

    });
}


