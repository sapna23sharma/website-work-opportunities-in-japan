
document.addEventListener('DOMContentLoaded', function() {
  displayFeaturedJobs();
  // Featured jobs data
const featuredJobs = [
  { title: 'Software Engineer', company: 'Tech Co.', location: 'Tokyo', image: 'software_engineer.jpg' },
  { title: 'Marketing Manager', company: 'Marketing Inc.', location: 'Osaka', image: 'marketing_manager.jpg' },
  { title: 'English Teacher', company: 'Language School', location: 'Kyoto', image: 'english_teacher.jpg' }
];

// Function to display featured jobs
function displayFeaturedJobs() {
  const jobListContainer = document.getElementById('job-list');

  featuredJobs.forEach(job => {
      const jobElement = document.createElement('div');
      jobElement.classList.add('job');

      const jobImage = document.createElement('img');
      jobImage.src = job.image;
      jobImage.alt = job.title;

      const jobTitle = document.createElement('h3');
      jobTitle.textContent = job.title;

      const jobDetails = document.createElement('p');
      jobDetails.textContent = `${job.company} - ${job.location}`;

      jobElement.appendChild(jobImage);
      jobElement.appendChild(jobTitle);
      jobElement.appendChild(jobDetails);

      jobListContainer.appendChild(jobElement);
  });
}
// script.js

document.addEventListener('DOMContentLoaded', function() {
  const tabs = document.querySelectorAll('nav ul li a');
  const sections = document.querySelectorAll('section');

  // Function to hide all sections
  function hideAllSections() {
      sections.forEach(section => {
          section.style.display = 'none';
      });
  }

  // Function to show selected section
  function showSelectedSection(sectionId) {
      const selectedSection = document.getElementById(sectionId);
      selectedSection.style.display = 'block';
  }

  // Add click event listener to each tab
  tabs.forEach(tab => {
      tab.addEventListener('click', function(event) {
          event.preventDefault();
          const sectionId = this.getAttribute('href').substring(1); // Remove '#'
          hideAllSections();
          showSelectedSection(sectionId);
      });
  });

  // Show the home section by default
  showSelectedSection('home');
});

});
