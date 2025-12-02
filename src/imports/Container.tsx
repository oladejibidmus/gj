import svgPaths from "./svg-boagvfvaaf";

function Component() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Component 1">
          <path d={svgPaths.p1a8e7980} id="Vector" stroke="var(--stroke-0, #374151)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M6.75 2.25V15.75" id="Vector_2" stroke="var(--stroke-0, #374151)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Component1() {
  return (
    <div className="relative rounded-[6px] shrink-0" data-name="Component 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start p-[6px] relative">
        <Component />
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="h-[16px] relative shrink-0 w-[9px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[16px] items-start pl-0 pr-[8px] py-0 relative w-[9px]">
        <div className="bg-gray-200 h-[16px] shrink-0 w-px" data-name="Vertical Divider" />
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Component 3">
      <a className="[white-space-collapse:collapse] flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-gray-500 text-nowrap" href="https://planner.tremor.so/quotes/audits">
        <p className="cursor-pointer leading-[20px] whitespace-pre">Home</p>
      </a>
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Item">
      <Component2 />
    </div>
  );
}

function Component5() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[16px]" data-name="Component 1">
      <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%_-16.67%]" style={{ "--stroke-0": "rgba(75, 85, 99, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 10">
            <path d={svgPaths.p3ec8f700} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[16px]" data-name="SVG">
      <Component5 />
    </div>
  );
}

function SvgMargin() {
  return (
    <div className="box-border content-stretch flex flex-col h-[16px] items-start pl-[12px] pr-0 py-0 relative shrink-0 w-[28px]" data-name="SVG:margin">
      <Svg />
    </div>
  );
}

function Component6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Component 3">
      <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-gray-900 text-nowrap">
        <a className="block cursor-pointer leading-[20px] text-[14px] whitespace-pre" href="https://planner.tremor.so/quotes/audits">
          Quotes
        </a>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-center relative self-stretch shrink-0" data-name="Container">
      <Component6 />
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Item">
      <Container />
    </div>
  );
}

function ItemMargin() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pl-[12px] pr-0 py-0 relative shrink-0" data-name="Item:margin">
      <Item1 />
    </div>
  );
}

function NavBreadcrumbList() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Nav - Breadcrumb → List">
      <Item />
      <SvgMargin />
      <ItemMargin />
    </div>
  );
}

function NavBreadcrumbMargin() {
  return (
    <div className="relative shrink-0" data-name="Nav - Breadcrumb:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pl-[8px] pr-0 py-0 relative">
        <NavBreadcrumbList />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white h-[64px] shrink-0 sticky top-0 w-full z-[2]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[64px] items-center pb-px pt-0 px-[16px] relative w-full">
          <Component1 />
          <Margin />
          <NavBreadcrumbMargin />
        </div>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-gray-900 w-full">
        <p className="leading-[28px]">Overview</p>
      </div>
    </div>
  );
}

function Term() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Term">
      <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13.8px] text-gray-500 text-nowrap">
        <p className="leading-[20px] whitespace-pre">Lead-to-Quote Ratio</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0" data-name="Container">
      <div className="bg-orange-500 h-[14px] rounded-[2px] shrink-0 w-[4px]" data-name="Background" />
      <div className="bg-orange-500 h-[14px] rounded-[2px] shrink-0 w-[4px]" data-name="Background" />
      <div className="bg-gray-300 h-[14px] rounded-[2px] shrink-0 w-[4px]" data-name="Background" />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-gray-900 text-nowrap">
        <p className="leading-[28px] text-[18px] whitespace-pre">
          <span className="text-gray-900">{`59.8% `}</span>
          <span className="text-gray-400">- 450/752</span>
        </p>
      </div>
    </div>
  );
}

function Details() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Details">
      <Container1 />
      <Container2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0" data-name="Container">
      <Term />
      <Details />
    </div>
  );
}

function Term1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Term">
      <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-gray-500 text-nowrap">
        <p className="leading-[20px] whitespace-pre">Project Load</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0" data-name="Container">
      <div className="bg-red-500 h-[14px] rounded-[2px] shrink-0 w-[4px]" data-name="Background" />
      <div className="bg-gray-300 h-[14px] rounded-[2px] shrink-0 w-[4px]" data-name="Background" />
      <div className="bg-gray-300 h-[14px] rounded-[2px] shrink-0 w-[4px]" data-name="Background" />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-gray-900 text-nowrap">
        <p className="leading-[28px] text-[18px] whitespace-pre">
          <span className="text-gray-900">{`12.9% `}</span>
          <span className="text-gray-400">- 129/1K</span>
        </p>
      </div>
    </div>
  );
}

