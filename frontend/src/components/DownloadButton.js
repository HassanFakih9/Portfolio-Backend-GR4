import React from 'react';
import "./DownloadButton.css";

function DownloadButton() {
  // Remplacez 'nom-de-votre-fichier.pdf' par le nom de votre fichier PDF
  const pdfFileName = 'Layla_Abo_Saad_cv.pdf';
  const pdfFileUrl = process.env.PUBLIC_URL + '/' + pdfFileName;

  const handleDownload = () => {
    // Créez un lien temporaire et définissez son URL sur le fichier PDF
    const link = document.createElement('a');
    link.href = pdfFileUrl;
    link.setAttribute('download', pdfFileName);

    // Cliquez sur le lien pour déclencher le téléchargement
    link.click();
  };

  return (
    <div className="center-container">
  
    <button className="centered-button" onClick={handleDownload}>
      Download My CV
    </button>
 
  </div>
  );
}

export default DownloadButton;