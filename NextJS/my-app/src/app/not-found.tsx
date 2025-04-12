import Layout from '@/components/Layout';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Layout>
        <div className='flex flex-col items-center justify-center h-screen bg-gray-100 text-center'>
      <h1 className='text-5xl font-bold text-red-600'>404</h1>
      <p className='text-lg text-gray-600 mt-2'>Oops! Page not found.</p>
      <Link
        href='/'
        className='mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700'
      >
        Go Home
      </Link>
    </div>
    </Layout>
  );
}