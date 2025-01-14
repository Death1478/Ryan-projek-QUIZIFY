document.addEventListener('DOMContentLoaded', () => {
    const totalQuestions = 10;
    const totalModules = 3;
    const totalQuestionsOverall = totalQuestions * totalModules;
    
    // Kuis Pemrograman
    const finishBtnProgramming = document.getElementById('finishBtnProgramming');
    const progressBarProgramming = document.getElementById('quizProgressBarProgramming');
    const scoreBadgeProgramming = document.getElementById('scoreBadgeProgramming');
    finishBtnProgramming.addEventListener('click', () => showResult('Programming'));

    // Kuis Desain
    const finishBtnDesign = document.getElementById('finishBtnDesign');
    const progressBarDesign = document.getElementById('quizProgressBarDesign');
    const scoreBadgeDesign = document.getElementById('scoreBadgeDesign');
    finishBtnDesign.addEventListener('click', () => showResult('Design'));

    // Kuis Jaringan
    const finishBtnNetworking = document.getElementById('finishBtnNetworking');
    const progressBarNetworking = document.getElementById('quizProgressBarNetworking');
    const scoreBadgeNetworking = document.getElementById('scoreBadgeNetworking');
    finishBtnNetworking.addEventListener('click', () => showResult('Networking'));

    function showResult(module) {
        let score = 0;
        const questions = document.querySelectorAll(`#quizBody${module} .form-check-input:checked`);
        questions.forEach((input) => {
            if (input.value === 'correct') score++;
        });

        const progress = (score / totalQuestions) * 100;
        const progressBar = document.getElementById(`quizProgressBar${module}`);
        progressBar.style.width = `${progress}%`;
        progressBar.textContent = `${Math.round(progress)}%`;

        const scoreBadge = document.getElementById(`scoreBadge${module}`);
        scoreBadge.classList.remove('d-none');
        scoreBadge.textContent = `Skor Anda: ${score} / ${totalQuestions}`;

        updateTotalProgress();
    }

    function updateTotalProgress() {
        let totalScore = 0;

        // Hitung skor dari setiap modul
        const modules = ['Programming', 'Design', 'Networking'];
        modules.forEach((module) => {
            const questions = document.querySelectorAll(`#quizBody${module} .form-check-input:checked`);
            questions.forEach((input) => {
                if (input.value === 'correct') totalScore++;
            });
        });

        // Hitung dan update progress bar total
        const totalProgress = (totalScore / totalQuestionsOverall) * 100;
        const totalProgressBar = document.getElementById('quizProgressBarTotal');
        totalProgressBar.style.width = `${totalProgress}%`;
        totalProgressBar.textContent = `${Math.round(totalProgress)}%`;
    }
});