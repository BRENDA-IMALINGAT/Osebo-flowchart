import { useState } from 'react';
import { FlowchartNode } from './components/FlowchartNode';
import { 
  UserPlus, 
  Phone, 
  Search, 
  HelpCircle, 
  Presentation, 
  MessageCircle, 
  CheckCircle, 
  UserCheck, 
  BookOpen, 
  Play, 
  Headphones, 
  Ticket, 
  GitBranch, 
  ThumbsUp, 
  TrendingUp, 
  Heart 
} from 'lucide-react';

export default function App() {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-3">
            OSEBO Customer Relations Workflow
          </h1>
          <p className="text-lg text-slate-600">
            IT Customer Support Personnel Guide
          </p>
          <div className="mt-4 inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
            Complete Customer Journey Map
          </div>
        </div>

        {/* Flowchart */}
        <div className="space-y-4">
          {/* START */}
          <FlowchartNode
            id="start"
            type="start"
            title="START"
            isActive={activeNode === 'start'}
            onClick={() => setActiveNode('start')}
          />

          {/* Customer Identified */}
          <FlowchartNode
            id="identified"
            type="process"
            icon={<UserPlus />}
            title="Customer/Prospect Identified"
            description="Referral, Walk-in, Online, Call"
            isActive={activeNode === 'identified'}
            onClick={() => setActiveNode('identified')}
          />

          {/* Initial Contact */}
          <FlowchartNode
            id="initial-contact"
            type="process"
            icon={<Search />}
            title="Initial Contact & Qualification"
            description="Understand business type, Size (SME, shop, wholesaler), Pain points (sales, stock, finance)"
            isActive={activeNode === 'initial-contact'}
            onClick={() => setActiveNode('initial-contact')}
          />

          {/* Is Customer Interested */}
          <FlowchartNode
            id="interested"
            type="decision"
            icon={<HelpCircle />}
            title="Is Customer Interested?"
            isActive={activeNode === 'interested'}
            onClick={() => setActiveNode('interested')}
          />

          {/* Decision branches */}
          <div className="flex gap-4 items-start justify-center">
            <div className="flex-1 max-w-xs">
              <FlowchartNode
                id="not-interested"
                type="end"
                title="NO"
                description="Follow-up / Educate / Exit"
                isActive={activeNode === 'not-interested'}
                onClick={() => setActiveNode('not-interested')}
              />
            </div>
            <div className="flex-1 max-w-xs">
              <FlowchartNode
                id="yes-interested"
                type="success"
                title="YES"
                description="Proceed to demo"
                isActive={activeNode === 'yes-interested'}
                onClick={() => setActiveNode('yes-interested')}
              />
            </div>
          </div>

          {/* Product Demo */}
          <FlowchartNode
            id="demo"
            type="process"
            icon={<Presentation />}
            title="Product Demo & Explanation"
            description="Dashboard overview, Sales/Inventory/Finance, Employees/Customers/Suppliers"
            isActive={activeNode === 'demo'}
            onClick={() => setActiveNode('demo')}
          />

          {/* Customer Questions */}
          <FlowchartNode
            id="questions"
            type="process"
            icon={<MessageCircle />}
            title="Customer Questions & Objections"
            description="Price? Ease of use? Data security?"
            isActive={activeNode === 'questions'}
            onClick={() => setActiveNode('questions')}
          />

          {/* Address Concerns */}
          <FlowchartNode
            id="concerns"
            type="process"
            icon={<CheckCircle />}
            title="Address Concerns"
            description="Clarify features, Show value, Compare with manual systems"
            isActive={activeNode === 'concerns'}
            onClick={() => setActiveNode('concerns')}
          />

          {/* Decision to Subscribe */}
          <FlowchartNode
            id="subscribe"
            type="decision"
            icon={<HelpCircle />}
            title="Decision to Subscribe?"
            isActive={activeNode === 'subscribe'}
            onClick={() => setActiveNode('subscribe')}
          />

          {/* Decision branches */}
          <div className="flex gap-4 items-start justify-center">
            <div className="flex-1 max-w-xs">
              <FlowchartNode
                id="not-subscribe"
                type="warning"
                title="NO"
                description="Schedule Follow-up / Trial"
                isActive={activeNode === 'not-subscribe'}
                onClick={() => setActiveNode('not-subscribe')}
              />
            </div>
            <div className="flex-1 max-w-xs">
              <FlowchartNode
                id="yes-subscribe"
                type="success"
                title="YES"
                description="Proceed to setup"
                isActive={activeNode === 'yes-subscribe'}
                onClick={() => setActiveNode('yes-subscribe')}
              />
            </div>
          </div>

          {/* Account Setup */}
          <FlowchartNode
            id="setup"
            type="process"
            icon={<UserCheck />}
            title="Account Setup & Onboarding"
            description="Create shop, Add users & roles, Initial data setup"
            isActive={activeNode === 'setup'}
            onClick={() => setActiveNode('setup')}
          />

          {/* Customer Training */}
          <FlowchartNode
            id="training"
            type="process"
            icon={<BookOpen />}
            title="Customer Training"
            description="Sales entry, Inventory tracking, Reports & transactions"
            isActive={activeNode === 'training'}
            onClick={() => setActiveNode('training')}
          />

          {/* Go-Live */}
          <FlowchartNode
            id="golive"
            type="success"
            icon={<Play />}
            title="Go-Live"
            description="Customer Starts Using System"
            isActive={activeNode === 'golive'}
            onClick={() => setActiveNode('golive')}
          />

          {/* Post-Onboarding Support */}
          <FlowchartNode
            id="post-support"
            type="process"
            icon={<Headphones />}
            title="Post-Onboarding Support"
            description="Monitor usage, Handle questions, Fix errors"
            isActive={activeNode === 'post-support'}
            onClick={() => setActiveNode('post-support')}
          />

          {/* Support Request Decision */}
          <FlowchartNode
            id="support-request"
            type="decision"
            icon={<HelpCircle />}
            title="Support Request?"
            isActive={activeNode === 'support-request'}
            onClick={() => setActiveNode('support-request')}
          />

          {/* Support branches */}
          <div className="flex gap-4 items-start justify-center">
            <div className="flex-1 max-w-xs">
              <FlowchartNode
                id="no-support"
                type="process"
                title="NO"
                description="Periodic Check-ins: Usage review, Feature tips"
                isActive={activeNode === 'no-support'}
                onClick={() => setActiveNode('no-support')}
              />
            </div>
            <div className="flex-1 max-w-xs">
              <FlowchartNode
                id="yes-support"
                type="warning"
                title="YES"
                description="Handle support ticket"
                isActive={activeNode === 'yes-support'}
                onClick={() => setActiveNode('yes-support')}
              />
            </div>
          </div>

          {/* Support Ticket */}
          <FlowchartNode
            id="ticket"
            type="process"
            icon={<Ticket />}
            title="Support Ticket Received"
            description="Issue logged, Priority assigned"
            isActive={activeNode === 'ticket'}
            onClick={() => setActiveNode('ticket')}
          />

          {/* Issue Type */}
          <FlowchartNode
            id="issue-type"
            type="decision"
            icon={<GitBranch />}
            title="Issue Type?"
            isActive={activeNode === 'issue-type'}
            onClick={() => setActiveNode('issue-type')}
          />

          {/* Issue type branches */}
          <div className="flex gap-3 items-start justify-center">
            <div className="flex-1 max-w-xs">
              <FlowchartNode
                id="user-error"
                type="process"
                title="User Error"
                description="Guide & Educate"
                isActive={activeNode === 'user-error'}
                onClick={() => setActiveNode('user-error')}
              />
            </div>
            <div className="flex-1 max-w-xs">
              <FlowchartNode
                id="system-bug"
                type="warning"
                title="System Bug"
                description="Escalate to Dev"
                isActive={activeNode === 'system-bug'}
                onClick={() => setActiveNode('system-bug')}
              />
            </div>
            <div className="flex-1 max-w-xs">
              <FlowchartNode
                id="feature-request"
                type="process"
                title="Feature Request"
                description="Log for Product Team"
                isActive={activeNode === 'feature-request'}
                onClick={() => setActiveNode('feature-request')}
              />
            </div>
          </div>

          {/* Resolution Provided */}
          <FlowchartNode
            id="resolution"
            type="success"
            icon={<CheckCircle />}
            title="Resolution Provided"
            isActive={activeNode === 'resolution'}
            onClick={() => setActiveNode('resolution')}
          />

          {/* Customer Confirmation */}
          <FlowchartNode
            id="confirmation"
            type="decision"
            icon={<ThumbsUp />}
            title="Customer Confirmation"
            description="Issue solved?"
            isActive={activeNode === 'confirmation'}
            onClick={() => setActiveNode('confirmation')}
          />

          {/* Confirmation branches */}
          <div className="flex gap-4 items-start justify-center">
            <div className="flex-1 max-w-xs">
              <FlowchartNode
                id="not-solved"
                type="warning"
                title="NO"
                description="Re-open Ticket"
                isActive={activeNode === 'not-solved'}
                onClick={() => setActiveNode('not-solved')}
              />
            </div>
            <div className="flex-1 max-w-xs">
              <FlowchartNode
                id="yes-solved"
                type="success"
                title="YES"
                description="Proceed to satisfaction check"
                isActive={activeNode === 'yes-solved'}
                onClick={() => setActiveNode('yes-solved')}
              />
            </div>
          </div>

          {/* Satisfaction Check */}
          <FlowchartNode
            id="satisfaction"
            type="success"
            icon={<ThumbsUp />}
            title="Customer Satisfaction Check"
            isActive={activeNode === 'satisfaction'}
            onClick={() => setActiveNode('satisfaction')}
          />

          {/* Retention & Growth */}
          <FlowchartNode
            id="retention"
            type="process"
            icon={<TrendingUp />}
            title="Retention & Growth"
            description="Encourage advanced features, Upsell modules, Request referrals"
            isActive={activeNode === 'retention'}
            onClick={() => setActiveNode('retention')}
          />

          {/* Long-term Relationship */}
          <FlowchartNode
            id="relationship"
            type="success"
            icon={<Heart />}
            title="LONG-TERM RELATIONSHIP"
            isActive={activeNode === 'relationship'}
            onClick={() => setActiveNode('relationship')}
          />

          {/* END */}
          <FlowchartNode
            id="end"
            type="end"
            title="END"
            isActive={activeNode === 'end'}
            onClick={() => setActiveNode('end')}
          />
        </div>

        {/* Legend */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
          <h3 className="font-semibold text-slate-900 mb-4">Legend</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-500 rounded"></div>
              <span className="text-sm text-slate-600">Process</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-amber-500 rounded-full"></div>
              <span className="text-sm text-slate-600">Decision</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-500 rounded"></div>
              <span className="text-sm text-slate-600">Success</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-orange-500 rounded"></div>
              <span className="text-sm text-slate-600">Warning</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-slate-500 rounded"></div>
              <span className="text-sm text-slate-600">Start/End</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-slate-500">
          Click on any node to highlight it
        </div>
      </div>
    </div>
  );
}