function Details1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Details">
      <Container4 />
      <Container5 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0" data-name="Container">
      <Term1 />
      <Details1 />
    </div>
  );
}

function Term2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Term">
      <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13.8px] text-gray-500 text-nowrap">
        <p className="leading-[20px] whitespace-pre">Win Probability</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0" data-name="Container">
      <div className="bg-emerald-500 h-[14px] rounded-[2px] shrink-0 w-[4px]" data-name="Background" />
      <div className="bg-emerald-500 h-[14px] rounded-[2px] shrink-0 w-[4px]" data-name="Background" />
      <div className="bg-emerald-500 h-[14px] rounded-[2px] shrink-0 w-[4px]" data-name="Background" />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-gray-900 text-nowrap">
        <p className="leading-[28px] text-[18px] whitespace-pre">
          <span className="text-gray-900">{`85.1% `}</span>
          <span className="text-gray-400">- 280/329</span>
        </p>
      </div>
    </div>
  );
}

function Details2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Details">
      <Container7 />
      <Container8 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0" data-name="Container">
      <Term2 />
      <Details2 />
    </div>
  );
}

function Descriptions() {
  return (
    <div className="content-center flex flex-wrap gap-[48px] items-center relative shrink-0 w-full" data-name="Descriptions">
      <Container3 />
      <Container6 />
      <Container9 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[24px] items-start left-0 p-[24px] right-0 top-0" data-name="Container">
      <Heading />
      <Descriptions />
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="box-border content-stretch flex items-center justify-center pb-[10px] pt-0 px-[12px] relative shrink-0" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[0px_0px_2px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-gray-500 text-nowrap" role="link" tabIndex="0">
        <p className="cursor-pointer leading-[20px] whitespace-pre">Overview</p>
      </div>
    </div>
  );
}

function Component3() {
  return (
    <a className="box-border content-stretch cursor-pointer flex items-center justify-center pb-0 pt-px px-0 relative self-stretch shrink-0" data-name="Component 4" href="https://planner.tremor.so/quotes/overview">
      <HorizontalBorder />
    </a>
  );
}

function Item2() {
  return (
    <div className="relative shrink-0" data-name="Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start relative">
        <Component3 />
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="box-border content-stretch flex items-center justify-center pb-[10px] pt-0 px-[12px] relative shrink-0" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[0px_0px_2px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-center text-gray-500 text-nowrap" role="link" tabIndex="0">
        <p className="cursor-pointer leading-[20px] text-[14px] whitespace-pre" role="link" tabIndex="0">
          Monitoring
        </p>
      </div>
    </div>
  );
}

function Component7() {
  return (
    <a className="box-border content-stretch cursor-pointer flex items-center justify-center pb-0 pt-px px-0 relative self-stretch shrink-0" data-name="Component 4" href="https://planner.tremor.so/quotes/monitoring">
      <HorizontalBorder1 />
    </a>
  );
}

function Item3() {
  return (
    <div className="relative shrink-0" data-name="Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start relative">
        <Component7 />
      </div>
    </div>
  );
}

function HorizontalBorder2() {
  return (
    <div className="box-border content-stretch flex items-center justify-center pb-[10px] pt-0 px-[12px] relative shrink-0" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[0px_0px_2px] border-blue-500 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-blue-500 text-center text-nowrap">
        <p className="cursor-pointer leading-[20px] text-[13.8px] whitespace-pre" role="link" tabIndex="0">
          Audits
        </p>
      </div>
    </div>
  );
}

function Component8() {
  return (
    <a className="box-border content-stretch cursor-pointer flex items-center justify-center pb-0 pt-px px-0 relative self-stretch shrink-0" data-name="Component 4" href="https://planner.tremor.so/quotes/audits">
      <HorizontalBorder2 />
    </a>
  );
}

function Item4() {
  return (
    <div className="relative shrink-0" data-name="Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start relative">
        <Component8 />
      </div>
    </div>
  );
}

function NavMainList() {
  return (
    <div className="absolute box-border content-stretch flex gap-[16px] items-center left-0 pb-px pt-0 px-[24px] right-0 top-[178px]" data-name="Nav - Main → List">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <Item2 />
      <Item3 />
      <Item4 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[33px] overflow-clip pb-[2px] pt-px px-0 right-[11px] top-[9px]" data-name="Container">
      <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-gray-400 text-nowrap">
        <p className="leading-[normal] whitespace-pre">Search audits...</p>
      </div>
    </div>
  );
}

function Container12() {
  return <div className="basis-0 grow h-[20px] min-h-px min-w-px shrink-0" data-name="Container" />;
}

function Container13() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[33px] right-[11px] top-[7px]" data-name="Container">
      <Container12 />
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white h-[34px] relative rounded-[6px] shrink-0 w-full" data-name="Input">
      <div className="h-[34px] overflow-clip relative rounded-[inherit] w-full">
        <Container11 />
        <Container13 />
      </div>
      <div aria-hidden="true" className="absolute border border-gray-300 border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Component9() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Component 1">
          <path d={svgPaths.p208db700} fill="var(--fill-0, #9CA3AF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-center justify-center left-[8px] top-0" data-name="Container">
      <Component9 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[256px]" data-name="Container">
      <Input />
      <Container14 />
    </div>
  );
}

