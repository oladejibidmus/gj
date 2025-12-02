import svgPaths from "./svg-hidyvxpb5u";

function Component() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Component 1">
          <path d={svgPaths.p2e81a000} fill="var(--fill-0, #3B82F6)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="bg-white box-border content-stretch flex items-center justify-center overflow-clip p-[6px] relative rounded-[6px] shadow-[0px_0px_0px_1px_#e5e7eb,0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 size-[36px]" data-name="Background+Shadow">
      <Component />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-gray-900 text-nowrap">
        <p className="leading-[20px] whitespace-pre">Innovex Systems</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-gray-900 text-nowrap">
        <p className="leading-[16px] whitespace-pre">Premium Starter Plan</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container />
      <Container1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <BackgroundShadow />
      <Container2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start px-[12px] py-[16px] relative w-full">
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[33px] overflow-clip pb-[2px] pt-px px-0 right-[11px] top-[9px]" data-name="Container">
      <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-gray-400 text-nowrap">
        <p className="leading-[normal] whitespace-pre">Search items...</p>
      </div>
    </div>
  );
}

function Container6() {
  return <div className="basis-0 grow h-[20px] min-h-px min-w-px shrink-0" data-name="Container" />;
}

function Container7() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[33px] right-[11px] top-[7px]" data-name="Container">
      <Container6 />
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white h-[34px] relative rounded-[6px] shrink-0 w-full" data-name="Input">
      <div className="h-[34px] overflow-clip relative rounded-[inherit] w-full">
        <Container5 />
        <Container7 />
      </div>
      <div aria-hidden="true" className="absolute border border-gray-300 border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Component1() {
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

function Container8() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-center justify-center left-[8px] top-0" data-name="Container">
      <Component1 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Input />
      <Container8 />
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start p-[12px] relative w-full">
          <Container9 />
        </div>
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Component 1">
          <path d={svgPaths.pb56cd00} id="Vector" stroke="var(--stroke-0, #111827)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.pdd08040} id="Vector_2" stroke="var(--stroke-0, #111827)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Container">
      <Component3 />
      <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-gray-900 text-nowrap" role="link" tabIndex="0">
        <p className="cursor-pointer leading-[20px] whitespace-pre">Home</p>
      </div>
    </div>
  );
}

function Component5() {
  return (
    <a className="cursor-pointer relative rounded-[6px] shrink-0 w-full" data-name="Component 6" href="https://planner.tremor.so/quotes/audits">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center p-[8px] relative w-full">
          <Container11 />
        </div>
      </div>
    </a>
  );
}

function Component4() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Component 1">
          <path d={svgPaths.p85ab000} id="Vector" stroke="var(--stroke-0, #111827)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M5.625 3.2025L12.375 7.065" id="Vector_2" stroke="var(--stroke-0, #111827)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p32143100} id="Vector_3" stroke="var(--stroke-0, #111827)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M9 16.5V9" id="Vector_4" stroke="var(--stroke-0, #111827)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p30494a00} id="Vector_5" stroke="var(--stroke-0, #111827)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M15.2025 12.9525L16.5 14.25" id="Vector_6" stroke="var(--stroke-0, #111827)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Container">
      <Component4 />
      <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13.8px] text-gray-900 text-nowrap" role="link" tabIndex="0">
        <p className="cursor-pointer leading-[20px] whitespace-pre">Inbox</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-blue-100 content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[20px]" data-name="Background">
      <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-blue-600 text-center text-nowrap" role="link" tabIndex="0">
        <p className="cursor-pointer leading-[16px] whitespace-pre">2</p>
      </div>
    </div>
  );
}

function Component8() {
  return (
    <a className="cursor-pointer relative rounded-[6px] shrink-0 w-full" data-name="Component 6" href="https://planner.tremor.so/quotes/audits">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between p-[8px] relative w-full">
          <Container12 />
          <Background />
        </div>
      </div>
    </a>
  );
}

