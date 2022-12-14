import React from 'react'
import SubHeader from '../../components/SubHeader'

const Dashboard: React.FC = () => {
  return (
    <>
      <SubHeader subHeader="Dashboard" />
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
          </div>
        </div>
      </main>
    </>
  )
}

export default Dashboard
