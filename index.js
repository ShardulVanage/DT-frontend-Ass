import "./navbar/navbar.js";
import "./tpm/tpm.js";
import "./sidebar/sidebar.js";
import "./rightSidebar/rightSidebar.js";


async function loadContent() {
        try {
            const response = await fetch('task.json');
            const data = await response.json();

            // Update course title
            document.getElementById('courseTitle').textContent = data.title;

            // Update task information
            const task = data.tasks[0]; // Assuming there's only one task
            document.getElementById('taskTitle').textContent = task.task_title;
            document.getElementById('taskDescription').textContent = task.task_description;

            // Update asset information
            const assets = task.assets;
            if (assets && assets.length >= 2) {
                // Update first asset (video)
                document.getElementById('asset1Title').textContent = assets[0].asset_title;
                document.getElementById('asset1Description').textContent = assets[0].asset_description;
                if (assets[0].asset_content_type === 'video') {
                    document.getElementById('asset1Content').innerHTML = `
                            <iframe width="560" height="315" src="${assets[0].asset_content}" frameborder="0" allowfullscreen></iframe>
                        `;
                }

                // Update second asset (threadbuild)
                document.getElementById('asset2Title').textContent = assets[1].asset_title;
                document.getElementById('asset2Description').textContent = assets[1].asset_description;
            }
        } catch (error) {
            console.error('Error loading task data:', error);
        }
    }

    // Existing toggle function
    function toggleThread(header) {
        const content = header.nextElementSibling;
        const toggle = header.querySelector('.card-thread-toggle');
        content.style.display = content.style.display === 'none' ? 'block' : 'none';
        toggle.textContent = content.style.display === 'none' ? '▼' : '▲';
    }

    // Load content when the page is ready
    document.addEventListener('DOMContentLoaded', loadContent);