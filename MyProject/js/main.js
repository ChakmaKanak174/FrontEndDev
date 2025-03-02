// FAQ responsiveness

document.addEventListener('DOMContentLoaded', () => {
    const faqContainer = document.querySelector('.faq-content');
    faqContainer.addEventListener('click', (e) => {
        const groupHeader = e.target.closest('.faq-group-header');
        
        if (!groupHeader) return;

        const group = groupHeader.parentElement;
        const groupBody = group.querySelector('.faq-group-body');
        const icon = groupHeader.querySelector('i');

        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus');

        groupBody.classList.toggle('open');
        const groupss = faqContainer.querySelectorAll('.faq-group');
        
        groupss.forEach((g) => {
            if (g != group) {
                const groupssBody = g.querySelector('.faq-group-body');
                const ic = g.querySelector('.faq-group-header i');

                groupssBody.classList.remove('open')
                ic.classList.remove('fa-minus')
                ic.classList.add('fa-plus')
            }
        });
        
    });
});


// Mobile menu responsiveness

document.addEventListener('DOMContentLoaded', () => {
    const mobMenu = document.querySelector('.mobile-menu')
    const hamButton = document.querySelector('.hamburger-button')

    hamButton.addEventListener('click', () => mobMenu.classList.toggle('active'))

    document.addEventListener("click", (e) => {
        
        if (!hamButton.contains(e.target) && !mobMenu.contains(e.target))
        {
            mobMenu.classList.remove('active')
        }
        
    });

    

});