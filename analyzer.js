function analyzeText() {
  const resume = document.getElementById("resumeText").value.toLowerCase();
  const job = document.getElementById("jobText").value.toLowerCase();
  const resultsDiv = document.getElementById("results");

  const jobWords = job.match(/\b\w+\b/g);
  const resumeWords = resume.match(/\b\w+\b/g);
  const resumeSet = new Set(resumeWords);

  let matched = 0;
  let total = jobWords.length;
  let missingWords = [];

  jobWords.forEach(word => {
    if (resumeSet.has(word)) {
      matched++;
    } else {
      missingWords.push(word);
    }
  });

  const score = ((matched / total) * 100).toFixed(2);

  resultsDiv.innerHTML = `
    <strong>Match Score:</strong> ${score}%<br><br>
    <strong>Missing Keywords:</strong><br>${missingWords.slice(0, 20).join(", ")}${missingWords.length > 20 ? "..." : ""}
  `;
}
