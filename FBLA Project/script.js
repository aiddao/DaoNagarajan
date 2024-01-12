//List of partners of the CTE department
let partnersCTE = [
{'name' : 'NorthNec' , 'email' : 'helpdesk@zec.edu' , 'info' : 'CTE School <br> Offers CTE Student Programs for students to learn trade.'},
{'name' : 'Apprenticeships MRC' , 'email' : 'apprentices@mtnrc.com' , 'info' : 'Apprenticeship Finder <br> Helps students find local apprenticeships for trade jobs.'},
{'name' : 'UltraHealth' , 'email' : 'facilitytours@ultrahealth.org' , 'info' : 'Local Hospital <br> Offers tours for students with biomedical electives to learn about that field.'},
{'name' : 'Phoenix Institue of Technology' , 'email' : 'servicedesk@pit.edu' , 'info' : "Highly regarded college that specializes in technology. <br> Sponsors the engineering department's activities."},
{'name' : 'Southwest University of Advancing Technology' , 'email' : 'sp@suat.edu' , 'info' : 'College that specializes in the latest code advancements. <br> Recruits the high schoolers for college and offers presentations about the latest technology or jobs.'},
{'name' : 'Tech Innovators Corp', 'email' : 'info@techinnovators.com', 'info' : 'Leading technology company <br> Specializes in innovative solutions for education.'},
{'name' : 'BioTech Solutions Ltd', 'email' : 'contact@biotechsolutions.com', 'info' : 'Biotechnology firm <br> Committed to promoting STEM education through hands-on experiences.'},
{'name' : 'Engineering Dynamics Inc', 'email' : 'info@engdyn.com', 'info' : 'Engineering company <br> Passionate about fostering practical skills in students through mentorship programs.'},
{'name' : 'HealthCare Ventures Foundation', 'email' : 'foundation@healthcareventures.org', 'info' : 'Healthcare foundation <br> Dedicated to supporting healthcare education initiatives in collaboration with schools and CTE programs.'},
{'name' : 'GreenTech Innovations', 'email' : 'partnerships@greentechinno.com', 'info' : 'Sustainability-focused organization <br> Working with schools to integrate green technology into CTE curricula.'},
{'name' : 'Creative Arts Alliance', 'email' : 'info@creativeartsalliance.org', 'info' : 'Arts promotion organization <br> Enhancing creativity and innovation in CTE programs through partnerships with schools and the arts community.'},
{'name' : 'Finance Leaders Network', 'email' : 'network@financeleaders.org', 'info' : 'Finance professional network <br> Connecting schools with finance professionals to provide real-world insights and opportunities for CTE students.'},
{'name' : 'Manufacturing Excellence Group', 'email' : 'info@manufacturingexcellence.com', 'info' : 'Manufacturing expertise group <br> Supporting CTE programs with expertise in modern manufacturing practices and workforce development.'},
{'name' : 'Global Business Solutions', 'email' : 'contact@globalbizsolutions.com', 'info' : 'Global business partnership <br> Preparing students for global business challenges through mentorship and workshops.'},
{'name' : 'Digital Media Studios', 'email' : 'studios@digitalmedia.com', 'info' : 'Digital media collaboration <br> Collaborating with CTE programs to provide students with hands-on experience in digital media and design.'},
{'name' : 'Robotics Innovate Hub', 'email' : 'info@roboticshub.org', 'info' : 'Robotics advancement hub <br> Fostering a passion for robotics and automation among CTE students through workshops and mentorship.'},
{'name' : 'Cybersecurity Solutions Alliance', 'email' : 'alliance@cybersecuritysolutions.com', 'info' : 'Cybersecurity education alliance <br> Educating and training students in the field of cybersecurity and digital defense.'},
{'name' : 'Aviation Excellence Network', 'email' : 'network@aviationexcellence.com', 'info' : 'Aviation education collaboration <br> Collaborating with schools to provide aviation-focused education and mentorship opportunities for CTE students.'},
{'name' : 'Renewable Energy Ventures', 'email' : 'info@renewableenergyventures.com', 'info' : 'Renewable energy support <br> Supporting CTE programs with a focus on renewable energy solutions and sustainable practices.'},
{'name' : 'TechStart Foundation', 'email' : 'foundation@techstart.org', 'info' : 'Technology and entrepreneurship foundation <br> Empowering students with technology skills and entrepreneurship education through partnerships with CTE programs.'},
{'name' : 'Innovation Labs Network', 'email' : 'labs@innovationnetwork.com', 'info' : 'Innovation and creativity network <br> Fostering innovation and creativity in CTE programs by providing access to state-of-the-art innovation labs and resources.'},
{'name' : 'Data Science Hub', 'email' : 'hub@datascience.com', 'info' : 'Data science partnership <br> Partnering with schools to introduce students to the exciting world of data science through workshops and mentorship.'},
{'name' : 'HealthTech Collaborative', 'email' : 'collaborative@healthtech.org', 'info' : 'Healthcare technology collaboration <br> Advancing healthcare technology education by collaborating with CTE programs and providing real-world experiences.'},
{'name' : 'Entrepreneurial Ventures Association', 'email' : 'association@entrepreneurialventures.com', 'info' : 'Entrepreneurial skills support <br> Supporting CTE students in developing entrepreneurial skills and fostering a spirit of innovation.'},
{'name' : 'Environmental Sustainability Network', 'email' : 'network@sustainability.org', 'info' : 'Environmental sustainability collaboration <br> Collaborating with schools to promote environmental sustainability education and practices in CTE programs.'},
];

