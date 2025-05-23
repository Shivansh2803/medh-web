import { CATEGORY_MAP } from '../utils';

export async function generateMetadata({ params }) {
  // Await the params object before destructuring
  const resolvedParams = await Promise.resolve(params);
  const { categoryname } = resolvedParams;
  
  // Find the category in our map
  const normalizedCategory = categoryname.toLowerCase().replace(/\s+/g, '-');
  const categoryInfo = CATEGORY_MAP[normalizedCategory];
  
  if (!categoryInfo) {
    return {
      title: 'Course Categories | MEDH Upskill',
      description: 'Explore our wide range of courses in various categories'
    };
  }
  
  return {
    title: `${categoryInfo.displayName} Courses | MEDH Upskill`,
    description: categoryInfo.description,
    openGraph: {
      title: `${categoryInfo.displayName} Courses | MEDH Upskill`,
      description: categoryInfo.description,
      siteName: 'MEDH Upskill',
      locale: 'en_US',
      type: 'website',
    },
  };
}

export default function CategoryLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
} 