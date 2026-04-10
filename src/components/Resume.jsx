// import axios from 'axios';
// import toast from 'react-hot-toast';

// export default function ResumeButton() {
//   const handleDownload = () => {
//     axios({
//       url: `${API_URL}/download`, // backend endpoint
//       method: 'GET',
//       responseType: 'blob', // important for files
//     })
//       .then((res) => {
//         const url = window.URL.createObjectURL(new Blob([res.data]));
//         const link = document.createElement('a');
//         link.href = url;
//         link.setAttribute('downloads', 'resume.pdf'); // default filename
//         document.body.appendChild(link);
//         link.click();
//         link.remove();
//         toast.success('Resume downloaded!');
//       })
//       .catch(() => toast.error('Download failed'));
//   };

//   return (
//     <div className="flex justify-center mt-10">
//       <button
//         onClick={handleDownload}
//         className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg"
//       >
//         Download Resume
//       </button>
//     </div>
//   );
// }