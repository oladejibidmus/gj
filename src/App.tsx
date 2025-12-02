import { useState } from 'react';
import svgPaths from "./imports/svg-hidyvxpb5u";
import { HomePage } from './components/HomePage';
import { InboxPage } from './components/InboxPage';
import { GenericPage } from './components/GenericPage';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [myLearningExpanded, setMyLearningExpanded] = useState(true);
  const [progressExpanded, setProgressExpanded] = useState(true);
  const [forumExpanded, setForumExpanded] = useState(true);
  const [activeItem, setActiveItem] = useState('home');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      {/* Sidebar */}
      <div className={`bg-gray-50 border-r border-gray-200 flex flex-col h-full overflow-hidden transition-all duration-300 ${sidebarCollapsed ? 'w-[72px]' : 'w-[256px]'}`}>
        {/* Header Section */}
        <div className="box-border content-stretch flex flex-col items-start px-[12px] py-[16px]">
          <div className="content-stretch flex gap-[12px] items-center w-full">
            <div className="bg-white box-border content-stretch flex items-center justify-center overflow-clip p-[6px] rounded-[6px] shadow-[0px_0px_0px_1px_#e5e7eb,0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 size-[36px]">
              <div className="relative shrink-0 size-[24px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <g>
                    <path d={svgPaths.p2e81a000} fill="#3B82F6" />
                  </g>
                </svg>
              </div>
            </div>
            {!sidebarCollapsed && (
              <div className="content-stretch flex flex-col items-start">
                <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic text-[14px] text-gray-900 text-nowrap">
                  <p className="leading-[20px] whitespace-pre">Innovex Systems</p>
                </div>
                <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic text-[12px] text-gray-900 text-nowrap">
                  <p className="leading-[16px] whitespace-pre">Premium Starter Plan</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Search Section */}
        {!sidebarCollapsed && (
          <div className="box-border content-stretch flex flex-col items-start p-[12px]">
            <div className="relative w-full">
              <div className="bg-white h-[34px] relative rounded-[6px] w-full border border-gray-300 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search items..."
                  className="w-full h-full pl-[33px] pr-[11px] bg-transparent border-0 outline-none text-[14px] text-gray-900 placeholder:text-gray-400 font-['Segoe_UI_Symbol:Regular',sans-serif]"
                />
                <div className="absolute left-[8px] top-1/2 -translate-y-1/2 pointer-events-none">
                  <div className="relative shrink-0 size-[18px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                      <g>
                        <path d={svgPaths.p208db700} fill="#9CA3AF" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Items */}
        <div className="flex-1 overflow-hidden">
          {/* Home and Inbox */}
          <div className="box-border content-stretch flex flex-col items-start pb-[12px] pt-0 px-[12px]">
            <div className="content-stretch flex flex-col gap-[4px] items-start w-full">
              {/* Home */}
              <button
                onClick={() => setActiveItem('home')}
                className="cursor-pointer relative rounded-[6px] w-full hover:bg-gray-100 transition-colors"
              >
                <div className="flex flex-row items-center size-full">
                  <div className={`box-border content-stretch flex items-center p-[8px] w-full ${sidebarCollapsed ? 'justify-center' : ''}`}>
                    <div className="content-stretch flex gap-[10px] items-center">
                      <div className="relative shrink-0 size-[18px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                          <g>
                            <path d={svgPaths.pb56cd00} stroke="#111827" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                            <path d={svgPaths.pdd08040} stroke="#111827" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          </g>
                        </svg>
                      </div>
                      {!sidebarCollapsed && (
                        <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic text-[14px] text-gray-900 text-nowrap">
                          <p className="leading-[20px] whitespace-pre">Dashboard</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </button>

              {/* Inbox with badge */}
              <div className="box-border content-stretch flex flex-col items-start pt-[4px] w-full">
                <button
                  onClick={() => setActiveItem('explore-courses')}
                  className="cursor-pointer relative rounded-[6px] w-full hover:bg-gray-100 transition-colors"
                >
                  <div className="flex flex-row items-center size-full">
                    <div className={`box-border content-stretch flex items-center justify-between p-[8px] w-full ${sidebarCollapsed ? 'justify-center' : ''}`}>
                      <div className="content-stretch flex gap-[10px] items-center">
                        <div className="relative shrink-0 size-[18px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                            <g>
                              <path d={svgPaths.p85ab000} stroke="#111827" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                              <path d="M5.625 3.2025L12.375 7.065" stroke="#111827" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                              <path d={svgPaths.p32143100} stroke="#111827" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                              <path d="M9 16.5V9" stroke="#111827" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                              <path d={svgPaths.p30494a00} stroke="#111827" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                              <path d="M15.2025 12.9525L16.5 14.25" stroke="#111827" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                            </g>
                          </svg>
                        </div>
                        {!sidebarCollapsed && (
                          <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic text-[13.8px] text-gray-900 text-nowrap">
                            <p className="leading-[20px] whitespace-pre">Explore Courses</p>
                          </div>
                        )}
                      </div>
                      {!sidebarCollapsed && (
                        <div className="bg-blue-100 content-stretch flex items-center justify-center rounded-[4px] size-[20px]">
                          <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic text-[12px] text-blue-600 text-center text-nowrap">
                            <p className="leading-[16px] whitespace-pre">12</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="box-border content-stretch flex flex-col items-start px-[12px] py-0">
            <div className="content-stretch flex items-center w-full">
              <div className="basis-0 bg-gray-200 grow h-px min-h-px min-w-px" />
            </div>
          </div>

          {/* Sales Section */}
          {!sidebarCollapsed && (
            <div className="box-border content-stretch flex flex-col items-start p-[12px]">
              <div className="content-stretch flex flex-col gap-[4px] items-start w-full">
                {/* Sales Header */}
                <button
                  onClick={() => setMyLearningExpanded(!myLearningExpanded)}
                  className="relative rounded-[6px] w-full hover:bg-gray-100 transition-colors"
                >
                  <div className="flex flex-row items-center size-full">
                    <div className="box-border content-stretch flex items-center justify-between p-[8px] w-full">
                      <div className="content-stretch flex gap-[10px] items-center">
                        <div className="relative shrink-0 size-[18px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                            <g>
                              <path d={svgPaths.p3ed81b80} stroke="#111827" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                              <path d="M6 8.25H12" stroke="#111827" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                              <path d="M6 5.25H10.5" stroke="#111827" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                            </g>
                          </svg>
                        </div>
                        <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic text-[14px] text-gray-900 text-nowrap">
                          <p className="leading-[20px] whitespace-pre">My Learning</p>
                        </div>
                      </div>
                      <div className={`relative shrink-0 size-[20px] transition-transform ${myLearningExpanded ? 'rotate-180' : ''}`}>
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <g>
                            <path d={svgPaths.p24a18000} fill="#9CA3AF" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </button>

                {/* Sales Submenu */}
                {myLearningExpanded && (
                  <div className="box-border content-stretch flex flex-col gap-[4px] items-start pl-px w-full">
                    <div className="relative w-full">
                      <div className="absolute bg-gray-300 bottom-0 left-[17px] top-0 w-px" />
                      
                      {/* Learning Path */}
                      <button
                        onClick={() => setActiveItem('learning-path')}
                        className={`relative rounded-[4px] w-full ${activeItem === 'learning-path' ? 'bg-white shadow-[0px_0px_0px_1px_#e5e7eb,0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]' : 'hover:bg-gray-100'} transition-colors`}
                      >
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start pl-[36px] pr-[12px] py-[6px] relative">
                          {activeItem === 'learning-path' && (
                            <div className="absolute bg-blue-500 h-[20px] left-[16px] top-1/2 translate-y-[-50%] w-px" />
                          )}
                          <div className={`flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic text-[14px] ${activeItem === 'learning-path' ? 'text-blue-600' : 'text-gray-700'} text-nowrap`}>
                            <p className="leading-[20px] whitespace-pre">Learning Path</p>
                          </div>
                        </div>
                      </button>

                      {/* Quiz and Assessment */}
                      <button
                        onClick={() => setActiveItem('quiz-assessment')}
                        className="relative rounded-[6px] w-full hover:bg-gray-100 transition-colors"
                      >
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start pl-[36px] pr-[12px] py-[6px] relative">
                          <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic text-[14px] text-gray-700 text-nowrap">
                            <p className="leading-[20px] whitespace-pre">Quiz and Assessment</p>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                )}

                {/* Products Section */}
                <div className="box-border content-stretch flex flex-col items-start pt-[16px] w-full">
                  <div className="content-stretch flex flex-col gap-[4px] items-start w-full">
                    {/* Products Header */}
                    <button
                      onClick={() => setProgressExpanded(!progressExpanded)}
                      className="relative rounded-[6px] w-full hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex flex-row items-center size-full">
                        <div className="box-border content-stretch flex items-center justify-between p-[8px] w-full">
                          <div className="content-stretch flex gap-[10px] items-center">
                            <div className="relative shrink-0 size-[18px]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                                <g>
                                  <path d={svgPaths.p85ab000} stroke="#111827" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                  <path d="M5.625 3.2025L12.375 7.065" stroke="#111827" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                  <path d={svgPaths.p32143100} stroke="#111827" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                  <path d="M9 16.5V9" stroke="#111827" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                  <path d={svgPaths.p30494a00} stroke="#111827" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                  <path d="M15.2025 12.9525L16.5 14.25" stroke="#111827" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                </g>
                              </svg>
                            </div>
                            <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic text-[14px] text-gray-900 text-nowrap">
                              <p className="leading-[20px] whitespace-pre">Progress</p>
                            </div>
                          </div>
                          <div className={`relative shrink-0 size-[20px] transition-transform ${progressExpanded ? 'rotate-180' : ''}`}>
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                              <g>
                                <path d={svgPaths.p24a18000} fill="#9CA3AF" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </button>

                    {/* Products Submenu */}
                    {progressExpanded && (
                      <div className="box-border content-stretch flex flex-col gap-[4px] items-start pl-px w-full">
                        <div className="relative w-full">
                          <div className="absolute bg-gray-300 bottom-0 left-[17px] top-0 w-px" />
                          
                          {/* Capstone Project */}
                          <button
                            onClick={() => setActiveItem('capstone-project')}
                            className="relative rounded-[6px] w-full hover:bg-gray-100 transition-colors"
                          >
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start pl-[36px] pr-[12px] py-[6px] relative">
                              <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic text-[14px] text-gray-700 text-nowrap">
                                <p className="leading-[20px] whitespace-pre">Capstone Project</p>
                              </div>
                            </div>
                          </button>

                          {/* Certificates */}
                          <button
                            onClick={() => setActiveItem('certificates')}
                            className="relative rounded-[6px] w-full hover:bg-gray-100 transition-colors"
                          >
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start pl-[36px] pr-[12px] py-[6px] relative">
                              <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic text-[14px] text-gray-700 text-nowrap">
                                <p className="leading-[20px] whitespace-pre">Certificates</p>
                              </div>
                            </div>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Forum Section */}
                <div className="box-border content-stretch flex flex-col items-start pt-[16px] w-full">
                  <button
                    onClick={() => setForumExpanded(!forumExpanded)}
                    className="relative rounded-[6px] w-full hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex flex-row items-center size-full">
                      <div className="box-border content-stretch flex items-center justify-between p-[8px] w-full">
                        <div className="content-stretch flex gap-[10px] items-center">
                          <div className="relative shrink-0 size-[18px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                              <g>
                                <path d={svgPaths.p3ed81b80} stroke="#111827" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                <path d="M6 8.25H12" stroke="#111827" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                <path d="M6 5.25H10.5" stroke="#111827" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                              </g>
                            </svg>
                          </div>
                          <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic text-[14px] text-gray-900 text-nowrap">
                            <p className="leading-[20px] whitespace-pre">Forum</p>
                          </div>
                        </div>
                        <div className={`relative shrink-0 size-[20px] transition-transform ${forumExpanded ? 'rotate-180' : ''}`}>
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                            <g>
                              <path d={svgPaths.p24a18000} fill="#9CA3AF" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </button>

                  {/* Forum Submenu */}
                  {forumExpanded && (
                    <div className="box-border content-stretch flex flex-col gap-[4px] items-start pl-px w-full">
                      <div className="relative w-full">
                        <div className="absolute bg-gray-300 bottom-0 left-[17px] top-0 w-px" />
                        
                        {/* Course Forum */}
                        <button
                          onClick={() => setActiveItem('course-forum')}
                          className="relative rounded-[6px] w-full hover:bg-gray-100 transition-colors"
                        >
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start pl-[36px] pr-[12px] py-[6px] relative">
                            <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic text-[14px] text-gray-700 text-nowrap">
                              <p className="leading-[20px] whitespace-pre">Course Forum</p>
                            </div>
                          </div>
                        </button>

                        {/* Q&A */}
                        <button
                          onClick={() => setActiveItem('qa')}
                          className="relative rounded-[6px] w-full hover:bg-gray-100 transition-colors"
                        >
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start pl-[36px] pr-[12px] py-[6px] relative">
                            <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic text-[14px] text-gray-700 text-nowrap">
                              <p className="leading-[20px] whitespace-pre">Q&A</p>
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* User Profile Section */}
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start p-[12px]">
          <div className="h-px w-full border-t border-gray-200" />
          <button className="relative rounded-[6px] w-full hover:bg-gray-100 transition-colors">
            <div className="flex flex-row items-center size-full">
              <div className={`box-border content-stretch flex items-center ${sidebarCollapsed ? 'justify-center px-[5px]' : 'justify-between px-[5px]'} py-[9px] w-full`}>
                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] items-center">
                  <div className="bg-white box-border content-stretch flex items-center justify-center p-px rounded-[9999px] shrink-0 size-[32px] border border-gray-300">
                    <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic text-[12px] text-center text-gray-700 text-nowrap">
                      <p className="leading-[16px] whitespace-pre">ES</p>
                    </div>
                  </div>
                  {!sidebarCollapsed && (
                    <div className="content-stretch flex flex-col items-center">
                      <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic text-[14px] text-gray-900 text-nowrap">
                        <p className="leading-[20px] whitespace-pre">Emma Stone</p>
                      </div>
                    </div>
                  )}
                </div>
                {!sidebarCollapsed && (
                  <div className="relative shrink-0 size-[16px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <g>
                        <path d={svgPaths.p17a0fc80} stroke="#6B7280" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                        <path d={svgPaths.p3042540} stroke="#6B7280" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                      </g>
                    </svg>
                  </div>
                )}
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      {activeItem === 'home' && <HomePage onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)} />}
      {activeItem === 'explore-courses' && (
        <GenericPage 
          pageName="Explore Courses" 
          title="Explore Courses" 
          description="Browse and discover new courses to enhance your learning journey."
          onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
        />
      )}
      {activeItem === 'learning-path' && (
        <GenericPage 
          pageName="Learning Path" 
          title="Learning Path" 
          description="Explore and follow your personalized learning path."
          onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
        />
      )}
      {activeItem === 'quiz-assessment' && (
        <GenericPage 
          pageName="Quiz and Assessment" 
          title="Quiz and Assessment" 
          description="Take quizzes and assessments to test your knowledge."
          onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
        />
      )}
      {activeItem === 'capstone-project' && (
        <GenericPage 
          pageName="Capstone Project" 
          title="Capstone Project" 
          description="Complete your capstone project to demonstrate your skills."
          onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
        />
      )}
      {activeItem === 'certificates' && (
        <GenericPage 
          pageName="Certificates" 
          title="Certificates" 
          description="View and download your certificates of completion."
          onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
        />
      )}
      {activeItem === 'course-forum' && (
        <GenericPage 
          pageName="Course Forum" 
          title="Course Forum" 
          description="Discuss course topics and share insights with fellow learners."
          onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
        />
      )}
      {activeItem === 'qa' && (
        <GenericPage 
          pageName="Q&A" 
          title="Q&A" 
          description="Ask questions and get answers from instructors and peers."
          onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
        />
      )}
    </div>
  );
}