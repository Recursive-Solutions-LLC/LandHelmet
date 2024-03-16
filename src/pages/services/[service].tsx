import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import fs from 'fs';
import path from 'path';
import { ServicePageProps } from '@/app/interfaces/servicePage';

const dataDirectory = path.join(process.cwd(), 'src/content/service');


export const getStaticPaths: GetStaticPaths = async () => {
  const filenames = fs.readdirSync(dataDirectory);
  const paths = filenames.map((filename) => ({
    params: { service: filename.replace('.json', '') },
  }));



  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { service } = context.params as { service: string };
  const filePath = path.join(dataDirectory, `${service}.json`);

  const jsonData = fs.readFileSync(filePath);



  const ServicePageData: ServicePageProps = JSON.parse(jsonData.toString());


  return { props: { ServicePageData } };
};

const Page: NextPage<ServicePageProps> = ({ ServicePageData }) => {
  

  return (
    <div>
      <h1>{ServicePageData.title}</h1>
      <p>{ServicePageData.content}</p>
    </div>
  );
};

export default Page;
