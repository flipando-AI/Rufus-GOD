const form = document.getElementById('inputForm');
const outputText = document.getElementById('promptText');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  updateOutput();
});const inputFields = document.querySelectorAll('input[data-hint], textarea[data-hint]');

// Add event listeners for input fields
inputFields.forEach(function(input) {
  input.addEventListener('input', function() {
    updateOutput();
  });
  input.addEventListener('focus', function() {
    showHint(input);
  });
  input.addEventListener('blur', function() {
    hideHint(input);
  });
});

function showHint(input) {
  const hintBox = input.nextElementSibling;
  if (hintBox.classList.contains('hint-box')) {
    hintBox.textContent = input.getAttribute('data-hint');
    hintBox.style.display = 'block';
  }
}

function hideHint(input) {
  const hintBox = input.nextElementSibling;
  if (hintBox.classList.contains('hint-box')) {
    hintBox.style.display = 'none';
  }
}


function updateOutput() {
  const input1 = document.getElementById('input1').value;
  const input2 = document.getElementById('input2').value;
  const input3 = document.getElementById('input3').value;
  const input4 = document.getElementById('input4').value;

  const output = `Seccion Info Empresa: You are Rufus Social CEO and your team is working with a new client: <span class="input1">${input1}</span> on a marketing performance project. You need to write a Bible/Guidebook with all the relevant information regarding your Client, Stakeholders, and Market information for them to excel in their jobs. Start by describing your Client's: Business, History, and Main Goals. Write everything in Argentinian Spanish, tone and style, sound engaging, friendly, and witty. Try to be conscious with the information. Use bullet points, headings, and other text formats to make the reading simple, catchy, and engaging. Client's Relevant context: Client Name: <span class="input1">${input1}</span> Client URL: <span class="input2">${input2}</span> Client's News: <span class="input4">${input4}</span> Client's Wikipedia: <span class="input3">${input3}</span>. Now add a section to the manual that describes the project we are going to develop with <span class="input1">${input1}</span>. Explain the project's objective, the main stakeholders, the deliverables, important dates to consider, and the success metrics we will measure. Write a QA brand manual for content creators and creative team that will be producing script briefs, storyboards, moodboards, and everything related to the optimized campaign. Highlight brand-specific characteristics such as tone, style, and prohibited words and actions. Show examples and references of something that is correct and something that is incorrect. Convert these outputs into ChatGPT prompts so that the team can use this reference, context, and info in future text generation tasks. Generate a prompt with: Company's Info Prompt - Company's info for marketing campaigns. Company's Style Prompt - Company's tone, style, and relevant communication info. Rufus's Helper Function - Escribir un prompt que resuma el objetivo de un creativo generando una campaña para <span class="input1">${input1}</span> desde Rufus. Agregar info de best practices de SEO, creatividad, tono y estilo, para que ayude al momento de generar una pieza nueva.`;

  outputText.innerHTML = output;

  // Reset all input classes
  const inputs = document.querySelectorAll('input');
  inputs.forEach(function(input) {
    input.classList.remove('filled');
  });

  // Add 'filled' class to the corresponding inputs
  const input1Elements = document.querySelectorAll('.input1');
  input1Elements.forEach(function(element) {
    const input = document.getElementById('input1');
    input.classList.add('filled');
  });

  const input2Elements = document.querySelectorAll('.input2');
  input2Elements.forEach(function(element) {
    const input = document.getElementById('input2');
    input.classList.add('filled');
  });

  const input3Elements = document.querySelectorAll('.input3');
  input3Elements.forEach(function(element) {
    const input = document.getElementById('input3');
    input.classList.add('filled');
  });

  const input4Elements = document.querySelectorAll('.input4');
  input4Elements.forEach(function(element) {
    const input = document.getElementById('input4');
    input.classList.add('filled');
  });
}

// Event listeners for input fields
const inputs = document.querySelectorAll('input');
inputs.forEach(function(input) {
  input.addEventListener('input', function() {
    updateOutput();
  });
});

const copyButton = document.getElementById('copyButton');
const promptText = document.getElementById('promptText');

copyButton.addEventListener('click', function() {
  copyToClipboard(promptText.textContent);
});

function copyToClipboard(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
  alert('Text copied to clipboard!');
}

const copyInputsButton = document.getElementById('copyInputsButton');
copyInputsButton.addEventListener('click', function() {
  copyInputsAsJson();
});

function copyInputsAsJson() {
  const inputs = document.querySelectorAll('input, textarea');
  const inputsData = {};

  inputs.forEach(function(input) {
    inputsData[input.id] = input.value;
  });

  const json = JSON.stringify(inputsData, null, 2);

  copyToClipboard(json);
  alert('Inputs copied as JSON!');
}
