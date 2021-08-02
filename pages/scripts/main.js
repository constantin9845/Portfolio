const navBar = document.querySelector('.navigation_bar');
const landing_page = document.querySelector('.landing_page');
const projects_page = document.querySelector('.projects_page');
const about_page = document.querySelector('.about_page');
const contact_page = document.querySelector('.contact_page');
const profile_pic = document.querySelector('.profile_pic');
const skill = document.querySelector('.skills_grid');


const landing_page_options = { 
    rootMargin: "-200px 0px 0px 0px"
 }


const landing_page_observer = new IntersectionObserver(function(entries, landing_page_observer) {
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            anime({
                targets: '.side_tool',
                easing: 'easeOutExpo',
                translateX: '0px',
                opacity: 1,
                duration: 1500
            })
        } else{
            anime({
                targets: '.side_tool',
                easing: 'easeOutExpo',
                translateX: '-1000px',
                opacity: 0,
                duration: 1500
            })
        }
    })
}, landing_page_options);

landing_page_observer.observe(landing_page)


const about_page_options = { 
    rootMargin: "-200px 0px -200px 0px"
 }


const about_page_observer = new IntersectionObserver(function(entries, about_page_observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            profile_pic.classList.add("profile_pic_open");
            profile_pic.classList.remove("profile_pic");
            skill.classList.add('skills_grid_open');
            skill.classList.remove('skills_grid');
        } else{
            profile_pic.classList.remove("profile_pic_open");
            profile_pic.classList.add("profile_pic");
            skill.classList.remove('skills_grid_open');
            skill.classList.add('skills_grid');
        }
    })
}, about_page_options);

about_page_observer.observe(about_page)



const projects_page_options = { 
    threshold: 1
 }

const projects_page_observer = new IntersectionObserver(function(entries, projects_page_observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            if(screen_over_1450.matches){
                anime({
                    targets: '#projects_page_overlay',
                    easing: 'easeOutExpo',
                    translateY: '0px',
                    duration: 1500
                })
            }
            else{
                //
            }
            if(screen_less_1200.matches){
                anime({
                    targets: '#projects_page_overlay',
                    easing: 'easeOutExpo',
                    translateY: '-100px',
                    duration: 1500
                })
            }
            else{
                //
            }
            if(screen_less_1450.matches){
                anime({
                    targets: '#projects_page_overlay',
                    easing: 'easeOutExpo',
                    translateY: '40px',
                    duration: 1500
                })
            }
            else{
                //
            }
            document.querySelector('#projects_page_overlay').style.zIndex = '0';
            document.querySelector('.projects_page_links').style.zIndex = '2';
        }
    }), projects_page_options
});

projects_page_observer.observe(contact_page)


const contact_page_options = { 
    threshold: 1
 }

const contact_page_observer = new IntersectionObserver(function(entries, contact_page_observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            anime({
                targets: '#contact_page_overlay',
                easing: 'easeOutExpo',
                translateX: '0px',
                translateY: '100px',
                duration: 1500
            })
            
        } else{
            return
        }
    }, contact_page_options)
});

contact_page_observer.observe(contact_page)



// Wrap every letter in a span / name
var myName = document.querySelector('.name_span');
myName.innerHTML = myName.textContent.replace(/\S/g, "<span>$&</span>")

//hello
var hello = document.querySelector('.hello_span');
hello.innerHTML = hello.textContent.replace(/\S/g, "<span>$&</span>")

//hello
var webdev = document.querySelector('.webdev_span');
webdev.innerHTML = webdev.textContent.replace(/\S/g, "<span>$&</span>")



anime.timeline({
    loop: false
})
.add({
    targets: '#landing_page_fade_in',
    easing: 'easeOutExpo',
    translateY: '0px',
    duration: 2000
})
.add({
    targets: '.hello_span span',
    translateX: [-1000, 0],
    scale: [0.1, 1],
    easing: 'easeOutExpo',
    duration: 500,
    delay: anime.stagger(50)
})
.add({
    targets: '.name_span span',
    translateY: [-800, 0],
    scale: [0.1, 1],
    easing: 'easeOutExpo',
    duration: 500,
    delay: anime.stagger(50)
})
.add({
    targets: '.webdev_span span',
    scale: [0.1, 1],
    easing: 'easeOutExpo',
    duration: 1000,
})
.add({
    targets: explore_button,
    scale: [0.01, 1],
    easing: 'easeOutExpo',
    duration: 1000
})



// SKILLS SECTION - OPENING CARDS

const html_button = document.querySelector('#skill_html');
const js_button = document.querySelector('#skill_js');
const css_button = document.querySelector('#skill_css');
const node_button = document.querySelector('#skill_node');
const ux_button = document.querySelector('#skill_ux');
const git_button = document.querySelector('#skill_git');
const photo_button = document.querySelector('#skill_responsive');
const python_button = document.querySelector('#skill_python');
const c_button = document.querySelector('#skill_c');

const card_html = document.querySelector('#html_pop_up');
const card_js = document.querySelector('#js_pop_up');
const card_css = document.querySelector('#css_pop_up');
const card_node = document.querySelector('#node_pop_up');
const card_ux = document.querySelector('#ux_pop_up');
const card_git = document.querySelector('#git_pop_up');
const card_photo = document.querySelector('#photo_pop_up');
const card_python = document.querySelector('#python_pop_up');
const card_c = document.querySelector('#c_pop_up');

