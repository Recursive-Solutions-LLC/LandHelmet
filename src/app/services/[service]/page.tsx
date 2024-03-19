import ServiceInfo from '@/app/components/ServiceInfo/ServiceInfo';
import { Content } from '@/app/interfaces/ServiceInterface';
import { promises as fs } from 'fs';

export default async function ServicePage({ params }: { params: { service: string } }) {
  const file = await fs.readFile(process.cwd() + `/src/content/services/${params.service}.json`, 'utf8');
  const data = JSON.parse(file);

  const serviceContent = data.content

  const renderServiceSections = serviceContent.map((data: Content) => {
    const { component, content } = data
    if (component === "cover") {
      return (
        <ServiceInfo
        isCover={true}
          title={content.title}
          subtitle={content.subtitle}
          text={content.text}
          image={content.image}
          key={content.title}
        />
      )
    }
    if (component === "info1") {
      return (
        <ServiceInfo
        isCover={false}
          title={content.title}
          subtitle={content.subtitle}
          text={content.text}
          image={content.image}
          key={content.title}
        />
      )
    }

  })

  return (
    <>
      {renderServiceSections}
    </>
  );
}