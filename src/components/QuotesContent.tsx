import { useState } from 'react';
import svgPaths from "../imports/svg-boagvfvaaf";

export function QuotesContent() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('audits');
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const audits = [
    {
      id: 1,
      name: 'CompTIA Security+',
      badge: 'ISO',
      status: 'complete',
      progress: '46/46',
    },
    {
      id: 2,
      name: 'SAFe Certifications',
      badge: 'IEC 2701',
      status: 'incomplete',
      progress: '32/41',
    },
    {
      id: 3,
      name: 'PMP Certifications',
      badge: 'ISO',
      status: 'complete',
      progress: '21/21',
    },
    {
      id: 4,
      name: 'Cloud Certifications',
      badge: 'SOC 2',
      status: 'complete',
      progress: '21/21',
    },
  ];

  const toggleExpanded = (id: string) => {
    setExpandedItems(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full isolate items-start min-h-px min-w-px relative shrink-0 overflow-hidden">
      {/* Header */}
      <div className="bg-white h-[64px] shrink-0 sticky top-0 w-full z-[2]">
        <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex gap-[8px] h-[64px] items-center pb-px pt-0 px-[16px] relative w-full">
            {/* Sidebar toggle button */}
            <div className="relative rounded-[6px] shrink-0">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start p-[6px] relative">
                <div className="relative shrink-0 size-[18px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                    <g>
                      <path d={svgPaths.p1a8e7980} stroke="var(--stroke-0, #374151)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d="M6.75 2.25V15.75" stroke="var(--stroke-0, #374151)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-[16px] relative shrink-0 w-[9px]">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[16px] items-start pl-0 pr-[8px] py-0 relative w-[9px]">
                <div className="bg-gray-200 h-[16px] shrink-0 w-px" />
              </div>
            </div>

            {/* Breadcrumb */}
            <div className="relative shrink-0">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pl-[8px] pr-0 py-0 relative">
                <div className="content-stretch flex items-center relative shrink-0">
                  {/* Home */}
                  <div className="content-stretch flex items-start relative shrink-0">
                    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0">
                      <a className="[white-space-collapse:collapse] flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-gray-500 text-nowrap">
                        <p className="cursor-pointer leading-[20px] whitespace-pre">Home</p>
                      </a>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="box-border content-stretch flex flex-col h-[16px] items-start pl-[12px] pr-0 py-0 relative shrink-0 w-[28px]">
                    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[16px]">
                      <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[16px]">
                        <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4">
                          <div className="absolute inset-[-8.33%_-16.67%]" style={{ "--stroke-0": "rgba(75, 85, 99, 1)" } as React.CSSProperties}>
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 10">
                              <path d={svgPaths.p3ec8f700} stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quotes */}
                  <div className="box-border content-stretch flex flex-col items-start pl-[12px] pr-0 py-0 relative shrink-0">
                    <div className="content-stretch flex items-start relative shrink-0">
                      <div className="content-stretch flex items-center relative self-stretch shrink-0">
                        <div className="content-stretch flex flex-col items-start relative shrink-0">
                          <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-gray-900 text-nowrap">
                            <a className="block cursor-pointer leading-[20px] text-[14px] whitespace-pre">
                              Quotes
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white relative w-full flex-1 overflow-y-auto">
        {/* Overview Section */}
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start p-[24px]">
          {/* Heading */}
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
            <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-gray-900 w-full">
              <p className="leading-[28px]">Overview</p>
            </div>
          </div>

          {/* Stats */}
          <div className="content-center flex flex-wrap gap-[48px] items-center relative shrink-0 w-full">
            {/* Lead-to-Quote Ratio */}
            <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13.8px] text-gray-500 text-nowrap">
                  <p className="leading-[20px] whitespace-pre">Lead-to-Quote Ratio</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                <div className="content-stretch flex gap-[2px] items-start relative shrink-0">
                  <div className="bg-orange-500 h-[14px] rounded-[2px] shrink-0 w-[4px]" />
                  <div className="bg-orange-500 h-[14px] rounded-[2px] shrink-0 w-[4px]" />
                  <div className="bg-gray-300 h-[14px] rounded-[2px] shrink-0 w-[4px]" />
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0">
                  <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-gray-900 text-nowrap">
                    <p className="leading-[28px] text-[18px] whitespace-pre">
                      <span className="text-gray-900">{`59.8% `}</span>
                      <span className="text-gray-400">- 450/752</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Load */}
            <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-gray-500 text-nowrap">
                  <p className="leading-[20px] whitespace-pre">Project Load</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                <div className="content-stretch flex gap-[2px] items-start relative shrink-0">
                  <div className="bg-red-500 h-[14px] rounded-[2px] shrink-0 w-[4px]" />
                  <div className="bg-gray-300 h-[14px] rounded-[2px] shrink-0 w-[4px]" />
                  <div className="bg-gray-300 h-[14px] rounded-[2px] shrink-0 w-[4px]" />
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0">
                  <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-gray-900 text-nowrap">
                    <p className="leading-[28px] text-[18px] whitespace-pre">
                      <span className="text-gray-900">{`12.9% `}</span>
                      <span className="text-gray-400">- 129/1K</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Win Probability */}
            <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13.8px] text-gray-500 text-nowrap">
                  <p className="leading-[20px] whitespace-pre">Win Probability</p>
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
                      <span className="text-gray-900">{`85.1% `}</span>
                      <span className="text-gray-400">- 280/329</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="box-border content-stretch flex gap-[16px] items-center pb-px pt-0 px-[24px] relative">
          <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
          
          {/* Overview Tab */}
          <div className="relative shrink-0">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start relative">
              <button
                onClick={() => setActiveTab('overview')}
                className="box-border content-stretch cursor-pointer flex items-center justify-center pb-0 pt-px px-0 relative self-stretch shrink-0"
              >
                <div className="box-border content-stretch flex items-center justify-center pb-[10px] pt-0 px-[12px] relative shrink-0">
                  <div aria-hidden="true" className="absolute border-[0px_0px_2px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none" />
                  <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-gray-500 text-nowrap" role="link" tabIndex={0}>
                    <p className="cursor-pointer leading-[20px] whitespace-pre">Overview</p>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Monitoring Tab */}
          <div className="relative shrink-0">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start relative">
              <button
                onClick={() => setActiveTab('monitoring')}
                className="box-border content-stretch cursor-pointer flex items-center justify-center pb-0 pt-px px-0 relative self-stretch shrink-0"
              >
                <div className="box-border content-stretch flex items-center justify-center pb-[10px] pt-0 px-[12px] relative shrink-0">
                  <div aria-hidden="true" className="absolute border-[0px_0px_2px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none" />
                  <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-center text-gray-500 text-nowrap" role="link" tabIndex={0}>
                    <p className="cursor-pointer leading-[20px] text-[14px] whitespace-pre" role="link" tabIndex={0}>
                      Monitoring
                    </p>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Audits Tab - Active */}
          <div className="relative shrink-0">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start relative">
              <button
                onClick={() => setActiveTab('audits')}
                className="box-border content-stretch cursor-pointer flex items-center justify-center pb-0 pt-px px-0 relative self-stretch shrink-0"
              >
                <div className="box-border content-stretch flex items-center justify-center pb-[10px] pt-0 px-[12px] relative shrink-0">
                  <div aria-hidden="true" className={`absolute border-[0px_0px_2px] ${activeTab === 'audits' ? 'border-blue-500' : 'border-[rgba(0,0,0,0)]'} border-solid inset-0 pointer-events-none`} />
                  <div className={`flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] ${activeTab === 'audits' ? 'text-blue-500' : 'text-gray-500'} text-center text-nowrap`}>
                    <p className="cursor-pointer leading-[20px] text-[13.8px] whitespace-pre" role="link" tabIndex={0}>
                      Audits
                    </p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Audits Section */}
        <div className="content-stretch flex flex-col items-start relative">
          {/* Search and Filter */}
          <div className="relative shrink-0 w-full">
            <div className="flex flex-row items-center size-full">
              <div className="box-border content-stretch flex items-center justify-between p-[24px] relative w-full">
                {/* Search Input */}
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[256px]">
                  <div className="bg-white h-[34px] relative rounded-[6px] shrink-0 w-full">
                    <div className="h-[34px] overflow-clip relative rounded-[inherit] w-full">
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search audits..."
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
                <div className="bg-white box-border content-stretch flex gap-[8px] items-center justify-center px-[13px] py-[7px] relative rounded-[6px] shrink-0">
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

          {/* Audits List */}
          <div className="relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
            <div className="size-full">
              <div className="box-border content-stretch flex flex-col items-start pb-[24px] pt-[13px] px-[24px] relative w-full">
                <div className="relative shrink-0 w-full">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative w-full">
                    {audits.map((audit, index) => (
                      <div key={audit.id} className="relative shrink-0 w-full">
                        <div className="box-border content-stretch flex flex-col items-start overflow-clip pb-px pt-0 px-0 relative rounded-[inherit] w-full">
                          <div className="relative shrink-0 w-full">
                            <button
                              onClick={() => toggleExpanded(audit.id.toString())}
                              className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-between px-0 py-[20px] relative w-full cursor-pointer hover:bg-gray-50 transition-colors"
                            >
                              <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
                                <div className="flex flex-row items-center size-full">
                                  <div className="box-border content-stretch flex items-center justify-between pl-0 pr-[16px] py-0 relative w-full">
                                    {/* Left: Name and Badge */}
                                    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
                                      <div className="content-stretch flex flex-col items-start relative shrink-0">
                                        <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-gray-900 text-nowrap">
                                          <p className="leading-[14px] whitespace-pre">{audit.name}</p>
                                        </div>
                                      </div>
                                      <div className="bg-gray-100 box-border content-stretch flex items-center px-[8px] py-[4px] relative rounded-[9999px] shrink-0">
                                        <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-gray-700 text-nowrap">
                                          <p className="leading-[16px] whitespace-pre">{audit.badge}</p>
                                        </div>
                                      </div>
                                    </div>

                                    {/* Right: Status and Progress */}
                                    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                                      <div className="relative shrink-0 size-[18px]">
                                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                                          <g>
                                            <path 
                                              d={audit.status === 'complete' ? svgPaths.p31fa0400 : svgPaths.p29df100} 
                                              fill={audit.status === 'complete' ? 'var(--fill-0, #059669)' : 'var(--fill-0, #DC2626)'} 
                                            />
                                          </g>
                                        </svg>
                                      </div>
                                      <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13.8px] text-gray-900 text-nowrap">
                                        <p className="leading-[14px] whitespace-pre">{audit.progress}</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Chevron */}
                              <div className={`relative shrink-0 size-[20px] transition-transform ${expandedItems.includes(audit.id.toString()) ? 'rotate-180' : ''}`}>
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                                  <g>
                                    <path d={svgPaths.p2cef1100} fill="var(--fill-0, #9CA3AF)" />
                                  </g>
                                </svg>
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
        </div>
      </div>
    </div>
  );
}