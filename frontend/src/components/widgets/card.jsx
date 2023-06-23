import React from 'react';
//Just a template. Use where ever nevessary
function Card() {
  return (
    <div className="flex flex-wrap justify-center mt-10">

      {/* card 1 */}
      <div className="p-6 max-w-sm">
          <div className="flex rounded-lg h-full bg-gray-400 p-4 flex-col">

            {/* Heading section */}
            <div className="flex items-center mb-3">
              <h1>Feature 1</h1>
            </div>

            {/* Content Here */}
            <div className="flex flex-col justify-between flex-grow">
              Content here
            </div>
          </div>

      </div>
 
    </div>
  );
};

export default Card;