function Component10() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[16px]" data-name="Component 1">
      <div className="absolute inset-[16.67%_12.5%_83.33%_58.33%]" data-name="Vector">
        <div className="absolute inset-[-0.67px_-14.29%]" style={{ "--stroke-0": "rgba(156, 163, 175, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 2">
            <path d="M5.33333 0.666667H0.666667" id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[16.67%_58.33%_83.33%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-0.67px_-14.29%]" style={{ "--stroke-0": "rgba(156, 163, 175, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 2">
            <path d="M5.33333 0.666667H0.666667" id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-1/2 right-[12.5%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.67px_-11.11%]" style={{ "--stroke-0": "rgba(156, 163, 175, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 2">
            <path d="M6.66667 0.666667H0.666667" id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-[12.5%] right-[66.67%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.67px_-20%]" style={{ "--stroke-0": "rgba(156, 163, 175, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 2">
            <path d="M4 0.666667H0.666667" id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[83.33%_12.5%_16.67%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-0.67px_-20%]" style={{ "--stroke-0": "rgba(156, 163, 175, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 2">
            <path d="M4 0.666667H0.666667" id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[16.67%] left-[12.5%] right-1/2 top-[83.33%]" data-name="Vector">
        <div className="absolute inset-[-0.67px_-11.11%]" style={{ "--stroke-0": "rgba(156, 163, 175, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 2">
            <path d="M6.66667 0.666667H0.666667" id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[58.33%] right-[41.67%] top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-0.67px]" style={{ "--stroke-0": "rgba(156, 163, 175, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 4">
            <path d="M0.666667 0.666667V3.33333" id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_66.67%_41.67%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-0.67px]" style={{ "--stroke-0": "rgba(156, 163, 175, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 4">
            <path d="M0.666667 0.666667V3.33333" id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[8.33%] left-[66.67%] right-[33.33%] top-3/4" data-name="Vector">
        <div className="absolute inset-[-25%_-0.67px]" style={{ "--stroke-0": "rgba(156, 163, 175, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 4">
            <path d="M0.666667 0.666667V3.33333" id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg1() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center left-[-2px] overflow-clip size-[16px] top-0" data-name="SVG">
      <Component10 />
    </div>
  );
}

function SvgMargin1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[14px]" data-name="SVG:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16px] relative w-[14px]">
        <Svg1 />
      </div>
    </div>
  );
}

function Component4() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] items-center justify-center px-[13px] py-[7px] relative rounded-[6px] shrink-0" data-name="Component 5">
      <div aria-hidden="true" className="absolute border border-gray-300 border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <SvgMargin1 />
      <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-gray-900 text-nowrap">
        <p className="leading-[20px] whitespace-pre">Filters</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between p-[24px] relative w-full">
          <Container15 />
          <Component4 />
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-gray-900 text-nowrap">
        <p className="leading-[14px] whitespace-pre">CompTIA Security+</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-gray-100 box-border content-stretch flex items-center px-[8px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-gray-700 text-nowrap">
        <p className="leading-[16px] whitespace-pre">ISO</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Container">
      <Container17 />
      <Background />
    </div>
  );
}

function Component11() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Component 1">
          <path d={svgPaths.p31fa0400} fill="var(--fill-0, #059669)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Component11 />
      <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13.8px] text-gray-900 text-nowrap">
        <p className="leading-[14px] whitespace-pre">46/46</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between pl-0 pr-[16px] py-0 relative w-full">
          <Container18 />
          <Container19 />
        </div>
      </div>
    </div>
  );
}

function Component12() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Component 1">
          <path d={svgPaths.p2cef1100} fill="var(--fill-0, #9CA3AF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Heading3Button() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3 → Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-between px-0 py-[20px] relative w-full">
        <Container20 />
        <Component12 />
      </div>
    </div>
  );
}

function HorizontalBorder3() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div className="box-border content-stretch flex flex-col items-start overflow-clip pb-px pt-0 px-0 relative rounded-[inherit] w-full">
        <Heading3Button />
      </div>
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-gray-900 text-nowrap">
        <p className="leading-[14px] whitespace-pre">SAFe Certifications</p>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-gray-100 box-border content-stretch flex items-center px-[8px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-gray-700 text-nowrap">
        <p className="leading-[16px] whitespace-pre">IEC 2701</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Container">
      <Container21 />
      <Background1 />
    </div>
  );
}

