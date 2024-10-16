import { useState } from 'react';
import { X, Printer, Download } from 'lucide-react';

export const TeamMembers = ({name, title, imgSrc, pdfUrl}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handlePrint = () => {
    const printWindow = window.open(pdfUrl, '_blank');
    printWindow.onload = () => {
      printWindow.print();
    };
  };

  return (
    <div className="text-center">
      <img
        className="object-cover w-24 h-24 mx-auto mb-4 rounded-full cursor-pointer"
        src={imgSrc}
        alt={name}
        onClick={openModal}
      />
      <h5 className="mb-1 text-xl font-bold cursor-pointer" onClick={openModal}>{name}</h5>
      <p className="text-sm text-gray-800">{title}</p>
      {isModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center">
          <div className="bg-white w-11/12 h-[90vh] rounded-lg shadow-2xl flex flex-col max-w-6xl">
            <div className="p-4 flex justify-between items-center border-b">
              <h2 className="text-2xl font-bold">{name} - {title}</h2>
              <div className="flex space-x-4">
                {pdfUrl && (
                  <>
                    <button
                      onClick={handlePrint}
                      className="text-blue-500 hover:text-blue-700 transition-colors duration-200"
                      title="Imprimir PDF"
                    >
                      <Printer size={24} />
                    </button>
                    <a
                      href={pdfUrl}
                      download
                      className="text-green-500 hover:text-green-700 transition-colors duration-200"
                      title="Descargar PDF"
                    >
                      <Download size={24} />
                    </a>
                  </>
                )}
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                  title="Cerrar"
                >
                  <X size={24} />
                </button>
              </div>
            </div>
            <div className="flex-grow p-4 overflow-hidden">
              {pdfUrl ? (
                <iframe
                  src={pdfUrl}
                  className="w-full h-full border-0"
                  title={`PDF de ${name}`}
                />
              ) : (
                <p className="text-center text-gray-500">No hay PDF disponible para este miembro.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}