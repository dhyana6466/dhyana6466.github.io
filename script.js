// Show only the selected section
function showSection(id) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
      section.classList.add('hidden');
    });
    document.getElementById(id).classList.remove('hidden');
  }
  
  // Toggle description for project
  function toggleProject(projectId) {
    const projectDetail = document.getElementById(projectId);
    projectDetail.style.display = projectDetail.style.display === 'block' ? 'none' : 'block';
  }
  