import React from 'react'

export default function EditorialBoard() {
    return (
        <div className='bg-gray-100 flex flex-col justify-center items-center'>
            {/* Header Section */}
        <div className='xl:w-[65%] items-center mx-auto px-4'>

             {/* Title */}
            <h2 className="text-3xl font-bold text-green-700 mt-10 mb-6">Editorial Board</h2>

            {/* Content Section */}
            <div className="w-full pb-10 px-4">
                <div className=" mx-auto flex flex-col items-center space-y-6">

                    {/* Row 1: 2 Cards */}
                    <div className="w-full flex flex-col md:flex-row justify-center gap-6">
                        <div className="border border-green-700 rounded-md p-4 w-full md:w-1/2 text-center bg-white shadow-lg">
                            <h3 className="font-bold text-lg mb-1">Name 1</h3>
                            <p className="mb-4">ASP / Mechanical Engg.</p>
                            <p>Collage,</p>
                            <p className="italic text-gray-600">Location.</p>
                        </div>
                        <div className="border border-green-700 rounded-md p-4 w-full md:w-1/2 text-center bg-white shadow-lg">
                            <h3 className="font-bold text-lg mb-1">Name 2</h3>
                            <p className="mb-4">ASP / Production Engg.</p>
                            <p>Collage,</p>
                            <p className="italic text-gray-600">Location.</p>
                        </div>
                    </div>

                    {/* Row 2: 2 Cards */}
                    <div className="w-full flex flex-col md:flex-row justify-center gap-6">
                        <div className="border border-green-700 rounded-md p-4 w-full md:w-1/2 text-center bg-white shadow-lg">
                            <h3 className="font-bold text-lg mb-1">Name 3</h3>
                            <p className="mb-4">AP & Head / Mech</p>
                            <p>Collage,</p>
                            <p className="italic text-gray-600">Location.</p>
                        </div>
                        <div className="border border-green-700 rounded-md p-4 w-full md:w-1/2 text-center bg-white shadow-lg">
                            <h3 className="font-bold text-lg mb-1">Name 4</h3>
                            <p className="mb-4">Manager</p>
                            <p>Collage,</p>
                            <p className="italic text-gray-600">Location.</p>
                        </div>
                    </div>

                    {/* Row 3: 1 Centered Card */}
                    <div className="border border-green-700 rounded-md p-4 w-full md:w-1/2 text-center bg-white shadow-lg">
                        <h3 className="font-bold text-lg mb-1">Name 5</h3>
                        <p className="mb-4">Professor</p>
                        <p>Collage,</p>
                            <p className="italic text-gray-600">Location.</p>
                    </div>

                </div>
            </div>


        </div>
</div>

    )
}
