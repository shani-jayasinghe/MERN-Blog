import React from 'react'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-950 text-white">
      

      <main className="flex flex-col md:flex-row items-center justify-center w-full p-10">
        <div className="text-left max-w-md">
          <h1 className="text-7xl font-bold mb-8">Welcome To UniBlog..!</h1>
          <p className="mb-10">
            Join Our University Blogging Community!<br />
            Connect, Share, and Inspire with Your Unique Voice..
          </p>
          <a href="#posts" className="text-pink-500 underline">View All Posts</a>
        </div>
        <div className="mt-8 md:mt-0 md:ml-8">
          <img src="https://img.freepik.com/premium-photo/happy-students-going-back-school-classroom_955370-249.jpg" alt="Blogging" className="max-w-full h-auto rounded-md"  />
        </div>
      </main>
    </div>
  )
}
