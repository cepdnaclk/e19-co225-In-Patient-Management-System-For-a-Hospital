import React from 'react';

function Doctor(props) {
  const {doctors} = props
    return (
<React.Fragment>

{doctors.map((doctor) => (
    <div key={doctor.id} className="p-4 w-full md:w-6/12 lg:w-4/12">
    <div className="bg-white rounded">
      <img src={doctor.imgLocation} className="rounded w-full" alt="..." width="100" height="100" />
      <div className="p-6">
        <h3 className="font-bold text-2xl text-gray-900">{doctor.name}</h3>
        <h4 className="font-medium mb-3">{doctor.profession}</h4>
        <p className="mb-4">
          {doctor.description}
        </p>
        <a href="#" className="bg-primary-500 hover:bg-primary-600 inline-block px-6 py-2 rounded text-white">View Profile</a>
      </div>
    </div>
</div>
))}


</React.Fragment>    
);
  }

export default Doctor;