function ItemMargin() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-0 pt-[4px] px-0 relative shrink-0 w-full" data-name="Item:margin">
      <Component8 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="List">
      <Component5 />
      <ItemMargin />
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pb-[12px] pt-0 px-[12px] relative w-full">
          <List />
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <div className="basis-0 bg-gray-200 grow h-px min-h-px min-w-px shrink-0" data-name="Horizontal Divider" />
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start px-[12px] py-0 relative w-full">
          <Container14 />
        </div>
      </div>
    </div>
  );
}

function Component9() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Component 1">
          <path d={svgPaths.p3ed81b80} id="Vector" stroke="var(--stroke-0, #111827)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M6 8.25H12" id="Vector_2" stroke="var(--stroke-0, #111827)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M6 5.25H10.5" id="Vector_3" stroke="var(--stroke-0, #111827)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Container">
      <Component9 />
      <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-gray-900 text-nowrap">
        <p className="leading-[20px] whitespace-pre">Sales</p>
      </div>
    </div>
  );
}

function Component10() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Component 1">
          <path d={svgPaths.p24a18000} fill="var(--fill-0, #9CA3AF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component6() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full" data-name="Component 7">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between p-[8px] relative w-full">
          <Container16 />
          <Component10 />
        </div>
      </div>
    </div>
  );
}

function ItemLink() {
  return (
    <a className="bg-white cursor-pointer relative rounded-[4px] shadow-[0px_0px_0px_1px_#e5e7eb,0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 w-[230px]" data-name="Item → Link" href="https://planner.tremor.so/quotes/audits">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start overflow-clip pl-[36px] pr-[12px] py-[6px] relative rounded-[inherit] w-[230px]">
        <div className="absolute bg-blue-500 h-[20px] left-[16px] top-1/2 translate-y-[-50%] w-px" data-name="Vertical Divider" />
        <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-blue-600 text-nowrap" role="link" tabIndex="0">
          <p className="cursor-pointer leading-[20px] whitespace-pre">Quotes</p>
        </div>
      </div>
    </a>
  );
}

function Component2() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-[230px]" data-name="Component 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start pl-[36px] pr-[12px] py-[6px] relative w-[230px]">
        <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-gray-700 text-nowrap">
          <a className="block cursor-pointer leading-[20px] text-[14px] whitespace-pre" href="https://planner.tremor.so/quotes/audits">
            Orders
          </a>
        </div>
      </div>
    </div>
  );
}

function Component11() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-[230px]" data-name="Component 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start pl-[36px] pr-[12px] py-[6px] relative w-[230px]">
        <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-gray-700 text-nowrap">
          <a className="block cursor-pointer leading-[20px] text-[14px] whitespace-pre" href="https://planner.tremor.so/quotes/audits">{`Insights & Reports`}</a>
        </div>
      </div>
    </div>
  );
}

function List1() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[4px] items-start pl-px pr-0 py-0 relative shrink-0 w-full" data-name="List">
      <div aria-hidden="true" className="absolute border-[0px_0px_0px_1px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none" />
      <div className="absolute bg-gray-300 bottom-0 left-[17px] top-0 w-px" data-name="Vertical Divider">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-full" />
      </div>
      <ItemLink />
      <Component2 />
      <Component11 />
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Item">
      <Component6 />
      <List1 />
    </div>
  );
}

function Component12() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Component 1">
          <path d={svgPaths.p85ab000} id="Vector" stroke="var(--stroke-0, #111827)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M5.625 3.2025L12.375 7.065" id="Vector_2" stroke="var(--stroke-0, #111827)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p32143100} id="Vector_3" stroke="var(--stroke-0, #111827)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M9 16.5V9" id="Vector_4" stroke="var(--stroke-0, #111827)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p30494a00} id="Vector_5" stroke="var(--stroke-0, #111827)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M15.2025 12.9525L16.5 14.25" id="Vector_6" stroke="var(--stroke-0, #111827)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Container">
      <Component12 />
      <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-gray-900 text-nowrap">
        <p className="leading-[20px] whitespace-pre">Products</p>
      </div>
    </div>
  );
}

