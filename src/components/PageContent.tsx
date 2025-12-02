import { useState, ReactNode } from 'react';
import svgPaths from "../imports/svg-boagvfvaaf";

interface PageContentProps {
  pageName: string;
  children: ReactNode;
  onToggleSidebar?: () => void;
}

export function PageContent({ pageName, children, onToggleSidebar }: PageContentProps) {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full isolate items-start min-h-px min-w-px relative shrink-0 overflow-hidden">
      {/* Header */}
      <div className="bg-white h-[64px] shrink-0 sticky top-0 w-full z-[2]">
        <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex gap-[8px] h-[64px] items-center pb-px pt-0 px-[16px] relative w-full">
            {/* Sidebar toggle button */}
            <button 
              onClick={onToggleSidebar}
              className="relative rounded-[6px] shrink-0 hover:bg-gray-100 transition-colors"
            >
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
            </button>

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

                  {/* Current Page */}
                  <div className="box-border content-stretch flex flex-col items-start pl-[12px] pr-0 py-0 relative shrink-0">
                    <div className="content-stretch flex items-start relative shrink-0">
                      <div className="content-stretch flex items-center relative self-stretch shrink-0">
                        <div className="content-stretch flex flex-col items-start relative shrink-0">
                          <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-gray-900 text-nowrap">
                            <a className="block cursor-pointer leading-[20px] text-[14px] whitespace-pre">
                              {pageName}
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
        {children}
      </div>
    </div>
  );
}