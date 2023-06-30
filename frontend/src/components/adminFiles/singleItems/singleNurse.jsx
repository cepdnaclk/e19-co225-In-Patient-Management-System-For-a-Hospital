import React from 'react';

function Nurse(props) {
  const {nurses} = props
    return (
<React.Fragment>

{nurses.map((nurse) => (
    <div key={nurse.id} className="p-4 w-full md:w-6/12 lg:w-4/12">
    <div className="bg-white rounded">
      <img src={nurse.imgLocation} className="rounded w-full" alt="..." width="100" height="100" />
      <div className="p-6">
        <h3 className="font-bold text-2xl text-gray-900">{nurse.name}</h3>
        <h4 className="font-medium mb-3">{nurse.profession}</h4>
        <p className="mb-4">
          {nurse.description}
        </p>
        <a href="#" className="bg-primary-500 hover:bg-primary-600 inline-block px-6 py-2 rounded text-white">View Profile</a>
      </div>
    </div>
</div>
))}


</React.Fragment>    
);
  }

export default Nurse;
