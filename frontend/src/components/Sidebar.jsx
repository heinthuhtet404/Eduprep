import { ChatBubbleLeftIcon, Cog6ToothIcon, DocumentTextIcon, HomeIcon } from '@heroicons/react/24/outline';

export default function Sidebar() {
  const itemStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '8px',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  };

  const iconStyle = {
    width: '20px',
    height: '20px',
    marginRight: '12px',
    color: '#6366F1', // indigo-500
  };

  const hoverBg = { backgroundColor: '#E0E7FF' }; // indigo-100

  return (
    <div
      style={{
        backgroundColor: '#EEF2FF', // indigo-50
        color: '#1F2937', // gray-800
        width: '256px', // w-64
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: '16px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      }}
    >
      <h2
        style={{
          fontSize: '1.5rem', // text-2xl
          fontWeight: 'bold',
          marginBottom: '24px',
          textAlign: 'center',
          color: '#4F46E5', // indigo-700
        }}
      >
        EduPrep AI
      </h2>

      <ul style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <li
          style={itemStyle}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hoverBg.backgroundColor)}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
        >
          <HomeIcon style={iconStyle} />
          Home
        </li>
        <li
          style={itemStyle}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hoverBg.backgroundColor)}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
        >
          <ChatBubbleLeftIcon style={iconStyle} />
          Generate Questions
        </li>
        <li
          style={itemStyle}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hoverBg.backgroundColor)}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
        >
          <DocumentTextIcon style={iconStyle} />
          Explain Textbook
        </li>
        <li
          style={itemStyle}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hoverBg.backgroundColor)}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
        >
          <Cog6ToothIcon style={iconStyle} />
          Settings
        </li>
      </ul>

      <div
        style={{
          textAlign: 'center',
          marginTop: '16px',
          color: '#C7D2FE', // indigo-300
          fontSize: '0.875rem', // text-sm
        }}
      >
        © 2025 EduPrep
      </div>
    </div>
  );
}
