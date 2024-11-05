import { ButtonUI } from "@repo/ui";
import { IconPrinterUI, IconSaveUI } from "@repo/ui/icon";
import MESSAGES from "@/entry-point/config/messages.json";

interface AsideActionsSummaryProps {
  onPrint?: () => void;
  onDownload?: () => void;
  children?: React.ReactNode;
}

export const AsideActionsSummary = ({
  children,
  onDownload,
  onPrint,
}: AsideActionsSummaryProps) => {
  return (
    <aside className="flex flex-col gap-4 mt-20">
      {onPrint && (
        <ButtonUI onClick={onPrint} variant="outlined" rounded="medium">
          <div className="flex justify-between items-center w-full gap-2">
            <span className="flex-1">{MESSAGES.generics.button.print}</span>
            <IconPrinterUI fillColorPath="primary" width={22} height={22} />
          </div>
        </ButtonUI>
      )}

      {onDownload && (
        <ButtonUI onClick={onDownload} variant="outlined" rounded="medium">
          <div className="flex justify-between items-center w-full gap-2">
            <span className="flex-1">{MESSAGES.generics.button.download}</span>
            <IconSaveUI fillColorPath="primary" width={17} height={17} />
          </div>
        </ButtonUI>
      )}

      {children}
    </aside>
  );
};