function Component13() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Component 1">
          <path d={svgPaths.p24a18000} fill="var(--fill-0, #9CA3AF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component14() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full" data-name="Component 7">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between p-[8px] relative w-full">
          <Container17 />
          <Component13 />
        </div>
      </div>
    </div>
  );
}

function Component15() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-[230px]" data-name="Component 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start pl-[36px] pr-[12px] py-[6px] relative w-[230px]">
        <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-gray-700 text-nowrap">
          <a className="block cursor-pointer leading-[20px] text-[14px] whitespace-pre" href="https://planner.tremor.so/quotes/audits">
            Items
          </a>
        </div>
      </div>
    </div>
  );
}

function Component16() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-[230px]" data-name="Component 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start pl-[36px] pr-[12px] py-[6px] relative w-[230px]">
        <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-gray-700 text-nowrap">
          <a className="block cursor-pointer leading-[20px] text-[14px] whitespace-pre" href="https://planner.tremor.so/quotes/audits">
            Variants
          </a>
        </div>
      </div>
    </div>
  );
}

function Component17() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-[230px]" data-name="Component 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start pl-[36px] pr-[12px] py-[6px] relative w-[230px]">
        <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-gray-700 text-nowrap">
          <a className="block cursor-pointer leading-[20px] text-[14px] whitespace-pre" href="https://planner.tremor.so/quotes/audits">
            Suppliers
          </a>
        </div>
      </div>
    </div>
  );
}

function List2() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[4px] items-start pl-px pr-0 py-0 relative shrink-0 w-full" data-name="List">
      <div aria-hidden="true" className="absolute border-[0px_0px_0px_1px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none" />
      <div className="absolute bg-gray-300 bottom-0 left-[17px] top-0 w-px" data-name="Vertical Divider">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-full" />
      </div>
      <Component15 />
      <Component16 />
      <Component17 />
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Item">
      <Component14 />
      <List2 />
    </div>
  );
}

function ItemMargin1() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-0 pt-[16px] px-0 relative shrink-0 w-full" data-name="Item:margin">
      <Item1 />
    </div>
  );
}

function List3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="List">
      <Item />
      <ItemMargin1 />
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start p-[12px] relative w-full">
          <List3 />
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px overflow-auto relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Container13 />
      <Container15 />
      <Container18 />
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-white box-border content-stretch flex items-center justify-center p-px relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-gray-300 border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-gray-700 text-nowrap">
        <p className="leading-[16px] whitespace-pre">ES</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-gray-900 text-nowrap">
        <p className="leading-[20px] whitespace-pre">Emma Stone</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] items-center relative">
        <BackgroundBorder />
        <Container20 />
      </div>
    </div>
  );
}

function Component18() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Component 1">
          <path d={svgPaths.p17a0fc80} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3042540} id="Vector_2" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Component7() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full" data-name="Component 8">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[5px] py-[9px] relative w-full">
          <Container21 />
          <Component18 />
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <div className="h-px relative shrink-0 w-full" data-name="Horizontal Divider">
            <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
          </div>
          <Component7 />
        </div>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-full relative shrink-0 w-[255px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-full items-start relative w-[255px]">
        <Container4 />
        <Container19 />
        <Container22 />
      </div>
    </div>
  );
}

function BackgroundVerticalBorder() {
  return (
    <div className="absolute bg-gray-50 box-border content-stretch flex h-[1200px] items-start justify-center left-0 pl-0 pr-px py-0 top-0 w-[256px]" data-name="Background+VerticalBorder">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <Container23 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-0 top-0">
      <BackgroundVerticalBorder />
    </div>
  );
}

export default function Group1() {
  return (
    <div className="relative size-full">
      <Group />
    </div>
  );
}