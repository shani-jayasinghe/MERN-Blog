import { Button, FileInput, Select, TextInput } from 'flowbite-react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function CreatePost() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-950 text-white">
      
    <div className=' max-w-3xl mx-auto min-h-screen'>
      <h1 className='text-center text-3xl my-5 font-semibold'>Create a Post</h1>
      <form className='flex flex-col gap-4'>
        <div className='flex flex-col gap-4 sm:flex-row justify-between'>
          <TextInput
            type='text'
            placeholder='Title'
            required
            id='title'
            className='flex-1'
          />
          <Select>
            <option value='uncategorized'>Select a category</option>
            <option value='News & Events'>News & Events</option>
            <option value='Academic'>Academic </option>
            <option value='Entertainment'>Entertainment</option>
          </Select>
        </div>
        <div className='flex gap-24 items-center justify-between border-4 border-teal-500 border-dotted p-4'>
          <FileInput type='file' accept='image/*' />
          <Button
            type='button'
            className='bg-gradient-to-r from-indigo-500  to-purple-600 rounded-lg' 
           
            size='sm'
            //outline
          >
            Upload image
          </Button>
        </div>
        <ReactQuill
          theme='snow'
          placeholder='Write something...'
          className='h-60 w-120 mb-12'
          required
        />
        <Button type='submit' className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white' >
          Publish
        </Button>
      </form>  
      </div>
      </div>
  );
}
