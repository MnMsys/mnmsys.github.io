import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function page() {
  return (
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
          <Header />
          <main className="pt-16 h-screen">
            <div className="">
              <main className="mt-20">
               Features
              </main>
            </div>
          </main>
          <Footer />
        </div>
  )
}

export default page
