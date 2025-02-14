// Faq Accordion

document.addEventListener('DOMContentLoaded', () => {
    const faqContainer = document.querySelector('.faq-content'); //queryselector selects the class name from the html conent classes.


    //Here e is the event click and .target returns the class name of the item clicked
    faqContainer.addEventListener('click', (e) => {
        const groupHeader = e.target.closest('.faq-group-header');
        if(!groupHeader) return;

        //The line below brings the parent class of the groupHeader
        const group = groupHeader.parentElement;


        const groupBody = group.querySelector('.faq-group-body')
        const icon = groupHeader.querySelector('i')

        //toggle icon

        icon.classList.toggle('fa-plus')
        icon.classList.toggle('fa-minus')

        //Toggle visibility of body

        groupBody.classList.toggle('open')

        //Close other faq bodies when I click on a new faq

        const otherGroups = faqContainer.querySelectorAll('.faq-group')
        
        otherGroups.forEach( (otherGroup) => {
            
            
            if(otherGroup != group) {

                const otherGrupBody = otherGroup.querySelector('.faq-group-body')
                
                // inside the query selector i can write the class names just like I can write in the CSS file
                const otherIcon = otherGroup.querySelector('.faq-group-header i')


                otherGrupBody.classList.remove('open')
                // Here toogle doesnt work because toggle works for both removing and adding. 
                otherIcon.classList.remove('fa-minus')
                otherIcon.classList.add('fa-plus')
            }


        });
    })
})


//Mobile-menu

document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.hamburger-button')
    const mobileMenu = document.querySelector('.mobile-menu')


    hamburgerButton.addEventListener('click', () => mobileMenu.classList.toggle('active'))

})
