import { PageContent } from './PageContent';

interface GenericPageProps {
  pageName: string;
  title: string;
  description: string;
  onToggleSidebar?: () => void;
}

export function GenericPage({ pageName, title, description, onToggleSidebar }: GenericPageProps) {
  return (
    <PageContent pageName={pageName} onToggleSidebar={onToggleSidebar}>
      <div className="box-border content-stretch flex flex-col gap-[24px] items-start p-[24px]">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-gray-900 w-full">
            <p className="leading-[28px]">{title}</p>
          </div>
        </div>

        <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-gray-600">
          <p className="leading-[20px]">{description}</p>
        </div>
      </div>
    </PageContent>
  );
}