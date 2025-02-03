import React from 'react';

function Loading() {
    return (
        <>

            <div className="flex items-center justify-center w-56 h-48 my-10 border mx-auto border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <div className="px-3 py-1 text-lg font-large leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-yellow-500 dark:text-blue-200">loading...</div>
            </div>
        </>




    );
}
export default Loading;