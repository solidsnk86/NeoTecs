export default function IndexTitle({ Tag = 'h2', children }) {
  return <Tag className="text-text-primary">{children}</Tag>;
}
