import React from 'react';

function Article() {
  return (
    <div className="flex flex-col items-center mt-10">
      <div className="w-full mb-6">
      <img
              src="https://wpbingosite.com/wordpress/fuho/wp-content/uploads/2018/05/blog-1-720x484.jpg"
              className="object-cover w-full h-64"
              alt="Solo Travel" 
            />
        {/* <img src="path/to/your/image.jpg" alt="Solo Travel" className="w-full rounded-lg" /> */}
      </div>
      <div className="w-full mb-6">
        <h1 className="text-3xl font-bold mb-4">Travelling Solo Is Awesome</h1>
        <p className="text-lg mb-6">Solo travel gives you a chance to listen to your gut and control what direction you want to head gut and control.</p>
        <div className="flex mb-4">
          <div className="flex-1">
          <img
              src="https://wpbingosite.com/wordpress/fuho/wp-content/uploads/2018/05/blog-1-720x484.jpg"
              className="object-cover w-full h-64"
              alt="Solo Travel" 
            />
            {/* <img src="path/to/your/image.jpg" alt="Solo Travel" className="rounded-lg" /> */}
          </div>
          <div className="flex-1">
            <p className="text-lg">Date: <span className="text-gray-500">28 JAN 2021</span></p>
          </div>
          <div className="flex-1">
            <p className="text-lg">Comments: <span className="text-gray-500">4</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Article;