function Component13() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Component 1">
          <path d={svgPaths.p29df100} fill="var(--fill-0, #DC2626)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Component13 />
      <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13.8px] text-gray-900 text-nowrap">
        <p className="leading-[14px] whitespace-pre">32/41</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between pl-0 pr-[16px] py-0 relative w-full">
          <Container22 />
          <Container23 />
        </div>
      </div>
    </div>
  );
}

function Component14() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Component 1">
          <path d={svgPaths.p2cef1100} fill="var(--fill-0, #9CA3AF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Heading3Button1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3 → Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-between px-0 py-[20px] relative w-full">
        <Container24 />
        <Component14 />
      </div>
    </div>
  );
}

function HorizontalBorder4() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div className="box-border content-stretch flex flex-col items-start overflow-clip pb-px pt-0 px-0 relative rounded-[inherit] w-full">
        <Heading3Button1 />
      </div>
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-gray-900 text-nowrap">
        <p className="leading-[14px] whitespace-pre">PMP Certifications</p>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-gray-100 box-border content-stretch flex items-center px-[8px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-gray-700 text-nowrap">
        <p className="leading-[16px] whitespace-pre">ISO</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Container">
      <Container25 />
      <Background2 />
    </div>
  );
}

function Component15() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Component 1">
          <path d={svgPaths.p31fa0400} fill="var(--fill-0, #059669)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Component15 />
      <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13.8px] text-gray-900 text-nowrap">
        <p className="leading-[14px] whitespace-pre">21/21</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between pl-0 pr-[16px] py-0 relative w-full">
          <Container26 />
          <Container27 />
        </div>
      </div>
    </div>
  );
}

function Component16() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Component 1">
          <path d={svgPaths.p2cef1100} fill="var(--fill-0, #9CA3AF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Heading3Button2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3 → Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-between px-0 py-[20px] relative w-full">
        <Container28 />
        <Component16 />
      </div>
    </div>
  );
}

function HorizontalBorder5() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div className="box-border content-stretch flex flex-col items-start overflow-clip pb-px pt-0 px-0 relative rounded-[inherit] w-full">
        <Heading3Button2 />
      </div>
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-gray-900 text-nowrap">
        <p className="leading-[14px] whitespace-pre">Cloud Certifications</p>
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-gray-100 box-border content-stretch flex items-center px-[8px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-gray-700 text-nowrap">
        <p className="leading-[16px] whitespace-pre">SOC 2</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Container">
      <Container29 />
      <Background3 />
    </div>
  );
}

function Component17() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Component 1">
          <path d={svgPaths.p31fa0400} fill="var(--fill-0, #059669)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Component17 />
      <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13.8px] text-gray-900 text-nowrap">
        <p className="leading-[14px] whitespace-pre">21/21</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between pl-0 pr-[16px] py-0 relative w-full">
          <Container30 />
          <Container31 />
        </div>
      </div>
    </div>
  );
}

function Component18() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Component 1">
          <path d={svgPaths.p2cef1100} fill="var(--fill-0, #9CA3AF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Heading3Button3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3 → Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-between px-0 py-[20px] relative w-full">
        <Container32 />
        <Component18 />
      </div>
    </div>
  );
}

function HorizontalBorder6() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div className="box-border content-stretch flex flex-col items-start overflow-clip pb-px pt-0 px-0 relative rounded-[inherit] w-full">
        <Heading3Button3 />
      </div>
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container33() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative w-full">
        <HorizontalBorder3 />
        <HorizontalBorder4 />
        <HorizontalBorder5 />
        <HorizontalBorder6 />
      </div>
    </div>
  );
}

function HorizontalBorder7() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pb-[24px] pt-[13px] px-[24px] relative w-full">
          <Container33 />
        </div>
      </div>
    </div>
  );
}

function SectionAuditsOverview() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[208px]" data-name="Section - Audits overview">
      <Container16 />
      <HorizontalBorder7 />
    </div>
  );
}

function Main() {
  return (
    <div className="bg-white h-[1136px] relative shrink-0 w-full z-[1]" data-name="Main">
      <Container10 />
      <NavMainList />
      <SectionAuditsOverview />
    </div>
  );
}

function Container34() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full isolate items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <Header />
      <Main />
    </div>
  );
}

export default function Container35() {
  return (
    <div className="content-stretch flex items-start justify-center relative size-full" data-name="Container">
      <Container34 />
    </div>
  );
}