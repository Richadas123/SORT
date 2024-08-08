import React from 'react';
import SortingVisualizer from '../components/SortingVisualizer';

const Dashboard = () =>{
    return (
        <div>
            <div className='flex justify-center items-center text-white text-3xl h-full font-bold from-neutral-500'>
                Welcome to SortVision.com !!
            </div>
            <SortingVisualizer className='bar1'/>
        </div>
    )
}

export default Dashboard;



// import React from 'react';
// import SortingVisualizer from '../components/SortingVisualizer'; // Ensure this path is correct

// function Dashboard() {
//   return (
//     <div>
//       <SortingVisualizer />
//     </div>
//   );
// }

// export default Dashboard;



