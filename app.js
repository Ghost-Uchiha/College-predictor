

function hidefirstdiv () {
  const home = document.getElementById('home')
  const college_predictor = document.getElementById('college-predictor')
  home.classList.remove('visible');
  home.classList.add('hidden');
  college_predictor.classList.remove('hidden');
  college_predictor.classList.add('visible');
}

function next(){
  var percentile = document.getElementById("percentile");
  var option = document.getElementById('option')
  if (percentile.value.trim() === "") {
    alert("Please Enter Your Percentile to proceed");
    return false
  } 
  if (option.value.trim() === ""){
    alert("Please Select Option")
    return false
  }
  const first = document.getElementById('first')
  const second = document.getElementById('second')
  first.classList.remove('visible');
  first.classList.add('hidden');
  second.classList.remove('hidden');
  second.classList.add('visible');
    check()
    // isDigit()
    return true
}

document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.querySelector(".custom-dropdown");
  const input = dropdown.querySelector(".selected");
  const optionsList = dropdown.querySelector(".option");
  const options = optionsList.querySelectorAll("li");

  // Function to open the dropdown
  function openDropdown() {
    optionsList.style.display = "block";
  }

  // Function to close the dropdown
  function closeDropdown() {
    optionsList.style.display = "none";
  }

  // Function to handle option selection
  function handleOptionSelection(event) {
    const selectedOption = event.target.textContent;
    input.value = selectedOption;
    closeDropdown();
  }

  // Add click event listeners
  input.addEventListener("click", openDropdown);

  // Add click event listener to each option
  options.forEach((option) => {
    option.addEventListener("click", handleOptionSelection);
  });

  // Close the dropdown when a click occurs outside of it
  document.addEventListener("click", function (event) {
    if (!dropdown.contains(event.target)) {
      closeDropdown();
    }
  });
});


document.getElementById("phoneInput").addEventListener("keypress", function(event) {
  var phoneInput = this.value.trim();
  var keyCode = event.which || event.keyCode;

  // Allow only numeric keys (0-9) and backspace (8)
  if (keyCode < 48 || keyCode > 57) {
    event.preventDefault();
  }
  // Remove non-numeric characters using regex
  phoneInput = phoneInput.replace(/[^0-9]/g, ''); // Only digits are allowed

  if (phoneInput.length >= 10) {
    this.value = phoneInput.substring(0, 9); // Truncate to 10 digits
  } else if (phoneInput.length < 9) {
    document.getElementById("error-message").textContent = "Phone number must be 10 digits.";
  } else {
    document.getElementById("error-message").textContent = "";
  }
});







function check(event){
    const percentileInput = document.getElementById('percentile');
    const optionInput = document.getElementById('option');
    if (percentileInput.value.trim() === '') {
        event.preventDefault(); // Prevent form submission
        alert('Percentile field cannot be empty.'); // Display error message
      }
      if (optionInput.value.trim() === '') {
        event.preventDefault(); // Prevent form submission
      }
}

document.getElementById("percentile").addEventListener("input", function(event) {
  var percentileInput = this.value.trim();
  
  // Remove non-numeric characters and extra dots
  percentileInput = percentileInput.replace(/[^0-9.]/g, '');
  
  // Split the input by dot and remove any empty parts
  var parts = percentileInput.split('.').filter(part => part !== '');

  // Limit the length of each part to 2 characters
  if (parts[0] && parts[0].length > 2) {
    event.preventDefault();
    percentileInput = parts[0].substring(0, 2);
  }
  if (parts[1] && parts[1].length > 2) {
    event.preventDefault();
    percentileInput = parts[0] + '.' + parts[1].substring(0, 2);
  }

  // Reconstruct the valid input
  this.value = percentileInput;

  // Update error message
  if (percentileInput.length !== 5) {
    document.getElementById("error-message").textContent = "Please enter 2 digits, a dot, and 2 digits (e.g., 12.34).";
  } else {
    document.getElementById("error-message").textContent = "";
  }
});



// function isDigit(event) {
//   const percentileInput = document.getElementById('percentile');
//   const inputRegex = /^\d{2}(\.\d{2})?$/; // Match two digits, optionally followed by a dot and two more digits

//   if (!inputRegex.test(percentileInput.value)) {
//     event.preventDefault();
//     alert('Please enter the value in the format "digitdigit.digitdigit" where each "digit" is a single numeric digit.');
//   }
// }




  
  // Add event listener to the input field
  // const percentileInput = document.getElementById('percentile');
  // percentileInput.addEventListener('input', isDigit);

//Colleges