//Gets the div that holds all the cards
let orgCards = document.getElementById('organization-cards');

//Creates a card for each partner
for (var i = 0; i < partnersCTE.length; i++) {
    let card = document.createElement('div');
    card.classList.add('content');
    card.setAttribute('data-id' , i);
    
    let head = document.createElement('div');
    head.classList.add('header');
    head.innerText = partnersCTE[i].name;
    
    let email = document.createElement('div');
    email.classList.add('email');
    email.innerText = partnersCTE[i].email;
    
    let info = document.createElement('div');
    info.classList.add('body');
    info.innerHTML = partnersCTE[i].info;
    
    card.append(head, email, info);
    orgCards.appendChild(card);
    
};

let searchInput = document.getElementById("search");

//Creates a new array named 'partners'
let partners = partnersCTE.map(item => ({
  'name': item.name,
  'email': item.email,
  'info': item.info
}));

//Reads the inputs in the search bar and filters the information.
searchInput.addEventListener("input", e => {
    let value = e.target.value.toLowerCase(); // Convert input value to lowercase for case-insensitive comparison
    let filteredPartners = partners.filter(partner =>
        partner.name.toLowerCase().includes(value) ||
        partner.email.toLowerCase().includes(value) ||
        partner.info.toLowerCase().includes(value)
    );
    console.log(filteredPartners);
  
  // Loop through all content divs
  document.querySelectorAll('.content').forEach(card => {
    let cardId = card.getAttribute('data-id'); // Get the data-id attribute of the card
    let cardIncluded = filteredPartners.some(partner => partner.name.toLowerCase() === partnersCTE[cardId].name.toLowerCase());
    
    // Toggle the "hide" class based on inclusion in filteredPartners
    card.classList.toggle('hide', !cardIncluded);
  });
  
}); 

// Load edited content for each .content div whenever the page loads
window.onload = function() {
    document.querySelectorAll('.content').forEach(element => {
    const contentKey = getContentKey(element);
    const savedContent = localStorage.getItem(contentKey);
    if (savedContent) {
        element.innerHTML = savedContent;
    }
    });
    
    // Identifies the edit button and all content divs
    let editBtn = document.querySelector('#edit_content');
    let content = document.querySelectorAll('.content');
    
    //Adds a function to the edit button that makes content divs editable if they aren't and vice versa
    editBtn.addEventListener('click', () => {
    content.forEach(element => {
        const contentKey = getContentKey(element);
        element.contentEditable = !element.isContentEditable;
        
        if (!element.isContentEditable) {
        localStorage.setItem(contentKey, element.innerHTML);
        }
    });
    });
    
    function getContentKey(element) {
    // Get a unique identifier for each .content div
    return 'content_' + element.getAttribute('data-id');
    };
};
