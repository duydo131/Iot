import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center space-y-4">
            <div className="text-2xl font-bold">
                Chat app project by group 7
            </div>
            <p className="max-w-lg text-center text-lg text-gray-400">
                Members of group: 
            </p>
            <p className="max-w-lg text-center text-lg text-gray-400">
                Lê Thanh Phương 20181696 
            </p>
            <Link
                to="/"
                className="px-6 py-3 bg-blue-900 rounded-lg hover:bg-blue-800"
            >
                Hello friends
            </Link>
        </div>
    )
}

export default HomePage
