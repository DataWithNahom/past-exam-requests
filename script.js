// script.js
document.addEventListener('DOMContentLoaded', () => {
    const requestForm = document.getElementById('requestForm');
    const requestsList = document.getElementById('requests');
  
    // Array to store requests (in a real app, this would be replaced with a backend/database)
    let requests = [];
  
    // Function to render requests
    function renderRequests() {
      requestsList.innerHTML = '';
      requests.forEach((request, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
          <div>
            <strong>${request.courseName}</strong> (${request.examType})<br>
            <small>${request.universityName}</small>
          </div>
          <button class="vote-btn" data-index="${index}">Vote (${request.votes})</button>
        `;
        requestsList.appendChild(li);
      });
  
      // Add event listeners to vote buttons
      document.querySelectorAll('.vote-btn').forEach(button => {
        button.addEventListener('click', () => {
          const index = button.getAttribute('data-index');
          requests[index].votes++;
          renderRequests();
        });
      });
    }
  
    // Handle form submission
    requestForm.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const courseName = document.getElementById('courseName').value;
      const examType = document.getElementById('examType').value;
      const universityName = document.getElementById('universityName').value;
  
      // Add new request to the array
      requests.push({
        courseName,
        examType,
        universityName,
        votes: 0
      });
  
      // Clear the form
      requestForm.reset();
  
      // Re-render the requests list
      renderRequests();
    });
  
    // Initial render
    renderRequests();
  });