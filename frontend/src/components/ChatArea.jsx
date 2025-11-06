export default function ChatArea() {
  return (
    <div
      style={{
        backgroundColor: '#EEF2FF', // same as sidebar bg-indigo-50
        padding: '16px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          marginBottom: '16px',
          padding: '8px',
          backgroundColor: '#FFFFFF', // messages area
          borderRadius: '8px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        }}
      >
        <div style={{ color: '#6B7280' /* gray-500 for text */ }}>
          Chat messages will appear here...
        </div>
      </div>

      <div>
        <input
          type="text"
          placeholder="Type your question..."
          style={{
            width: '100%',
            padding: '8px',
            border: '1px solid #D1D5DB', // soft gray border
            borderRadius: '8px',
            outline: 'none',
          }}
        />
      </div>
    </div>
  );
}
