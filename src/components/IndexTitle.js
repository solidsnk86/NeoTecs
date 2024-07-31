export default function IndexTitle({ Tag = 'h2', children, className = '' }) {
  return <Tag className={`text-text-primary ${className}`}>{children}</Tag>;
}
