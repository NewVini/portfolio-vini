export function FloatingBadge({ className = '', children }) {
  return (
    <div className={`floating-chip ${className}`}>
      {children}
    </div>
  )
}