const colleges =[
  {
   "UniversityRegNo": 1005,
   "UniversityName": "Sant Gadge Baba Amravati University , Amravati",
   "UniversityStatus": "University Department",
   "HomeUniversity": "Sant Gadge Baba Amravati University",
   "GOPENH": 85.3229226,
   "GSCH": 78.3294775,
   "GSTH": 61.0584152,
   "GNTAH": 73.1954487,
   "GNTBH": 72.255639,
   "GNTCH": 74.4987468,
   "GNTDH": 67.2238288,
   "GOBCH": 82.2546751,
   "PWDOPENH": 88.7516869,
   "Course": "MBA"
  },
  {
   "UniversityRegNo": 1101,
   "UniversityName": "Shri Sant Gajanan Maharaj College of Engineering,Shegaon",
   "UniversityStatus": " Un-Aided             ",
   "HomeUniversity": "Sant Gadge Baba Amravati University",
   "GOPENH": 74.498,
   "GSCH": 62.974,
   "GSTH": 56.8854,
   "GNTAH": 55.338,
   "GNTCH": 61.058,
   "GNTDH": 46.683,
   "GOBCH": 71.218,
   "Course": "MBA"
  },
  {
   "UniversityRegNo": 1102,
   "UniversityName": "Vidya Bharati Mahavidyalaya Department of Research and PG Studies in Science & Management, Amravati",
   "UniversityStatus": " Un-Aided             ",
   "HomeUniversity": "Sant Gadge Baba Amravati University",
   "GOPENH": 69.556,
   "GSCH": 61.058,
   "GSTH": 11.807,
   "GNTAH": 62.974,
   "GNTBH": 50.954,
   "GNTCH": 58.426,
   "GOBCH": 65.541,
   "PWDOPENH": 19.382,
   "Course": "MBA"
  },
  {
   "UniversityRegNo": 1105,
   "UniversityName": "Prof. Ram Meghe Institute of Technology & Research, Amravati",
   "UniversityStatus": " Un-Aided             ",
   "HomeUniversity": "Sant Gadge Baba Amravati University",
   "GOPENH": 61.058,
   "GSCH": 53.024,
   "GSTH": 40.259,
   "GNTAH": 33.113,
   "GNTBH": 55.338,
   "GNTCH": 49.157,
   "GNTDH": 31.03,
   "GOBCH": 58.426,
   "Course": "MBA"
  },
  {
   "UniversityRegNo": 1106,
   "UniversityName": "Hari Kishan Jaju Education Sanstha's,College of Management & Computer Science, Yavatmal",
   "UniversityStatus": " Un-Aided-Linguistic Minority - Marwadi",
   "HomeUniversity": "Sant Gadge Baba Amravati University",
   "GOPENH": 49.157,
   "Course": "MBA"
  },
  {
   "UniversityRegNo": 1107,
   "UniversityName": "P. R. Pote (Patil) Education & Welfare Trust's Group of Institution(Integrated Campus), Amravati",
   "UniversityStatus": " Un-Aided             ",
   "HomeUniversity": "Sant Gadge Baba Amravati University",
   "GOPENH": 74.498,
   "GSCH": 71.218,
   "GNTBH": 49.157,
   "GNTCH": 56.8854,
   "GOBCH": 71.218,
   "Course": "MBA"
  },
  {
   "UniversityRegNo": 1114,
   "UniversityName": "Sipna Shikshan Prasarak Mandal College of Engineering & Technology, Amravati",
   "UniversityStatus": " Un-Aided             ",
   "HomeUniversity": "Sant Gadge Baba Amravati University",
   "GOPENH": 75.598,
   "GSCH": 62.974,
   "GNTAH": 62.974,
   "GNTBH": 62.974,
   "GNTCH": 74.498,
   "GNTDH": 61.058,
   "GOBCH": 67.971,
   "Course": "MBA"
  },
  {
   "UniversityRegNo": 1121,
   "UniversityName": "Shri Hanuman Vyayam Prasarak Mandals College of Engineering & Technology, Amravati",
   "UniversityStatus": " Un-Aided             ",
   "HomeUniversity": "Sant Gadge Baba Amravati University",
   "GOPENH": 56.885,
   "GSCH": 50.954,
   "GSTH": 55.338,
   "GNTAH": 21.273,
   "GNTCH": 50.954,
   "GOBCH": 55.338,
   "Course": "MBA"
  },
  {
   "UniversityRegNo": 2001,
   "UniversityName": "Dr. B. A. M.University Dept. Of Management Science, Aurangabad",
   "UniversityStatus": "University Department",
   "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
   "GOPENH": 72.255,
   "GSCH": 65.541,
   "GSTH": 19.382,
   "GNTAH": 62.974,
   "GNTBH": 42.988,
   "GNTCH": 61.058,
   "GNTDH": 67.223,
   "GOBCH": 40.259,
   "PWDOPENH": 7.225,
   "Course": "MBA"
  },
  {
   "UniversityRegNo": 2002,
   "UniversityName": "Dr. Babasaheb Ambedkar Marathwada University, Sub Centre, Osmanabad",
   "UniversityStatus": "University Department",
   "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
   "GOPENH": 13.839,
   "GSCH": 3.494,
   "GNTBH": 10.037,
   "GNTDH": 11.807,
   "GOBCH": 3.494,
   "Course": "MBA"
  },
  {
   "UniversityRegNo": 2003,
   "UniversityName": "Swami Ramanand Teerth Marathwada University, School of Commerce & Management Science, Nanded",
   "UniversityStatus": "University Department",
   "HomeUniversity": "Swami Ramanand Teerth Marathwada University, Nanded",
   "GOPENH": 55.338,
   "GSCH": 38.272,
   "GSTH": 2.382,
   "GNTAH": 44.826,
   "GNTBH": 21.273,
   "GNTCH": 46.683,
   "GNTDH": 15.398,
   "GOBCH": 15.398,
   "PWDOPENH": 17.134,
   "Course": "MBA"
  },
  {
   "UniversityRegNo": 2004,
   "UniversityName": "School of Management, Swami Ramanand Teerth Marathwada University, Sub Centre, Peth, Latur",
   "UniversityStatus": "University Department",
   "HomeUniversity": "Swami Ramanand Teerth Marathwada University, Nanded",
   "GOPENH": 23.769,
   "GSCH": 6.229,
   "GNTCH": 19.382,
   "Course": "MBA"
  },
  {
   "UniversityRegNo": 2102,
   "UniversityName": "Rajarshi Shahu Institute of Management, Aurangabad",
   "UniversityStatus": "Un-Aided ",
   "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
   "GOPENH": 42.988,
   "GSCH": 17.134,
   "GNTAH": 19.382,
   "GNTBH": 38.272,
   "GNTDH": 11.807,
   "GOBCH": 0.596,
   "Course": "MBA"
  },
  {
   "UniversityRegNo": 2104,
   "UniversityName": "Aditya College of MBA, Beed",
   "UniversityStatus": "Un-Aided ",
   "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
   "GOPENH": 1.262,
   "Course": "MBA"
  },
  {
   "UniversityRegNo": 2104,
   "UniversityName": "Aditya College of MBA, Beed",
   "UniversityStatus": "Un-Aided ",
   "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
   "GOPENH": 31.03,
   "Course": "MBA( Marketing Management )"
  },
  {
   "UniversityRegNo": 2106,
   "UniversityName": "Lokvikas Educational & Charitable Trust's Marathwada Institute of Management and Research, Aurangabad",
   "UniversityStatus": "Un-Aided ",
   "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
   "GOPENH": 11.807,
   "GSCH": 2.856,
   "Course": "MBA"
  },
  {
   "UniversityRegNo": 2108,
   "UniversityName": " Adarsh Shikshan Prasarak Mandal's K.T. Patil College of MBA, Osmanabad",
   "UniversityStatus": "Un-Aided ",
   "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
   "GOPENH": 7.225,
   "Course": "MBA"
  },
  {
   "UniversityRegNo": 2110,
   "UniversityName": "Nirmal Krida and Samaj Prabhodhan Trust, Institute of Management, Badnapur",
   "UniversityStatus": "Un-Aided ",
   "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
   "GOPENH": 40.259,
   "GSCH": 25.878,
   "GNTAH": 31.03,
   "GNTCH": 6.229,
   "GNTDH": 36.299,
   "GOBCH": 0.682,
   "PWDOPENH": 49.157,
   "Course": "MBA"
  },
  {
   "UniversityRegNo": 2112,
   "UniversityName": "Shree Yash Pratishthan, Shreeyash College of Engineering and Technology, Aurangabad",
   "UniversityStatus": "Un-Aided ",
   "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
   "GOPENH": 13.839,
   "GSCH": 4.117,
   "Course": "MBA"
  },
  {
   "UniversityRegNo": 2114,
   "UniversityName": "Deogiri Institute of Engineering and Management Studies, Aurangabad",
   "UniversityStatus": "Un-Aided ",
   "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
   "GOPENH": 55.338,
   "GSCH": 40.259,
   "GNTAH": 0.5966,
   "GNTBH": 38.272,
   "GNTCH": 8.6996,
   "GNTDH": 17.134,
   "GOBCH": 17.134,
   "Course": "MBA"
  },
  {
   "UniversityRegNo": 2115,
   "UniversityName": "Sahyog Sevabhavi Santha's Indira Institute of Management Science, Nanded",
   "UniversityStatus": "Un-Aided ",
   "HomeUniversity": "Swami Ramanand Teerth Marathwada University, Nanded",
   "GOPENH": 25.878,
   "GSCH": 19.382,
   "GNTAH": 19.382,
   "GNTBH": 13.839,
   "GNTCH": 19.382,
   "GNTDH": 13.839,
   "GOBCH": 25.878,
   "Course": "MBA"
  },
  {
   "UniversityRegNo": 2116,
   "UniversityName": "Matoshri Pratishan's Group of Institutions (Integrated Campus), Kupsarwadi , Nanded",
   "UniversityStatus": "Un-Aided ",
   "HomeUniversity": "Swami Ramanand Teerth Marathwada University, Nanded",
   "GOPENH": 13.839,
   "GNTBH": 6.229,
   "GNTCH": 10.037,
   "Course": "MBA"
  },
  {
   "UniversityRegNo": 2119,
   "UniversityName": "Shree Sharda Bhavan Education Society's Institute of Technology & Management, Nanded",
   "UniversityStatus": "Un-Aided ",
   "HomeUniversity": "Swami Ramanand Teerth Marathwada University, Nanded",
   "GOPENH": 40.259,
   "GSCH": 21.273,
   "GOBCH": 21.273,
   "Course": "MBA"
  },
  {
   "UniversityRegNo": 2136,
   "UniversityName": "Aditya Engineering College , Beed",
   "UniversityStatus": "Un-Aided ",
   "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
   "GOPENH": 0.353,
   "Course": "MBA"
  },
  {
   "UniversityRegNo": 2138,
   "UniversityName": "Matsyodari Shikshan Sansatha's College of Engineering and Technology, Jalna",
   "UniversityStatus": "Un-Aided ",
   "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
   "GOPENH": 38.272,
   "GSCH": 11.807,
   "GSTH": 3.494,
   "GNTAH": 23.769,
   "GNTCH": 36.299,
   "GOBCH": 19.382,
   "Course": "MBA"
  },
  {
   "UniversityRegNo": 2256,
   "UniversityName": "Foster Development School of Management, Aurangabad",
   "UniversityStatus": "Un-Aided ",
   "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
   "GOPENH": 42.988,
   "GSCH": 13.839,
   "GSTH": 31.03,
   "GNTAH": 1.262,
   "GNTBH": 23.769,
   "Course": "MBA"
  },
  {
   "UniversityRegNo": 2259,
   "UniversityName": "Shri Sai Institute of Management & Research, Aurangabad",
   "UniversityStatus": "Un-Aided ",
   "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
   "GOPENH": 1.074,
   "Course": "MBA"
  },
  {
   "UniversityRegNo": 2516,
   "UniversityName": "International Centre Of Excellence In Engineering and Management (ICEEM)",
   "UniversityStatus": "Un-Aided ",
   "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
   "GOPENH": 21.273,
   "GSCH": 4.904,
   "GNTBH": 3.494,
   "GNTCH": 2.856,
   "Course": "MBA"
  },
  {
   "UniversityRegNo": 2520,
   "UniversityName": "D. B. Institute Of Management & Research, Mouza-Mahalngra,Ta.Chakur,Dist.Latur",
   "UniversityStatus": "Un-Aided ",
   "HomeUniversity": "Swami Ramanand Teerth Marathwada University, Nanded",
   "GOPENH": 0.596,
   "Course": "MBA"
  },
  {
   "UniversityRegNo": 2569,
   "UniversityName": "Suraj Institute of Management, Beed",
   "UniversityStatus": "Un-Aided ",
   "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
   "GOPENH": 23.769,
   "GSCH": 0.177,
   "GNTAH": 11.807,
   "GOBCH": 2.856,
   "Course": "MBA"
  },
  {
   "UniversityRegNo": 2569,
   "UniversityName": "Suraj Institute of Management, Beed",
   "UniversityStatus": "Un-Aided ",
   "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
   "GOPENH": 7.225,
   "Column17": " ",
   "Course": "MBA( Human Resource Management )"
  },
  {
   "UniversityRegNo": 2569,
   "UniversityName": "Suraj Institute of Management, Beed",
   "UniversityStatus": "Un-Aided ",
   "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
   "GOPENH": 17.134,
   "Course": "MBA( Marketing Management )"
  },
  {
   "UniversityRegNo": 2570,
   "UniversityName": "Mitthulalji Sarda MBA College, Beed",
   "UniversityStatus": "Un-Aided ",
   "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
   "GOPENH": 0.353,
   "Course": "MBA"
  },
  {
   "UniversityRegNo": 2570,
   "UniversityName": "Mitthulalji Sarda MBA College, Beed",
   "UniversityStatus": "Un-Aided ",
   "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
   "GOPENH": 25.878,
   "Course": "MBA( Marketing Management )"
  },
  {
   "UniversityRegNo": 2570,
   "UniversityName": "Mitthulalji Sarda MBA College, Beed",
   "UniversityStatus": "Un-Aided ",
   "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
   "GOPENH": 15.398,
   "Course": "MBA( Finance )"
  },
  {
   "UniversityRegNo": 2571,
   "UniversityName": "Kishori College of M.B.A., Beed",
   "UniversityStatus": "Un-Aided ",
   "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
   "GOPENH": 6.229,
   "Course": "MBA"
  },
  {
   "UniversityRegNo": 2571,
   "UniversityName": "Kishori College of M.B.A., Beed",
   "UniversityStatus": "Un-Aided ",
   "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
   "GOPENH": 4.117,
   "Course": "MBA( Marketing Management )"
  },
  {
   "UniversityRegNo": 2571,
   "UniversityName": "Kishori College of M.B.A., Beed",
   "UniversityStatus": "Un-Aided ",
   "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
   "GOPENH": 6.229,
   "Course": "MBA( Finance )"
  },
  {
   "UniversityRegNo": 2622,
   "UniversityName": "Jay Bhavani Institute of Management, Badnapur, Jalna",
   "UniversityStatus": "Un-Aided ",
   "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
   "GOPENH": 1.074,
   "Course": "MBA"
  },
  {
   "UniversityRegNo": 2623,
   "UniversityName": "Shreeyash Institute of Management Studies and Research, Aurangabad",
   "UniversityStatus": "Un-Aided ",
   "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
   "GOPENH": 31.03,
   "GSCH": 2.383,
   "GNTAH": 21.273,
   "GNTBH": 4.904,
   "GNTCH": 15.398,
   "GNTDH": 23.769,
   "GOBCH": 11.807,
   "Course": "MBA"
  },
  {
   "UniversityRegNo": 2624,
   "UniversityName": "- U. D. Pathrikar Institute of Management, At.Post Pathri, Aurangabad",
   "UniversityStatus": "Un-Aided ",
   "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
   "GOPENH": 3.494,
   "Course": "MBA"
  },
  {
   "UniversityRegNo": 3001,
   "UniversityName": "Jamnalal Bajaj Institute of Management Studies, Mumbai",
   "UniversityStatus": "University Department-Autonomous",
   "HomeUniversity": "Mumbai University",
   "Course": "MMS"
  },
  {
   "UniversityRegNo": 3002,
   "UniversityName": "Sydenham Institute of Management Studies & Research & Entrepreneurship Education(SIMSREE), Mumbai",
   "UniversityStatus": "Government",
   "HomeUniversity": "Mumbai University",
   "GOPENH": 99.683,
   "GSCH": 98.565,
   "GSTH": 89.139,
   "GNTAH": 98.99,
   "GNTBH": 99.179,
   "GNTCH": 99.368,
   "GNTDH": 98.99,
   "GOBCH": 99.109,
   "PWDOPENH": 96.061,
   "PWDOBCH": 94.645,
   "PWDROBCH": 92.816,
   "Course": "MMS"
  },
  {
   "UniversityRegNo": 3003,
   "UniversityName": "Alkesh Dinesh Modi Institute for Financial & Management Studies, Mumbai",
   "UniversityStatus": "University Department",
   "HomeUniversity": "Mumbai University",
   "GOPENH": 95.387,
   "GSCH": 93.963,
   "GSTH": 61.058,
   "GNTAH": 91.469,
   "GNTBH": 93.963,
   "GNTCH": 92.247,
   "GNTDH": 92.498,
   "GOBCH": 93.604,
   "PWDOPENH": 85.956,
   "Course": "MMS"
  },
  {
   "UniversityRegNo": 3004,
   "UniversityName": "Jankidevi Bajaj Institute of Management Studies, Santacruz, Mumbai",
   "UniversityStatus": "University Managed",
   "HomeUniversity": "SNDT Women's University",
   "Course": "MMS"
  },
  {
   "UniversityRegNo": 3033,
   "UniversityName": "Dr. Babasaheb Ambedkar Technological University, Lonere",
   "UniversityStatus": "University Managed",
   "HomeUniversity": "Dr. Babasaheb Ambedkar Technological University, Lonere",
   "Course": "MBA - Innovation , Enterpreneurship and Venture Development ( IEV )"
  },
  {
   "UniversityRegNo": 3101,
   "UniversityName": "Bharti Vidyapeeth's Institute of Management Studies & Research, Navi Mumbai",
   "UniversityStatus": "Un-Aided ",
   "HomeUniversity": "Mumbai University",
   "GOPENH": 93.127,
   "GSCH": 91.85,
   "GSTH": 31.03,
   "GNTAH": 71.218,
   "GNTBH": 85.119,
   "GNTCH": 89.139,
   "GNTDH": 91.85,
   "GOBCH": 90.454,
   "PWDOPENH": 62.974,
   "Course": "MMS"
  },
  {
   "UniversityRegNo": 3102,
   "UniversityName": "Chetana's Ramprasad Khandelwal Institute of Management & Research, Mumbai",
   "UniversityStatus": "Un-Aided ",
   "HomeUniversity": "Mumbai University",
   "GOPENH": 98.836,
   "GSCH": 97.592,
   "GSTH": 85.119,
   "GNTAH": 98.228,
   "GNTBH": 95.611,
   "GNTCH": 97.592,
   "GNTDH": 98.228,
   "GOBCH": 98.449,
   "PWDOPENH": 90.037,
   "PWDROBCH": 89.139,
   "Course": "MMS"
  },
  {
   "UniversityRegNo": 3104,
   "UniversityName": "Lala Lajpatrai Institute of Management, Mumbai",
   "UniversityStatus": "Un-Aided-Linguistic Minority - Punjabi",
   "HomeUniversity": "Mumbai University",
   "GOPENH": 97.469,
   "Course": "MMS"
  },
  {
   "UniversityRegNo": 3105,
   "UniversityName": "Mahatma Gandhi Mission's Institute of Management Studies & Research, Kamothe",
   "UniversityStatus": "Un-Aided ",
   "HomeUniversity": "Mumbai University",
   "GOPENH": 85.119,
   "GSCH": 79.963,
   "GSTH": 23.769,
   "GNTAH": 61.058,
   "GNTBH": 77.553,
   "GNTCH": 62.974,
   "GNTDH": 72.255,
   "GOBCH": 73.195,
   "Course": "MMS"
  },
  {
   "UniversityRegNo": 3106,
   "UniversityName": "MET's Institute of Management, Mumbai",
   "UniversityStatus": "Un-Aided ",
   "HomeUniversity": "Mumbai University",
   "GOPENH": 98.155,
   "GSCH": 96.223,
   "GSTH": 78.977,
   "GNTAH": 94.645,
   "GNTBH": 95.611,
   "GNTCH": 94.905,
   "GNTDH": 97.891,
   "GOBCH": 96.939,
   "PWDOPENH": 86.7,
   "Course": "MMS"
  },
  {
   "UniversityRegNo": 3107,
   "UniversityName": "Prin. L. N. Welingkar Institute of Management Development & Research, Mumbai",
   "UniversityStatus": "Un-Aided-Autonomous",
   "HomeUniversity": "Mumbai University",
   "Course": "MMS"
  },
  {
   "UniversityRegNo": 3108,
   "UniversityName": "Rizvi Institute of Management Studies & Research, Mumbai",
   "UniversityStatus": "Un-Aided-Religious Minority - Muslim",
   "HomeUniversity": "Mumbai University",
   "GOPENH": 96.603,
   "Course": "MMS"
  },
  {
   "UniversityRegNo": 3109,
   "UniversityName": "S.I.E.S. College of Management Studies, Mumbai",
   "UniversityStatus": "Un-Aided-Linguistic Minority - Tamil",
   "HomeUniversity": "Mumbai University",
   "GOPENH": 99.109,
   "Course": "MMS"
  },
  {
   "UniversityRegNo": 3110,
   "UniversityName": "Vivekanand Education Society's Institute of Management Studies & Research, Mumbai",
   "UniversityStatus": "Un-Aided-Linguistic Minority - Sindhi",
   "HomeUniversity": "Mumbai University",
   "GOPENH": 96.061,
   "Course": "MMS"
  },
  {
   "UniversityRegNo": 3113,
   "UniversityName": "Maratha Mandir's Babasaheb Gawde Institute of Management Studies, Mumbai",
   "UniversityStatus": "Un-Aided ",
   "HomeUniversity": "Mumbai University",
   "GOPENH": 83.084,
   "GSCH": 75.598,
   "GNTBH": 61.058,
   "GNTCH": 33.113,
   "GNTDH": 77.553,
   "GOBCH": 67.223,
   "Course": "MMS"
  },
  {
   "UniversityRegNo": 3114,
   "UniversityName": "Mahatma Education Society's Pillai's Institute of Management Studies & Research, New Panvel",
   "UniversityStatus": "Un-Aided-Linguistic Minority - Malyalam",
   "HomeUniversity": "Mumbai University",
   "GOPENH": 84.394,
   "Course": "MMS"
  },
  {
   "UniversityRegNo": 3115,
   "UniversityName": "- Anjuman-I-Islam's Allana Institute of Management Studies, Mumbai",
   "UniversityStatus": "Un-Aided-Religious Minority - Muslim",
   "HomeUniversity": "Mumbai University",
   "GOPENH": 73.195,
   "Course": "MMS"
  },
  {
   "UniversityRegNo": 3116,
   "UniversityName": "Agnel Charities Agnel Seva Sangha's Fr. C. Rodrigues Inst. of Management. Studies, Vashi, Navi Mumbai",
   "UniversityStatus": "Un-Aided-Religious Minority - Christian",
   "HomeUniversity": "Mumbai University",
   "GOPENH": 94.13,
   "Course": "MMS"
  },
  {
   "UniversityRegNo": 3117,
   "UniversityName": "Gurunanak Institute of Management Studies, Mumbai",
   "UniversityStatus": "Un-Aided-Religious Minority - Sikh",
   "HomeUniversity": "Mumbai University",
   "GOPENH": 92.247,
   "Course": "MMS"
  },
  {
   "UniversityRegNo": 3118,
   "UniversityName": "Zagdu Singh Chartitable Trust's Thakur Institute of Management Studies & Research, Mumbai",
   "UniversityStatus": "Un-Aided-Linguistic Minority - Hindi",
   "HomeUniversity": "Mumbai University",
   "GOPENH": 96.939,
   "Course": "MMS"
  },
  {
   "UniversityRegNo": 3119,
   "UniversityName": "St. Francis Institute of Management & Research, Mumbai",
   "UniversityStatus": "Un-Aided-Religious Minority - Christian",
   "HomeUniversity": "Mumbai University",
   "GOPENH": 94.358,
   "Course": "MMS"
  },
  {
   "UniversityRegNo": 3120,
   "UniversityName": "Atharva Educational Trust, Atharva Institute of Management Studies, Mumbai",
   "UniversityStatus": "Un-Aided ",
   "HomeUniversity": "Mumbai University",
   "GOPENH": 92.247,
   "GSCH": 90.454,
   "GSTH": 42.988,
   "GNTAH": 62.974,
   "GNTBH": 88.751,
   "GNTCH": 86.7,
   "GNTDH": 91.469,
   "GOBCH": 87.637,
   "Course": "MMS"
  },
  {
   "UniversityRegNo": 3121,
   "UniversityName": "Sahajeevan Shikshan Sanstha's Madanbhai Sura Institute of Business Management, Khed Dist. Ratnagiri",
   "UniversityStatus": "Un-Aided ",
   "HomeUniversity": "Mumbai University",
   "GOPENH": 61.058,
   "GSCH": 42.988,
   "GNTAH": 0.682,
   "GNTCH": 40.259,
   "GOBCH": 11.807,
   "Course": "MMS"
  },
  {
   "UniversityRegNo": 3123,
   "UniversityName": "Parle Tilak Vidyalaya Asso.'s Institute of Management, Mumbai",
   "UniversityStatus": "Un-Aided ",
   "HomeUniversity": "Mumbai University",
   "GOPENH": 88.751,
   "GSCH": 84.394,
   "GSTH": 53.024,
   "GNTAH": 61.058,
   "GNTBH": 56.885,
   "GNTCH": 76.445,
   "GNTDH": 87.637,
   "GOBCH": 80.874,
   "Course": "MMS"
  },
  {
   "UniversityRegNo": 3123,
   "UniversityName": "Parle Tilak Vidyalaya Asso.'s Institute of Management, Mumbai",
   "UniversityStatus": "Un-Aided ",
   "HomeUniversity": "Mumbai University",
   "GOPENH": 78.329,
   "GSCH": 72.255,
   "GOBCH": 61.058,
   "Course": "MBA - Innovation , Enterpreneurship and Venture Development ( IEV )"
  },
  {
   "UniversityRegNo": 3127,
   "UniversityName": "NCRD's Sterling Institute of Management Studies, Navi Mumbai",
   "UniversityStatus": "Un-Aided ",
   "HomeUniversity": "Mumbai University",
   "GOPENH": 72.255,
   "GSCH": 58.426,
   "GNTCH": 53.024,
   "GNTDH": 71.21,
   "GOBCH": 61.058,
   "Course": "MMS"
  },
  {
   "UniversityRegNo": 3128,
   "UniversityName": "Mandar Education Society's Rajaram Shinde College of Master of Business Adminstration, Chiplun",
   "UniversityStatus": "Un-Aided ",
   "HomeUniversity": "Mumbai University",
   "GOPENH": 49.157,
   "GSCH": 31.03,
   "Course": "MMS"
  },
  {
   "UniversityRegNo": 3130,
   "UniversityName": "VPM's Dr. V.N. Bedekar Institute Of Management Studies, Mumbai",
   "UniversityStatus": "Un-Aided ",
   "HomeUniversity": "Mumbai University",
   "GOPENH": 80.874,
   "GSCH": 69.556,
   "GSTH": 11.807,
   "GNTAH": 33.113,
   "GNTBH": 62.974,
   "GNTCH": 44.826,
   "GNTDH": 55.338,
   "GOBCH": 65.541,
   "PWDOPENH": 2.007,
   "Course": "MMS"
  },
  {
   "UniversityRegNo": 3131,
   "UniversityName": "Hashmatrai and Gangaram Himathmal Mansukhani Institute of Management, Ulhasnagar, Thane",
   "UniversityStatus": "Un-Aided-Linguistic Minority - Sindhi",
   "HomeUniversity": "Mumbai University",
   "GOPENH": 62.974,
   "Course": "MMS"
  },
  {
   "UniversityRegNo": 3133,
   "UniversityName": "Swayamsiddhi Mitra Sangh's College of Management & Research, Thane",
   "UniversityStatus": "Un-Aided ",
   "HomeUniversity": "Mumbai University",
   "GOPENH": 55.338,
   "GSCH": 38.272,
   "GSTH": 3.494,
   "GNTAH": 17.134,
   "GNTBH": 23.769,
   "GNTCH": 17.134,
   "GNTDH": 23.769,
   "GOBCH": 23.769,
   "PWDOPENH": 23.769,
   "Course": "MMS"
  },
  {
   "UniversityRegNo": 3134,
   "UniversityName": "Bombay St. Xavier College Soc.'s Xavier Institute of Management & Research, Mumbai",
   "UniversityStatus": "Un-Aided-Religious Minority - Roman Catholics",
   "HomeUniversity": "Mumbai University",
   "GOPENH": 99.05,
   "Course": "MMS"
  },
  {
   "UniversityRegNo": 3136,
   "UniversityName": "Oriental Education Society Oriental Institute of Management, Navi Mumbai",
   "UniversityStatus": "Un-Aided-Linguistic Minority - Hindi",
   "HomeUniversity": "Mumbai University",
   "GOPENH": 67.971,
   "Course": "MMS"
  },
  {
   "UniversityRegNo": 3139,
   "UniversityName": "Vidyalankar Institute of Technology,Wadala, Mumbai",
   "UniversityStatus": "Un-Aided-Autonomous",
   "HomeUniversity": "Mumbai University",
   "Course": "MMS"
  },
  {
   "UniversityRegNo": 3146,
   "UniversityName": "Jawahar Education Society's Annasaheb Chudaman Patil College of Engineering,Kharghar, Navi Mumbai",
   "UniversityStatus": "Un-Aided ",
   "HomeUniversity": "Mumbai University",
   "GOPENH": 58.426,
   "GSCH": 44.826,
   "GNTAH": 49.157,
   "GNTCH": 33.113,
   "GOBCH": 38.272,
   "Course": "MMS"
  },
  {
   "UniversityRegNo": 3149,
   "UniversityName": "Shree Shankar Narayan Education Trust's Rohidas Patil Institute of Management Studies, Bhayandar",
   "UniversityStatus": "Un-Aided ",
   "HomeUniversity": "Mumbai University",
   "GOPENH": 58.426,
   "GSCH": 11.807,
   "GNTBH": 46.683,
   "GOBCH": 23.769,
   "Course": "MMS"
  },
  {
   "UniversityRegNo": 3151,
   "UniversityName": "Vishweshwar Education Society's Indira Institute of Business Management, Navi Mumbai",
   "UniversityStatus": "Un-Aided ",
   "HomeUniversity": "Mumbai University",
   "GOPENH": 73.195,
   "GSCH": 63.807,
   "GSTH": 46.683,
   "GNTCH": 65.541,
   "GOBCH": 46.683,
   "Course": "MMS"
  },
  {
   "UniversityRegNo": 3153,
   "UniversityName": "Humera Khan Institute Of Mangement Studies & Reserch, Mumbai",
   "UniversityStatus": "Un-Aided-Linguistic Minority - Hindi",
   "HomeUniversity": "Mumbai University",
   "GOPENH": 36.299,
   "Course": "MMS"
  },
  {
   "UniversityRegNo": 3155,
   "UniversityName": "SYCSPM'S Sinhgad Institute of Business Management, Chandivali, Powai, Mumbai",
   "UniversityStatus": "Un-Aided ",
   "HomeUniversity": "Mumbai University",
   "GOPENH": 62.974,
   "GSCH": 44.826,
   "GSTH": 50.954,
   "GNTBH": 36.299,
   "GNTCH": 42.988,
   "GOBCH": 40.259,
   "Course": "MMS"
  },
  {
   "UniversityRegNo": 3157,
   "UniversityName": "Shree Ghatkopar Sarvajanik Jivdaya Khatur's Aruna Manharlal Shah Institute of Management & Research, Ghatkopar",
   "UniversityStatus": "Un-Aided ",
   "HomeUniversity": "Mumbai University",
   "GOPENH": 55.338,
   "GSCH": 42.988,
   "GNTAH": 11.807,
   "GNTCH": 53.024,
   "GOBCH": 42.988,
   "Course": "MMS"
  },
  {
   "UniversityRegNo": 3158,
   "UniversityName": "Saket Gyanpeeth's, Saket College of management, Kalyan",
   "UniversityStatus": "Un-Aided-Linguistic Minority - Hindi",
   "HomeUniversity": "Mumbai University",
   "GOPENH": 40.259,
   "Course": "MMS"
  },
  {
   "UniversityRegNo": 3159,
   "UniversityName": "JNIESTR's,Rajeev Gandhi College of Management Studies, Navi Mumbai",
   "UniversityStatus": "Un-Aided ",
   "HomeUniversity": "Mumbai University",
   "GOPENH": 61.058,
   "GSCH": 42.988,
   "GNTAH": 36.299,
   "GNTBH": 28.248,
   "GNTCH": 40.259,
   "GNTDH": 42.988,
   "GOBCH": 21.2733,
   "Course": "MMS"
  },
  {
   "UniversityRegNo": 3160,
   "UniversityName": "Mahatma Edu.Soc.'s Pillai's HOC Institute of Management Studies & Research, Khalapur Dist. Raigadh",
   "UniversityStatus": "Un-Aided-Linguistic Minority - Malyalam",
   "HomeUniversity": "Mumbai University",
   "GOPENH": 62.974,
   "Course": "MMS"
  },
  {
   "UniversityRegNo": 3161,
   "UniversityName": "Viva Institute of Management and Research (Viva School of Management and Research)",
   "UniversityStatus": "Un-Aided ",
   "HomeUniversity": "Mumbai University",
   "GOPENH": 65.541,
   "GSCH": 31.03,
   "GNTBH": 40.259,
   "GOBCH": 40.2593,
   "Course": "MMS"
  },
  {
   "UniversityRegNo": 3173,
   "UniversityName": "Deccan Education Society's Navinchandra Mehta Institute of Technology & Development, Dadar, Mumbai",
   "UniversityStatus": "Un-Aided ",
   "HomeUniversity": "Mumbai University",
   "GOPENH": 77.553,
   "GSCH": 72.255,
   "GNTBH": 65.541,
   "GNTCH": 40.259,
   "GOBCH": 61.058,
   "Course": "MMS"
  },
  {
   "UniversityRegNo": 3202,
   "UniversityName": "Rajendra Mane College of Engineering & Technology Ambav Deorukh",
   "UniversityStatus": "Un-Aided ",
   "HomeUniversity": "Mumbai University",
   "GOPENH": 36.299,
   "GNTAH": 15.398,
   "GOBCH": 10.037,
   "Course": "MMS"
  },
  {
   "UniversityRegNo": 3210,
   "UniversityName": "Excelsior Education Society's K.C. College of Engineering and Management Studies and Research, Kopri, Thane (E)",
   "UniversityStatus": "Un-Aided-Linguistic Minority - Punjabi",
   "HomeUniversity": "Mumbai University",
   "GOPENH": 56.885,
   "Course": "MMS"
  },
  {
   "UniversityRegNo": 3217,
   "UniversityName": "Vighnaharata Trust's Shivajirao S. Jondhale College of Engineering & Technology, Shahapur, Asangaon, Dist Thane",
   "UniversityStatus": "Un-Aided ",
   "HomeUniversity": "Mumbai University",
   "GOPENH": 42.988,
   "GSCH": 1.262,
   "GNTDH": 31.03,
   "GOBCH": 17.134,
   "Course": "MMS"
  },
  {
   "UniversityRegNo": 3218,
   "UniversityName": "Aldel Education Trust's St. John College of Engineering & Management, Vevoor, Palghar",
   "UniversityStatus": "Un-Aided-Religious Minority - Christian",
   "HomeUniversity": "Mumbai University",
   "GOPENH": 86.7,
   "Course": "MMS"
  },
  {
   "UniversityRegNo": 3219,
   "UniversityName": "Koti Vidya Charitable Trust's Smt. Alamuri Ratnamala Institute of Engineering and Technology, Sapgaon, Tal. Shahapur",
   "UniversityStatus": "Un-Aided-Linguistic Minority - Hindi",
   "HomeUniversity": "Mumbai University",
   "GOPENH": 33.113,
   "Course": "MMS"
  },
  {
   "UniversityRegNo": 3350,
   "UniversityName": "Durgadevi Saraf Institute of Management Studies, Malad (W), Mumbai",
   "UniversityStatus": "Un-Aided-Linguistic Minority - Hindi",
   "HomeUniversity": "Mumbai University",
   "GOPENH": 92.498,
   "Course": "MMS"
  },
  {
   "UniversityRegNo": 3354,
   "UniversityName": "Kohinoor Business School, Kurla (West), Mumbai",
   "UniversityStatus": "Un-Aided ",
   "HomeUniversity": "Mumbai University",
   "GOPENH": 85.956,
   "GSCH": 84.394,
   "GSTH": 25.878,
   "GNTAH": 46.683,
   "GNTBH": 6.229,
   "GNTCH": 53.024,
   "GNTDH": 83.084,
   "GOBCH": 75.598,
   "Course": "MMS"
  },
  {
   "UniversityRegNo": 3357,
   "UniversityName": "S A V Acharya Institute of Management Studies, Shelu, Tal. Karjat",
   "UniversityStatus": "Un-Aided ",
   "HomeUniversity": "Mumbai University",
   "GOPENH": 1.074,
   "Course": "MMS"
  },
  {
   "UniversityRegNo": 3358,
   "UniversityName": "SAS Institute of Management Studies, Boisar Dist. Thane",
   "UniversityStatus": "Un-Aided ",
   "HomeUniversity": "Mumbai University",
   "GOPENH": 36.299,
   "GSCH": 17.134,
   "GSTH": 17.134,
   "GNTDH": 2.856,
   "GOBCH": 2.007,
   "Course": "MMS"
  },
  {
   "UniversityRegNo": 3359,
   "UniversityName": "SASMIRA's Institute of Management Studies & Research, Worli, Mumbai",
   "UniversityStatus": "Un-Aided ",
   "HomeUniversity": "Mumbai University",
   "GOPENH": 86.7,
   "GSCH": 80.874,
   "GNTAH": 4.904,
   "GNTBH": 46.683,
   "GNTDH": 75.598,
   "GOBCH": 69.556,
   "Course": "MMS"
  },
  {
   "UniversityRegNo": 3360,
   "UniversityName": "GNVS Institute of Management, Sion-Koliwada(E), Mumbai",
   "UniversityStatus": "Un-Aided ",
   "HomeUniversity": "Mumbai University",
   "GOPENH": 72.255,
   "GSCH": 61.058,
   "GSTH": 36.299,
   "GNTCH": 31.03,
   "GOBCH": 53.024,
   "Course": "MMS"
  },
  {
   "UniversityRegNo": 3419,
   "UniversityName": "Sir M Visvesvaraya Institute of Management Studies & Research, Wadala, Mumbai",
   "UniversityStatus": "Un-Aided-Linguistic Minority - Kannada",
   "HomeUniversity": "Mumbai University",
   "GOPENH": 73.195,
   "Course": "MMS"
  },
  {
   "UniversityRegNo": 3437,
   "UniversityName": "Sahyadri Institute of Management & Research, Sawarde.",
   "UniversityStatus": "Un-Aided ",
   "HomeUniversity": "Mumbai University",
   "GOPENH": 49.157,
   "GSCH": 13.839,
   "GNTBH": 38.272,
   "GOBCH": 15.398,
   "PWDOPENH": 33.113,
   "Course": "MMS"
  },
  {
   "UniversityRegNo": 3438,
   "UniversityName": "Aditya Institute of Management Studies & Research, Borivali",
   "UniversityStatus": "Un-Aided-Linguistic Minority - Hindi",
   "HomeUniversity": "Mumbai University",
   "GOPENH": 84.394,
   "Course": "MMS"
  },
  {
   "UniversityRegNo": 3443,
   "UniversityName": "Sheila Raheja School of Business Management & Research,Bandra(E),Mumbai",
   "UniversityStatus": "Un-Aided",
   "HomeUniversity": "Mumbai University",
   "GOPENH": 90.454,
   "GSCH": 86.7,
   "GNTAH": 73.195,
   "GNTBH": 79.963,
   "GNTCH": 75.598,
   "GNTDH": 74.498,
   "GOBCH": 81.442,
   "Course": "MMS"
  },
  {
   "UniversityRegNo": 3446,
   "UniversityName": "Kala Vidyalaya Trust,Kala Institute of Management Studies & Research,Kandivali",
   "UniversityStatus": "Un-Aided",
   "HomeUniversity": "Mumbai University",
   "GOPENH": 58.426,
   "GSCH": 33.113,
   "Course": "MMS"
  },
  {
   "UniversityRegNo": 3452,
   "UniversityName": "Matoshri. Ushatai Jadhav Institute of Management studies & Research Centre,Bhivandi",
   "UniversityStatus": "Un-Aided",
   "HomeUniversity": "Mumbai University",
   "GOPENH": 58.426,
   "GSCH": 17.134,
   "GOBCH": 4.904,
   "Course": "MMS"
  },
  {
   "UniversityRegNo": 3529,
   "UniversityName": "Smt Parmeshwaridevi Durgadutt Tibrewala Institute of Management and Research",
   "UniversityStatus": "Un-Aided-Linguistic Minority - Hindi",
   "HomeUniversity": "Mumbai University",
   "GOPENH": 8.699,
   "Course": "MBA"
  },
  {
   "UniversityRegNo": 3530,
   "UniversityName": "M.S College of Management,Devghar Vada",
   "UniversityStatus": "Un-Aided-Religious Minority- Muslim",
   "HomeUniversity": "Mumbai University",
   "GOPENH": 8.699,
   "Course": "MBA"
  },
  {
   "UniversityRegNo": 4001,
   "UniversityName": "Department of Business Management,Rashtrasant Tukadoji Maharaj Nagpur University,Nagpur",
   "UniversityStatus": "University Department",
   "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
   "GOPENH": 90.454,
   "GSCH": 88.234,
   "GSTH": 49.157,
   "GNTAH": 65.541,
   "GNTBH": 85.119,
   "GNTCH": 85.119,
   "GNTDH": 74.498,
   "GOBCH": 88.234,
   "PWDOPENH": 11.807,
   "Course": "MBA"
  },
  {
   "UniversityRegNo": 4024,
   "UniversityName": "Gondwana University Department of Management",
   "UniversityStatus": "University Department",
   "HomeUniversity": "Gondwana University",
   "GOPENH": 6.229,
   "Course": "MBA"
  },
  {
   "UniversityRegNo": 4101,
   "UniversityName": "Shree Shivaji Education Society , Dr.Panjabrao Deshmukh Institute of Management Technology & Research, Nagpur",
   "UniversityStatus": "Un-Aided",
   "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
   "GOPENH": 63.807,
   "GSCH": 56.885,
   "GSTH": 17.134,
   "GNTAH": 2.007,
   "GNTBH": 56.885,
   "GNTCH": 28.248,
   "GOBCH": 53.024,
   "Course": "MBA"
  },
  {
   "UniversityRegNo": 4102,
   "UniversityName": "Param Poojya Dr.Babasaheb Ambedkar Smarak Samiti Dr.Ambedkar Department of Management Studies & Research,Nagpur",
   "UniversityStatus": "Un-Aided",
   "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
   "GOPENH": 83.084,
   "GSCH": 79.963,
   "GSTH": 49.15,
   "GNTAH": 49.157,
   "GNTBH": 74.498,
   "GNTCH": 40.259,
   "GNTDH": 28.248,
   "GOBCH": 78.329,
   "PWDOPENH": 15.398,
   "Course": "MBA"
  },
  {
   "UniversityRegNo": 4103,
   "UniversityName": "Department of Management Science & Research J.M.Patel College,Bhandara",
   "UniversityStatus": "Un-Aided",
   "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
   "GOPENH": 58.426,
   "GSCH": 31.03,
   "GSTH": 21.273,
   "GNTAH": 15.398,
   "GNTBH": 2.856,
   "GNTCH": 40.259,
   "GOBCH": 40.259,
   "Course": "MBA"
  },
  {
   "UniversityRegNo": 4105,
   "UniversityName": "GES Department of Management Technoogy N.M.DPG College Of Arts,Commerce,Law& Management,Gondia",
   "UniversityStatus": "Un-Aided",
   "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
   "GOPENH": 36.299,
   "GSCH": 19.382,
   "GOBCH": 13.839,
   "Course": "MBA"
  },
  {
   "UniversityRegNo": 4106,
   "UniversityName": "Shikshan Prasarak Mandal's Dept. of Management Studies,Nabira Mahavidyalaya,Nagpur",
   "UniversityStatus": "Un-Aided",
   "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
   "GOPENH": 40.259,
   "GSCH": 25.878,
   "GSTH": 23.769,
   "GOBCH": 23.769,
   "Course": "MBA"
  },
  {
   "UniversityRegNo": 4107,
   "UniversityName": "Yugantar Education Society's Tripude Institute of Management Education,Nagpur",
   "UniversityStatus": "Un-Aided",
   "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
   "GOPENH": 74.498,
   "GSCH": 69.556,
   "GSTH": 13.839,
   "GNTBH": 72.255,
   "GNTCH": 13.839,
   "GOBCH": 69.556,
   "PWDOPENH": 73.195,
   "Course": "MBA"
  },
  {
   "UniversityRegNo": 4108,
   "UniversityName": "G.S. College of Commerce & Economics Department of Management Sciences And Research,Nagpur",
   "UniversityStatus": "Un-Aided-Linguistuc Minority - HIndi",
   "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
   "GOPENH": 71.218,
   "Course": "MBA"
  },
  {
   "UniversityRegNo": 4109,
   "UniversityName": "vidya sikhan prasarak mandal's central institute of business management Research & Development",
   "UniversityStatus": "Un-Aided",
   "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
   "GOPENH": 42.988,
   "GSCH": 23.769,
   "GSTH": 8.699,
   "GNTBH": 33.113,
   "GNTCH": 13.839,
   "GOBCH": 23.769,
   "Course": "MBA"
  },
  {
   "UniversityRegNo": 4111,
   "UniversityName": "Sarvodaya Shikshan Mandal's Sau Leena Kishor Mamidvar Institute of Management Studies & Research,Chandrapur",
   "UniversityStatus": "Un-Aided",
   "HomeUniversity": "Gondwana University",
   "GOPENH": 50.954,
   "GSCH": 13.839,
   "GSTH": 25.878,
   "GNTAH": 2.856,
   "GNTBH": 19.382,
   "GNTCH": 25.878,
   "GOBCH": 33.113,
   "Course": "MBA"
  },
  {
   "UniversityRegNo": 4112,
   "UniversityName": "Priyadarshini Lokmanya Tilak Institute of Management Studies & Reseach,Nagpur",
   "UniversityStatus": "Un-Aided-Linguistuc Minority - HIndi",
   "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
   "GOPENH": 55.338,
   "Course": "MBA"
  },
  {
   "UniversityRegNo": 4114,
   "UniversityName": "Department of Business Management,C.P.Berar Education Society's College,Nagpur",
   "UniversityStatus": "Un-Aided",
   "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
   "GOPENH": 55.338,
   "GSCH": 44.826,
   "GNTBH": 33.113,
   "GOBCH": 40.259,
   "Course": "MBA"
  },
  {
   "UniversityRegNo": 4118,
   "UniversityName": "Bapurao Deshmukh College of Enginnering,Sevagram",
   "UniversityStatus": "Un-Aided",
   "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
   "GOPENH": 50.954,
   "GSCH": 36.299,
   "GSTH": 44.826,
   "GNTAH": 11.807,
   "GNTBH": 44.826,
   "GNTCH": 23.769,
   "GOBCH": 42.988,
   "Course": "MBA"
  },
  {
   "UniversityRegNo": 4120,
   "UniversityName": "G.H Raisoni Foundation Society ,G.H. Raisoni School of Business Management,Nagpur",
   "UniversityStatus": "Un-Aided-Linguistuc Minority - HIndi",
   "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
   "GOPENH": 63.807,
   "Course": "MBA"
  },
  {
   "UniversityRegNo": 4122,
   "UniversityName": "G.H Raisoni Institute of Management % reasearch,Khaparkheda,Nagur",
   "UniversityStatus": "Un-Aided-Linguistuc Minority - HIndi",
   "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
   "GOPENH": 50.954,
   "Course": "MBA"
  },
  {
   "UniversityRegNo": 4124,
   "UniversityName": "Amar Seva Mandal's Kamla Nehru Mahavidyalaya.Nagpur",
   "UniversityStatus": "Un-Aided",
   "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
   "GOPENH": 46.683,
   "GSCH": 38.272,
   "GSTH": 42.988,
   "GNTBH": 28.248,
   "GOBCH": 36.299,
   "Course": "MBA"
  },
  {
   "UniversityRegNo": 4125,
   "UniversityName": "Green Heaven Institute of Management & Research.Nagpur",
   "UniversityStatus": "Un-Aided",
   "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
   "GOPENH": 46.683,
   "GSCH": 23.769,
   "GNTBH": 25.878,
   "GOBCH": 23.769,
   "Course": "MBA"
  },
  {
   "UniversityRegNo": 4127,
   "UniversityName": "Dhananjayrao Gadgil Institute of Co-operative Management,Nagpur",
   "UniversityStatus": "Government",
   "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
   "GOPENH": 71.218,
   "GSCH": 71.218,
   "GSTH": 17.134,
   "GNTBH": 55.338,
   "GNTCH": 49.157,
   "GOBCH": 67.223,
   "Course": "MBA"
  },
  {
   "UniversityRegNo": 4128,
   "UniversityName": "Ranibai Agnihotri Institute Institute of Computer Information Technology,Wardha",
   "UniversityStatus": "Un-Aided",
   "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
   "GOPENH": 38.272,
   "GSCH": 17.134,
   "GSTH": 21.273,
   "GNTCH": 11.807,
   "GOBCH": 25.878,
   "Course": "MBA"
  },
  {
   "UniversityRegNo": 4129,
   "UniversityName": "Mehmuda Shikshan & Mahila Gramin Vikas Bahuuddeshiya Sanstha's,Central India College of Business Management & Studies",
   "UniversityStatus": "Un-Aided-Linguistuc Minority - Muslim",
   "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
   "GOPENH": 19.382,
   "Course": "MBA"
  },
  {
   "UniversityRegNo": 4130,
   "UniversityName": "Shree Sai Shikshan Sanstha,NIT Graduate School of Management,Nagpur",
   "UniversityStatus": "Un-Aided",
   "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
   "GOPENH": 44.826,
   "GSCH": 28.248,
   "GSTH": 2.856,
   "GNTBH": 25.878,
   "GNTCH": 17.134,
   "GOBCH": 31.03,
   "Course": "MBA"
  },
  {
   "UniversityRegNo": 4132,
   "UniversityName": "Swargiya Shri Laxmanji Motghare Chartiable Trust,Dr.Arun Motghare College of Management,Bhandara",
   "UniversityStatus": "Un-Aided",
   "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
   "GOPENH": 28.248,
   "GSCH": 13.839,
   "GSTH": 8.699,
   "GOBCH": 10.037,
   "Course": "MBA"
  },
  {
   "UniversityRegNo": 4133,
   "UniversityName": "Sanmarg Shikshan Sanstha's Smt. Radhikatai Pandav College of Engineering,Nagpur",
   "UniversityStatus": "Un-Aided",
   "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
   "GOPENH": 38.272,
   "GSCH": 31.03,
   "GSTH": 1.074,
   "GNTAH": 11.807,
   "GNTBH": 38.272,
   "GOBCH": 28.248,
   "Course": "MBA"
  },
  {
   "UniversityRegNo": 4134,
   "UniversityName": "Guru Nanak Institute of Engineering & Technology , Kalmeshwar,Nagpur",
   "UniversityStatus": "Un-Aided",
   "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
   "GOPENH": 36.299,
   "GSCH": 31.03,
   "GSTH": 7.225,
   "GNTBH": 8.699,
   "GOBCH": 25.878,
   "Course": "MBA"
  },
  {
   "UniversityRegNo": 4135,
   "UniversityName": "Amar Seva Mandal's Shree Govindrao Vanjari College of Engineering & Technology, Nagpur                                                        ",
   "UniversityStatus": "Un-Aided",
   "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
   "GOPENH": 2.007,
   "Course": "MBA"
  },
  {
   "UniversityRegNo": 4139,
   "UniversityName": "Samridhi Sarwajanik Charitable Trust, Jhulelal Institute of Technology, Nagpur                                                ",
   "UniversityStatus": "Un-Aided-Linguistuc Minority - Sindhi",
   "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
   "GOPENH": 42.988,
   "Course": "MBA"
  },
  {
   "UniversityRegNo": 4141,
   "UniversityName": "Shriram Gram Vikas Shikshan Sanstha, Vilasrao Deshmukh College of Engineering and Technology, Nagpur",
   "UniversityStatus": "Un-Aided",
   "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
   "GOPENH": 13.839,
   "GSCH": 2.382,
   "GOBCH": 0.481,
   "Course": "MBA"
  },
  {
   "UniversityRegNo": 4143,
   "UniversityName": "Sanmarg Shikshan Sanstha, Mandukarrao Pandav College of Engineering, Bhandara                                                ",
   "UniversityStatus": "Un-Aided",
   "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
   "GOPENH": 53.024,
   "GSCH": 38.272,
   "GSTH": 42.988,
   "GOBCH": 13.839,
   "PWDOPENH": 42.988,
   "Course": "MBA"
  },
  {
   "UniversityRegNo": 4145,
   "UniversityName": "Wainganga College of Engineering and Management, Dongargaon, Nagpur                                        ",
   "UniversityStatus": "Un-Aided",
   "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
   "GOPENH": 31.03,
   "GSCH": 15.398,
   "GNTBH": 21.273,
   "GOBCH": 13.839,
   "Course": "MBA"
  },
  {
   "UniversityRegNo": 4147,
   "UniversityName": "K.D.K College of Enginnering,Nagpur",
   "UniversityStatus": "Un-Aided",
   "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
   "GOPENH": 55.338,
   "GSCH": 49.1575,
   "GSTH": 17.134,
   "GNTBH": 40.259,
   "GOBCH": 50.954,
   "Course": "MBA"
  },
  {
   "UniversityRegNo": 4181,
   "UniversityName": " Swaminarayan Siddhanta Institute Of Technology, Nagpur                                ",
   "UniversityStatus": "Un-Aided",
   "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
   "GOPENH": 53.024,
   "GSCH": 31.03,
   "GSTH": 4.904,
   "GNTBH": 31.03,
   "GNTCH": 2.382,
   "GOBCH": 19.382,
   "Course": "MBA"
  },
  {
   "UniversityRegNo": 4188,
   "UniversityName": "Krushi Jivan Vikas Pratishthan, Ballarpur Institute of Technology, Mouza Bamni                                                ",
   "UniversityStatus": "Un-Aided",
   "HomeUniversity": "Gondwana University",
   "GOPENH": 33.113,
   "GSCH": 3.494,
   "GSTH": 23.769,
   "GNTBH": 23.769,
   "GOBCH": 8.699,
   "Course": "MBA"
  },
  {
   "UniversityRegNo": 4192,
   "UniversityName": "Maitraya Education Society, Nagarjuna Institute of Engineering Technology & Management, Nagpur",
   "UniversityStatus": "Un-Aided",
   "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
   "GOPENH": 19.3821,
   "GSCH": 11.807,
   "GNTBH": 2.007,
   "GOBCH": 2.007,
   "Course": "MBA"
  },
  {
   "UniversityRegNo": 4306,
   "UniversityName": "Real Institute Of Management & Research, Beltarodi, Nagpur                                ",
   "UniversityStatus": "Un-Aided",
   "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
   "GOPENH": 11.807,
   "GSCH": 1.575,
   "GNTBH": 4.117,
   "GOBCH": 0.078,
   "Course": "MBA"
  },
  {
   "UniversityRegNo": 4307,
   "UniversityName": "Renaissance Institute Of Management Studies, Datala New Chandrapur                                        ",
   "UniversityStatus": "Un-Aided",
   "HomeUniversity": "Gondwana University",
   "GOPENH": 44.826,
   "GSCH": 31.03,
   "GSTH": 4.904,
   "GNTBH": 21.273,
   "GNTCH": 10.037,
   "GOBCH": 23.769,
   "Course": "MBA"
  },
  {
   "UniversityRegNo": 4613,
   "UniversityName": "Suryodaya College of Engineering & Techonology , Nagpur",
   "UniversityStatus": "Un-Aided",
   "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
   "GOPENH": 53.024,
   "GSCH": 44.826,
   "GSTH": 46.683,
   "GNTBH": 46.683,
   "GNTCH": 15.398,
   "GOBCH": 48.988,
   "Course": "MBA"
  },
  {
   "UniversityRegNo": 4614,
   "UniversityName": "Shantiniketan Business School,Nagpur",
   "UniversityStatus": "Un-Aided-Linguistic Minority- Hindi",
   "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
   "GOPENH": 19.382,
   "Course": "MBA"
  },
  
    {
     "UniversityRegNo": 1005,
     "UniversityName": "Sant Gadge Baba Amravati University , Amravati",
     "UniversityStatus": "University Department",
     "HomeUniversity": "Sant Gadge Baba Amravati University",
     "GOPENO": 89.647,
     "GSCO": 86.7,
     "GSTO": 53.024,
     "GNTAO": 76.445,
     "GOBCO": 87.637,
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 1101,
     "UniversityName": "Shri Sant Gajanan Maharaj College of Engineering,Shegaon",
     "UniversityStatus": " Un-Aided             ",
     "HomeUniversity": "Sant Gadge Baba Amravati University",
     "GOPENO": 73.195,
     "GSCO": 71.218,
     "GNTBO": 44.826,
     "GNTCO": 50.954,
     "GOBCO": 69.556,
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 1102,
     "UniversityName": "Vidya Bharati Mahavidyalaya Department of Research and PG Studies in Science & Management, Amravati",
     "UniversityStatus": " Un-Aided             ",
     "HomeUniversity": "Sant Gadge Baba Amravati University",
     "GOPENO": 65.541,
     "GSCO": 53.024,
     "GOBCO": 56.885,
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 1105,
     "UniversityName": "Prof. Ram Meghe Institute of Technology & Research, Amravati",
     "UniversityStatus": " Un-Aided             ",
     "HomeUniversity": "Sant Gadge Baba Amravati University",
     "GOPENO": 50.954,
     "GSCO": 40.259,
     "GNTCO": 42.988,
     "GNTDO": 36.299,
     "GOBCO": 31.03,
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 1106,
     "UniversityName": "Hari Kishan Jaju Education Sanstha's,College of Management & Computer Science, Yavatmal",
     "UniversityStatus": " Un-Aided-Linguistic Minority - Marwadi",
     "HomeUniversity": "Sant Gadge Baba Amravati University",
     "GOPENO": 46.683,
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 1107,
     "UniversityName": "P. R. Pote (Patil) Education & Welfare Trust's Group of Institution(Integrated Campus), Amravati",
     "UniversityStatus": " Un-Aided             ",
     "HomeUniversity": "Sant Gadge Baba Amravati University",
     "GOPENO": 46.683,
     "GSCO": 38.272,
     "GOBCO": 28.248,
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 1114,
     "UniversityName": "Sipna Shikshan Prasarak Mandal College of Engineering & Technology, Amravati",
     "UniversityStatus": " Un-Aided             ",
     "HomeUniversity": "Sant Gadge Baba Amravati University",
     "GOPENO": 38.272,
     "GSCO": 11.807,
     "GOBCO": 36.299,
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 1121,
     "UniversityName": "Shri Hanuman Vyayam Prasarak Mandals College of Engineering & Technology, Amravati",
     "UniversityStatus": " Un-Aided             ",
     "HomeUniversity": "Sant Gadge Baba Amravati University",
     "GOPENO": 31.03,
     "GSCO": 3.494,
     "GOBCO": 15.398,
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 2001,
     "UniversityName": "Dr. B. A. M.University Dept. Of Management Science, Aurangabad",
     "UniversityStatus": "University Department",
     "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
     "GOPENO": 84.394,
     "GSCO": 83.084,
     "GSTO": 75.598,
     "GNTAO": 46.683,
     "GOBCO": 80.874,
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 2002,
     "UniversityName": "Dr. Babasaheb Ambedkar Marathwada University, Sub Centre, Osmanabad",
     "UniversityStatus": "University Department",
     "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
     "GOPENO": 55.338,
     "GSCO": 49.157,
     "GNTCO": 38.272,
     "GOBCO": 49.157,
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 2003,
     "UniversityName": "Swami Ramanand Teerth Marathwada University, School of Commerce & Management Science, Nanded",
     "UniversityStatus": "University Department",
     "HomeUniversity": "Swami Ramanand Teerth Marathwada University, Nanded",
     "GOPENO": 71.218,
     "GSCO": 61.058,
     "GSTO": 46.683,
     "GNTAO": 40.259,
     "GOBCO": 65.541,
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 2004,
     "UniversityName": "School of Management, Swami Ramanand Teerth Marathwada University, Sub Centre, Peth, Latur",
     "UniversityStatus": "University Department",
     "HomeUniversity": "Swami Ramanand Teerth Marathwada University, Nanded",
     "GOPENO": 21.273,
     "GOBCO": 11.807,
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 2102,
     "UniversityName": "Rajarshi Shahu Institute of Management, Aurangabad",
     "UniversityStatus": "Un-Aided ",
     "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
     "GOPENO": 42.988,
     "GSCO": 2.856,
     "GNTBO": 0.481,
     "GNTCO": 2.856,
     "GNTDO": 38.272,
     "GOBCO": 17.134,
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 2104,
     "UniversityName": "Aditya College of MBA, Beed",
     "UniversityStatus": "Un-Aided ",
     "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
     "GOPENO": 23.769,
     "GSCO": 0.827,
     "GSTO": 15.398,
     "GNTAO": 19.382,
     "GNTDO": 0.392,
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 2104,
     "UniversityName": "Aditya College of MBA, Beed",
     "UniversityStatus": "Un-Aided ",
     "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
     "GOPENO": 36.299,
     "GSCO": 13.839,
     "GOBCO": 33.113,
     "Course": "MBA( Marketing Management )"
    },
    {
     "UniversityRegNo": 2106,
     "UniversityName": "Lokvikas Educational & Charitable Trust's Marathwada Institute of Management and Research, Aurangabad",
     "UniversityStatus": "Un-Aided ",
     "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
     "GOPENO": 10.03,
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 2108,
     "UniversityName": " Adarsh Shikshan Prasarak Mandal's K.T. Patil College of MBA, Osmanabad",
     "UniversityStatus": "Un-Aided ",
     "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
     "GOPENO": 28.248,
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 2110,
     "UniversityName": "Nirmal Krida and Samaj Prabhodhan Trust, Institute of Management, Badnapur",
     "UniversityStatus": "Un-Aided ",
     "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
     "GOPENO": 38.272,
     "GSCO": 11.807,
     "GNTAO": 17.134,
     "GNTDO": 36.299,
     "GOBCO": 31.03,
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 2112,
     "UniversityName": "Shree Yash Pratishthan, Shreeyash College of Engineering and Technology, Aurangabad",
     "UniversityStatus": "Un-Aided ",
     "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
     "GOPENO": 17.134,
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 2113,
     "UniversityName": "G.S Mandal's Maharashtra Institute of Technology,Aurangabad",
     "UniversityStatus": "Un-Aided-Autonomous",
     "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 2114,
     "UniversityName": "Deogiri Institute of Engineering and Management Studies, Aurangabad",
     "UniversityStatus": "Un-Aided ",
     "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
     "GOPENO": 36.299,
     "GSCO": 10.037,
     "GNTCO": 33.113,
     "GNTDO": 23.769,
     "GOBCO": 19.382,
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 2115,
     "UniversityName": "Sahyog Sevabhavi Santha's Indira Institute of Management Science, Nanded",
     "UniversityStatus": "Un-Aided ",
     "HomeUniversity": "Swami Ramanand Teerth Marathwada University, Nanded",
     "GOPENO": 4.904,
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 2116,
     "UniversityName": "Matoshri Pratishan's Group of Institutions (Integrated Campus), Kupsarwadi , Nanded",
     "UniversityStatus": "Un-Aided ",
     "HomeUniversity": "Swami Ramanand Teerth Marathwada University, Nanded",
     "GOPENO": 4.904,
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 2119,
     "UniversityName": "Shree Sharda Bhavan Education Society's Institute of Technology & Management, Nanded",
     "UniversityStatus": "Un-Aided ",
     "HomeUniversity": "Swami Ramanand Teerth Marathwada University, Nanded",
     "GOPENO": 6.229,
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 2136,
     "UniversityName": "Aditya Engineering College , Beed",
     "UniversityStatus": "Un-Aided ",
     "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
     "GOPENO": 1.074,
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 2138,
     "UniversityName": "Matsyodari Shikshan Sansatha's College of Engineering and Technology, Jalna",
     "UniversityStatus": "Un-Aided ",
     "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
     "GOPENO": 19.382,
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 2256,
     "UniversityName": "Foster Development School of Management, Aurangabad",
     "UniversityStatus": "Un-Aided ",
     "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
     "GOPENO": 55.338,
     "GOBCO": 49.457,
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 2259,
     "UniversityName": "Shri Sai Institute of Management & Research, Aurangabad",
     "UniversityStatus": "Un-Aided ",
     "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
     "GOPENO": 3.494,
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 2516,
     "UniversityName": "International Centre Of Excellence In Engineering and Management (ICEEM)",
     "UniversityStatus": "Un-Aided ",
     "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
     "GOPENO": 2.382,
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 2520,
     "UniversityName": "D. B. Institute Of Management & Research, Mouza-Mahalngra,Ta.Chakur,Dist.Latur",
     "UniversityStatus": "Un-Aided ",
     "HomeUniversity": "Swami Ramanand Teerth Marathwada University, Nanded",
     "GOPENO": 1.575,
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 2569,
     "UniversityName": "Suraj Institute of Management, Beed",
     "UniversityStatus": "Un-Aided ",
     "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
     "GOPENO": 21.273,
     "GSCO": 2.382,
     "GOBCO": 1.575,
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 2569,
     "UniversityName": "Suraj Institute of Management, Beed",
     "UniversityStatus": "Un-Aided ",
     "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
     "GOPENO": 31.03,
     "GSCO": 13.839,
     "Course": "MBA( Human Resource Management )"
    },
    {
     "UniversityRegNo": 2569,
     "UniversityName": "Suraj Institute of Management, Beed",
     "UniversityStatus": "Un-Aided ",
     "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
     "Course": "MBA( Marketing Management )"
    },
    {
     "UniversityRegNo": 2570,
     "UniversityName": "Mitthulalji Sarda MBA College, Beed",
     "UniversityStatus": "Un-Aided ",
     "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
     "GOPENO": 40.059,
     "GSCO": 31.03,
     "GSTO": 6.229,
     "GNTDO": 1.575,
     "GOBCO": 6.229,
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 2570,
     "UniversityName": "Mitthulalji Sarda MBA College, Beed",
     "UniversityStatus": "Un-Aided ",
     "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
     "GOPENO": 2.856,
     "Course": "MBA( Marketing Management )"
    },
    {
     "UniversityRegNo": 2570,
     "UniversityName": "Mitthulalji Sarda MBA College, Beed",
     "UniversityStatus": "Un-Aided ",
     "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
     "GOPENO": 11.807,
     "GOBCO": 11.807,
     "Course": "MBA( Finance )"
    },
    {
     "UniversityRegNo": 2571,
     "UniversityName": "Kishori College of M.B.A., Beed",
     "UniversityStatus": "Un-Aided ",
     "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
     "GOPENO": 42.988,
     "GSCO": 36.299,
     "GSTO": 15.398,
     "GNTDO": 38.272,
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 2571,
     "UniversityName": "Kishori College of M.B.A., Beed",
     "UniversityStatus": "Un-Aided ",
     "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
     "GOPENO": 21.273,
     "GNTAO": 2.856,
     "Course": "MBA( Marketing Management )"
    },
    {
     "UniversityRegNo": 2571,
     "UniversityName": "Kishori College of M.B.A., Beed",
     "UniversityStatus": "Un-Aided ",
     "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
     "GOPENO": 15.398,
     "GSCO": 11.807,
     "GNTBO": 7.225,
     "Course": "MBA( Finance )"
    },
    {
     "UniversityRegNo": 2622,
     "UniversityName": "Jay Bhavani Institute of Management, Badnapur, Jalna",
     "UniversityStatus": "Un-Aided ",
     "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
     "GOPENO": 11.807,
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 2623,
     "UniversityName": "Shreeyash Institute of Management Studies and Research, Aurangabad",
     "UniversityStatus": "Un-Aided ",
     "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
     "GOPENO": 4.904,
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 2624,
     "UniversityName": "- U. D. Pathrikar Institute of Management, At.Post Pathri, Aurangabad",
     "UniversityStatus": "Un-Aided ",
     "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
     "GOPENO": 31.03,
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 3001,
     "UniversityName": "Jamnalal Bajaj Institute of Management Studies, Mumbai",
     "UniversityStatus": "University Department-Autonomous",
     "HomeUniversity": "Mumbai University",
     "Course": "MMS"
    },
    {
     "UniversityRegNo": 3002,
     "UniversityName": "Sydenham Institute of Management Studies & Research & Entrepreneurship Education(SIMSREE), Mumbai",
     "UniversityStatus": "Government",
     "HomeUniversity": "Mumbai University",
     "GOPENO": 99.841,
     "GSCO": 99.446,
     "GSTO": 97.263,
     "GNTAO": 99.527,
     "GNTBO": 99.789,
     "GNTCO": 99.683,
     "GOBCO": 99.744,
     "Course": "MMS"
    },
    {
     "UniversityRegNo": 3003,
     "UniversityName": "Alkesh Dinesh Modi Institute for Financial & Management Studies, Mumbai",
     "UniversityStatus": "University Department",
     "HomeUniversity": "Mumbai University",
     "GOPENO": 96.939,
     "GSCO": 96.061,
     "GSTO": 85.119,
     "GNTBO": 95.387,
     "GNTCO": 95.144,
     "GOBCO": 96.492,
     "Course": "MMS"
    },
    {
     "UniversityRegNo": 3004,
     "UniversityName": "Jankidevi Bajaj Institute of Management Studies, Santacruz, Mumbai",
     "UniversityStatus": "University Managed",
     "HomeUniversity": "SNDT Women's University",
     "Course": "MMS"
    },
    {
     "UniversityRegNo": 3033,
     "UniversityName": "Dr. Babasaheb Ambedkar Technological University, Lonere",
     "UniversityStatus": "University Managed",
     "HomeUniversity": "Dr. Babasaheb Ambedkar Technological University, Lonere",
     "Course": "MBA - Innovation , Enterpreneurship and Venture Development ( IEV )"
    },
    {
     "UniversityRegNo": 3101,
     "UniversityName": "Bharti Vidyapeeth's Institute of Management Studies & Research, Navi Mumbai",
     "UniversityStatus": "Un-Aided ",
     "HomeUniversity": "Mumbai University",
     "GOPENO": 94.905,
     "GSCO": 94.358,
     "GSTO": 81.442,
     "GNTAO": 91.197,
     "GNTCO": 92.816,
     "GNTDO": 92.816,
     "GOBCO": 94.13,
     "Course": "MMS"
    },
    {
     "UniversityRegNo": 3102,
     "UniversityName": "Chetana's Ramprasad Khandelwal Institute of Management & Research, Mumbai",
     "UniversityStatus": "Un-Aided ",
     "HomeUniversity": "Mumbai University",
     "GOPENO": 98.99,
     "GSCO": 97.999,
     "GSTO": 95.144,
     "GNTAO": 98.836,
     "GNTBO": 98.449,
     "GNTCO": 98.99,
     "GNTDO": 97.786,
     "GOBCO": 98.758,
     "Course": "MMS"
    },
    {
     "UniversityRegNo": 3104,
     "UniversityName": "Lala Lajpatrai Institute of Management, Mumbai",
     "UniversityStatus": "Un-Aided-Linguistic Minority - Punjabi",
     "HomeUniversity": "Mumbai University",
     "GOPENO": 98.155,
     "Course": "MMS"
    },
    {
     "UniversityRegNo": 3105,
     "UniversityName": "Mahatma Gandhi Mission's Institute of Management Studies & Research, Kamothe",
     "UniversityStatus": "Un-Aided ",
     "HomeUniversity": "Mumbai University",
     "GOPENO": 88.751,
     "GSCO": 85.956,
     "GSTO": 86.7,
     "GNTAO": 74.498,
     "GNTCO": 79.963,
     "GOBCO": 85.956,
     "Course": "MMS"
    },
    {
     "UniversityRegNo": 3106,
     "UniversityName": "MET's Institute of Management, Mumbai",
     "UniversityStatus": "Un-Aided ",
     "HomeUniversity": "Mumbai University",
     "GOPENO": 98.565,
     "GSCO": 97.592,
     "GSTO": 92.498,
     "GNTAO": 98.449,
     "GNTBO": 98.228,
     "GNTCO": 98.565,
     "GNTDO": 96.603,
     "GOBCO": 98.348,
     "Course": "MMS"
    },
    {
     "UniversityRegNo": 3107,
     "UniversityName": "Prin. L. N. Welingkar Institute of Management Development & Research, Mumbai",
     "UniversityStatus": "Un-Aided-Autonomous",
     "HomeUniversity": "Mumbai University",
     "Course": "MMS"
    },
    {
     "UniversityRegNo": 3108,
     "UniversityName": "Rizvi Institute of Management Studies & Research, Mumbai",
     "UniversityStatus": "Un-Aided-Religious Minority - Muslim",
     "HomeUniversity": "Mumbai University",
     "GOPENO": 97.592,
     "Course": "MMS"
    },
    {
     "UniversityRegNo": 3109,
     "UniversityName": "S.I.E.S. College of Management Studies, Mumbai",
     "UniversityStatus": "Un-Aided-Linguistic Minority - Tamil",
     "HomeUniversity": "Mumbai University",
     "GOPENO": 99.179,
     "Course": "MMS"
    },
    {
     "UniversityRegNo": 3110,
     "UniversityName": "Vivekanand Education Society's Institute of Management Studies & Research, Mumbai",
     "UniversityStatus": "Un-Aided-Linguistic Minority - Sindhi",
     "HomeUniversity": "Mumbai University",
     "GOPENO": 96.939,
     "Course": "MMS"
    },
    {
     "UniversityRegNo": 3113,
     "UniversityName": "Maratha Mandir's Babasaheb Gawde Institute of Management Studies, Mumbai",
     "UniversityStatus": "Un-Aided ",
     "HomeUniversity": "Mumbai University",
     "GOPENO": 87.188,
     "GSCO": 78.977,
     "GSTO": 8.699,
     "GNTAO": 62.974,
     "GNTCO": 86.7,
     "GNTDO": 71.218,
     "GOBCO": 80.874,
     "Course": "MMS"
    },
    {
     "UniversityRegNo": 3114,
     "UniversityName": "Mahatma Education Society's Pillai's Institute of Management Studies & Research, New Panvel",
     "UniversityStatus": "Un-Aided-Linguistic Minority - Malyalam",
     "HomeUniversity": "Mumbai University",
     "GOPENO": 82.254,
     "Course": "MMS"
    },
    {
     "UniversityRegNo": 3115,
     "UniversityName": "- Anjuman-I-Islam's Allana Institute of Management Studies, Mumbai",
     "UniversityStatus": "Un-Aided-Religious Minority - Muslim",
     "HomeUniversity": "Mumbai University",
     "GOPENO": 69.556,
     "Course": "MMS"
    },
    {
     "UniversityRegNo": 3116,
     "UniversityName": "Agnel Charities Agnel Seva Sangha's Fr. C. Rodrigues Inst. of Management. Studies, Vashi, Navi Mumbai",
     "UniversityStatus": "Un-Aided-Religious Minority - Christian",
     "HomeUniversity": "Mumbai University",
     "GOPENO": 95.144,
     "Course": "MMS"
    },
    {
     "UniversityRegNo": 3117,
     "UniversityName": "Gurunanak Institute of Management Studies, Mumbai",
     "UniversityStatus": "Un-Aided-Religious Minority - Sikh",
     "HomeUniversity": "Mumbai University",
     "GOPENO": 93.963,
     "Course": "MMS"
    },
    {
     "UniversityRegNo": 3118,
     "UniversityName": "Zagdu Singh Chartitable Trust's Thakur Institute of Management Studies & Research, Mumbai",
     "UniversityStatus": "Un-Aided-Linguistic Minority - Hindi",
     "HomeUniversity": "Mumbai University",
     "GOPENO": 97.592,
     "Course": "MMS"
    },
    {
     "UniversityRegNo": 3119,
     "UniversityName": "St. Francis Institute of Management & Research, Mumbai",
     "UniversityStatus": "Un-Aided-Religious Minority - Christian",
     "HomeUniversity": "Mumbai University",
     "GOPENO": 95.611,
     "Course": "MMS"
    },
    {
     "UniversityRegNo": 3120,
     "UniversityName": "Atharva Educational Trust, Atharva Institute of Management Studies, Mumbai",
     "UniversityStatus": "Un-Aided ",
     "HomeUniversity": "Mumbai University",
     "GOPENO": 93.366,
     "GSCO": 92.816,
     "GSTO": 91.469,
     "GNTAO": 88.234,
     "GNTBO": 92.247,
     "GNTCO": 91.85,
     "GOBCO": 92.498,
     "Course": "MMS"
    },
    {
     "UniversityRegNo": 3121,
     "UniversityName": "Sahajeevan Shikshan Sanstha's Madanbhai Sura Institute of Business Management, Khed Dist. Ratnagiri",
     "UniversityStatus": "Un-Aided ",
     "HomeUniversity": "Mumbai University",
     "GOPENO": 44.826,
     "GSCO": 36.299,
     "Course": "MMS"
    },
    {
     "UniversityRegNo": 3123,
     "UniversityName": "Parle Tilak Vidyalaya Asso.'s Institute of Management, Mumbai",
     "UniversityStatus": "Un-Aided ",
     "HomeUniversity": "Mumbai University",
     "GOPENO": 88.751,
     "GSCO": 87.188,
     "GSTO": 44.826,
     "GNTBO": 83.084,
     "GNTDO": 83.084,
     "GOBCO": 87.637,
     "Course": "MMS"
    },
    {
     "UniversityRegNo": 3123,
     "UniversityName": "Parle Tilak Vidyalaya Asso.'s Institute of Management, Mumbai",
     "UniversityStatus": "Un-Aided ",
     "HomeUniversity": "Mumbai University",
     "GOPENO": 85.956,
     "GSCO": 85.956,
     "GOBCO": 85.956,
     "Course": "MBA - Innovation , Enterpreneurship and Venture Development ( IEV )"
    },
    {
     "UniversityRegNo": 3127,
     "UniversityName": "NCRD's Sterling Institute of Management Studies, Navi Mumbai",
     "UniversityStatus": "Un-Aided ",
     "HomeUniversity": "Mumbai University",
     "GOPENO": 78.329,
     "GSCO": 72.255,
     "GNTBO": 55.338,
     "GNTCO": 77.553,
     "GNTDO": 49.157,
     "GOBCO": 72.255,
     "Course": "MMS"
    },
    {
     "UniversityRegNo": 3128,
     "UniversityName": "Mandar Education Society's Rajaram Shinde College of Master of Business Adminstration, Chiplun",
     "UniversityStatus": "Un-Aided ",
     "HomeUniversity": "Mumbai University",
     "GOPENO": 44.826,
     "GSCO": 31.03,
     "GOBCO": 21.273,
     "Course": "MMS"
    },
    {
     "UniversityRegNo": 3130,
     "UniversityName": "VPM's Dr. V.N. Bedekar Institute Of Management Studies, Mumbai",
     "UniversityStatus": "Un-Aided ",
     "HomeUniversity": "Mumbai University",
     "GOPENO": 67.223,
     "GSCO": 61.058,
     "GSTO": 58.426,
     "GNTBO": 49.157,
     "GNTCO": 36.299,
     "GNTDO": 58.426,
     "GOBCO": 46.683,
     "Course": "MMS"
    },
    {
     "UniversityRegNo": 3131,
     "UniversityName": "Hashmatrai and Gangaram Himathmal Mansukhani Institute of Management, Ulhasnagar, Thane",
     "UniversityStatus": "Un-Aided-Linguistic Minority - Sindhi",
     "HomeUniversity": "Mumbai University",
     "GOPENO": 44.826,
     "Course": "MMS"
    },
    {
     "UniversityRegNo": 3133,
     "UniversityName": "Swayamsiddhi Mitra Sangh's College of Management & Research, Thane",
     "UniversityStatus": "Un-Aided ",
     "HomeUniversity": "Mumbai University",
     "GOPENO": 19.382,
     "GSCO": 11.807,
     "GNTBO": 11.807,
     "Course": "MMS"
    },
    {
     "UniversityRegNo": 3134,
     "UniversityName": "Bombay St. Xavier College Soc.'s Xavier Institute of Management & Research, Mumbai",
     "UniversityStatus": "Un-Aided-Religious Minority - Roman Catholics",
     "HomeUniversity": "Mumbai University",
     "GOPENO": 99.179,
     "Course": "MMS"
    },
    {
     "UniversityRegNo": 3136,
     "UniversityName": "Oriental Education Society Oriental Institute of Management, Navi Mumbai",
     "UniversityStatus": "Un-Aided-Linguistic Minority - Hindi",
     "HomeUniversity": "Mumbai University",
     "GOPENO": 40.259,
     "Course": "MMS"
    },
    {
     "UniversityRegNo": 3139,
     "UniversityName": "Vidyalankar Institute of Technology,Wadala, Mumbai",
     "UniversityStatus": "Un-Aided-Autonomous",
     "HomeUniversity": "Mumbai University",
     "Course": "MMS"
    },
    {
     "UniversityRegNo": 3146,
     "UniversityName": "Jawahar Education Society's Annasaheb Chudaman Patil College of Engineering,Kharghar, Navi Mumbai",
     "UniversityStatus": "Un-Aided ",
     "HomeUniversity": "Mumbai University",
     "GOPENO": 28.248,
     "GSCO": 23.769,
     "GNTCO": 23.769,
     "GOBCO": 25.878,
     "Course": "MMS"
    },
    {
     "UniversityRegNo": 3149,
     "UniversityName": "Shree Shankar Narayan Education Trust's Rohidas Patil Institute of Management Studies, Bhayandar",
     "UniversityStatus": "Un-Aided ",
     "HomeUniversity": "Mumbai University",
     "GOPENO": 49.157,
     "Course": "MMS"
    },
    {
     "UniversityRegNo": 3151,
     "UniversityName": "Vishweshwar Education Society's Indira Institute of Business Management, Navi Mumbai",
     "UniversityStatus": "Un-Aided ",
     "HomeUniversity": "Mumbai University",
     "GOPENO": 84.394,
     "GSCO": 65.541,
     "GSTO": 38.272,
     "GNTDO": 74.498,
     "GOBCO": 78.329,
     "Course": "MMS"
    },
    {
     "UniversityRegNo": 3153,
     "UniversityName": "Humera Khan Institute Of Mangement Studies & Reserch, Mumbai",
     "UniversityStatus": "Un-Aided-Linguistic Minority - Hindi",
     "HomeUniversity": "Mumbai University",
     "GOPENO": 33.113,
     "Course": "MMS"
    },
    {
     "UniversityRegNo": 3155,
     "UniversityName": "SYCSPM'S Sinhgad Institute of Business Management, Chandivali, Powai, Mumbai",
     "UniversityStatus": "Un-Aided ",
     "HomeUniversity": "Mumbai University",
     "GOPENO": 67.971,
     "GSCO": 62.974,
     "GNTDO": 61.058,
     "GOBCO": 19.382,
     "Course": "MMS"
    },
    {
     "UniversityRegNo": 3157,
     "UniversityName": "Shree Ghatkopar Sarvajanik Jivdaya Khatur's Aruna Manharlal Shah Institute of Management & Research, Ghatkopar",
     "UniversityStatus": "Un-Aided ",
     "HomeUniversity": "Mumbai University",
     "GOPENO": 36.299,
     "GSCO": 11.807,
     "Course": "MMS"
    },
    {
     "UniversityRegNo": 3158,
     "UniversityName": "Saket Gyanpeeth's, Saket College of management, Kalyan",
     "UniversityStatus": "Un-Aided-Linguistic Minority - Hindi",
     "HomeUniversity": "Mumbai University",
     "GOPENO": 0.596,
     "Course": "MMS"
    },
    {
     "UniversityRegNo": 3159,
     "UniversityName": "JNIESTR's,Rajeev Gandhi College of Management Studies, Navi Mumbai",
     "UniversityStatus": "Un-Aided ",
     "HomeUniversity": "Mumbai University",
     "GOPENO": 33.113,
     "GSCO": 4.117,
     "GOBCO": 3.494,
     "Course": "MMS"
    },
    {
     "UniversityRegNo": 3160,
     "UniversityName": "Mahatma Edu.Soc.'s Pillai's HOC Institute of Management Studies & Research, Khalapur Dist. Raigadh",
     "UniversityStatus": "Un-Aided-Linguistic Minority - Malyalam",
     "HomeUniversity": "Mumbai University",
     "GOPENO": 40.259,
     "Course": "MMS"
    },
    {
     "UniversityRegNo": 3161,
     "UniversityName": "Viva Institute of Management and Research (Viva School of Management and Research)",
     "UniversityStatus": "Un-Aided ",
     "HomeUniversity": "Mumbai University",
     "GOPENO": 11.807,
     "Course": "MMS"
    },
    {
     "UniversityRegNo": 3173,
     "UniversityName": "Deccan Education Society's Navinchandra Mehta Institute of Technology & Development, Dadar, Mumbai",
     "UniversityStatus": "Un-Aided ",
     "HomeUniversity": "Mumbai University",
     "GOPENO": 76.445,
     "GSCO": 74.498,
     "GNTCO": 62.974,
     "GOBCO": 74.498,
     "Course": "MMS"
    },
    {
     "UniversityRegNo": 3202,
     "UniversityName": "Rajendra Mane College of Engineering & Technology Ambav Deorukh",
     "UniversityStatus": "Un-Aided ",
     "HomeUniversity": "Mumbai University",
     "GOPENO": 13.839,
     "Course": "MMS"
    },
    {
     "UniversityRegNo": 3210,
     "UniversityName": "Excelsior Education Society's K.C. College of Engineering and Management Studies and Research, Kopri, Thane (E)",
     "UniversityStatus": "Un-Aided-Linguistic Minority - Punjabi",
     "HomeUniversity": "Mumbai University",
     "GOPENO": 36.299,
     "Course": "MMS"
    },
    {
     "UniversityRegNo": 3217,
     "UniversityName": "Vighnaharata Trust's Shivajirao S. Jondhale College of Engineering & Technology, Shahapur, Asangaon, Dist Thane",
     "UniversityStatus": "Un-Aided ",
     "HomeUniversity": "Mumbai University",
     "GOPENO": 36.299,
     "Course": "MMS"
    },
    {
     "UniversityRegNo": 3218,
     "UniversityName": "Aldel Education Trust's St. John College of Engineering & Management, Vevoor, Palghar",
     "UniversityStatus": "Un-Aided-Religious Minority - Christian",
     "HomeUniversity": "Mumbai University",
     "GOPENO": 90.037,
     "Course": "MMS"
    },
    {
     "UniversityRegNo": 3219,
     "UniversityName": "Koti Vidya Charitable Trust's Smt. Alamuri Ratnamala Institute of Engineering and Technology, Sapgaon, Tal. Shahapur",
     "UniversityStatus": "Un-Aided-Linguistic Minority - Hindi",
     "HomeUniversity": "Mumbai University",
     "GOPENO": 21.273,
     "Course": "MMS"
    },
    {
     "UniversityRegNo": 3350,
     "UniversityName": "Durgadevi Saraf Institute of Management Studies, Malad (W), Mumbai",
     "UniversityStatus": "Un-Aided-Linguistic Minority - Hindi",
     "HomeUniversity": "Mumbai University",
     "GOPENO": 94.13,
     "Course": "MMS"
    },
    {
     "UniversityRegNo": 3354,
     "UniversityName": "Kohinoor Business School, Kurla (West), Mumbai",
     "UniversityStatus": "Un-Aided ",
     "HomeUniversity": "Mumbai University",
     "GOPENO": 82.254,
     "GSCO": 76.445,
     "GSTO": 31.03,
     "GNTCO": 69.556,
     "GOBCO": 73.195,
     "Course": "MMS"
    },
    {
     "UniversityRegNo": 3357,
     "UniversityName": "S A V Acharya Institute of Management Studies, Shelu, Tal. Karjat",
     "UniversityStatus": "Un-Aided ",
     "HomeUniversity": "Mumbai University",
     "GOPENO": 1.575,
     "Course": "MMS"
    },
    {
     "UniversityRegNo": 3358,
     "UniversityName": "SAS Institute of Management Studies, Boisar Dist. Thane",
     "UniversityStatus": "Un-Aided ",
     "HomeUniversity": "Mumbai University",
     "GOPENO": 15.398,
     "Course": "MMS"
    },
    {
     "UniversityRegNo": 3359,
     "UniversityName": "SASMIRA's Institute of Management Studies & Research, Worli, Mumbai",
     "UniversityStatus": "Un-Aided ",
     "HomeUniversity": "Mumbai University",
     "GOPENO": 83.084,
     "GSCO": 79.963,
     "GSTO": 69.556,
     "GNTAO": 42.988,
     "GNTBO": 80.874,
     "GNTCO": 80.874,
     "GOBCO": 78.329,
     "Course": "MMS"
    },
    {
     "UniversityRegNo": 3360,
     "UniversityName": "GNVS Institute of Management, Sion-Koliwada(E), Mumbai",
     "UniversityStatus": "Un-Aided ",
     "HomeUniversity": "Mumbai University",
     "GOPENO": 42.988,
     "GSCO": 15.398,
     "GNTBO": 42.988,
     "GOBCO": 25.878,
     "Course": "MMS"
    },
    {
     "UniversityRegNo": 3419,
     "UniversityName": "Sir M Visvesvaraya Institute of Management Studies & Research, Wadala, Mumbai",
     "UniversityStatus": "Un-Aided-Linguistic Minority - Kannada",
     "HomeUniversity": "Mumbai University",
     "GOPENO": 77.553,
     "Course": "MMS"
    },
    {
     "UniversityRegNo": 3437,
     "UniversityName": "Sahyadri Institute of Management & Research, Sawarde.",
     "UniversityStatus": "Un-Aided ",
     "HomeUniversity": "Mumbai University",
     "GOPENO": 38.272,
     "Course": "MMS"
    },
    {
     "UniversityRegNo": 3438,
     "UniversityName": "Aditya Institute of Management Studies & Research, Borivali",
     "UniversityStatus": "Un-Aided-Linguistic Minority - Hindi",
     "HomeUniversity": "Mumbai University",
     "GOPENO": 85.119,
     "Course": "MMS"
    },
    {
     "UniversityRegNo": 3443,
     "UniversityName": "Sheila Raheja School of Business Management & Research,Bandra(E),Mumbai",
     "UniversityStatus": "Un-Aided",
     "HomeUniversity": "Mumbai University",
     "GOPENO": 90.037,
     "GSCO": 88.234,
     "GNTAO": 87.637,
     "GNTCO": 83.084,
     "GNTDO": 87.637,
     "GOBCO": 88.751,
     "Course": "MMS"
    },
    {
     "UniversityRegNo": 3446,
     "UniversityName": "Kala Vidyalaya Trust,Kala Institute of Management Studies & Research,Kandivali",
     "UniversityStatus": "Un-Aided",
     "HomeUniversity": "Mumbai University",
     "GOPENO": 44.826,
     "GSCO": 2.007,
     "Course": "MMS"
    },
    {
     "UniversityRegNo": 3452,
     "UniversityName": "Matoshri. Ushatai Jadhav Institute of Management studies & Research Centre,Bhivandi",
     "UniversityStatus": "Un-Aided",
     "HomeUniversity": "Mumbai University",
     "GOPENO": 1.575,
     "Course": "MMS"
    },
    {
     "UniversityRegNo": 3529,
     "UniversityName": "Smt Parmeshwaridevi Durgadutt Tibrewala Institute of Management and Research",
     "UniversityStatus": "Un-Aided-Linguistic Minority - Hindi",
     "HomeUniversity": "Mumbai University",
     "GOPENO": 62.974,
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 3530,
     "UniversityName": "M.S College of Management,Devghar Vada",
     "UniversityStatus": "Un-Aided-Religious Minority- Muslim",
     "HomeUniversity": "Mumbai University",
     "GOPENO": 4.904,
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 4001,
     "UniversityName": "Department of Business Management,Rashtrasant Tukadoji Maharaj Nagpur University,Nagpur",
     "UniversityStatus": "University Department",
     "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
     "GOPENO": 94.13,
     "GSCO": 93.366,
     "GSTO": 82.254,
     "GNTAO": 81.442,
     "GOBCO": 92.498,
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 4024,
     "UniversityName": "Gondwana University Department of Management",
     "UniversityStatus": "University Department",
     "HomeUniversity": "Gondwana University",
     "GOPENO": 42.988,
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 4101,
     "UniversityName": "Shree Shivaji Education Society , Dr.Panjabrao Deshmukh Institute of Management Technology & Research, Nagpur",
     "UniversityStatus": "Un-Aided",
     "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
     "GOPENO": 55.338,
     "GSCO": 46.683,
     "GSTO": 31.03,
     "GNTBO": 49.157,
     "GNTCO": 38.272,
     "GOBCO": 49.157,
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 4102,
     "UniversityName": "Param Poojya Dr.Babasaheb Ambedkar Smarak Samiti Dr.Ambedkar Department of Management Studies & Research,Nagpur",
     "UniversityStatus": "Un-Aided",
     "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
     "GOPENO": 80.874,
     "GSCO": 73.195,
     "GSTO": 42.988,
     "GNTAO": 42.988,
     "GNTBO": 6.058,
     "GNTCO": 49.157,
     "GNTDO": 65.541,
     "GOBCO": 75.598,
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 4103,
     "UniversityName": "Department of Management Science & Research J.M.Patel College,Bhandara",
     "UniversityStatus": "Un-Aided",
     "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
     "GOPENO": 4.117,
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 4105,
     "UniversityName": "GES Department of Management Technoogy N.M.DPG College Of Arts,Commerce,Law& Management,Gondia",
     "UniversityStatus": "Un-Aided",
     "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
     "GOPENO": 19.382,
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 4106,
     "UniversityName": "Shikshan Prasarak Mandal's Dept. of Management Studies,Nabira Mahavidyalaya,Nagpur",
     "UniversityStatus": "Un-Aided",
     "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
     "GOPENO": 42.988,
     "GSCO": 31.03,
     "GNTBO": 17.134,
     "GOBCO": 33.113,
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 4107,
     "UniversityName": "Yugantar Education Society's Tripude Institute of Management Education,Nagpur",
     "UniversityStatus": "Un-Aided",
     "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
     "GOPENO": 58.426,
     "GSCO": 46.683,
     "GSTO": 21.273,
     "GNTAO": 50.954,
     "GNTBO": 33.113,
     "GNTCO": 21.273,
     "GOBCO": 50.954,
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 4108,
     "UniversityName": "G.S. College of Commerce & Economics Department of Management Sciences And Research,Nagpur",
     "UniversityStatus": "Un-Aided-Linguistuc Minority - HIndi",
     "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
     "GOPENO": 58.426,
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 4109,
     "UniversityName": "Datta Meghe Institute of Management Studies,Nagpur",
     "UniversityStatus": "Un-Aided",
     "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 4110,
     "UniversityName": "vidya sikhan prasarak mandal's central institute of business management Research & Development",
     "UniversityStatus": "Un-Aided",
     "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
     "GOPENO": 21.273,
     "GSCO": 4.117,
     "GNTCO": 19.382,
     "GOBCO": 19.382,
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 4111,
     "UniversityName": "Sarvodaya Shikshan Mandal's Sau Leena Kishor Mamidvar Institute of Management Studies & Research,Chandrapur",
     "UniversityStatus": "Un-Aided",
     "HomeUniversity": "Gondwana University",
     "GOPENO": 40.259,
     "GSCO": 6.229,
     "GNTBO": 4.117,
     "GOBCO": 10.037,
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 4112,
     "UniversityName": "Priyadarshini Lokmanya Tilak Institute of Management Studies & Reseach,Nagpur",
     "UniversityStatus": "Un-Aided-Linguistuc Minority - HIndi",
     "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
     "GOPENO": 46.683,
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 4114,
     "UniversityName": "Department of Business Management,C.P.Berar Education Society's College,Nagpur",
     "UniversityStatus": "Un-Aided",
     "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
     "GOPENO": 58.426,
     "GSCO": 42.988,
     "GOBCO": 42.988,
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 4115,
     "UniversityName": "Shri Ramdeobaba College of Engineering and Management, Nagpur ",
     "UniversityStatus": "Un-Aided-Linguistuc Minority - HIndi",
     "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 4116,
     "UniversityName": "Ankush Shikshan Sanstha's G.H.Raisoni College of Engineering, Nagpur                                   ",
     "UniversityStatus": "Un-Aided-Linguistuc Minority - HIndi",
     "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 4118,
     "UniversityName": "Bapurao Deshmukh College of Enginnering,Sevagram",
     "UniversityStatus": "Un-Aided",
     "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
     "GOPENO": 23.769,
     "GSCO": 10.037,
     "GOBCO": 21.273,
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 4120,
     "UniversityName": "G.H Raisoni Foundation Society ,G.H. Raisoni School of Business Management,Nagpur",
     "UniversityStatus": "Un-Aided-Linguistuc Minority - HIndi",
     "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
     "GOPENO": 53.024,
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 4122,
     "UniversityName": "G.H Raisoni Institute of Management % reasearch,Khaparkheda,Nagur",
     "UniversityStatus": "Un-Aided-Linguistuc Minority - HIndi",
     "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
     "GOPENO": 36.299,
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 4124,
     "UniversityName": "Amar Seva Mandal's Kamla Nehru Mahavidyalaya.Nagpur",
     "UniversityStatus": "Un-Aided",
     "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
     "GSCO": 21.273,
     "GOBCO": 17.134,
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 4125,
     "UniversityName": "Green Heaven Institute of Management & Research.Nagpur",
     "UniversityStatus": "Un-Aided",
     "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
     "GOPENO": 25.878,
     "GSCO": 10.037,
     "GSTO": 21.273,
     "GOBCO": 7.225,
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 4127,
     "UniversityName": "Dhananjayrao Gadgil Institute of Co-operative Management,Nagpur",
     "UniversityStatus": "Government",
     "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
     "GOPENO": 85.322,
     "GSCO": 83.084,
     "GOBCO": 85.119,
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 4128,
     "UniversityName": "Ranibai Agnihotri Institute Institute of Computer Information Technology,Wardha",
     "UniversityStatus": "Un-Aided",
     "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
     "GOPENO": 49.157,
     "GSCO": 36.299,
     "GSTO": 8.699,
     "GOBCO": 42.988,
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 4129,
     "UniversityName": "Mehmuda Shikshan & Mahila Gramin Vikas Bahuuddeshiya Sanstha's,Central India College of Business Management & Studies",
     "UniversityStatus": "Un-Aided-Linguistuc Minority - Muslim",
     "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
     "GOPENO": 31.03,
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 4130,
     "UniversityName": "Shree Sai Shikshan Sanstha,NIT Graduate School of Management,Nagpur",
     "UniversityStatus": "Un-Aided",
     "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
     "GOPENO": 40.259,
     "GSCO": 33.113,
     "GOBCO": 15.398,
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 4132,
     "UniversityName": "Swargiya Shri Laxmanji Motghare Chartiable Trust,Dr.Arun Motghare College of Management,Bhandara",
     "UniversityStatus": "Un-Aided",
     "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
     "GOPENO": 8.699,
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 4133,
     "UniversityName": "Sanmarg Shikshan Sanstha's Smt. Radhikatai Pandav College of Engineering,Nagpur",
     "UniversityStatus": "Un-Aided",
     "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
     "GOPENO": 28.248,
     "GSCO": 13.839,
     "GNTCO": 8.699,
     "GOBCO": 2.007,
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 4134,
     "UniversityName": "Guru Nanak Institute of Engineering & Technology , Kalmeshwar,Nagpur",
     "UniversityStatus": "Un-Aided",
     "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
     "GOPENO": 50.954,
     "GSCO": 25.878,
     "GNTCO": 31.03,
     "GOBCO": 33.113,
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 4135,
     "UniversityName": "Amar Seva Mandal's Shree Govindrao Vanjari College of Engineering & Technology, Nagpur                                                        ",
     "UniversityStatus": "Un-Aided",
     "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
     "GOPENO": 1.262,
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 4137,
     "UniversityName": "Sir Shantilal Badjate Charitable Trust's S. B. Jain Institute of technology, Management & Research, Nagpur                                                                ",
     "UniversityStatus": "Un-Aided-Linguistuc Minority - HIndi",
     "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 4138,
     "UniversityName": "Jaidev Education Society,JD College of Engineering and Management,Nagpur",
     "UniversityStatus": "Un-Aided-Linguistuc Minority - HIndi",
     "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 4139,
     "UniversityName": "Samridhi Sarwajanik Charitable Trust, Jhulelal Institute of Technology, Nagpur                                                ",
     "UniversityStatus": "Un-Aided-Linguistuc Minority - Sindhi",
     "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
     "GOPENO": 8.699,
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 4141,
     "UniversityName": "Shriram Gram Vikas Shikshan Sanstha, Vilasrao Deshmukh College of Engineering and Technology, Nagpur",
     "UniversityStatus": "Un-Aided",
     "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
     "GOPENO": 13.839,
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 4142,
     "UniversityName": "Ankush Shikshan Sanstha's G.H.Raisoni Institute of Engineering & Technology, Nagpur                                   ",
     "UniversityStatus": "Un-Aided-Linguistuc Minority - HIndi",
     "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 4143,
     "UniversityName": "Sanmarg Shikshan Sanstha, Mandukarrao Pandav College of Engineering, Bhandara                                                ",
     "UniversityStatus": "Un-Aided",
     "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
     "GOPENO": 28.248,
     "GSCO": 8.699,
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 4145,
     "UniversityName": "Wainganga College of Engineering and Management, Dongargaon, Nagpur                                        ",
     "UniversityStatus": "Un-Aided",
     "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
     "GOPENO": 19.382,
     "GSCO": 17.134,
     "GNTAO": 8.699,
     "GNTCO": 6.229,
     "GNTDO": 7.225,
     "GOBCO": 1.262,
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 4147,
     "UniversityName": "K.D.K College of Enginnering,Nagpur",
     "UniversityStatus": "Un-Aided",
     "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
     "GOPENO": 42.988,
     "GSCO": 40.259,
     "GSTO": 31.03,
     "GNTAO": 8.699,
     "GOBCO": 40.259,
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 4151,
     "UniversityName": "Vidarbha Bahu-Uddeshiya Shikshan Sanstha's Tulshiramji Gaikwad Patil College of Engineering & Technology, Nagpur                                                                                ",
     "UniversityStatus": "Un-Aided-Autonomous",
     "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 4181,
     "UniversityName": " Swaminarayan Siddhanta Institute Of Technology, Nagpur                                ",
     "UniversityStatus": "Un-Aided",
     "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
     "GOPENO": 38.272,
     "GSCO": 10.037,
     "GSTO": 36.299,
     "GNTBO": 10.037,
     "GNTCO": 28.248,
     "GOBCO": 28.248,
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 4188,
     "UniversityName": "Krushi Jivan Vikas Pratishthan, Ballarpur Institute of Technology, Mouza Bamni                                                ",
     "UniversityStatus": "Un-Aided",
     "HomeUniversity": "Gondwana University",
     "GOPENO": 23.769,
     "GSCO": 3.494,
     "GNTBO": 15.398,
     "GOBCO": 2.856,
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 4192,
     "UniversityName": "Maitraya Education Society, Nagarjuna Institute of Engineering Technology & Management, Nagpur",
     "UniversityStatus": "Un-Aided",
     "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
     "GOPENO": 7.225,
     "GSCO": 2.007,
     "GSTO": 7.225,
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 4306,
     "UniversityName": "Real Institute Of Management & Research, Beltarodi, Nagpur                                ",
     "UniversityStatus": "Un-Aided",
     "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
     "GOPENO": 4.117,
     "GSCO": 0.353,
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 4307,
     "UniversityName": "Renaissance Institute Of Management Studies, Datala New Chandrapur                                        ",
     "UniversityStatus": "Un-Aided",
     "HomeUniversity": "Gondwana University",
     "GOPENO": 50.954,
     "GSCO": 91.03,
     "GSTO": 6.229,
     "GNTAO": 0.481,
     "GNTBO": 15.398,
     "GNTCO": 4.117,
     "GOBCO": 17.134,
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 4613,
     "UniversityName": "Suryodaya College of Engineering & Techonology , Nagpur",
     "UniversityStatus": "Un-Aided",
     "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
     "GOPENO": 7.225,
     "GSCO": 4.117,
     "Course": "MBA"
    },
    {
     "UniversityRegNo": 4614,
     "UniversityName": "Shantiniketan Business School,Nagpur",
     "UniversityStatus": "Un-Aided-Linguistic Minority- Hindi",
     "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
     "GOPENO": 0.827,
     "Course": "MBA"
    },
    
      {
       "UniversityRegNo": 1005,
       "UniversityName": "Sant Gadge Baba Amravati University , Amravati",
       "UniversityStatus": "University Department",
       "HomeUniversity": "Sant Gadge Baba Amravati University",
       "EWS": 76.445,
       "TFWS": 89.647,
       "ORPHAN": 36.299,
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 1101,
       "UniversityName": "Shri Sant Gajanan Maharaj College of Engineering,Shegaon",
       "UniversityStatus": " Un-Aided             ",
       "HomeUniversity": "Sant Gadge Baba Amravati University",
       "EWS": 50.954,
       "TFWS": 78.977,
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 1102,
       "UniversityName": "Vidya Bharati Mahavidyalaya Department of Research and PG Studies in Science & Management, Amravati",
       "UniversityStatus": " Un-Aided             ",
       "HomeUniversity": "Sant Gadge Baba Amravati University",
       "EWS": 21.273,
       "TFWS": 73.195,
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 1105,
       "UniversityName": "Prof. Ram Meghe Institute of Technology & Research, Amravati",
       "UniversityStatus": " Un-Aided             ",
       "HomeUniversity": "Sant Gadge Baba Amravati University",
       "EWS": 7.225,
       "TFWS": 78.329,
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 1106,
       "UniversityName": "Hari Kishan Jaju Education Sanstha's,College of Management & Computer Science, Yavatmal",
       "UniversityStatus": " Un-Aided-Linguistic Minority - Marwadi",
       "HomeUniversity": "Sant Gadge Baba Amravati University",
       "TFWS": 84.394,
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 1107,
       "UniversityName": "P. R. Pote (Patil) Education & Welfare Trust's Group of Institution(Integrated Campus), Amravati",
       "UniversityStatus": " Un-Aided             ",
       "HomeUniversity": "Sant Gadge Baba Amravati University",
       "EWS": 21.273,
       "TFWS": 77.553,
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 1114,
       "UniversityName": "Sipna Shikshan Prasarak Mandal College of Engineering & Technology, Amravati",
       "UniversityStatus": " Un-Aided             ",
       "HomeUniversity": "Sant Gadge Baba Amravati University",
       "EWS": 46.683,
       "TFWS": 85.956,
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 1121,
       "UniversityName": "Shri Hanuman Vyayam Prasarak Mandals College of Engineering & Technology, Amravati",
       "UniversityStatus": " Un-Aided             ",
       "HomeUniversity": "Sant Gadge Baba Amravati University",
       "EWS": 13.839,
       "TFWS": 71.218,
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 2001,
       "UniversityName": "Dr. B. A. M.University Dept. Of Management Science, Aurangabad",
       "UniversityStatus": "University Department",
       "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
       "EWS": 69.556,
       "TFWS": 82.254,
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 2002,
       "UniversityName": "Dr. Babasaheb Ambedkar Marathwada University, Sub Centre, Osmanabad",
       "UniversityStatus": "University Department",
       "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
       "EWS": 36.229,
       "TFWS": 56.885,
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 2003,
       "UniversityName": "Swami Ramanand Teerth Marathwada University, School of Commerce & Management Science, Nanded",
       "UniversityStatus": "University Department",
       "HomeUniversity": "Swami Ramanand Teerth Marathwada University, Nanded",
       "EWS": 46.683,
       "TFWS": 63.807,
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 2004,
       "UniversityName": "School of Management, Swami Ramanand Teerth Marathwada University, Sub Centre, Peth, Latur",
       "UniversityStatus": "University Department",
       "HomeUniversity": "Swami Ramanand Teerth Marathwada University, Nanded",
       "EWS": 3.494,
       "TFWS": 53.024,
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 2102,
       "UniversityName": "Rajarshi Shahu Institute of Management, Aurangabad",
       "UniversityStatus": "Un-Aided ",
       "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
       "EWS": 15.398,
       "TFWS": 23.769,
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 2104,
       "UniversityName": "Aditya College of MBA, Beed",
       "UniversityStatus": "Un-Aided ",
       "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
       "EWS": 2.007,
       "TFWS": 0.137,
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 2104,
       "UniversityName": "Aditya College of MBA, Beed",
       "UniversityStatus": "Un-Aided ",
       "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
       "EWS": 25.878,
       "Course": "MBA( Marketing Management )"
      },
      {
       "UniversityRegNo": 2106,
       "UniversityName": "Lokvikas Educational & Charitable Trust's Marathwada Institute of Management and Research, Aurangabad",
       "UniversityStatus": "Un-Aided ",
       "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
       "EWS": 3.494,
       "TFWS": 0.827,
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 2108,
       "UniversityName": " Adarsh Shikshan Prasarak Mandal's K.T. Patil College of MBA, Osmanabad",
       "UniversityStatus": "Un-Aided ",
       "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
       "EWS": 6.22,
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 2110,
       "UniversityName": "Nirmal Krida and Samaj Prabhodhan Trust, Institute of Management, Badnapur",
       "UniversityStatus": "Un-Aided ",
       "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
       "EWS": 2.004,
       "TFWS": 42.988,
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 2112,
       "UniversityName": "Shree Yash Pratishthan, Shreeyash College of Engineering and Technology, Aurangabad",
       "UniversityStatus": "Un-Aided ",
       "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
       "EWS": 11.807,
       "TFWS": 61.058,
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 2113,
       "UniversityName": "G.S Mandal's Maharashtra Institute of Technology,Aurangabad",
       "UniversityStatus": "Un-Aided-Autonomous",
       "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
       "GOPENS": 58.426,
       "GSCS": 36.299,
       "GNTAS": 1.575,
       "GNTBS": 42.988,
       "GNTCS": 10.037,
       "GOBCS": 9.494,
       "PWDOPENS": 19.382,
       "EWS": 53.024,
       "TFWS": 82.254,
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 2114,
       "UniversityName": "Deogiri Institute of Engineering and Management Studies, Aurangabad",
       "UniversityStatus": "Un-Aided ",
       "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
       "EWS": 53.024,
       "TFWS": 76.445,
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 2115,
       "UniversityName": "Sahyog Sevabhavi Santha's Indira Institute of Management Science, Nanded",
       "UniversityStatus": "Un-Aided ",
       "HomeUniversity": "Swami Ramanand Teerth Marathwada University, Nanded",
       "EWS": 36.299,
       "TFWS": 2.007,
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 2116,
       "UniversityName": "Matoshri Pratishan's Group of Institutions (Integrated Campus), Kupsarwadi , Nanded",
       "UniversityStatus": "Un-Aided ",
       "HomeUniversity": "Swami Ramanand Teerth Marathwada University, Nanded",
       "EWS": 4.904,
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 2119,
       "UniversityName": "Shree Sharda Bhavan Education Society's Institute of Technology & Management, Nanded",
       "UniversityStatus": "Un-Aided ",
       "HomeUniversity": "Swami Ramanand Teerth Marathwada University, Nanded",
       "EWS": 33.113,
       "TFWS": 31.03,
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 2136,
       "UniversityName": "Aditya Engineering College , Beed",
       "UniversityStatus": "Un-Aided ",
       "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
       "EWS": 6.229,
       "TFWS": 67.223,
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 2138,
       "UniversityName": "Matsyodari Shikshan Sansatha's College of Engineering and Technology, Jalna",
       "UniversityStatus": "Un-Aided ",
       "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
       "EWS": 1.262,
       "TFWS": 69.556,
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 2256,
       "UniversityName": "Foster Development School of Management, Aurangabad",
       "UniversityStatus": "Un-Aided ",
       "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
       "EWS": 6.229,
       "TFWS": 74.498,
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 2259,
       "UniversityName": "Shri Sai Institute of Management & Research, Aurangabad",
       "UniversityStatus": "Un-Aided ",
       "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
       "EWS": 7.225,
       "TFWS": 7.225,
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 2516,
       "UniversityName": "International Centre Of Excellence In Engineering and Management (ICEEM)",
       "UniversityStatus": "Un-Aided ",
       "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
       "EWS": 2.856,
       "TFWS": 69.556,
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 2520,
       "UniversityName": "D. B. Institute Of Management & Research, Mouza-Mahalngra,Ta.Chakur,Dist.Latur",
       "UniversityStatus": "Un-Aided ",
       "HomeUniversity": "Swami Ramanand Teerth Marathwada University, Nanded",
       "EWS": 1.074,
       "TFWS": 4.904,
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 2569,
       "UniversityName": "Suraj Institute of Management, Beed",
       "UniversityStatus": "Un-Aided ",
       "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
       "EWS": 10.037,
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 2569,
       "UniversityName": "Suraj Institute of Management, Beed",
       "UniversityStatus": "Un-Aided ",
       "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
       "EWS": 4.904,
       "Course": "MBA( Human Resource Management )"
      },
      {
       "UniversityRegNo": 2569,
       "UniversityName": "Suraj Institute of Management, Beed",
       "UniversityStatus": "Un-Aided ",
       "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
       "EWS": 4.117,
       "Course": "MBA( Marketing Management )"
      },
      {
       "UniversityRegNo": 2570,
       "UniversityName": "Mitthulalji Sarda MBA College, Beed",
       "UniversityStatus": "Un-Aided ",
       "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
       "EWS": 10.037,
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 2570,
       "UniversityName": "Mitthulalji Sarda MBA College, Beed",
       "UniversityStatus": "Un-Aided ",
       "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
       "EWS": 15.398,
       "Course": "MBA( Marketing Management )"
      },
      {
       "UniversityRegNo": 2570,
       "UniversityName": "Mitthulalji Sarda MBA College, Beed",
       "UniversityStatus": "Un-Aided ",
       "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
       "EWS": 8.699,
       "TFWS": 49.157,
       "Course": "MBA( Finance )"
      },
      {
       "UniversityRegNo": 2571,
       "UniversityName": "Kishori College of M.B.A., Beed",
       "UniversityStatus": "Un-Aided ",
       "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
       "EWS": 4.904,
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 2571,
       "UniversityName": "Kishori College of M.B.A., Beed",
       "UniversityStatus": "Un-Aided ",
       "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
       "EWS": 3.494,
       "Course": "MBA( Marketing Management )"
      },
      {
       "UniversityRegNo": 2571,
       "UniversityName": "Kishori College of M.B.A., Beed",
       "UniversityStatus": "Un-Aided ",
       "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
       "EWS": 33.113,
       "TFWS": 69.556,
       "Course": "MBA( Finance )"
      },
      {
       "UniversityRegNo": 2622,
       "UniversityName": "Jay Bhavani Institute of Management, Badnapur, Jalna",
       "UniversityStatus": "Un-Aided ",
       "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
       "EWS": 1.575,
       "TFWS": 40.259,
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 2623,
       "UniversityName": "Shreeyash Institute of Management Studies and Research, Aurangabad",
       "UniversityStatus": "Un-Aided ",
       "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
       "EWS": 4.117,
       "TFWS": 36.299,
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 2624,
       "UniversityName": "- U. D. Pathrikar Institute of Management, At.Post Pathri, Aurangabad",
       "UniversityStatus": "Un-Aided ",
       "HomeUniversity": "Dr. Babasaheb Ambedkar Marathwada University",
       "EWS": 6.229,
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 3001,
       "UniversityName": "Jamnalal Bajaj Institute of Management Studies, Mumbai",
       "UniversityStatus": "University Department-Autonomous",
       "HomeUniversity": "Mumbai University",
       "GOPENS": 99.938,
       "GSCS": 99.646,
       "GSTS": 98.155,
       "GNTAS": 99.744,
       "GNTBS": 99.817,
       "GNTCS": 99.683,
       "GNTDS": 99.744,
       "GOBCS": 99.817,
       "PWDOPENS": 98.348,
       "PWDRNTCS": 97.999,
       "PWDROBCS": 97.891,
       "EWS": 99.867,
       "TFWS": 99.96,
       "ORPHAN": 93.127,
       "Course": "MMS"
      },
      {
       "UniversityRegNo": 3002,
       "UniversityName": "Sydenham Institute of Management Studies & Research & Entrepreneurship Education(SIMSREE), Mumbai",
       "UniversityStatus": "Government",
       "HomeUniversity": "Mumbai University",
       "EWS": 99.646,
       "TFWS": 99.789,
       "ORPHAN": 85.956,
       "Course": "MMS"
      },
      {
       "UniversityRegNo": 3003,
       "UniversityName": "Alkesh Dinesh Modi Institute for Financial & Management Studies, Mumbai",
       "UniversityStatus": "University Department",
       "HomeUniversity": "Mumbai University",
       "EWS": 95.144,
       "TFWS": 96.06,
       "ORPHAN": 71.218,
       "Course": "MMS"
      },
      {
       "UniversityRegNo": 3004,
       "UniversityName": "Jankidevi Bajaj Institute of Management Studies, Santacruz, Mumbai",
       "UniversityStatus": "University Managed",
       "HomeUniversity": "SNDT Women's University",
       "GOPENS": 92.247,
       "GSCS": 89.647,
       "GSTS": 55.338,
       "GNTAS": 80.874,
       "GNTBS": 89.647,
       "GNTCS": 90.037,
       "GNTDS": 90.454,
       "GOBCS": 89.139,
       "PWDOPENS": 63.807,
       "EWS": 85.119,
       "Course": "MMS"
      },
      {
       "UniversityRegNo": 3033,
       "UniversityName": "Dr. Babasaheb Ambedkar Technological University, Lonere",
       "UniversityStatus": "University Managed",
       "HomeUniversity": "Dr. Babasaheb Ambedkar Technological University, Lonere",
       "GOPENS": 46.683,
       "GSCS": 28.248,
       "GOBCS": 19.382,
       "TFWS": 21.273,
       "Course": "MBA - Innovation , Enterpreneurship and Venture Development ( IEV )"
      },
      {
       "UniversityRegNo": 3101,
       "UniversityName": "Bharti Vidyapeeth's Institute of Management Studies & Research, Navi Mumbai",
       "UniversityStatus": "Un-Aided ",
       "HomeUniversity": "Mumbai University",
       "EWS": 92.247,
       "TFWS": 94.358,
       "Course": "MMS"
      },
      {
       "UniversityRegNo": 3102,
       "UniversityName": "Chetana's Ramprasad Khandelwal Institute of Management & Research, Mumbai",
       "UniversityStatus": "Un-Aided ",
       "HomeUniversity": "Mumbai University",
       "EWS": 98.449,
       "TFWS": 98.836,
       "Course": "MMS"
      },
      {
       "UniversityRegNo": 3104,
       "UniversityName": "Lala Lajpatrai Institute of Management, Mumbai",
       "UniversityStatus": "Un-Aided-Linguistic Minority - Punjabi",
       "HomeUniversity": "Mumbai University",
       "MI": 2.856,
       "TFWS": 97.786,
       "Course": "MMS"
      },
      {
       "UniversityRegNo": 3105,
       "UniversityName": "Mahatma Gandhi Mission's Institute of Management Studies & Research, Kamothe",
       "UniversityStatus": "Un-Aided ",
       "HomeUniversity": "Mumbai University",
       "EWS": 55.338,
       "TFWS": 87.637,
       "Course": "MMS"
      },
      {
       "UniversityRegNo": 3106,
       "UniversityName": "MET's Institute of Management, Mumbai",
       "UniversityStatus": "Un-Aided ",
       "HomeUniversity": "Mumbai University",
       "EWS": 97.786,
       "TFWS": 98.449,
       "Course": "MMS"
      },
      {
       "UniversityRegNo": 3107,
       "UniversityName": "Prin. L. N. Welingkar Institute of Management Development & Research, Mumbai",
       "UniversityStatus": "Un-Aided-Autonomous",
       "HomeUniversity": "Mumbai University",
       "GOPENS": 99.605,
       "GSCS": 98.68,
       "GSTS": 94.905,
       "GNTAS": 99.446,
       "GNTBS": 99.368,
       "GNTCS": 99.236,
       "GNTDS": 99.179,
       "GOBCS": 99.527,
       "PWDOPENS": 97.13,
       "PWDRNTCS": 95.387,
       "PWDROBCS": 95.397,
       "EWS": 99.293,
       "TFWS": 99.683,
       "ORPHAN": 56.885,
       "Course": "MMS"
      },
      {
       "UniversityRegNo": 3108,
       "UniversityName": "Rizvi Institute of Management Studies & Research, Mumbai",
       "UniversityStatus": "Un-Aided-Religious Minority - Muslim",
       "HomeUniversity": "Mumbai University",
       "MI": 79.963,
       "TFWS": 96.603,
       "Course": "MMS"
      },
      {
       "UniversityRegNo": 3109,
       "UniversityName": "S.I.E.S. College of Management Studies, Mumbai",
       "UniversityStatus": "Un-Aided-Linguistic Minority - Tamil",
       "HomeUniversity": "Mumbai University",
       "MI": 10.037,
       "TFWS": 98.99,
       "Course": "MMS"
      },
      {
       "UniversityRegNo": 3110,
       "UniversityName": "Vivekanand Education Society's Institute of Management Studies & Research, Mumbai",
       "UniversityStatus": "Un-Aided-Linguistic Minority - Sindhi",
       "HomeUniversity": "Mumbai University",
       "MI": 10.037,
       "TFWS": 96.492,
       "Course": "MMS"
      },
      {
       "UniversityRegNo": 3113,
       "UniversityName": "Maratha Mandir's Babasaheb Gawde Institute of Management Studies, Mumbai",
       "UniversityStatus": "Un-Aided ",
       "HomeUniversity": "Mumbai University",
       "EWS": 49.157,
       "Course": "MMS"
      },
      {
       "UniversityRegNo": 3114,
       "UniversityName": "Mahatma Education Society's Pillai's Institute of Management Studies & Research, New Panvel",
       "UniversityStatus": "Un-Aided-Linguistic Minority - Malyalam",
       "HomeUniversity": "Mumbai University",
       "MI": 31.03,
       "TFWS": 83.483,
       "Course": "MMS"
      },
      {
       "UniversityRegNo": 3115,
       "UniversityName": "- Anjuman-I-Islam's Allana Institute of Management Studies, Mumbai",
       "UniversityStatus": "Un-Aided-Religious Minority - Muslim",
       "HomeUniversity": "Mumbai University",
       "MI": 4.904,
       "TFWS": 61.058,
       "Course": "MMS"
      },
      {
       "UniversityRegNo": 3116,
       "UniversityName": "Agnel Charities Agnel Seva Sangha's Fr. C. Rodrigues Inst. of Management. Studies, Vashi, Navi Mumbai",
       "UniversityStatus": "Un-Aided-Religious Minority - Christian",
       "HomeUniversity": "Mumbai University",
       "MI": 38.272,
       "TFWS": 94.905,
       "Course": "MMS"
      },
      {
       "UniversityRegNo": 3117,
       "UniversityName": "Gurunanak Institute of Management Studies, Mumbai",
       "UniversityStatus": "Un-Aided-Religious Minority - Sikh",
       "HomeUniversity": "Mumbai University",
       "TFWS": 92.816,
       "Course": "MMS"
      },
      {
       "UniversityRegNo": 3118,
       "UniversityName": "Zagdu Singh Chartitable Trust's Thakur Institute of Management Studies & Research, Mumbai",
       "UniversityStatus": "Un-Aided-Linguistic Minority - Hindi",
       "HomeUniversity": "Mumbai University",
       "MI": 78.977,
       "TFWS": 96.939,
       "Course": "MMS"
      },
      {
       "UniversityRegNo": 3119,
       "UniversityName": "St. Francis Institute of Management & Research, Mumbai",
       "UniversityStatus": "Un-Aided-Religious Minority - Christian",
       "HomeUniversity": "Mumbai University",
       "MI": 1.262,
       "TFWS": 95.144,
       "Course": "MMS"
      },
      {
       "UniversityRegNo": 3120,
       "UniversityName": "Atharva Educational Trust, Atharva Institute of Management Studies, Mumbai",
       "UniversityStatus": "Un-Aided ",
       "HomeUniversity": "Mumbai University",
       "EWS": 89.647,
       "TFWS": 93.127,
       "Course": "MMS"
      },
      {
       "UniversityRegNo": 3121,
       "UniversityName": "Sahajeevan Shikshan Sanstha's Madanbhai Sura Institute of Business Management, Khed Dist. Ratnagiri",
       "UniversityStatus": "Un-Aided ",
       "HomeUniversity": "Mumbai University",
       "EWS": 31.03,
       "TFWS": 25.878,
       "Course": "MMS"
      },
      {
       "UniversityRegNo": 3123,
       "UniversityName": "Parle Tilak Vidyalaya Asso.'s Institute of Management, Mumbai",
       "UniversityStatus": "Un-Aided ",
       "HomeUniversity": "Mumbai University",
       "EWS": 76.445,
       "TFWS": 87.637,
       "Course": "MMS"
      },
      {
       "UniversityRegNo": 3123,
       "UniversityName": "Parle Tilak Vidyalaya Asso.'s Institute of Management, Mumbai",
       "UniversityStatus": "Un-Aided ",
       "HomeUniversity": "Mumbai University",
       "EWS": 25.878,
       "Course": "MBA - Innovation , Enterpreneurship and Venture Development ( IEV )"
      },
      {
       "UniversityRegNo": 3127,
       "UniversityName": "NCRD's Sterling Institute of Management Studies, Navi Mumbai",
       "UniversityStatus": "Un-Aided ",
       "HomeUniversity": "Mumbai University",
       "EWS": 11.807,
       "TFWS": 65.541,
       "Course": "MMS"
      },
      {
       "UniversityRegNo": 3128,
       "UniversityName": "Mandar Education Society's Rajaram Shinde College of Master of Business Adminstration, Chiplun",
       "UniversityStatus": "Un-Aided ",
       "HomeUniversity": "Mumbai University",
       "TFWS": 33.113,
       "Course": "MMS"
      },
      {
       "UniversityRegNo": 3130,
       "UniversityName": "VPM's Dr. V.N. Bedekar Institute Of Management Studies, Mumbai",
       "UniversityStatus": "Un-Aided ",
       "HomeUniversity": "Mumbai University",
       "EWS": 0.129,
       "TFWS": 74.498,
       "Course": "MMS"
      },
      {
       "UniversityRegNo": 3131,
       "UniversityName": "Hashmatrai and Gangaram Himathmal Mansukhani Institute of Management, Ulhasnagar, Thane",
       "UniversityStatus": "Un-Aided-Linguistic Minority - Sindhi",
       "HomeUniversity": "Mumbai University",
       "EWS": 11.807,
       "TFWS": 38.272,
       "Course": "MMS"
      },
      {
       "UniversityRegNo": 3133,
       "UniversityName": "Swayamsiddhi Mitra Sangh's College of Management & Research, Thane",
       "UniversityStatus": "Un-Aided ",
       "HomeUniversity": "Mumbai University",
       "EWS": 2.856,
       "TFWS": 53.024,
       "Course": "MMS"
      },
      {
       "UniversityRegNo": 3134,
       "UniversityName": "Bombay St. Xavier College Soc.'s Xavier Institute of Management & Research, Mumbai",
       "UniversityStatus": "Un-Aided-Religious Minority - Roman Catholics",
       "HomeUniversity": "Mumbai University",
       "MI": 91.85,
       "TFWS": 98.99,
       "Course": "MMS"
      },
      {
       "UniversityRegNo": 3136,
       "UniversityName": "Oriental Education Society Oriental Institute of Management, Navi Mumbai",
       "UniversityStatus": "Un-Aided-Linguistic Minority - Hindi",
       "HomeUniversity": "Mumbai University",
       "MI": 31.03,
       "TFWS": 65.54,
       "Course": "MMS"
      },
      {
       "UniversityRegNo": 3139,
       "UniversityName": "Vidyalankar Institute of Technology,Wadala, Mumbai",
       "UniversityStatus": "Un-Aided-Autonomous",
       "HomeUniversity": "Mumbai University",
       "GOPENS": 93.366,
       "GSCS": 91.85,
       "GSTS": 75.598,
       "GNTAS": 88.234,
       "GNTBS": 92.247,
       "GNTCS": 93.366,
       "GNTDS": 91.85,
       "GOBCS": 91.85,
       "PWDOPENS": 84.394,
       "PWDRNTCS": 36.299,
       "PWDROBCS": 72.255,
       "EWS": 89.647,
       "TFWS": 92.498,
       "Course": "MMS"
      },
      {
       "UniversityRegNo": 3146,
       "UniversityName": "Jawahar Education Society's Annasaheb Chudaman Patil College of Engineering,Kharghar, Navi Mumbai",
       "UniversityStatus": "Un-Aided ",
       "HomeUniversity": "Mumbai University",
       "TFWS": 28.248,
       "Course": "MMS"
      },
      {
       "UniversityRegNo": 3149,
       "UniversityName": "Shree Shankar Narayan Education Trust's Rohidas Patil Institute of Management Studies, Bhayandar",
       "UniversityStatus": "Un-Aided ",
       "HomeUniversity": "Mumbai University",
       "EWS": 62.974,
       "TFWS": 21.273,
       "Course": "MMS"
      },
      {
       "UniversityRegNo": 3151,
       "UniversityName": "Vishweshwar Education Society's Indira Institute of Business Management, Navi Mumbai",
       "UniversityStatus": "Un-Aided ",
       "HomeUniversity": "Mumbai University",
       "EWS": 8.699,
       "TFWS": 67.223,
       "Course": "MMS"
      },
      {
       "UniversityRegNo": 3153,
       "UniversityName": "Humera Khan Institute Of Mangement Studies & Reserch, Mumbai",
       "UniversityStatus": "Un-Aided-Linguistic Minority - Hindi",
       "HomeUniversity": "Mumbai University",
       "MI": 4.117,
       "TFWS": 19.382,
       "Course": "MMS"
      },
      {
       "UniversityRegNo": 3155,
       "UniversityName": "SYCSPM'S Sinhgad Institute of Business Management, Chandivali, Powai, Mumbai",
       "UniversityStatus": "Un-Aided ",
       "HomeUniversity": "Mumbai University",
       "EWS": 1.575,
       "Course": "MMS"
      },
      {
       "UniversityRegNo": 3157,
       "UniversityName": "Shree Ghatkopar Sarvajanik Jivdaya Khatur's Aruna Manharlal Shah Institute of Management & Research, Ghatkopar",
       "UniversityStatus": "Un-Aided ",
       "HomeUniversity": "Mumbai University",
       "EWS": 25.878,
       "TFWS": 17.134,
       "Course": "MMS"
      },
      {
       "UniversityRegNo": 3158,
       "UniversityName": "Saket Gyanpeeth's, Saket College of management, Kalyan",
       "UniversityStatus": "Un-Aided-Linguistic Minority - Hindi",
       "HomeUniversity": "Mumbai University",
       "TFWS": 1.074,
       "Course": "MMS"
      },
      {
       "UniversityRegNo": 3159,
       "UniversityName": "JNIESTR's,Rajeev Gandhi College of Management Studies, Navi Mumbai",
       "UniversityStatus": "Un-Aided ",
       "HomeUniversity": "Mumbai University",
       "EWS": 10.037,
       "TFWS": 19.382,
       "Course": "MMS"
      },
      {
       "UniversityRegNo": 3160,
       "UniversityName": "Mahatma Edu.Soc.'s Pillai's HOC Institute of Management Studies & Research, Khalapur Dist. Raigadh",
       "UniversityStatus": "Un-Aided-Linguistic Minority - Malyalam",
       "HomeUniversity": "Mumbai University",
       "TFWS": 1.575,
       "Course": "MMS"
      },
      {
       "UniversityRegNo": 3161,
       "UniversityName": "Viva Institute of Management and Research (Viva School of Management and Research)",
       "UniversityStatus": "Un-Aided ",
       "HomeUniversity": "Mumbai University",
       "EWS": 89.139,
       "TFWS": 65.541,
       "Course": "MMS"
      },
      {
       "UniversityRegNo": 3173,
       "UniversityName": "Deccan Education Society's Navinchandra Mehta Institute of Technology & Development, Dadar, Mumbai",
       "UniversityStatus": "Un-Aided ",
       "HomeUniversity": "Mumbai University",
       "EWS": 25.878,
       "TFWS": 77.553,
       "Course": "MMS"
      },
      {
       "UniversityRegNo": 3202,
       "UniversityName": "Rajendra Mane College of Engineering & Technology Ambav Deorukh",
       "UniversityStatus": "Un-Aided ",
       "HomeUniversity": "Mumbai University",
       "Course": "MMS"
      },
      {
       "UniversityRegNo": 3210,
       "UniversityName": "Excelsior Education Society's K.C. College of Engineering and Management Studies and Research, Kopri, Thane (E)",
       "UniversityStatus": "Un-Aided-Linguistic Minority - Punjabi",
       "HomeUniversity": "Mumbai University",
       "TFWS": 55.338,
       "Course": "MMS"
      },
      {
       "UniversityRegNo": 3217,
       "UniversityName": "Vighnaharata Trust's Shivajirao S. Jondhale College of Engineering & Technology, Shahapur, Asangaon, Dist Thane",
       "UniversityStatus": "Un-Aided ",
       "HomeUniversity": "Mumbai University",
       "Course": "MMS"
      },
      {
       "UniversityRegNo": 3218,
       "UniversityName": "Aldel Education Trust's St. John College of Engineering & Management, Vevoor, Palghar",
       "UniversityStatus": "Un-Aided-Religious Minority - Christian",
       "HomeUniversity": "Mumbai University",
       "EWS": 61.058,
       "TFWS": 87.188,
       "Course": "MMS"
      },
      {
       "UniversityRegNo": 3219,
       "UniversityName": "Koti Vidya Charitable Trust's Smt. Alamuri Ratnamala Institute of Engineering and Technology, Sapgaon, Tal. Shahapur",
       "UniversityStatus": "Un-Aided-Linguistic Minority - Hindi",
       "HomeUniversity": "Mumbai University",
       "TFWS": 13.839,
       "Course": "MMS"
      },
      {
       "UniversityRegNo": 3350,
       "UniversityName": "Durgadevi Saraf Institute of Management Studies, Malad (W), Mumbai",
       "UniversityStatus": "Un-Aided-Linguistic Minority - Hindi",
       "HomeUniversity": "Mumbai University",
       "EWS": 28.248,
       "TFWS": 93.963,
       "Course": "MMS"
      },
      {
       "UniversityRegNo": 3354,
       "UniversityName": "Kohinoor Business School, Kurla (West), Mumbai",
       "UniversityStatus": "Un-Aided ",
       "HomeUniversity": "Mumbai University",
       "EWS": 65.541,
       "TFWS": 82.254,
       "Course": "MMS"
      },
      {
       "UniversityRegNo": 3357,
       "UniversityName": "S A V Acharya Institute of Management Studies, Shelu, Tal. Karjat",
       "UniversityStatus": "Un-Aided ",
       "HomeUniversity": "Mumbai University",
       "Course": "MMS"
      },
      {
       "UniversityRegNo": 3358,
       "UniversityName": "SAS Institute of Management Studies, Boisar Dist. Thane",
       "UniversityStatus": "Un-Aided ",
       "HomeUniversity": "Mumbai University",
       "EWS": 11.807,
       "TFWS": 49.157,
       "Course": "MMS"
      },
      {
       "UniversityRegNo": 3359,
       "UniversityName": "SASMIRA's Institute of Management Studies & Research, Worli, Mumbai",
       "UniversityStatus": "Un-Aided ",
       "HomeUniversity": "Mumbai University",
       "EWS": 36.299,
       "TFWS": 80.874,
       "Course": "MMS"
      },
      {
       "UniversityRegNo": 3360,
       "UniversityName": "GNVS Institute of Management, Sion-Koliwada(E), Mumbai",
       "UniversityStatus": "Un-Aided ",
       "HomeUniversity": "Mumbai University",
       "EWS": 42.988,
       "TFWS": 28.248,
       "Course": "MMS"
      },
      {
       "UniversityRegNo": 3419,
       "UniversityName": "Sir M Visvesvaraya Institute of Management Studies & Research, Wadala, Mumbai",
       "UniversityStatus": "Un-Aided-Linguistic Minority - Kannada",
       "HomeUniversity": "Mumbai University",
       "TFWS": 78.329,
       "Course": "MMS"
      },
      {
       "UniversityRegNo": 3437,
       "UniversityName": "Sahyadri Institute of Management & Research, Sawarde.",
       "UniversityStatus": "Un-Aided ",
       "HomeUniversity": "Mumbai University",
       "EWS": 53.024,
       "TFWS": 73.195,
       "Course": "MMS"
      },
      {
       "UniversityRegNo": 3438,
       "UniversityName": "Aditya Institute of Management Studies & Research, Borivali",
       "UniversityStatus": "Un-Aided-Linguistic Minority - Hindi",
       "HomeUniversity": "Mumbai University",
       "MI": 23.769,
       "TFWS": 85.956,
       "Course": "MMS"
      },
      {
       "UniversityRegNo": 3443,
       "UniversityName": "Sheila Raheja School of Business Management & Research,Bandra(E),Mumbai",
       "UniversityStatus": "Un-Aided",
       "HomeUniversity": "Mumbai University",
       "EWS": 79.963,
       "TFWS": 89.139,
       "Course": "MMS"
      },
      {
       "UniversityRegNo": 3446,
       "UniversityName": "Kala Vidyalaya Trust,Kala Institute of Management Studies & Research,Kandivali",
       "UniversityStatus": "Un-Aided",
       "HomeUniversity": "Mumbai University",
       "EWS": 65.541,
       "TFWS": 38.272,
       "Course": "MMS"
      },
      {
       "UniversityRegNo": 3452,
       "UniversityName": "Matoshri. Ushatai Jadhav Institute of Management studies & Research Centre,Bhivandi",
       "UniversityStatus": "Un-Aided",
       "HomeUniversity": "Mumbai University",
       "TFWS": 0.12,
       "Course": "MMS"
      },
      {
       "UniversityRegNo": 3529,
       "UniversityName": "Smt Parmeshwaridevi Durgadutt Tibrewala Institute of Management and Research",
       "UniversityStatus": "Un-Aided-Linguistic Minority - Hindi",
       "HomeUniversity": "Mumbai University",
       "TFWS": 8.699,
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 3530,
       "UniversityName": "M.S College of Management,Devghar Vada",
       "UniversityStatus": "Un-Aided-Religious Minority- Muslim",
       "HomeUniversity": "Mumbai University",
       "MI": 58.426,
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 4001,
       "UniversityName": "Department of Business Management,Rashtrasant Tukadoji Maharaj Nagpur University,Nagpur",
       "UniversityStatus": "University Department",
       "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
       "EWS": 83.084,
       "TFWS": 91.469,
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 4024,
       "UniversityName": "Gondwana University Department of Management",
       "UniversityStatus": "University Department",
       "HomeUniversity": "Gondwana University",
       "GOPENS": 42.988,
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 4101,
       "UniversityName": "Shree Shivaji Education Society , Dr.Panjabrao Deshmukh Institute of Management Technology & Research, Nagpur",
       "UniversityStatus": "Un-Aided",
       "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
       "EWS": 8.699,
       "TFWS": 67.223,
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 4102,
       "UniversityName": "Param Poojya Dr.Babasaheb Ambedkar Smarak Samiti Dr.Ambedkar Department of Management Studies & Research,Nagpur",
       "UniversityStatus": "Un-Aided",
       "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
       "EWS": 15.398,
       "TFWS": 83.084,
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 4103,
       "UniversityName": "Department of Management Science & Research J.M.Patel College,Bhandara",
       "UniversityStatus": "Un-Aided",
       "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
       "TFWS": 69.556,
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 4105,
       "UniversityName": "GES Department of Management Technoogy N.M.DPG College Of Arts,Commerce,Law& Management,Gondia",
       "UniversityStatus": "Un-Aided",
       "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
       "EWS": 17.134,
       "TFWS": 71.218,
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 4106,
       "UniversityName": "Shikshan Prasarak Mandal's Dept. of Management Studies,Nabira Mahavidyalaya,Nagpur",
       "UniversityStatus": "Un-Aided",
       "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
       "TFWS": 25.878,
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 4107,
       "UniversityName": "Yugantar Education Society's Tripude Institute of Management Education,Nagpur",
       "UniversityStatus": "Un-Aided",
       "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
       "EWS": 0.137,
       "TFWS": 74.498,
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 4108,
       "UniversityName": "G.S. College of Commerce & Economics Department of Management Sciences And Research,Nagpur",
       "UniversityStatus": "Un-Aided-Linguistuc Minority - HIndi",
       "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
       "EWS": 4.117,
       "TFWS": 67.223,
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 4109,
       "UniversityName": "Datta Meghe Institute of Management Studies,Nagpur",
       "UniversityStatus": "Un-Aided",
       "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
       "GOPENS": 63.8,
       "GSCS": 55.338,
       "GSTS": 0.827,
       "GNTAS": 44.826,
       "GNTBS": 56.885,
       "GNTCS": 40.259,
       "GOBCS": 55.338,
       "PWDOPENS": 53.024,
       "EWS": 4.904,
       "TFWS": 73.195,
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 4110,
       "UniversityName": "vidya sikhan prasarak mandal's central institute of business management Research & Development",
       "UniversityStatus": "Un-Aided",
       "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
       "EWS": 1.575,
       "TFWS": 71.218,
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 4111,
       "UniversityName": "Sarvodaya Shikshan Mandal's Sau Leena Kishor Mamidvar Institute of Management Studies & Research,Chandrapur",
       "UniversityStatus": "Un-Aided",
       "HomeUniversity": "Gondwana University",
       "EWS": 8.699,
       "TFWS": 4.904,
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 4112,
       "UniversityName": "Priyadarshini Lokmanya Tilak Institute of Management Studies & Reseach,Nagpur",
       "UniversityStatus": "Un-Aided-Linguistuc Minority - HIndi",
       "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
       "MI": 1.262,
       "TFWS": 61.058,
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 4114,
       "UniversityName": "Department of Business Management,C.P.Berar Education Society's College,Nagpur",
       "UniversityStatus": "Un-Aided",
       "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
       "TFWS": 31.03,
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 4115,
       "UniversityName": "Shri Ramdeobaba College of Engineering and Management, Nagpur ",
       "UniversityStatus": "Un-Aided-Linguistuc Minority - HIndi",
       "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
       "GOPENS": 94.645,
       "MI": 80.874,
       "TFWS": 95.144,
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 4116,
       "UniversityName": "Ankush Shikshan Sanstha's G.H.Raisoni College of Engineering, Nagpur                                   ",
       "UniversityStatus": "Un-Aided-Linguistuc Minority - HIndi",
       "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
       "GOPENS": 76.445,
       "MI": 17.134,
       "TFWS": 84.394,
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 4118,
       "UniversityName": "Bapurao Deshmukh College of Enginnering,Sevagram",
       "UniversityStatus": "Un-Aided",
       "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
       "EWS": 13.839,
       "TFWS": 36.299,
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 4120,
       "UniversityName": "G.H Raisoni Foundation Society ,G.H. Raisoni School of Business Management,Nagpur",
       "UniversityStatus": "Un-Aided-Linguistuc Minority - HIndi",
       "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
       "MI": 19.382,
       "TFWS": 71.218,
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 4122,
       "UniversityName": "G.H Raisoni Institute of Management % reasearch,Khaparkheda,Nagur",
       "UniversityStatus": "Un-Aided-Linguistuc Minority - HIndi",
       "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
       "MI": 8.699,
       "TFWS": 44.826,
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 4124,
       "UniversityName": "Amar Seva Mandal's Kamla Nehru Mahavidyalaya.Nagpur",
       "UniversityStatus": "Un-Aided",
       "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
       "EWS": 49.157,
       "TFWS": 42.988,
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 4125,
       "UniversityName": "Green Heaven Institute of Management & Research.Nagpur",
       "UniversityStatus": "Un-Aided",
       "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
       "EWS": 11.807,
       "TFWS": 10.037,
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 4127,
       "UniversityName": "Dhananjayrao Gadgil Institute of Co-operative Management,Nagpur",
       "UniversityStatus": "Government",
       "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
       "EWS": 58.426,
       "TFWS": 85.119,
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 4128,
       "UniversityName": "Ranibai Agnihotri Institute Institute of Computer Information Technology,Wardha",
       "UniversityStatus": "Un-Aided",
       "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
       "TFWS": 75.598,
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 4129,
       "UniversityName": "Mehmuda Shikshan & Mahila Gramin Vikas Bahuuddeshiya Sanstha's,Central India College of Business Management & Studies",
       "UniversityStatus": "Un-Aided-Linguistuc Minority - Muslim",
       "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
       "MI": 11.807,
       "TFWS": 3.494,
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 4130,
       "UniversityName": "Shree Sai Shikshan Sanstha,NIT Graduate School of Management,Nagpur",
       "UniversityStatus": "Un-Aided",
       "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
       "EWS": 17.134,
       "TFWS": 4.117,
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 4132,
       "UniversityName": "Swargiya Shri Laxmanji Motghare Chartiable Trust,Dr.Arun Motghare College of Management,Bhandara",
       "UniversityStatus": "Un-Aided",
       "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
       "TFWS": 6.229,
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 4133,
       "UniversityName": "Sanmarg Shikshan Sanstha's Smt. Radhikatai Pandav College of Engineering,Nagpur",
       "UniversityStatus": "Un-Aided",
       "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
       "EWS": 23.769,
       "TFWS": 8.699,
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 4134,
       "UniversityName": "Guru Nanak Institute of Engineering & Technology , Kalmeshwar,Nagpur",
       "UniversityStatus": "Un-Aided",
       "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
       "EWS": 74.498,
       "TFWS": 15.398,
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 4135,
       "UniversityName": "Amar Seva Mandal's Shree Govindrao Vanjari College of Engineering & Technology, Nagpur                                                        ",
       "UniversityStatus": "Un-Aided",
       "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 4137,
       "UniversityName": "Sir Shantilal Badjate Charitable Trust's S. B. Jain Institute of technology, Management & Research, Nagpur                                                                ",
       "UniversityStatus": "Un-Aided-Linguistuc Minority - HIndi",
       "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
       "GOPENS": 53.024,
       "MI": 0.353,
       "TFWS": 61.058,
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 4138,
       "UniversityName": "Jaidev Education Society,JD College of Engineering and Management,Nagpur",
       "UniversityStatus": "Un-Aided-Linguistuc Minority - HIndi",
       "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
       "GOPENS": 42.988,
       "MI": 61.058,
       "TFWS": 17.134,
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 4139,
       "UniversityName": "Samridhi Sarwajanik Charitable Trust, Jhulelal Institute of Technology, Nagpur                                                ",
       "UniversityStatus": "Un-Aided-Linguistuc Minority - Sindhi",
       "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
       "MI": 28.248,
       "TFWS": 13.839,
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 4141,
       "UniversityName": "Shriram Gram Vikas Shikshan Sanstha, Vilasrao Deshmukh College of Engineering and Technology, Nagpur",
       "UniversityStatus": "Un-Aided",
       "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 4142,
       "UniversityName": "Ankush Shikshan Sanstha's G.H.Raisoni Institute of Engineering & Technology, Nagpur                                   ",
       "UniversityStatus": "Un-Aided-Linguistuc Minority - HIndi",
       "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
       "GOPENS": 61.058,
       "MI": 1.262,
       "TFWS": 73.195,
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 4143,
       "UniversityName": "Sanmarg Shikshan Sanstha, Mandukarrao Pandav College of Engineering, Bhandara                                                ",
       "UniversityStatus": "Un-Aided",
       "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
       "TFWS": 62.974,
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 4145,
       "UniversityName": "Wainganga College of Engineering and Management, Dongargaon, Nagpur                                        ",
       "UniversityStatus": "Un-Aided",
       "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
       "EWS": 56.885,
       "TFWS": 8.699,
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 4147,
       "UniversityName": "K.D.K College of Enginnering,Nagpur",
       "UniversityStatus": "Un-Aided",
       "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
       "TFWS": 71.218,
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 4151,
       "UniversityName": "Vidarbha Bahu-Uddeshiya Shikshan Sanstha's Tulshiramji Gaikwad Patil College of Engineering & Technology, Nagpur                                                                                ",
       "UniversityStatus": "Un-Aided-Autonomous",
       "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
       "GOPENS": 56.885,
       "GSCS": 42.988,
       "GSTS": 21.273,
       "GNTBS": 36.299,
       "GNTCS": 19.382,
       "GNTDS": 7.225,
       "GOBCS": 38.272,
       "EWS": 21.273,
       "TFWS": 53.024,
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 4181,
       "UniversityName": " Swaminarayan Siddhanta Institute Of Technology, Nagpur                                ",
       "UniversityStatus": "Un-Aided",
       "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
       "EWS": 7.225,
       "TFWS": 4.117,
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 4188,
       "UniversityName": "Krushi Jivan Vikas Pratishthan, Ballarpur Institute of Technology, Mouza Bamni                                                ",
       "UniversityStatus": "Un-Aided",
       "HomeUniversity": "Gondwana University",
       "EWS": 7.225,
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 4192,
       "UniversityName": "Maitraya Education Society, Nagarjuna Institute of Engineering Technology & Management, Nagpur",
       "UniversityStatus": "Un-Aided",
       "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
       "TFWS": 21.273,
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 4306,
       "UniversityName": "Real Institute Of Management & Research, Beltarodi, Nagpur                                ",
       "UniversityStatus": "Un-Aided",
       "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
       "TFWS": 71.218,
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 4307,
       "UniversityName": "Renaissance Institute Of Management Studies, Datala New Chandrapur                                        ",
       "UniversityStatus": "Un-Aided",
       "HomeUniversity": "Gondwana University",
       "EWS": 0.215,
       "TFWS": 21.273,
       "ORPHAN": 46.683,
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 4613,
       "UniversityName": "Suryodaya College of Engineering & Techonology , Nagpur",
       "UniversityStatus": "Un-Aided",
       "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
       "EWS": 23.769,
       "TFWS": 6.229,
       "Course": "MBA"
      },
      {
       "UniversityRegNo": 4614,
       "UniversityName": "Shantiniketan Business School,Nagpur",
       "UniversityStatus": "Un-Aided-Linguistic Minority- Hindi",
       "HomeUniversity": "Rashtrasant Tukadoji Maharaj Nagpur University",
       "TFWS": 23.769,
       "Course": "MBA"
      }
     ]


     function continueSection() {
      // Get user input values
      const percentile = parseFloat(document.getElementById('percentile').value);
      const category = document.getElementById('option').value;
      const table =  document.getElementById('matching-colleges')
      const home = document.getElementById('home')
      const Name = document.getElementById("name");
      const College = document.getElementById('college')
      const tel = document.getElementById('phoneInput')
      if (Name.value.trim() === "") {
        alert("Please Enter Your Name to proceed");
        return false
      } 
      if (College.value.trim() === ""){
        alert("Please Enter Your College")
        return false
      }
      if (tel.value.trim() === "") {
        alert("Please Enter Your Phone Number to proceed");
        return false
      } 

      home.classList.add('hidden')

      table.classList.remove('hidden')

      let second = document.querySelector(".second")

      second.classList.add('hidden')

      const title = document.getElementById('title')
      title.style.display="none"

      // Find colleges that match the percentile and category
      const matchingColleges = findColleges(percentile, category);
  
      // Get the element to display the list of colleges
      const collegeListTable = document.getElementById('college-list');
  
      // Clear any previous list items
      collegeListTable.innerHTML = '';
  
      if (matchingColleges.length > 0) {
          // Create and append list items for each matching college
          matchingColleges.forEach(college => {
              const row = collegeListTable.insertRow();

      // Insert data cells into the row
      const nameCell = row.insertCell(0);
      const statusCell = row.insertCell(1);
      const homeUniversityCell = row.insertCell(2);
      const courseNameCell=row.insertCell(3);
     // Populate the cells with data
     nameCell.textContent = college.UniversityName;
     statusCell.textContent = college.UniversityStatus;
     homeUniversityCell.textContent = college.HomeUniversity;
     courseNameCell.textContent = college.Course;
 });
      } 
      else {
          // Display a message if no matching colleges are found
          collegeListTable.innerHTML = '<li>No matching colleges found.</li>';
      }
    
  return true
      // // Reset the form or perform any other necessary actions
      // document.getElementById('form').reset();
  }
  
  function findColleges(percentile, category) {
      // Implement your logic to search for colleges based on percentile and category
      // Loop through the 'colleges' array and return an array of matching colleges
      const matchingColleges = [];
      for (const college of colleges) {
          // Use the category dynamically in the comparison
          if (percentile >= college[category]) {
              matchingColleges.push(college);
          }
      }
      return matchingColleges;
  }
  window.onload = function() {
    // Set the scroll position to left: 0 and top: 0
    window.scrollTo(0, 0);
  };
  