import React from 'react';
import {
  RiBookOpenLine,
  RiCloseLine,
  RiExternalLinkLine,
  RiPlayCircleLine,
  RiTimeLine,
  RiTrophyLine,
  RiBarChartLine,
  RiMenu2Line,
} from '@remixicon/react';

interface HomePageProps {
  onToggleSidebar?: () => void;
}

// Sample course data
const courses = [
  {
    id: 1,
    name: 'Introduction to React',
    description: 'Learn the fundamentals of React development',
    progress: 75,
    status: 'in-progress',
    lessons: 12,
    completed: 9,
    href: '#',
  },
  {
    id: 2,
    name: 'Advanced TypeScript',
    description: 'Master TypeScript patterns and best practices',
    progress: 45,
    status: 'in-progress',
    lessons: 15,
    completed: 7,
    href: '#',
  },
  {
    id: 3,
    name: 'Web Design Fundamentals',
    description: 'Create beautiful and functional web interfaces',
    progress: 100,
    status: 'completed',
    lessons: 10,
    completed: 10,
    href: '#',
  },
  {
    id: 4,
    name: 'JavaScript Essentials',
    description: 'Build a strong foundation in JavaScript',
    progress: 30,
    status: 'in-progress',
    lessons: 20,
    completed: 6,
    href: '#',
  },
];

// KPI data
const kpiData = [
  {
    name: 'Courses Completed',
    stat: '12',
    change: '+3',
    changeType: 'positive',
  },
  {
    name: 'Hours Learned',
    stat: '87.5',
    change: '+12.4',
    changeType: 'positive',
  },
  {
    name: 'Certificates Earned',
    stat: '8',
    change: '+2',
    changeType: 'positive',
  },
];

// Upcoming deadlines
const deadlines = [
  {
    name: 'React Final Project',
    date: 'Due in 3 days',
    value: 85,
  },
  {
    name: 'TypeScript Quiz',
    date: 'Due in 5 days',
    value: 70,
  },
  {
    name: 'Design Assignment',
    date: 'Due in 7 days',
    value: 60,
  },
  {
    name: 'JavaScript Test',
    date: 'Due in 10 days',
    value: 45,
  },
];

