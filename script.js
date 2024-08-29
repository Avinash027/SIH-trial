// Toggle the sidebar section visibility
function showSection(id) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = (section.id === id) ? 'block' : 'none';
    });
}

// Toggle the dropdown menu
function toggleDropdown() {
    document.getElementById('dropdown-content').classList.toggle('show');
}

// Set language and update page content
function setLanguage(lang) {
    fetch(`./${lang}.json`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('site-title').innerText = data['site-title'];
            document.getElementById('dashboard-title').innerText = data['dashboard-title'];
            document.getElementById('company-name').innerText = data['company-name'];
            document.getElementById('application-date').innerText = data['application-date'];
            document.getElementById('deadline').innerText = data['deadline'];
            document.getElementById('next-round-date').innerText = data['next-round-date'];
            document.getElementById('status').innerText = data['status'];
            document.getElementById('profile-title').innerText = data['profile-title'];
            document.getElementById('profile-name').innerText = data['profile-name'];
            document.getElementById('profile-email').innerText = data['profile-email'];
            document.documentElement.lang = lang;
        });
}

// Find local jobs based on pincode
function findLocalJobs() {
    const pincode = document.getElementById('pincode').value;
    const localJobsResults = document.getElementById('localJobsResults');

    // Dummy jobs for demonstration
    localJobsResults.innerHTML = `
        <div class="local-jobs-card">
            <h3>Local Job 1</h3>
            <p>Company: Company Local 1</p>
            <p>Stipend: $600/month</p>
            <button>Apply Now</button>
        </div>
        <div class="local-jobs-card">
            <h3>Local Job 2</h3>
            <p>Company: Company Local 2</p>
            <p>Stipend: $650/month</p>
            <button>Apply Now</button>
        </div>
    `;
}

// Close the dropdown menu if clicked outside
window.onclick = function(event) {
    if (!event.target.matches('.dropdown-btn')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
