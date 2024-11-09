function downloadPDF() {
    // Select the main content area to be converted to PDF
    const element = document.getElementById('cv-content');

    // Define options for PDF generation
    const options = {
        margin: 1,
        filename: 'Ashley_Rowley_CV.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    // Generate the PDF and trigger the download
    html2pdf().set(options).from(element).save();
}
