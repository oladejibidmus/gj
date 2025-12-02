import { useState } from 'react';
import { PageContent } from './PageContent';
import svgPaths from "../imports/svg-boagvfvaaf";

interface InboxPageProps {
  onToggleSidebar?: () => void;
}

export function InboxPage({ onToggleSidebar }: InboxPageProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const messages = [
    {
      id: 1,
      from: 'Sarah Johnson',
      subject: 'Q4 Budget Review',
      preview: 'Please review the attached budget proposal for Q4...',
      time: '10:30 AM',
      unread: true,
    },
    {
      id: 2,
      from: 'Mike Chen',
      subject: 'Team Meeting Reschedule',
      preview: 'Can we move tomorrow\'s meeting to 3 PM instead?',
      time: '9:15 AM',
      unread: true,
    },
    {
      id: 3,
      from: 'Lisa Martinez',
      subject: 'Project Update',
      preview: 'Here\'s the latest update on the client project...',
      time: 'Yesterday',
      unread: false,
    },
    {
      id: 4,
      from: 'David Park',
      subject: 'Invoice #12345',
      preview: 'Please find attached invoice for services rendered.',
      time: 'Yesterday',
      unread: false,
    },
  ];

  return (
    <PageContent pageName="Inbox" onToggleSidebar={onToggleSidebar}>
      {/* Header Section */}
      <div className="box-border content-stretch flex flex-col gap-[24px] items-start p-[24px]">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-gray-900 w-full">
            <p className="leading-[28px]">Messages</p>
          </div>
        </div>

        {/* Stats */}
        <div className="content-center flex flex-wrap gap-[48px] items-center relative shrink-0 w-full">
          {/* Unread Messages */}
          <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13.8px] text-gray-500 text-nowrap">
                <p className="leading-[20px] whitespace-pre">Unread Messages</p>
              </div>
            </div>
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
              <div className="content-stretch flex gap-[2px] items-start relative shrink-0">
                <div className="bg-blue-500 h-[14px] rounded-[2px] shrink-0 w-[4px]" />
                <div className="bg-gray-300 h-[14px] rounded-[2px] shrink-0 w-[4px]" />
                <div className="bg-gray-300 h-[14px] rounded-[2px] shrink-0 w-[4px]" />
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0">
                <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-gray-900 text-nowrap">
                  <p className="leading-[28px] text-[18px] whitespace-pre">
                    <span className="text-gray-900">{`2 `}</span>
                    <span className="text-gray-400">new</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Total Messages */}
          <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-gray-500 text-nowrap">
                <p className="leading-[20px] whitespace-pre">Total Messages</p>
              </div>
            </div>
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
              <div className="content-stretch flex gap-[2px] items-start relative shrink-0">
                <div className="bg-emerald-500 h-[14px] rounded-[2px] shrink-0 w-[4px]" />
                <div className="bg-emerald-500 h-[14px] rounded-[2px] shrink-0 w-[4px]" />
                <div className="bg-emerald-500 h-[14px] rounded-[2px] shrink-0 w-[4px]" />
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0">
                <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-gray-900 text-nowrap">
                  <p className="leading-[28px] text-[18px] whitespace-pre">
                    <span className="text-gray-900">{`124 `}</span>
                    <span className="text-gray-400">total</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Response Rate */}
          <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13.8px] text-gray-500 text-nowrap">
                <p className="leading-[20px] whitespace-pre">Response Rate</p>
              </div>
            </div>
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
              <div className="content-stretch flex gap-[2px] items-start relative shrink-0">
                <div className="bg-orange-500 h-[14px] rounded-[2px] shrink-0 w-[4px]" />
                <div className="bg-orange-500 h-[14px] rounded-[2px] shrink-0 w-[4px]" />
                <div className="bg-orange-500 h-[14px] rounded-[2px] shrink-0 w-[4px]" />
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0">
                <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-gray-900 text-nowrap">
                  <p className="leading-[28px] text-[18px] whitespace-pre">
                    <span className="text-gray-900">{`95.2% `}</span>
                    <span className="text-gray-400">avg</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="relative shrink-0 w-full">
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex items-center justify-between p-[24px] relative w-full border-t border-gray-200">
            {/* Search Input */}
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-[256px]">
              <div className="bg-white h-[34px] relative rounded-[6px] shrink-0 w-full">
                <div className="h-[34px] overflow-clip relative rounded-[inherit] w-full">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search messages..."
                    className="absolute inset-0 w-full h-full pl-[33px] pr-[11px] bg-transparent border-0 outline-none text-[14px] text-gray-900 placeholder:text-gray-400 font-['Segoe_UI_Symbol:Regular',sans-serif]"
                  />
                </div>
                <div aria-hidden="true" className="absolute border border-gray-300 border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
              </div>
              <div className="absolute bottom-0 content-stretch flex items-center justify-center left-[8px] top-0">
                <div className="relative shrink-0 size-[18px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                    <g>
                      <path d={svgPaths.p208db700} fill="var(--fill-0, #9CA3AF)" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>

            {/* Filters Button */}
            <div className="bg-white box-border content-stretch flex gap-[8px] items-center justify-center px-[13px] py-[7px] relative rounded-[6px] shrink-0 cursor-pointer hover:bg-gray-50 transition-colors">
              <div aria-hidden="true" className="absolute border border-gray-300 border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
              <div className="h-[16px] relative shrink-0 w-[14px]">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16px] relative w-[14px]">
                  <div className="absolute content-stretch flex flex-col items-center justify-center left-[-2px] overflow-clip size-[16px] top-0">
                    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[16px]">
                      <div className="absolute inset-[16.67%_12.5%_83.33%_58.33%]">
                        <div className="absolute inset-[-0.67px_-14.29%]" style={{ "--stroke-0": "rgba(156, 163, 175, 1)" } as React.CSSProperties}>
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 2">
                            <path d="M5.33333 0.666667H0.666667" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-gray-900 text-nowrap">
                <p className="leading-[20px] whitespace-pre">Filters</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Messages List */}
      <div className="relative shrink-0 w-full">
        <div className="size-full">
          <div className="box-border content-stretch flex flex-col items-start pb-[24px] pt-[13px] px-[24px] relative w-full">
            <div className="relative shrink-0 w-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative w-full">
                {messages.map((message) => (
                  <div key={message.id} className="relative shrink-0 w-full">
                    <div className="box-border content-stretch flex flex-col items-start overflow-clip pb-px pt-0 px-0 relative rounded-[inherit] w-full">
                      <div className="relative shrink-0 w-full">
                        <button className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-between px-0 py-[20px] relative w-full cursor-pointer hover:bg-gray-50 transition-colors">
                          <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
                            <div className="flex flex-col gap-[6px]">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-[12px]">
                                  <div className={`flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] ${message.unread ? 'text-gray-900' : 'text-gray-700'} text-nowrap`}>
                                    <p className="leading-[20px] whitespace-pre">{message.from}</p>
                                  </div>
                                  {message.unread && (
                                    <div className="bg-blue-500 h-[8px] w-[8px] rounded-full" />
                                  )}
                                </div>
                                <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-gray-500 text-nowrap">
                                  <p className="leading-[16px] whitespace-pre">{message.time}</p>
                                </div>
                              </div>
                              <div className={`flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] ${message.unread ? 'text-gray-900' : 'text-gray-700'} text-nowrap`}>
                                <p className="leading-[20px] whitespace-pre">{message.subject}</p>
                              </div>
                              <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-gray-500">
                                <p className="leading-[18px]">{message.preview}</p>
                              </div>
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageContent>
  );
}