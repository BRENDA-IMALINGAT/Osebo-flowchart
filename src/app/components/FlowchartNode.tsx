import { ReactNode } from 'react';
import { ArrowDown, ChevronRight } from 'lucide-react';

interface FlowchartNodeProps {
  id: string;
  type: 'start' | 'end' | 'process' | 'decision' | 'success' | 'warning';
  title: string;
  description?: string;
  icon?: ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}

export function FlowchartNode({
  type,
  title,
  description,
  icon,
  isActive = false,
  onClick
}: FlowchartNodeProps) {
  const getNodeStyles = () => {
    const baseStyles = "relative transition-all duration-300 cursor-pointer transform hover:scale-105";
    
    switch (type) {
      case 'start':
        return `${baseStyles} bg-slate-700 text-white rounded-full px-8 py-4 mx-auto w-fit font-semibold shadow-lg ${
          isActive ? 'ring-4 ring-slate-400 scale-105' : ''
        }`;
      case 'end':
        return `${baseStyles} bg-slate-600 text-white rounded-full px-8 py-4 mx-auto w-fit font-semibold shadow-lg ${
          isActive ? 'ring-4 ring-slate-400 scale-105' : ''
        }`;
      case 'process':
        return `${baseStyles} bg-blue-500 text-white rounded-lg p-6 mx-auto max-w-md shadow-lg ${
          isActive ? 'ring-4 ring-blue-300 scale-105' : ''
        }`;
      case 'decision':
        return `${baseStyles} bg-amber-500 text-white rounded-lg p-6 mx-auto max-w-md shadow-lg border-4 border-amber-600 ${
          isActive ? 'ring-4 ring-amber-300 scale-105' : ''
        }`;
      case 'success':
        return `${baseStyles} bg-green-500 text-white rounded-lg p-6 mx-auto max-w-md shadow-lg ${
          isActive ? 'ring-4 ring-green-300 scale-105' : ''
        }`;
      case 'warning':
        return `${baseStyles} bg-orange-500 text-white rounded-lg p-6 mx-auto max-w-md shadow-lg ${
          isActive ? 'ring-4 ring-orange-300 scale-105' : ''
        }`;
      default:
        return baseStyles;
    }
  };

  const renderConnector = () => {
    if (type === 'start' || type === 'end') return null;
    
    return (
      <div className="flex justify-center my-2">
        <ArrowDown className="text-slate-400" size={24} />
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center">
      {/* Connector before node */}
      {type !== 'start' && (
        <div className="flex justify-center mb-2">
          <ArrowDown className="text-slate-400" size={24} />
        </div>
      )}

      {/* Node */}
      <div className={getNodeStyles()} onClick={onClick}>
        <div className="flex items-start gap-3">
          {icon && (
            <div className="flex-shrink-0 mt-1">
              {icon}
            </div>
          )}
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-1">{title}</h3>
            {description && (
              <p className="text-sm opacity-90 leading-relaxed">
                {description}
              </p>
            )}
          </div>
          {type === 'decision' && (
            <div className="flex-shrink-0">
              <ChevronRight size={20} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
