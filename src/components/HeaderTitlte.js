export default function HeaderTitle({ Tag = 'h1', children, className = '' }) {
  return (
    <Tag className={`${className} text-text-primary font-mono`}>{children}</Tag>
  );
}
