const checkboxes = document.querySelectorAll('#checklist input[type="checkbox"]');
const progress = document.getElementById('progress');

function updateProgress() {
  const completed = Array.from(checkboxes).filter(box => box.checked).length;
  progress.textContent = `${completed} of ${checkboxes.length} tasks completed`;
}

checkboxes.forEach(box => {
  box.addEventListener('change', updateProgress);
});

updateProgress();
