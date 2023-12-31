export default function HeaderTitle({ Tag = 'h1', children }) {
  return <Tag className="text-text-primary font-mono">{children}</Tag>;
}
