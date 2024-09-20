import React from 'react'

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-950 text-white">
    <div>
      <main className="flex flex-col items-center justify-center text-center ">
        <h1 className="text-5xl font-bold mb-10">About UniBlog</h1>
        <p className="text-lg max-w-2xl leading-relaxed mb-4">
          Welcome to the UniBlog, a dynamic platform designed to foster creativity, collaboration, and communication within our academic community. Here, students, faculty, and staff come together to share insights, experiences, and knowledge through engaging and thought-provoking blog posts.
        </p>
        <p className="text-lg max-w-2xl leading-relaxed mb-4">
          Our mission is to provide a space where diverse voices can be heard, ideas can flourish, and meaningful discussions can take place. Whether you're sharing research findings, personal stories, or campus events, our UniBlog is your go-to destination for connecting with the university community and beyond.
        </p>
        <p className="text-lg max-w-2xl leading-relaxed">
          Join us in building a vibrant online community where every story matters and every voice counts. Together, we can inspire, inform, and innovate. Welcome to the heart of our university's digital dialogue!
        </p>
      </main>
    </div>
    </div>
  )
}
