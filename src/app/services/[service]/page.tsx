import { promises as fs } from 'fs';

export default async function ServicePage({ params }: { params: { service: string } }) {
  const file = await fs.readFile(process.cwd() + `/src/content/services/${params.service}.json`, 'utf8');
  const data = JSON.parse(file);

  return (
    <div>
      <h1 className='text-p1'>{data.title}</h1>
      <p className='text-p1'>{data.content}</p>
    </div>
  );
}