function openingCards(button,card){
    this.button = button;
    this.card = card;

    button.addEventListener('click' , function(){
        card.classList.add('skill_pop_up_clicked');
        card.classList.remove('skill_pop_up');
    })

    window.addEventListener('mouseup', function(event){
        card;
        if(event.target == card){
            return
        }
        else{
            card.classList.remove('skill_pop_up_clicked');
            card.classList.add('skill_pop_up');
        }
    })
}

openingCards(html_button,card_html);
openingCards(js_button,card_js);
openingCards(css_button,card_css);
openingCards(node_button,card_node);
openingCards(ux_button,card_ux);
openingCards(git_button,card_git);
openingCards(photo_button,card_photo);
openingCards(python_button,card_python);
openingCards(c_button,card_c);


// projects SECTION - preview CARDS

const sport_button = document.querySelector('#sport_button');
const mystery_button = document.querySelector('#mystery_button');

const sport_card = document.querySelector('#sport_card');
const mystery_card = document.querySelector('#mystery_card');

function openingPreview(button,card){
    this.button = button;
    this.card = card;

    button.addEventListener('click' , function(){
        document.querySelector('.side_tool').style.transform = 'translateX(-500px)';
        document.querySelector('.side_tool').style.opacity = '0';
        card.classList.add('project_preview_card_clicked');
        card.classList.remove('project_preview_card');
        card.classList.add('project_preview_card_clicked_slide');

        if(screen_less_1200.matches){
            document.querySelector('.projects_page_links').style.transform = 'translateX(1000px)';
            document.querySelector('.projects_page_links').style.opacity = '0';
            document.querySelector('.projects_page_links').style.transitionDuration = '1s';
        }
    })

    window.addEventListener('mouseup', function(event){
        card;
        if(event.target == card){
            return
        }
        else{
            card.classList.remove('project_preview_card_clicked');
            card.classList.add('project_preview_card');
            document.querySelector('.side_tool').style.transform = 'translateX(0px)';
            document.querySelector('.side_tool').style.opacity = '1';

            if(screen_less_1200.matches){
                document.querySelector('.projects_page_links').style.transform = 'translateX(0px)';
                document.querySelector('.projects_page_links').style.opacity = '1';
            }
        }
    })
}

openingPreview(sport_button,sport_card);
openingPreview(mystery_button,mystery_card);



// email js
function sendMail(params){
    var tempParams = {
        from_name: document.getElementById("fromName").value,
        from_email: document.getElementById("email").value,
        message: document.getElementById("msg").value
    };

    emailjs.send('gmail','template_yd806om',tempParams)
        .then(function(res){
            console.log("succes", res.status)
        })
}


// open email form

const question_button = document.querySelector('#question_button');

const question_card = document.querySelector('#question_card');
const close_button = document.querySelector('#close_button');

function openingQuestion(button,card){
    this.button = button;
    this.card = card;

    button.addEventListener('click' , function(){
        card.classList.add('contact_page_question_form_open');
        card.classList.remove('contact_page_question_form');

        if(screen_less_1200.matches){
            document.querySelector('.side_tool').style.transform = 'translateX(-500px)';
            document.querySelector('.side_tool').style.opacity = '0';
            document.querySelector('.side_tool').style.transitionDuration = '1s';
        }
    })

    window.addEventListener('mouseup', function(event){
        card;
        if(event.target != close_button){
            return
        }
        else{
            card.classList.remove('contact_page_question_form_open');
            card.classList.add('contact_page_question_form');

            if(screen_less_1200.matches){
                document.querySelector('.side_tool').style.transform = 'translateX(0px)';
                document.querySelector('.side_tool').style.opacity = '1';
                document.querySelector('.side_tool').style.transitionDuration = '1s';
            }
        }
    })
}

openingQuestion(question_button,question_card);


// responsive adjustments


// 1700 pixels
const screen_less_1702 = window.matchMedia('(max-width: 1702px)');
const screen_over_1702 = window.matchMedia('(min-width: 1702px)');
const screen_less_1450 = window.matchMedia('(max-width: 1450px)');
const screen_over_1450 = window.matchMedia('(min-width: 1450px)');
const screen_less_1200 = window.matchMedia('(max-width: 1200px)');

if(screen_less_1702.matches){
    document.querySelector('.explore_button_content').addEventListener('mouseover', function(){
        document.querySelector('#landing_page_image').style.transform = 'scale(1.3)';
    })
        
    document.querySelector('.explore_button_content').addEventListener('mouseleave', function(){
        document.querySelector('#landing_page_fade_in').style.transform = 'scale(1)';
        document.querySelector('#landing_page_image').style.transform = 'scale(1.2)';
    })
};

if(screen_less_1200.matches){
    document.querySelector('.explore_button_content').addEventListener('mouseover', function(){
        document.querySelector('#landing_page_image').style.transform = 'scale(1.9)';
    })
        
    document.querySelector('.explore_button_content').addEventListener('mouseleave', function(){
        document.querySelector('#landing_page_fade_in').style.transform = 'scale(1)';
        document.querySelector('#landing_page_image').style.transform = 'scale(1.7)';
    })
};

if(screen_over_1702.matches){
    document.querySelector('.explore_button_content').addEventListener('mouseover', function(){
    document.querySelector('#landing_page_image').style.transform = 'scale(1.1)';
})
        
document.querySelector('.explore_button_content').addEventListener('mouseleave', function(){
    document.querySelector('#landing_page_fade_in').style.transform = 'scale(1)';
    document.querySelector('#landing_page_image').style.transform = 'scale(1)';
    })
};