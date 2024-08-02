// JavaScript to handle the modal
function openModal(projectId) {
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
  
    if (projectId === 'project1') {
      modalTitle.textContent = "Profane Text Speech Detection";
      modalDescription.textContent = "Conducted sentiment analysis on Twitter data using Natural Language Processing (NLP) techniques in Python. Processed and classified tweets as positive, negative, giving 99% accuracy.";
    } else if (projectId === 'project2') {
      modalTitle.textContent = "Air Pollution Prediction";
      modalDescription.textContent = "Utilizing K-Nearest Neighbors (KNN) algorithm for air pollution prediction. Spearheaded the implementation of machine learning models to analyze extensive environmental datasets, enabling precise forecasting of pollutant levels. Orchestrated the integration of KNN for local pattern recognition, resulting in highly accurate predictions.";
    } else if (projectId === 'project3') {
      modalTitle.textContent = "Skin Cancer Prediction";
      modalDescription.textContent = "Developed a Convolutional Neural Network (CNN) model to predict skin cancer, classifying images into benign and malignant categories. Achieved an accuracy of 90%, demonstrating strong model performance and reliability in identifying skin cancer types.";
    }
  
    modal.style.display = "block";
  }
  
  function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
  }
  
  window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }
  
  // JavaScript to handle form validation
  function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    if (name === "" || email === "" || message === "") {
      alert("All fields must be filled out");
      return false;
    }
  
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      alert("Invalid email address");
      return false;
    }
  
    return true;
  }
  