export function HomePage({ onToggleSidebar }: HomePageProps) {
  const [showBanner, setShowBanner] = React.useState(true);
  const userName = 'Alex';

  return (
    <div className="flex-1 flex flex-col bg-gray-50 dark:bg-gray-950 overflow-hidden">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-4">
          <button
            onClick={onToggleSidebar}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle Sidebar"
          >
            <RiMenu2Line className="size-5 text-gray-700" />
          </button>
          <div>
            <p className="text-sm text-gray-500">Home → Dashboard</p>
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-4 sm:p-6 lg:p-8">
          <div className="mx-auto max-w-7xl">
            {/* Welcome Banner */}
            {showBanner && (
              <div className="mb-8 rounded-lg border border-gray-200 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 p-6 relative">
                <button
                  onClick={() => setShowBanner(false)}
                  className="absolute right-3 top-3 p-1 text-gray-500 hover:text-gray-700 dark:text-gray-500 hover:dark:text-gray-300 rounded-md hover:bg-gray-100/50"
                  aria-label="Close"
                >
                  <RiCloseLine className="size-5" />
                </button>
                <div className="sm:flex sm:items-start sm:space-x-6">
                  <div className="inline-flex shrink-0 rounded-full bg-blue-200/50 p-2 dark:bg-blue-900/80">
                    <span className="flex size-8 items-center justify-center rounded-full bg-blue-500">
                      <RiBookOpenLine className="size-5 text-white" />
                    </span>
                  </div>
                  <div className="mt-4 sm:mt-0 flex-1">
                    <h3 className="text-gray-900 dark:text-gray-50">
                      Welcome back, {userName}!
                    </h3>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-500">
                      You're making great progress! Keep up the momentum and continue learning. 
                      Check out your recommended courses below to advance your skills.
                    </p>
                    <div className="mt-6 flex items-center gap-2 flex-wrap">
                      <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
                        Continue Learning
                      </button>
                      <button className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 dark:text-blue-500 hover:dark:text-blue-400 transition-colors px-3 py-2 rounded-md hover:bg-blue-50 dark:hover:bg-blue-950/20">
                        Browse Catalog
                        <RiExternalLinkLine className="size-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* KPI Cards */}
            <div className="mb-8">
              <h2 className="mb-4 text-gray-900 dark:text-gray-50">
                Your Progress
              </h2>
              <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {kpiData.map((item) => (
                  <div key={item.name} className="rounded-lg border border-gray-200 bg-white p-6 dark:bg-gray-900 dark:border-gray-800">
                    <div className="flex items-center justify-between space-x-4">
                      <dt className="text-sm text-gray-500 dark:text-gray-500">
                        {item.name}
                      </dt>
                      <dd
                        className={`inline-flex items-center rounded-md px-2 py-1 text-xs ring-1 ring-inset ${
                          item.changeType === 'positive'
                            ? 'bg-emerald-100 text-emerald-800 ring-emerald-600/10 dark:bg-emerald-400/10 dark:text-emerald-500 dark:ring-emerald-400/20'
                            : 'bg-red-100 text-red-800 ring-red-600/10 dark:bg-red-400/10 dark:text-red-500 dark:ring-red-400/20'
                        }`}
                      >
                        {item.change}
                      </dd>
                    </div>
                    <dd className="mt-2 text-gray-900 dark:text-gray-50">
                      {item.stat}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {/* Courses Section - Takes 2 columns */}
              <div className="lg:col-span-2">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-gray-900 dark:text-gray-50">
                    My Courses
                  </h2>
                  <button className="px-3 py-1.5 text-sm bg-gray-100 text-gray-900 rounded-md hover:bg-gray-200 transition-colors dark:bg-gray-800 dark:text-gray-50">
                    View All
                  </button>
                </div>
                
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {courses.map((course) => (
                    <div
                      key={course.id}
                      className="rounded-lg border border-gray-200 bg-white p-6 dark:bg-gray-900 dark:border-gray-800 group relative flex flex-col justify-between hover:bg-gray-50 hover:dark:bg-gray-800 transition-colors"
                    >
                      {/* Course Info */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <h3 className="text-gray-900 dark:text-gray-50">
                            <a href={course.href} className="focus:outline-none">
                              <span className="absolute inset-0" aria-hidden={true} />
                              {course.name}
                            </a>
                          </h3>
                          {course.status === 'completed' && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500 px-2 py-1 text-xs text-white ml-2 shrink-0">
                              <RiTrophyLine className="size-3" />
                              Completed
                            </span>
                          )}
                        </div>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                          {course.description}
                        </p>
                        
                        <div className="mt-3 text-xs text-gray-500 dark:text-gray-500">
                          {course.completed} of {course.lessons} lessons completed
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="mt-4">
                        <div className="flex items-center justify-between text-sm mb-2">
                          <span className="text-gray-500 dark:text-gray-400">Progress</span>
                          <span className="text-blue-500 dark:text-blue-500">
                            {course.progress}%
                          </span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                          <div 
                            className="h-2 rounded-full bg-blue-500 transition-all"
                            style={{ width: `${course.progress}%` }}
                          />
                        </div>
                      </div>

                      {/* Action Button */}
                      <button className="relative z-10 mt-4 w-full px-4 py-2 flex items-center justify-center gap-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
                        <RiPlayCircleLine className="size-4" />
                        {course.status === 'completed' ? 'Review' : 'Continue'}
                      </button>
                    </div>
                  ))}
                </div>

                {/* Empty State when no courses */}
                {courses.length === 0 && (
                  <div className="rounded-lg border border-gray-200 bg-white p-12 text-center dark:bg-gray-900 dark:border-gray-800">
                    <RiBookOpenLine className="mx-auto size-12 text-gray-400 dark:text-gray-600" />
                    <h3 className="mt-4 text-gray-900 dark:text-gray-50">
                      No courses yet
                    </h3>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-500">
                      Get started by browsing our course catalog
                    </p>
                    <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
                      Browse Courses
                    </button>
                  </div>
                )}
              </div>

              {/* Sidebar - Takes 1 column */}
              <div className="space-y-6">
                {/* Upcoming Deadlines */}
                <div className="rounded-lg border border-gray-200 bg-white dark:bg-gray-900 dark:border-gray-800 overflow-hidden">
                  <div className="flex items-center justify-between border-b border-gray-200 p-6 dark:border-gray-800">
                    <div className="flex items-center gap-2">
                      <RiTimeLine className="size-5 text-gray-500" />
                      <p className="text-gray-900 dark:text-gray-50">
                        Upcoming Deadlines
                      </p>
                    </div>
                    <p className="text-xs uppercase text-gray-500 dark:text-gray-500">
                      Priority
                    </p>
                  </div>
                  <div className="p-6 space-y-3">
                    {deadlines.map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <div className="flex-1">
                          <p className="text-sm text-gray-900 dark:text-gray-50">{item.name}</p>
                          <p className="text-xs text-gray-500">{item.date}</p>
                        </div>
                        <div className="ml-4 flex items-center gap-2">
                          <div className="h-2 w-20 rounded-full bg-gray-200 dark:bg-gray-700">
                            <div 
                              className="h-2 rounded-full bg-blue-500"
                              style={{ width: `${item.value}%` }}
                            />
                          </div>
                          <span className="text-xs text-gray-500 w-8 text-right">{item.value}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Learning Stats */}
                <div className="rounded-lg border border-gray-200 bg-white p-6 dark:bg-gray-900 dark:border-gray-800">
                  <div className="flex items-center gap-2">
                    <RiBarChartLine className="size-5 text-gray-500" />
                    <h3 className="text-gray-900 dark:text-gray-50">
                      This Week's Activity
                    </h3>
                  </div>
                  <div className="mt-4 space-y-4">
                    <div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500 dark:text-gray-500">
                          Study Time
                        </span>
                        <span className="text-gray-900 dark:text-gray-50">
                          12.5 hrs
                        </span>
                      </div>
                      <div className="mt-2 h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                        <div className="h-2 rounded-full bg-blue-500" style={{ width: '78%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500 dark:text-gray-500">
                          Lessons Completed
                        </span>
                        <span className="text-gray-900 dark:text-gray-50">
                          18/25
                        </span>
                      </div>
                      <div className="mt-2 h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                        <div className="h-2 rounded-full bg-blue-500" style={{ width: '72%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500 dark:text-gray-500">
                          Quiz Score Avg
                        </span>
                        <span className="text-gray-900 dark:text-gray-50">
                          87%
                        </span>
                      </div>
                      <div className="mt-2 h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                        <div className="h-2 rounded-full bg-blue-500" style={{ width: '87%' }} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Achievements Badge */}
                <div className="rounded-lg border border-gray-200 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 p-6 dark:border-gray-800">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-purple-500">
                      <RiTrophyLine className="size-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-gray-900 dark:text-gray-50">
                        Achievement Unlocked!
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Completed 5 courses this month
                      </p>
                    </div>
                  </div>
                  <button className="mt-4 w-full px-4 py-2 bg-gray-100 text-gray-900 rounded-md hover:bg-gray-200 transition-colors dark:bg-gray-800 dark:text-gray-50">
                    View All Achievements
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}