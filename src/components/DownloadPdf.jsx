
// import { Document, Page } from 'react-pdf';

const DownloadPdf = ({ pdfUrl }) => {
    return (
        <div>
            <button className="text-2xl font-semibold relative uppercase button-details" onClick={() => window.open(pdfUrl, '_blank')}>Download</button>
        </div>
    );
};

export default DownloadPdf;
