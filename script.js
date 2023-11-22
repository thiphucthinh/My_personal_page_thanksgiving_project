window.addEventListener("DOMContentLoaded", event => {
    // Function to handle the click event on a skill bar
    function handleSkillClick(skillId, progressId) {
        let skillElement = document.getElementById(skillId);
        let progressElement = document.getElementById(progressId);

        // Toggle the 'selected' class for the clicked skill
        skillElement.classList.toggle("selected");

        // Display the percentage on the progress bar
        let percentage = progressElement.value;

        // Create or update the text element on the progress bar
        let textElement = skillElement.querySelector(".percent-text");
        if (!textElement) {
            textElement = document.createElement("div");
            textElement.classList.add("percent-text");
            skillElement.appendChild(textElement);
        }
        textElement.textContent = percentage + "%";

    }

    // Add click event listeners for each skill
    document.getElementById("htmlSkill").addEventListener("click", function () {
        handleSkillClick("htmlSkill", "htmlProgress");
    });

    document.getElementById("cssSkill").addEventListener("click", function () {
        handleSkillClick('cssSkill', 'cssProgress');
    });

    document.getElementById("jsSkill").addEventListener("click", function () {
        handleSkillClick("jsSkill", "jsProgress");
    });
});
