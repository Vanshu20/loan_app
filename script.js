document.getElementById('loanForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const loanData = {
        fullName: document.getElementById('fullName').value,
        loanAmount: document.getElementById('loanAmount').value,
        loanTerm: document.getElementById('loanTerm').value,
        reason: document.getElementById('reason').value,
        employmentStatus: document.getElementById('employmentStatus').value,
        employmentAddress: document.getElementById('employmentAddress').value
    };

    fetch('/api/loan', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(loanData)
    })
    .then(response => response.text())
    .then(data => alert(data))
    .catch((error) => {
        console.error('Error:', error);
    });
});
