// import React, { useState } from 'react';
// import Head from 'next/head';
// import { useRouter } from 'next/router';

// export default function SearchPage() {
//   const router = useRouter();
//   const { query } = router.query;
//   const [searchQuery, setSearchQuery] = useState(query || '');

//   const handleSearch = () => {
//     // Perform the search operation with the 'searchQuery'
//     // You can use an API request or any other logic here
//     // For example, you can use the fetch function to send a request to your API

//     // Replace the following URL with your actual API endpoint
//     const apiUrl = `https://edu-link-production.up.railway.app/teachers-adda/api/v1/teacher?pincode=248001&isActive=true&pageNo=1&size=1&query=${searchQuery}`;

//     fetch(apiUrl, {
//       method: 'GET',
//       headers: {
//         accept: 'application/json',
//         acceptLanguage: 'en-US,en;q=0.9',
//         'content-type': 'application/json',
//         'sec-ch-ua-platform': 'Windows',
//         'sec-fetch-dest': 'empty',
//         'sec-fetch-mode': 'cors',
//         'sec-fetch-site': 'same-origin',
//         'user-agent':
//           'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         // Handle the data or update your component state with the search results
//         console.log(data);
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//       });
//   };

//   return (
//     <div>
//       <Head>
//         <title>Search Page</title>
//       </Head>

//       <main>
//         <section>
//           <h2>Search</h2>
//           <input
//             type="text"
//             placeholder="Enter pincode..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//           <button onClick={handleSearch}>Search</button>
//         </section>

//         {/* Display search results here */}
//       </main>
//     </div>
//   );
// }


import React, { useState } from 'react';
import Head from 'next/head';

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // For local development, let's simulate a search result
    // You can replace this with your actual logic

    const searchResult = {
      name: 'Sample Teacher',
      pincode: '248001',
      isActive: true,
      // Add more fields as needed
    };

    // Display the result in the console
    console.log(searchResult);
  };

  return (
    <div>
      <Head>
        <title>Search Page</title>
      </Head>

      <main>
        <section>
          <h2>Search</h2>
          <input
            type="text"
            placeholder="Enter pincode..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </section>

        {/* Display search results here */}
      </main>
    </div>
  );
}



