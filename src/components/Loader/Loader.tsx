import React from 'react';

const Loader = () => {
  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 bg-black flex justify-center items-center min-h-screen">
      <div className="w-16 h-16 border-t-4 border-red-800 border-solid rounded-full animate-spin"/>
    </div>
  )
}

export default Loader
