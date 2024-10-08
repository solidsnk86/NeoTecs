import { useContext, useEffect } from 'react';
import { TitlesContext } from '../shared/TitlesContext';
import { Link } from 'lucide-react';

export const SectionTitle = ({ level = '2', title = '' }) => {
  const Component = `h${level}`;
  const slug = title
    .replace(/['?.]/g, '')
    .replace(/[ \-_]/g, '-')
    .toLowerCase();
  const titles = useContext(TitlesContext);
  useEffect(() => {
    // eslint-disable-next-line react/destructuring-assignment
    titles.addTitle({ slug, title });
  });
  return (
    <Component
      id={slug}
      className="border-b border-black/20 dark:border-b-zinc-800 text-text-primary pb-2"
    >
      <a href={`#${slug}`} className="!font-bold !no-underline link-chain">
        {title}
        <Link className="inline mx-2 w-4 chain-link" />
      </a>
    </Component>
  );
};
